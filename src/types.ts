export type RoomInfo= {
  title: string;
  isProvide: boolean;
}

export type RoomType = {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
  imageUrlList: string[];
  areaInfo: string;
  bedInfo: string;
  maxPeople: number;
  price: number;
  layout: RoomInfo[];
  facilityInfo?: RoomInfo[];
  amenityInfo?: RoomInfo[];
  status: number;
  creator: string;
  createdAt: string;
  updatedAt: string;
}