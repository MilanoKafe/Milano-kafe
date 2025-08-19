import React, { useState } from 'react';
import { Star, ShoppingCart, Plus, Minus } from 'lucide-react';
import { Product } from '../../types';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { useCart } from '../../context/CartContext';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addItem } = useCart();

  if (!product) return null;

  const handleAddToCart = () => {
    addItem(product, quantity);
    onClose();
  };

  const incrementQuantity = () => {
    if (quantity < product.stockQuantity) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div>
          <div className="mb-4">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>
          {product.images.length > 1 && (
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-green-500' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Details */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h2>
          
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-2">
              ({product.reviewCount} reviews)
            </span>
          </div>

          <div className="text-3xl font-bold text-green-600 mb-4">
            ${product.price.toFixed(2)}
          </div>

          <p className="text-gray-700 mb-6">{product.description}</p>

          {product.ingredients && (
            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Ingredients:</h4>
              <p className="text-gray-600 text-sm">{product.ingredients.join(', ')}</p>
            </div>
          )}

          {product.usageInstructions && (
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">Usage Instructions:</h4>
              <p className="text-gray-600 text-sm">{product.usageInstructions}</p>
            </div>
          )}

          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={decrementQuantity}
                disabled={quantity <= 1}
                className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-4 py-2 font-medium">{quantity}</span>
              <button
                onClick={incrementQuantity}
                disabled={quantity >= product.stockQuantity}
                className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <span className="text-sm text-gray-500">
              {product.stockQuantity} available
            </span>
          </div>

          <Button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="w-full flex items-center justify-center space-x-2"
            size="lg"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Add to Cart</span>
          </Button>

          {!product.inStock && (
            <p className="text-red-500 text-sm mt-2 text-center">
              This product is currently out of stock
            </p>
          )}
        </div>
      </div>
    </Modal>
  );
};