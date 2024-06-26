export interface Product {
  imageUrl: string | undefined;
  id: string;
  category: Category;
  subcategory:Subcategory;
  subsub:Subsub;
  name: string;
  description:string;
  info:String;
  link: string;
  price: number;
  quantity: number;
  isFeatured: boolean;
  isOffered: boolean;
  isUndercost: boolean;
  size: Size;
  color: Color;
  sizes: ProductSizes[];
  colors: ProductColors[];
  images: Image[];
  comments: Comment[];
};

export interface ProductSizes {
  value: any;

  productId: string
  size: Size
  sizeId: string

}

export interface  ProductColors {
  value: any;

  productId: string
  color: Color
  colorId: string

}

export interface Image {
  id: string;
  url: string;
}

export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
};
export interface Icon {
  id: string;
  label: string;
  imageUrl: string;
};

export interface Category {
  slug: any;
  id: string;
  name: string;
  billboard: Billboard;
  iconId: string;
  icon: Icon;
  subcategories: Subcategory[];
};

export interface Subcategory {
  
  id: string;
  name: string;
  categoryId: string;
  iconId: string;
  icon: Icon;
  billboard: Billboard;
  subsubs: Subsub[];
  href: string; 
};
export interface Subsub{
  id: string;
  name: string;
  subcategoryId: string;
  iconId: string;
  icon: Icon;
  billboard: Billboard;
};
export interface Size {
  id: string;
  name: string;
  value: string;
  product:Product[];
};

export interface Color {
  id: string;
  name: string;
  value: string;
  product:Product[];
};

export interface Comment {
  id: string;
  userId: string; 
  rate: number; 
  message: string;
}

export interface  Order {
  orderItems: any;
  id: string;
  storeId: string;
  isPaid: boolean;
  phone: string;
  address: string;
  tracking:string;
  status:string;
  userId: string;
  items: OrderItem[];
  createdAt: Date;
}

// Intermediary for a many-to-many relationship
export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  metadata: any;
  color:string
  size: string
}
