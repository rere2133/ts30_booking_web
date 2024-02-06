import { CityCountyData } from './utils/CityCountyData';
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
export type userInfo = {
  name: string;
  email: string;
  phone: string;
  address: {
    zipcode: number;
    detail: string;
    county: string;
    city: string;
  };
}

export type bookingRoomData = {
  name: string;
  checkInDate: Date;
  checkOutDate: Date;
  peopleNum: number;
  imageUrl: string;
  nights: number;
  orderId?: string;
  userInfo?: userInfo;
  price?: number |string;
}
export type BookingSubmitData = {
  roomId: string;
  checkInDate: Date;
  checkOutDate: Date;
  peopleNum: number;
  userInfo: userInfo;
}
export type AreaType = {
  ZipCode: string;
  AreaName: string;
  AreaEngName?: string;
}
export type CityCountyData = {
  CityName: string;
  CityEngName?: string;
  AreaList: AreaType[];
}

export type Food = {
  _id: string;
  title: string;
  description: string;
  diningTime: string;
  image: string;
  creator: string;
}