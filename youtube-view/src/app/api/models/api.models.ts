export interface Channel {
  description: string;
  img: {
    height: number,
    url: string,
    width: number,
  };
  title: string,
  statistics: {
    hiddenSubscriberCount: boolean,
    subscriberCount: string,
    videoCount: string,
    viewCount: string,
  };
  avgViews: number,
}
