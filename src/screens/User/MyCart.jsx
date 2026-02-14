import React from 'react';
import { PRODUCTS } from '../../data/products'; // Keep for fallbacks or reference if needed, though context items should be enough
import { Trash2, ArrowRight, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export const MyCart = () => {
    const navigate = useNavigate();
    const { cartItems, removeFromCart, getCartTotal } = useCart();

    const subtotal = getCartTotal();
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + tax;

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">My Cart</h1>

                {cartItems.length > 0 ? (
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Cart Items List */}
                        <div className="flex-1 space-y-4">
                            {cartItems.map((item) => (
                                <div key={item.id} className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-4 sm:items-center">
                                    <div className="w-24 h-24 bg-gray-200 rounded-lg overflow-hidden shrink-0">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                                                <p className="text-sm text-gray-500">{item.category}</p>
                                            </div>
                                            <p className="font-bold text-lg text-gray-900">{item.price}</p>
                                        </div>
                                        <p className="text-sm text-gray-600 mt-2 line-clamp-1">{item.shortDescription}</p>

                                        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-50">
                                            <button
                                                className="text-gray-400 hover:text-red-500 text-sm font-medium flex items-center gap-1 transition-colors"
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                <Trash2 size={16} />
                                                Remove
                                            </button>
                                            <button
                                                onClick={() => navigate(`/products/${item.id}`)}
                                                className="text-aethel-600 hover:text-aethel-700 text-sm font-medium"
                                            >
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="lg:w-96 shrink-0">
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
                                <h2 className="text-lg font-bold text-gray-900 mb-6">Order Summary</h2>

                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Subtotal</span>
                                        <span>${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Tax Estimate (8%)</span>
                                        <span>${tax.toFixed(2)}</span>
                                    </div>
                                    <div className="border-t border-gray-100 pt-4 flex justify-between text-gray-900 font-bold text-lg">
                                        <span>Total</span>
                                        <span>${total.toFixed(2)}</span>
                                    </div>
                                </div>

                                <button className="w-full bg-aethel-600 hover:bg-aethel-700 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group">
                                    Checkout
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>

                                <div className="mt-6 flex items-start gap-3 text-xs text-gray-500 bg-gray-50 p-3 rounded-lg">
                                    <ShieldCheck size={16} className="text-green-600 shrink-0 mt-0.5" />
                                    <p>Secure checkout powered by Stripe. Your data is encrypted and safe.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-xl border border-gray-100 shadow-sm">
                        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
                        <p className="text-gray-500 mb-6">Looks like you haven't added anything yet.</p>
                        <button
                            onClick={() => navigate('/products')}
                            className="bg-gray-900 hover:bg-black text-white px-6 py-2.5 rounded-full font-medium transition-colors"
                        >
                            Start Shopping
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
