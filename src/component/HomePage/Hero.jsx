import { motion } from 'framer-motion';
import { MapPin, Bed, Shield, Wifi, Car } from 'lucide-react';
import React from 'react';

const HeroSection = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-800/60 z-10"></div>
                <img
                    src="/main.jpg"
                    alt="Annapurna Atithi Niwas"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 py-20 mt-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="mb-8"
                >
                    <h2 className="text-amber-400 font-semibold mb-2 tracking-wider">WELCOME TO LUXURY STAY</h2>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">ANNAPURNA ATITHI NIWAS</h1>
                    <p className="text-xl md:text-2xl text-slate-100 mb-8 max-w-2xl mx-auto">
                        Experience the perfect combination of modern comfort & traditional hospitality.
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-amber-300 mb-10">
                        <MapPin size={20} />
                        <span className="text-slate-200">Located in the Heart of the City</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                >
                    <a
                        href="#booking"
                        className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-300 shadow-lg hover:shadow-amber-500/30"
                    >
                        Book Your Stay
                    </a>
                    <a
                        href="#contact"
                        className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                    >
                        Contact Us
                    </a>
                </motion.div>

                {/* Features */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
                >
                    <div className="flex flex-col items-center">
                        <div className="bg-amber-500/20 p-3 rounded-full mb-2">
                            <Bed size={24} className="text-amber-400" />
                        </div>
                        <span className="text-sm">Luxury Rooms</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-amber-500/20 p-3 rounded-full mb-2">
                            <Shield size={24} className="text-amber-400" />
                        </div>
                        <span className="text-sm">Clean & Hygienic</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="bg-amber-500/20 p-3 rounded-full mb-2">
                            <Wifi size={24} className="text-amber-400" />
                        </div>
                        <span className="text-sm">High-Speed WiFi</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-amber-500/20 p-3 rounded-full mb-2">
                            <Car size={24} className="text-amber-400" />
                        </div>
                        <span className="text-sm">Free Parking</span>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                <div className="animate-bounce">
                    <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-amber-400 rounded-full mt-2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HeroSection;
