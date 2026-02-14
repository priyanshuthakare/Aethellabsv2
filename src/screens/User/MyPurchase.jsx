import React from 'react';
import { PRODUCTS } from '../../data/products';
import { Download, ExternalLink, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const MyPurchase = () => {
    const navigate = useNavigate();
    // Simulate purchased items (mock data)
    const purchasedItems = [PRODUCTS[0], PRODUCTS[2]];

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">My Purchases</h1>
                    <p className="mt-2 text-gray-600">Access your purchased workflows, tools, and dashboards.</p>
                </div>

                <div className="space-y-6">
                    {purchasedItems.length > 0 ? (
                        purchasedItems.map((item, index) => (
                            <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col sm:flex-row transition-all hover:shadow-md">
                                <div className="sm:w-48 h-48 sm:h-auto bg-gray-200 relative shrink-0">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <span className="text-xs font-semibold text-aethel-600 uppercase tracking-wide">
                                                {item.category}
                                            </span>
                                            <h3 className="text-xl font-bold text-gray-900 mt-1">{item.title}</h3>
                                        </div>
                                        <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                                            Paid
                                        </span>
                                    </div>

                                    <p className="text-sm text-gray-600 line-clamp-2 mb-4">{item.description}</p>

                                    <div className="flex items-center text-xs text-gray-500 mb-6 gap-4">
                                        <div className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            <span>Purchased on Oct 24, 2024</span>
                                        </div>
                                        <div>
                                            Order #AE-{4000 + index}
                                        </div>
                                    </div>

                                    <div className="mt-auto flex flex-wrap gap-3">
                                        <button className="flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                                            <Download size={16} />
                                            Download Assets
                                        </button>
                                        <button
                                            onClick={() => navigate(`/products/${item.id}`)}
                                            className="flex items-center gap-2 bg-white border border-gray-200 hover:border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                                        >
                                            <ExternalLink size={16} />
                                            View Product
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-16 bg-white rounded-xl border border-gray-100 shadow-sm">
                            <p className="text-gray-500 mb-4">You haven't purchased anything yet.</p>
                            <button
                                onClick={() => navigate('/products')}
                                className="text-aethel-600 font-medium hover:underline"
                            >
                                Browse Products
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
