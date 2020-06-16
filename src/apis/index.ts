import querystring from 'querystring';
import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';

const { group, groupEnd, table, log } = console;
const isProductionMode: boolean = process.env.NODE_ENV === 'production';
const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: process.env.VUE_APP_API_SERVER,
};

//에러시 로그 찍는 함수
const loggerAxiosError = (error: AxiosError) => {
  group('%c=== HttpError ===', 'color: red');
  log(`URL: ${error.config.url}`);
  log(`params: %o`, error.config.params);
  log(`Response:: [${error.code}] ${error.message}`);
  groupEnd();
};

//성공시 데이터 로그 찍는 함수
const loggerAxiosData = (config: AxiosResponse) => {
  group('%c=== Response Data ===', 'color: white;');
  log(`URL: ${config.config.url}`);
  log(`params: %o`, config.config.params);
  table([config.data]);
  groupEnd();
};

//axios 구현체 및 인터셉터 셋팅
const http = axios.create(axiosRequestConfig);

http.interceptors.request.use(
  (config) =>
    new Promise((resolve) => {
      resolve(config);
    }),
  (error: AxiosError) => {
    if (!isProductionMode) loggerAxiosError(error);
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (config: AxiosResponse) =>
    new Promise((resolve) => {
      if (!isProductionMode) loggerAxiosData(config);
      resolve(config);
    }),
  (error: AxiosError) => {
    if (!isProductionMode) loggerAxiosError(error);
    return Promise.reject(error);
  }
);

export default {
  channel: async (channelId: string) =>
    await http.get<Api.Response<Api.ChannelInfo>>(`/channel/${channelId}`),
  playlist: async (channelId: string, queryString: { page: number }) =>
    await http.get<Api.Response<Api.PlaylistItem[]>>(
      `/channel/${channelId}/playlist?${querystring.stringify(queryString)}`
    ),
  vidoes: async (channelId: string, queryString: { page: number }) =>
    await http.get<Api.Response<Api.VideoItem[]>>(
      `/channel/${channelId}/videos?${querystring.stringify(queryString)}`
    ),
};
