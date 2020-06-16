import Vue, { VNode } from 'vue';

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }

  namespace Api {
    interface Response<T> {
      code: number;
      message: string;
      channelId: string;
      data: T;
    }

    type Thumbnails = {
      [key in 'default' | 'medium' | 'high' | 'standard' | 'maxres']: {
        url: string;
        width: number;
        height: number;
      };
    };

    interface CommonType {
      title: string;
      description: string;
      thumbnails: Thumbnails;
      publishedAt: Date;
      views: number;
      estimatedMinutesWatched: number;
      subscribers: number;
    }

    interface ChannelInfo extends CommonType {
      channelId: string;
      banner: string;
      cards: ChannelItem[];
    }

    interface ChannelItem {
      [key: string]: any;
    }

    type chartDataType = {
      month: string;
      value: number;
      increasPercent: number;
    };

    interface StatItem {
      views: chartDataType[];
      estimatedMinutesWatched: chartDataType[];
      subscribers: chartDataType[];
    }

    interface PlaylistItem extends CommonType {
      channelId: string;
      playlistId: string;
      stat: StatItem;
    }

    interface VideoItem extends CommonType {
      videoId: string;
      duration: string;
    }
  }
}
