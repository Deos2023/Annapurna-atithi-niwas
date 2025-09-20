import React from 'react';
import { motion } from 'framer-motion';
import {
    Home,
    Phone,
    Mail,
    MapPin,
    Facebook,
    Instagram,
    Twitter,
    Youtube,
    Heart,
    ArrowUp
} from 'lucide-react';
import { useState, useEffect } from 'react';

// Animation variants
const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

const pulse = {
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    },
    tap: {
        scale: 0.95
    }
};

const Footer = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'Rooms', path: '/rooms' },
        { name: 'Facilities', path: '/facilities' },
        { name: 'Location', path: '/location' },
        { name: 'Contact', path: '/contact' }
    ];

    const services = [
        'Premium Rooms',
        'Homely Meals',
        '24/7 Security',
        'High-Speed WiFi',
        'Housekeeping',
        'Laundry Service'
    ];

    const socialLinks = [
        { icon: Facebook, url: 'https://www.facebook.com/p/MAA-Annapurna-Atithi-NIWAS-61574512306063/', color: 'hover:text-blue-600' },
        { icon: Instagram, url: 'https://www.instagram.com/', color: 'hover:text-pink-600' },
        { icon: Twitter, url: '#', color: 'hover:text-blue-400' },
        { icon: Youtube, url: '#', color: 'hover:text-red-600' }
    ];

    return (
        <footer className="relative bg-slate-900 text-white overflow-hidden">
            {/* Decorative top border */}
            <div className="h-1 bg-gradient-to-r from-amber-500 to-orange-500"></div>

            {/* Main footer content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
                >
                    {/* Brand column */}
                    <motion.div variants={fadeInUp} className="lg:col-span-1">
                        <div className="flex items-center mb-6">
                            <motion.div
                                whileHover={{ rotate: 5 }}
                                className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg mr-3"
                            >
                                <Home className="text-white" size={24} />
                            </motion.div>
                            <div>
                                <h3 className="text-xl font-serif font-bold">ANNAPURNA ATITHI NIWAS</h3>
                                <p className="text-sm text-slate-400">Your Home Away From Home</p>
                            </div>
                        </div>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            Experience the perfect combination of modern comfort and traditional hospitality at our premium guest house in the heart of Kolkata.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    variants={scaleIn}
                                    whileHover="hover"
                                    whileTap="tap"
                                    variants={pulse}
                                    className={`w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 ${social.color} transition-colors duration-300`}
                                >
                                    <social.icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={fadeInUp} className="lg:col-span-1">
                        <h3 className="text-lg font-semibold mb-6 relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-amber-500"></span>
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <a
                                        href={link.path}
                                        className="text-slate-400 hover:text-amber-400 transition-colors duration-300 flex items-center"
                                    >
                                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3"></span>
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div variants={fadeInUp} className="lg:col-span-1">
                        <h3 className="text-lg font-semibold mb-6 relative inline-block">
                            Our Services
                            <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-amber-500"></span>
                        </h3>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-slate-400 hover:text-amber-400 transition-colors duration-300 flex items-center"
                                >
                                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3"></span>
                                    {service}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div variants={fadeInUp} className="lg:col-span-1">
                        <h3 className="text-lg font-semibold mb-6 relative inline-block">
                            Contact Us
                            <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-amber-500"></span>
                        </h3>
                        <ul className="space-y-4">
                            <motion.li
                                whileHover={{ x: 5 }}
                                className="flex items-start"
                            >
                                <MapPin className="w-5 h-5 text-amber-500 mt-1 mr-4 flex-shrink-0" />
                                <span className="text-slate-400">
                                    B/79/H/6 Turf Road <br />
                                     Kolkata: 700025
                                </span>
                            </motion.li>
                            <motion.li
                                whileHover={{ x: 5 }}
                                className="flex items-center"
                            >
                                <Phone className="w-5 h-5 text-amber-500 mr-4 flex-shrink-0" />
                                <span className="text-slate-400">+91 9830431930 </span>
                            </motion.li>
                            <motion.li
                                whileHover={{ x: 5 }}
                                className="flex items-center"
                            >
                                <Mail className="w-5 h-5 text-amber-500 mr-4 flex-shrink-0" />
                                <span className="text-slate-400">probirmondal240176@gmail.com</span>
                            </motion.li>
                        </ul>

                        {/* Newsletter Subscription */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="mt-8"
                        >
                            <h4 className="text-sm font-semibold mb-3 text-slate-300">Subscribe to Newsletter</h4>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="bg-slate-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-amber-500 w-full"
                                />
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-r-lg font-medium transition-colors duration-300"
                                >
                                    Subscribe
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-slate-800 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-slate-500 text-sm mb-4 md:mb-0 flex items-center"
                        >
                            © {currentYear} Annapurna Atithi Niwas. Made with <Heart className="w-4 h-4 text-amber-500 mx-1" fill="currentColor" /> in Kolkata. Developed and Maintained by Digital Exposure Online Services.
                        </motion.p>
                        <div className="flex space-x-6 text-sm text-slate-500">
                            <motion.a
                                whileHover={{ color: "#f59e0b" }}
                                href="#"
                                className="transition-colors duration-300"
                            >
                                Privacy Policy
                            </motion.a>
                            <motion.a
                                whileHover={{ color: "#f59e0b" }}
                                href="#"
                                className="transition-colors duration-300"
                            >
                                Terms of Service
                            </motion.a>
                            <motion.a
                                whileHover={{ color: "#f59e0b" }}
                                href="#"
                                className="transition-colors duration-300"
                            >
                                FAQ
                            </motion.a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to top button */}
            <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                    opacity: showScrollTop ? 1 : 0,
                    scale: showScrollTop ? 1 : 0
                }}
                whileHover={{ scale: 1.1, backgroundColor: "#f59e0b" }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 w-12 h-12 bg-amber-500 text-white rounded-full shadow-lg flex items-center justify-center z-50 transition-colors duration-300"
                aria-label="Scroll to top"
            >
                <ArrowUp size={20} />
            </motion.button>

            {/* Decorative elements */}
            <div className="absolute bottom-10 left-10 w-20 h-20 bg-amber-500/10 rounded-full blur-xl"></div>
            <div className="absolute top-20 right-10 w-16 h-16 bg-orange-500/10 rounded-full blur-xl"></div>
        </footer>
    );
};

export default Footer;