import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Calendar, CreditCard, ExternalLink, ShoppingCart, Trash2 } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { useToast } from '../../context/ToastContext';

export const ProductDetail = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const { addToCart, removeFromCart, cartItems } = useCart();
    const { addToast } = useToast();

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const product = PRODUCTS.find(p => p.id === productId);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
                    <button
                        onClick={() => navigate('/products')}
                        className="mt-4 text-aethel-600 hover:underline"
                    >
                        Back to Products
                    </button>
                </div>
            </div>
        );
    }

    const handleBuy = () => {
        alert(`Proceeding to checkout for ${product.title} - ${product.price}`);
    };

    const handleSetup = () => {
        alert(`Opening calendar to schedule setup meeting for ${product.title}. Note: Setup fees may apply.`);
    };

    const handleAddToCart = () => {
        const added = addToCart(product);
        if (added) {
            addToast(`${product.title} added to cart`);
        } else {
            addToast("Item is already in your cart", "info");
        }
    };

    const handleRemoveFromCart = () => {
        removeFromCart(product.id);
        addToast("Item removed from cart", "info");
    };

    const isInCart = cartItems.some(item => item.id === product?.id);

    return (
        <div className="min-h-screen bg-white pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <button
                    onClick={() => navigate('/products')}
                    className="group inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-8 transition-colors"
                >
                    <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Products
                </button>

                <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
                    {/* Product Image Side */}
                    <div className="mb-10 lg:mb-0">
                        <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden bg-gray-100 shadow-lg border border-gray-200">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </div>

                    {/* Product Info Side */}
                    <div>
                        <div className="mb-6">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-aethel-50 text-aethel-700 uppercase tracking-wide">
                                {product.category}
                            </span>
                        </div>

                        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
                            {product.title}
                        </h1>

                        <div className="flex items-baseline gap-4 mb-6">
                            <p className="text-3xl font-bold text-gray-900">{product.price}</p>
                            <p className="text-sm text-gray-500">One-time purchase</p>
                        </div>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            {product.description}
                        </p>

                        <div className="flex flex-col gap-4 mb-10">
                            <button
                                onClick={handleBuy}
                                className="flex items-center justify-center gap-2 w-full bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-xl text-base font-bold transition-all shadow-md hover:shadow-lg transform active:scale-95"
                            >
                                <CreditCard className="w-5 h-5" />
                                Buy Now
                            </button>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {!isInCart ? (
                                    <button
                                        onClick={handleAddToCart}
                                        className="flex items-center justify-center gap-2 bg-aethel-50 hover:bg-aethel-100 text-aethel-700 px-6 py-4 rounded-xl text-base font-bold transition-all transform active:scale-95 border border-aethel-200"
                                    >
                                        <ShoppingCart className="w-5 h-5" />
                                        Add to Cart
                                    </button>
                                ) : (
                                    <button
                                        onClick={handleRemoveFromCart}
                                        className="flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 px-6 py-4 rounded-xl text-base font-bold transition-all transform active:scale-95 border border-red-200"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                        Remove from Cart
                                    </button>
                                )}

                                <button
                                    onClick={handleSetup}
                                    className="flex items-center justify-center gap-2 bg-white border-2 border-gray-200 hover:border-aethel-500 text-gray-700 hover:text-aethel-600 px-8 py-4 rounded-xl text-base font-bold transition-all transform active:scale-95"
                                >
                                    <Calendar className="w-5 h-5" />
                                    Expert Setup
                                </button>
                            </div>

                            <p className="text-xs text-center text-gray-500 mt-2">
                                * Setup includes a consultation with our team. Fees vary based on customization needs.
                            </p>
                        </div>

                        <div className="border-t border-gray-100 pt-10">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">How to Use</h3>
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                <p className="text-gray-700 leading-relaxed">
                                    {product.howToUse}
                                </p>
                            </div>
                        </div>

                        <div className="border-t border-gray-100 pt-10 mt-10">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">What's Included</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <Check className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-3" />
                                    <span className="text-gray-600">Full source code / Configuration files</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-3" />
                                    <span className="text-gray-600">Documentation & Setup Guide</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5 mr-3" />
                                    <span className="text-gray-600">Lifetime updates</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Buy vs Setup Comparison */}
                <div className="mt-24 border-t border-gray-100 pt-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Choose Your Path</h2>
                        <p className="mt-4 text-lg text-gray-500">Select the option that best fits your team's technical expertise.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Self Service Card */}
                        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gray-200" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Buy Now (Self-Service)</h3>
                            <p className="text-gray-500 mb-6 text-sm">Best for developers and technical teams.</p>

                            <div className="text-3xl font-bold text-gray-900 mb-6">{product.price}</div>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                    <span className="text-gray-600 text-sm">Instant Access to Source Code</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                    <span className="text-gray-600 text-sm">Standard Documentation</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                    <span className="text-gray-600 text-sm">Lifetime Updates</span>
                                </li>
                            </ul>

                            <button
                                onClick={handleBuy}
                                className="w-full bg-gray-900 text-white font-bold py-3 rounded-xl hover:bg-black transition-colors"
                            >
                                Buy Now
                            </button>
                        </div>

                        {/* Expert Setup Card */}
                        <div className="bg-white rounded-2xl p-8 border border-aethel-200 shadow-lg relative overflow-hidden ring-1 ring-aethel-500/20">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-aethel-500 to-aethel-600" />
                            <div className="absolute top-4 right-4 bg-aethel-100 text-aethel-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                Recommended
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Setup</h3>
                            <p className="text-gray-500 mb-6 text-sm">Best for business owners who want results fast.</p>

                            <div className="text-3xl font-bold text-gray-900 mb-6">Custom Quote</div>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 text-aethel-600 mr-3 flex-shrink-0" />
                                    <span className="text-gray-600 text-sm">White-glove Installation & Config</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 text-aethel-600 mr-3 flex-shrink-0" />
                                    <span className="text-gray-600 text-sm">1-Hour Personal Training Call</span>
                                </li>
                                <li className="flex items-start">
                                    <Check className="w-5 h-5 text-aethel-600 mr-3 flex-shrink-0" />
                                    <span className="text-gray-600 text-sm">30 Days Priority Support</span>
                                </li>
                            </ul>

                            <button
                                onClick={handleSetup}
                                className="w-full bg-gradient-to-r from-aethel-500 to-aethel-600 text-white font-bold py-3 rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all"
                            >
                                Book Setup Call
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
