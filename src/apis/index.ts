import axios from 'axios';

const API = axios.create({
  baseURL: process.env.VUE_APP_API_SERVER,
});

export default {
  channel: async (channelId: string) =>
    await API.get<Api.ChannelInfo>(`/channel/${channelId}`),
  playlist: async (channelId: string) =>
    await API.get<Api.PlaylistItem[]>(`/channel/${channelId}/playlist`),
  vidoes: async (channelId: string) =>
    await API.get<Api.PlaylistItem[]>(`/channel/${channelId}/videos`),
};
