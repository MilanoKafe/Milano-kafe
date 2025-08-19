export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  shortDescription: string;
  images: string[];
  category: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockQuantity: number;
  ingredients?: string[];
  usageInstructions?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  fullName: string;
  phoneNumber: string;
  isAdmin: boolean;
  isVerified: boolean;
  createdAt: string;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered';
  shippingAddress: {
    fullName: string;
    address: string;
    city: string;
    postalCode: string;
    coordinates?: { lat: number; lng: number };
  };
  createdAt: string;
  trackingNumber?: string;
}

export interface ContactInquiry {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
  status: 'pending' | 'responded';
  createdAt: string;
  response?: string;
  respondedAt?: string;
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
}