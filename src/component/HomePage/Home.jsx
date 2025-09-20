import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from './Hero.jsx';
import Service from './Service.jsx';
import { motion } from 'framer-motion';

const HomePage = () => {
    const fadeInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" }
        }
    };

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const staggerChildren = {
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };


    const navigate = useNavigate();
    return (
        <div className="min-h-screen">
            <HeroSection />

            <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={fadeInUp}
                        className="text-3xl font-serif font-bold text-center text-slate-800 mb-12"
                    >
                        Our Story
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={staggerChildren}
                        >
                            <motion.h3
                                variants={fadeInLeft}
                                className="text-amber-600 font-semibold mb-4 inline-flex items-center"
                            >
                                <span className="w-4 h-0.5 bg-amber-500 mr-2"></span>
                                STARTED IN 2011
                            </motion.h3>

                            <motion.p
                                variants={fadeInLeft}
                                className="text-slate-600 text-lg mb-6 leading-relaxed"
                            >
                                Maa Annapurna Athiti Niwas offers a welcoming and affordable stay in the heart of Kolkata, ideal for business travelers, tourists, and medical patients. Guests can choose from comfortable AC and non-AC rooms, all designed to provide a homely atmosphere. Conveniently located near SSKM Hospital, medical stores, Kalighat Temple, and popular shopping malls, the guest house also provides easy access to iconic city landmarks such as Victoria Memorial, Birla Planetarium, and Alipore Zoo. An in-house restaurant serves fresh, home-style meals, ensuring guests enjoy both comfort and nourishment during their stay. With a focus on personalized service, reasonable rates, and a warm environment, Maa Annapurna Athiti Niwas truly feels like a home away from home. For inquiries or bookings, guests can easily reach out via WhatsApp.

                            </motion.p>

                            <motion.p
                                variants={fadeInLeft}
                                className="text-slate-600 text-lg leading-relaxed"
                            >
                                Our name "Annapurna" signifies the goddess of food and nourishment, and we strive to
                                live up to this name by providing delicious homemade meals to all our guests.
                            </motion.p>

                            <motion.div
                                variants={fadeInLeft}
                                className="mt-8 flex space-x-4"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.3)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-amber-500 text-white px-6 py-3 rounded-lg font-medium shadow-md"
                                    onClick={() => window.location.href = '/facilities'}
                                >
                                    Read More
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="border border-amber-500 text-amber-600 px-6 py-3 rounded-lg font-medium"
                                    onClick={() => navigate('/rooms')}
                                >
                                    View Gallery
                                </motion.button>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={scaleIn}
                            className="relative"
                        >
                            <motion.img
                                src="/main.jpg"
                                alt="Guest House Interior"
                                className="rounded-2xl shadow-xl w-full"
                                whileHover={{
                                    scale: 1.02,
                                    transition: { duration: 0.4 }
                                }}
                            />

                            {/* Decorative elements */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="absolute -top-4 -right-4 bg-amber-500 text-white p-3 rounded-lg shadow-lg"
                            >
                                <span className="font-bold text-lg">14+</span>
                                <p className="text-xs">Years Experience</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7, duration: 0.6 }}
                                className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg border border-amber-100"
                            >
                                <div className="flex items-center">
                                    <div className="flex mr-2">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <span className="text-sm font-semibold text-slate-800">4.9/5</span>
                                </div>
                                <p className="text-xs text-slate-600 mt-1">Guest Rating</p>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Additional decorative elements */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1, duration: 0.7 }}
                        className="absolute left-0 mt-12 opacity-10"
                    >
                        <svg width="200" height="200" viewBox="0 0 100 100" className="text-amber-500">
                            <path fill="currentColor" d="M50,0 L100,50 L50,100 L0,50 Z"></path>
                        </svg>
                    </motion.div>
                </div>
            </section>
            <Service />
        </div>
    );
};

export default HomePage;