import React from 'react'
import { motion } from 'framer-motion';
import { Bed, Utensils, Wifi, Shield, Home, Star, MapPin, Phone, Mail } from 'lucide-react';
import CountUp from '../CountUp';
import { useNavigate } from 'react-router-dom';

const Service = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerChildren = {
        visible: { transition: { staggerChildren: 0.1 } }
    };

    const scaleHover = {
        scale: 1.05,
        transition: { duration: 0.3 }
    };
    const features = [
        { icon: Bed, title: 'Comfortable Rooms', desc: 'Well-furnished rooms with all modern amenities' },
        { icon: Utensils, title: 'Homely Meals', desc: 'Delicious home-cooked food included' },
        { icon: Wifi, title: 'High-Speed WiFi', desc: 'Free high-speed internet access' },
        { icon: Shield, title: '24/7 Security', desc: 'Round-the-clock security for your safety' },
    ];
    const navigate = useNavigate();

    const services = [
        {
            icon: Home,
            title: 'Premium Accommodation',
            desc: 'Fully furnished AC & Non-AC rooms with modern amenities and comfortable living spaces',
            features: ['Single & double occupancy', '24/7 electricity & water', 'WiFi in all rooms']
        },
        {
            icon: Star,
            title: 'Homely Food Service',
            desc: 'Nutritious and delicious meals prepared with love, just like home',
            features: ['3 meals daily', 'Bengali & North Indian cuisine', 'Hygienic kitchen']
        },
        {
            icon: Shield,
            title: 'Safety & Security',
            desc: 'Round-the-clock security with CCTV monitoring for your peace of mind',
            features: ['24/7 security guard', 'CCTV surveillance', 'Secure entry system']
        }
    ];

    return (
        <div>
            <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center bg-amber-500 text-white px-4 py-2 rounded-full mb-6">
                                <span className="text-sm">Established & Trusted</span>
                            </div>
                            <h2 className="text-4xl font-bold text-slate-800 mb-6">Your Home Away From Home</h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Located at the heart of Kolkata, Annapurna Atithi Niwas has been providing safe,
                                comfortable, and homely accommodation for students and working professionals.
                                We understand the importance of feeling secure and welcomed in a new city.
                            </p>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Our fully furnished rooms, nutritious homely meals, and modern amenities ensure
                                you have everything you need to focus on your studies or career while feeling right at home.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href="#amenities"
                                    className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium shadow-md"
                                >
                                    Explore Facilities
                                </motion.a>
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => navigate('/rooms')}
                                    className="border border-amber-500 text-amber-600 hover:bg-amber-50 px-6 py-3 rounded-lg font-medium"
                                >
                                    View Gallery
                                </motion.a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-4"
                        >
                            {features.map(({ icon: Icon, title, desc }, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={scaleHover}
                                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                                >
                                    <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Icon className="text-white" size={24} />
                                    </div>
                                    <h3 className="font-semibold text-center mb-2">{title}</h3>
                                    <p className="text-sm text-slate-600 text-center">{desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            {/* <section className="py-16 bg-amber-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: "5+", label: "Years of Trust" },
                            { number: "100+", label: "Happy Residents" },
                            { number: "20+", label: "Furnished Rooms" },
                            { number: "24/7", label: "Security & Support" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                                <div className="text-amber-100">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section> */}
            <CountUp />

            {/* Services Section */}
            <section id="amenities" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <div className="inline-flex items-center bg-amber-500 text-white px-4 py-2 rounded-full mb-4">
                            <span>Our Premium Services</span>
                        </div>
                        <h2 className="text-4xl font-bold text-slate-800 mb-4">Everything You Need for Comfortable Living</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            We provide comprehensive services to ensure your stay with us is comfortable, safe, and memorable
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={scaleHover}
                                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-amber-100"
                            >
                                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mb-4">
                                    <service.icon className="text-white" size={24} />
                                </div>
                                <h3 className="text-xl font-semibold text-slate-800 mb-3">{service.title}</h3>
                                <p className="text-slate-600 mb-4">{service.desc}</p>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center">
                                            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Preview */}
            <section className="py-20 relative bg-fixed" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80)` }}>
                <div className="absolute inset-0 bg-slate-900/70"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <div className="inline-flex items-center bg-white/20 text-white px-4 py-2 rounded-full mb-4 border border-white/30">
                            <span>Take a Look Around</span>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-4">Our Beautiful Spaces</h2>
                        <p className="text-lg text-white/90 max-w-2xl mx-auto">
                            Get a glimpse of our well-maintained rooms, common areas, and facilities
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-4 gap-4 mb-8">
                        {[
                            { img: "/3.jpg", title: "AC Rooms" },
                            { img: "/8.jpeg", title: "Temple" },
                            { img: "/5.jpg", title: "Common Area" },
                            { img: "/10.jpeg", title: "Non-AC Room" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={scaleHover}
                                className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden"
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-white font-semibold text-center">{item.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={()=>navigate('/rooms')}
                            className="inline-block bg-white/10 border border-white/30 text-white hover:bg-white/20 px-6 py-3 rounded-xl font-medium backdrop-blur-sm transition-colors"
                        >
                            View Full Gallery
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            {/* Location Section */}
            <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center bg-amber-500 text-white px-4 py-2 rounded-full mb-6">
                                <span>Find Us Easily</span>
                            </div>
                            <h2 className="text-4xl font-bold text-slate-800 mb-6">Prime Location in Kolkata</h2>
                            <p className="text-lg text-slate-600 mb-6">
                                Located in a prime area with easy access to educational institutions,
                                offices, and shopping areas. Perfect connectivity to all parts of Kolkata.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-5 h-5 text-amber-500" />
                                    <span className="text-slate-600">B/79/H/6 Turf Road Kolkata: 700025</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-amber-500" />
                                    <span className="text-slate-600">+91 9830431930</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-amber-500" />
                                    <span className="text-slate-600">probirmondal240176@gmail.com</span>
                                </div>
                            </div>

                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#location"
                                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium shadow-md inline-block"
                            >
                                Get Directions
                            </motion.a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            whileHover={scaleHover}
                            className="bg-white rounded-lg overflow-hidden shadow-md h-96"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7370.244010306869!2d88.339992!3d22.537102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02776b96514013%3A0x586c252167431f7b!2sMAA%20ANNAPURNA%20ATITHI%20NIBASH(guest%20House)!5e0!3m2!1sen!2sin!4v1758280711320!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="contact" className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-slate-800 mb-8"
                    >
                        Ready to Make Annapurna Your Home?
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        {[
                            { icon: Phone, title: "Call Us", details: ["+91 9830431930 "] },
                            { icon: Mail, title: "Email Us", details: ["probirmondal240176@gmail.com"] },
                            { icon: MapPin, title: "Visit Us", details: [" B/79/H/6 Turf Road", "Kolkata - 700025"] }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={scaleHover}
                                className="bg-amber-50 p-6 rounded-xl shadow-md border border-amber-100"
                            >
                                <item.icon className="w-8 h-8 text-amber-600 mx-auto mb-4" />
                                <h3 className="font-semibold text-slate-800 mb-2">{item.title}</h3>
                                {item.details.map((detail, i) => (
                                    <p key={i} className="text-slate-600 text-sm mb-1">{detail}</p>
                                ))}
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="tel:+919748517824"
                            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-md inline-block"
                        >
                            Get In Touch
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </div>

    );
}

export default Service
