import axios from 'axios';
import querystring from 'querystring';

const API = axios.create({
  baseURL: process.env.VUE_APP_API_SERVER,
});

export default {
  channel: async (channelId: string) =>
    await API.get<Api.Response<Api.ChannelInfo>>(`/channel/${channelId}`),
  playlist: async (channelId: string, queryString: { page: number }) =>
    await API.get<Api.Response<Api.PlaylistItem[]>>(
      `/channel/${channelId}/playlist?${querystring.stringify(queryString)}`
    ),
  vidoes: async (channelId: string, queryString: { page: number }) =>
    await API.get<Api.Response<Api.VideoItem[]>>(
      `/channel/${channelId}/videos?${querystring.stringify(queryString)}`
    ),
};
