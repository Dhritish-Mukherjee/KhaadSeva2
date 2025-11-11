
export enum Page {
  Landing,
  FarmerDashboard,
  BuyerDashboard,
  LogisticsTracking,
  ImpactInsights
}

export interface NavLink {
  label: string;
  page: Page;
}

export interface WasteListing {
  id: number;
  type: string;
  quantity: string;
  price: number;
  location: string;
  seller: string;
  imageUrl: string;
}

export interface Order {
  id: string;
  status: 'Pending' | 'Sold' | 'Delivered' | 'In Transit';
  wasteType: string;
  quantity: string;
}
