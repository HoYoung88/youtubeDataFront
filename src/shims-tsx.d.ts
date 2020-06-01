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
    type Thumbnails = {
      [key in 'default' | 'medium' | 'high' | 'standard' | 'maxres']: {
        url: string;
        width: number;
        height: number;
      };
    };

    interface ChannelInfo {
      channelId: string;
      title: string;
      banner: string;
      thumbnails: Thumbnails;
      description: string;
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

    interface PlaylistItem {
      views: number;
      estimatedMinutesWatched: number;
      subscribersGained: number;
      title: string;
      description: string;
      channelId: string;
      channelTitle: string;
      playlistId: string;
      stat: StatItem;
    }

    interface VideoItem {
      videoId: string;
      title: string;
      viewCount: number;
      likeCount: number;
      publishedAt: Date;
      thumbnails: Thumbnails;
    }
  }
}
