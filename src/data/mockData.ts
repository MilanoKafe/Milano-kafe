import { Product, User, Order, ContactInquiry } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Strawberry Delight Jelly',
    price: 12.99,
    description: 'Premium strawberry jelly made with fresh, handpicked strawberries. Our signature recipe combines the perfect balance of sweetness and natural fruit flavor, creating a delightful treat that melts in your mouth.',
    shortDescription: 'Premium strawberry jelly with fresh fruit flavor',
    images: [
      'https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Fruit Jellies',
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
    stockQuantity: 50,
    ingredients: ['Fresh Strawberries', 'Sugar', 'Pectin', 'Citric Acid', 'Natural Flavoring'],
    usageInstructions: 'Store in refrigerator after opening. Best served chilled. Consume within 7 days of opening.'
  },
  {
    id: '2',
    name: 'Tropical Mango Jelly',
    price: 14.99,
    description: 'Exotic mango jelly crafted from the finest tropical mangoes. Experience the rich, creamy texture and authentic mango taste that transports you to a tropical paradise with every bite.',
    shortDescription: 'Exotic mango jelly with tropical flavor',
    images: [
      'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Fruit Jellies',
    rating: 4.9,
    reviewCount: 89,
    inStock: true,
    stockQuantity: 35,
    ingredients: ['Fresh Mango Pulp', 'Sugar', 'Pectin', 'Citric Acid', 'Natural Mango Extract'],
    usageInstructions: 'Keep refrigerated. Shake well before use. Best consumed within 5 days of opening.'
  },
  {
    id: '3',
    name: 'Classic Grape Jelly',
    price: 10.99,
    description: 'Traditional grape jelly made from premium Concord grapes. A timeless classic that brings back childhood memories with its rich, deep purple color and authentic grape flavor.',
    shortDescription: 'Traditional grape jelly with rich flavor',
    images: [
      'https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Classic Jellies',
    rating: 4.6,
    reviewCount: 156,
    inStock: true,
    stockQuantity: 75,
    ingredients: ['Concord Grapes', 'Sugar', 'Pectin', 'Citric Acid'],
    usageInstructions: 'Store in cool, dry place. Refrigerate after opening. Use within 10 days of opening.'
  },
  {
    id: '4',
    name: 'Mixed Berry Fusion',
    price: 16.99,
    description: 'A delightful blend of strawberries, blueberries, and raspberries creating a symphony of flavors. Each spoonful delivers a burst of mixed berry goodness with a perfect balance of sweet and tart.',
    shortDescription: 'Premium mixed berry jelly blend',
    images: [
      'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Premium Jellies',
    rating: 4.9,
    reviewCount: 203,
    inStock: true,
    stockQuantity: 28,
    ingredients: ['Mixed Berries', 'Sugar', 'Pectin', 'Citric Acid', 'Natural Berry Extracts'],
    usageInstructions: 'Refrigerate after opening. Best served at room temperature. Consume within 7 days.'
  },
  {
    id: '5',
    name: 'Orange Citrus Burst',
    price: 13.99,
    description: 'Zesty orange jelly bursting with citrus flavor. Made from fresh Valencia oranges, this jelly provides a refreshing and energizing taste perfect for any time of day.',
    shortDescription: 'Zesty orange jelly with citrus burst',
    images: [
      'https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Citrus Jellies',
    rating: 4.7,
    reviewCount: 98,
    inStock: true,
    stockQuantity: 42,
    ingredients: ['Fresh Orange Juice', 'Orange Zest', 'Sugar', 'Pectin', 'Citric Acid'],
    usageInstructions: 'Keep chilled. Shake gently before serving. Best consumed within 6 days of opening.'
  },
  {
    id: '6',
    name: 'Apple Cinnamon Delight',
    price: 15.99,
    description: 'Warm and comforting apple jelly infused with aromatic cinnamon. This seasonal favorite combines the crisp taste of fresh apples with the warming spice of cinnamon.',
    shortDescription: 'Apple jelly with warming cinnamon spice',
    images: [
      'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Seasonal Jellies',
    rating: 4.8,
    reviewCount: 67,
    inStock: true,
    stockQuantity: 33,
    ingredients: ['Fresh Apples', 'Cinnamon', 'Sugar', 'Pectin', 'Natural Apple Extract'],
    usageInstructions: 'Store at room temperature before opening. Refrigerate after opening. Use within 8 days.'
  }
];

export const mockUser: User = {
  id: '1',
  email: 'user@example.com',
  fullName: 'John Doe',
  phoneNumber: '+1234567890',
  isAdmin: false,
  isVerified: true,
  createdAt: '2024-01-15T10:30:00Z'
};

export const mockAdminUser: User = {
  id: 'admin',
  email: 'devolper2011@gmail.com',
  fullName: 'Admin User',
  phoneNumber: '+1234567890',
  isAdmin: true,
  isVerified: true,
  createdAt: '2024-01-01T00:00:00Z'
};

export const mockOrders: Order[] = [
  {
    id: 'ORD-001',
    userId: '1',
    items: [
      { product: mockProducts[0], quantity: 2 },
      { product: mockProducts[1], quantity: 1 }
    ],
    total: 40.97,
    status: 'shipped',
    shippingAddress: {
      fullName: 'John Doe',
      address: '123 Main St',
      city: 'New York',
      postalCode: '10001',
      coordinates: { lat: 40.7128, lng: -74.0060 }
    },
    createdAt: '2024-01-20T14:30:00Z',
    trackingNumber: 'TRK123456789'
  }
];

export const mockInquiries: ContactInquiry[] = [
  {
    id: 'INQ-001',
    fullName: 'Jane Smith',
    email: 'jane@example.com',
    phoneNumber: '+1987654321',
    subject: 'Product Availability',
    message: 'Hi, I wanted to know if you have any sugar-free options available?',
    status: 'pending',
    createdAt: '2024-01-22T09:15:00Z'
  },
  {
    id: 'INQ-002',
    fullName: 'Mike Johnson',
    email: 'mike@example.com',
    phoneNumber: '+1555123456',
    subject: 'Bulk Order Inquiry',
    message: 'I am interested in placing a bulk order for my restaurant. Can you provide wholesale pricing?',
    status: 'responded',
    createdAt: '2024-01-21T16:45:00Z',
    response: 'Thank you for your interest! We do offer wholesale pricing for bulk orders. Please contact our sales team at wholesale@jelai.com for detailed pricing information.',
    respondedAt: '2024-01-22T10:30:00Z'
  }
];