import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Car, 
  Train, 
  Bus, 
  Navigation,
  Copy,
  CheckCircle
} from 'lucide-react';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const LocationPage = () => {
  const [copied, setCopied] = useState(false);
  const address = "B/79/H/6 Turf Road Kolkata: 700025";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const transportOptions = [
    {
      icon: Train,
      title: "Nearest Metro Station",
      description: "Phoolbagan Metro Station - 1.2 km away",
      time: "15 min walk"
    },
    {
      icon: Bus,
      title: "Bus Stop",
      description: "Turf Road Bus Stop - 200 m away",
      time: "3 min walk"
    },
    {
      icon: Car,
      title: "Parking Availability",
      description: "Secure parking space available for guests",
      time: "On premises"
    }
  ];

  const handleGetDirections = () => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50 pt-20">
      {/* Header Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center py-16 px-4"
      >
        <motion.span 
          variants={fadeInUp}
          className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-4"
        >
          Find Us
        </motion.span>
        <motion.h1 
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-6"
        >
          Our Location
        </motion.h1>
        <motion.p 
          variants={fadeInUp}
          className="text-xl text-slate-600 max-w-2xl mx-auto"
        >
          Conveniently located in the heart of Kolkata with excellent connectivity to all major areas
        </motion.p>
      </motion.section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="relative h-96 md:h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7370.244010306869!2d88.339992!3d22.537102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02776b96514013%3A0x586c252167431f7b!2sMAA%20ANNAPURNA%20ATITHI%20NIBASH(guest%20House)!5e0!3m2!1sen!2sin!4v1758280711320!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGetDirections}
                className="absolute bottom-4 right-4 bg-amber-500 text-white px-6 py-3 rounded-lg font-medium shadow-lg flex items-center gap-2 z-10"
              >
                <Navigation size={20} />
                Get Directions
              </motion.button>
            </div>
          </motion.div>

          {/* Information Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {/* Address Card */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl p-6 shadow-md border border-amber-100"
            >
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <MapPin className="text-amber-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Our Address</h3>
                  <p className="text-slate-600 mb-4">{address}</p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={copyToClipboard}
                    className="flex items-center gap-2 text-amber-600 hover:text-amber-700 transition-colors"
                  >
                    {copied ? (
                      <>
                        <CheckCircle size={16} />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        Copy Address
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Contact Card */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl p-6 shadow-md border border-amber-100"
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="text-amber-600" size={20} />
                  <span className="text-slate-600">+91 9830431930 </span>
                </div>
                {/* <div className="flex items-center gap-3">
                  <Phone className="text-amber-600" size={20} />
                  <span className="text-slate-600">+91 98361 57419</span>
                </div> */}
                <div className="flex items-center gap-3">
                  <Mail className="text-amber-600" size={20} />
                  <span className="text-slate-600">probirmondal240176@gmail.com</span>
                </div>
              </div>
            </motion.div>

            {/* Hours Card */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl p-6 shadow-md border border-amber-100"
            >
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Clock className="text-amber-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Reception Hours</h3>
                  <div className="space-y-1 text-slate-600">
                    <p>Monday - Sunday: 24/7</p>
                    <p className="text-sm text-slate-500">Our reception is always available to assist you</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Transportation Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-20"
        >
          <h2 className="text-3xl font-serif font-bold text-center text-slate-800 mb-12">Getting Here</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {transportOptions.map((option, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-amber-100 text-center"
              >
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <option.icon className="text-amber-600" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{option.title}</h3>
                <p className="text-slate-600 mb-3">{option.description}</p>
                <span className="inline-block bg-amber-500 text-white px-3 py-1 rounded-full text-sm">
                  {option.time}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Nearby Attractions */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-20 bg-white rounded-2xl p-8 shadow-md border border-amber-100"
        >
          <h2 className="text-3xl font-serif font-bold text-center text-slate-800 mb-8">Nearby Attractions</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Science City", distance: "3.5 km", time: "15 min drive" },
              { name: "Nicco Park", distance: "4.2 km", time: "18 min drive" },
              { name: "City Centre", distance: "2.8 km", time: "12 min drive" },
              { name: "Victoria Memorial", distance: "6.1 km", time: "25 min drive" }
            ].map((attraction, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="text-center p-4 bg-amber-50 rounded-lg"
              >
                <h4 className="font-semibold text-slate-800 mb-2">{attraction.name}</h4>
                <p className="text-sm text-slate-600">{attraction.distance}</p>
                <p className="text-xs text-amber-600">{attraction.time}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleIn}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-serif font-bold mb-6">Ready to Visit Us?</h2>
            <p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
              Book your stay at MAA Annapurna Atithi Nibash and experience the perfect blend of comfort and convenience
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-amber-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg"
            >
              Book Now
            </motion.button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default LocationPage;