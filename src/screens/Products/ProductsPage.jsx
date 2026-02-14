import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Search, Filter, ShoppingCart, Trash2 } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { useToast } from '../../context/ToastContext';

export const ProductsPage = () => {
    const navigate = useNavigate();
    const { addToCart, removeFromCart, cartItems } = useCart();
    const { addToast } = useToast();
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "Workflows", "Internal Tools", "Dashboards"];

    const filteredProducts = selectedCategory === "All"
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === selectedCategory);

    const handleBuy = (e, product) => {
        e.stopPropagation();
        // Placeholder for buy logic
        alert(`Initiating purchase for ${product.title}`);
    };

    const handleSetup = (e, product) => {
        e.stopPropagation();
        // Placeholder for setup meeting
        alert(`Scheduling setup meeting for ${product.title}`);
    };

    const handleAddToCart = (e, product) => {
        e.stopPropagation();
        const added = addToCart(product);
        if (added) {
            addToast(`${product.title} added to cart`);
        } else {
            addToast("Item is already in your cart", "info");
        }
    };

    const handleRemoveFromCart = (e, productId) => {
        e.stopPropagation();
        removeFromCart(productId);
        addToast("Item removed from cart", "info");
    };

    const isInCart = (productId) => {
        return cartItems.some(item => item.id === productId);
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-aethel-500 to-aethel-700">Products</span>
                    </h1>
                    <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
                        Accelerate your business with our pre-built workflows, tools, and dashboards.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-white rounded-full p-1 shadow-md border border-gray-200">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${selectedCategory === cat
                                    ? 'bg-aethel-500 text-white shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            onClick={() => navigate(`/products/${product.id}`)}
                            className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                        >
                            {/* Image Placeholder/Thumbnail */}
                            <div className="aspect-w-16 aspect-h-9 w-full bg-gray-200 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-gray-900 shadow-sm">
                                    {product.price}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="text-xs font-semibold text-aethel-600 uppercase tracking-wide mb-2">
                                    {product.category}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 truncate">
                                    {product.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-6 line-clamp-2">
                                    {product.shortDescription}
                                </p>

                                <div className="flex flex-col gap-3 mt-auto">
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={(e) => handleBuy(e, product)}
                                            className="flex-1 bg-gray-900 hover:bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-sm"
                                        >
                                            Buy Now
                                        </button>
                                        <button
                                            onClick={(e) => handleSetup(e, product)}
                                            className="flex-1 bg-white border border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                                        >
                                            Setup
                                        </button>
                                    </div>

                                    {!isInCart(product.id) ? (
                                        <button
                                            onClick={(e) => handleAddToCart(e, product)}
                                            className="w-full flex items-center justify-center gap-2 bg-aethel-50 border border-aethel-200 text-aethel-700 hover:bg-aethel-100 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                                        >
                                            <ShoppingCart size={16} />
                                            Add to Cart
                                        </button>
                                    ) : (
                                        <button
                                            onClick={(e) => handleRemoveFromCart(e, product.id)}
                                            className="w-full flex items-center justify-center gap-2 bg-red-50 border border-red-200 text-red-600 hover:bg-red-100 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                                        >
                                            <Trash2 size={16} />
                                            Remove from Cart
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
