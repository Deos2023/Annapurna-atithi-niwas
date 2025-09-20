import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Wifi,
  Utensils,
  Shield,
  Car,
  Bed,
  Heart,
  Clock,
  MapPin,
  Star,
  CheckCircle,
  Phone,
  MessageCircle
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
      staggerChildren: 0.1
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

const FacilitiesPage = () => {
  const [activeTab, setActiveTab] = useState('rooms');

  const facilities = [
    {
      icon: Wifi,
      title: "High-Speed WiFi",
      description: "Free high-speed internet access throughout the property"
    },
    {
      icon: Utensils,
      title: "Homely Meals",
      description: "Fresh, home-style meals served in our in-house restaurant"
    },
    {
      icon: Shield,
      title: "24/7 Security",
      description: "Round-the-clock security ensuring your safety and peace of mind"
    },
    {
      icon: Car,
      title: "Free Parking",
      description: "Secure parking space available for all guests"
    },
    {
      icon: Clock,
      title: "24/7 Reception",
      description: "Always available staff to assist you at any time"
    },
    {
      icon: Heart,
      title: "Medical Support",
      description: "Proximity to hospitals and medical stores with assistance available"
    }
  ];

  const roomTypes = [
    {
      type: "AC Room",
      price: "₹1,200/night",
      features: ["Air Conditioning", "Double Bed", "Attached Bathroom", "TV", "WiFi"],
      description: "Comfortable AC rooms with modern amenities for a relaxing stay"
    },
    {
      type: "Non-AC Room",
      price: "₹800/night",
      features: ["Fan Cooling", "Double Bed", "Attached Bathroom", "TV", "WiFi"],
      description: "Affordable rooms with all essential facilities for a comfortable stay"
    },
    {
      type: "Deluxe AC Room",
      price: "₹1,500/night",
      features: ["Premium AC", "King Size Bed", "Luxury Bathroom", "Smart TV", "High-Speed WiFi"],
      description: "Spacious deluxe rooms with premium amenities for a luxurious experience"
    }
  ];

  const nearbyPlaces = [
    {
      name: "SSKM Hospital",
      distance: "1.2 km",
      time: "5 min drive"
    },
    {
      name: "Kalighat Temple",
      distance: "2.5 km",
      time: "10 min drive"
    },
    {
      name: "Victoria Memorial",
      distance: "4.3 km",
      time: "15 min drive"
    },
    {
      name: "South City Mall",
      distance: "3.8 km",
      time: "12 min drive"
    },
    {
      name: "Birla Planetarium",
      distance: "3.5 km",
      time: "11 min drive"
    },
    {
      name: "Alipore Zoo",
      distance: "5.2 km",
      time: "18 min drive"
    }
  ];

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
          Premium Comfort
        </motion.span>
        <motion.h1
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-6"
        >
          Our Facilities & Services
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-xl text-slate-600 max-w-3xl mx-auto"
        >
          Experience the perfect blend of comfort, convenience, and traditional hospitality at Maa Annapurna Athiti Niwas
        </motion.p>
      </motion.section>

      {/* Introduction Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-4 py-12"
      >
        <div className="bg-white rounded-2xl shadow-md p-8 border border-amber-100">
          <motion.div variants={fadeInUp} className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-slate-800 mb-6">Welcome to Your Home Away From Home</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Maa Annapurna Athiti Niwas offers a welcoming and affordable stay in the heart of Kolkata,
              ideal for business travelers, tourists, and medical patients. Our guest house provides a
              homely atmosphere with personalized service, reasonable rates, and a warm environment.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Conveniently located near SSKM Hospital, medical stores, Kalighat Temple, and popular shopping malls,
              we also provide easy access to iconic city landmarks such as Victoria Memorial, Birla Planetarium, and Alipore Zoo.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Facilities Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-4 py-12"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl font-serif font-bold text-center text-slate-800 mb-12"
        >
          Our Amenities
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-amber-100"
            >
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <facility.icon className="text-amber-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{facility.title}</h3>
              <p className="text-slate-600">{facility.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Room Types & Pricing */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-4 py-12 bg-white"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl font-serif font-bold text-center text-slate-800 mb-12"
        >
          Room Options & Pricing
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomTypes.map((room, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 shadow-md border border-amber-200 relative overflow-hidden"
            >
              {/* Popular badge for AC Room */}
              {room.type === "AC Room" && (
                <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-serif font-bold text-slate-800 mb-2">{room.type}</h3>
                <div className="text-3xl font-bold text-amber-600 mb-2">{room.price}</div>
                <p className="text-slate-600">{room.description}</p>
              </div>

              <div className="border-t border-amber-200 pt-6 mt-6">
                <h4 className="font-semibold text-slate-800 mb-4">Includes:</h4>
                <ul className="space-y-2">
                  {room.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="text-amber-500 mr-2" size={18} />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-amber-500 text-white py-3 rounded-lg font-semibold mt-6 shadow-md hover:bg-amber-600 transition-colors"
                onClick={() => {
                  const message = encodeURIComponent(
                    `Booking Inquiry:\nRoom Type: ${room.type}\nPrice: ${room.price}\nFeatures: ${room.features.join(', ')}\nDescription: ${room.description}`
                  );
                  window.open(`https://wa.me/919830431930?text=${message}`, '_blank');
                }}
              >
                Book Now
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          variants={fadeInUp}
          className="text-center mt-12 p-6 bg-amber-100 rounded-2xl"
        >
          <p className="text-slate-700">
            <strong>Special rates available for long-term stays!</strong> Contact us for monthly packages and discounts.
          </p>
        </motion.div>
      </motion.section>

      {/* Nearby Places */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-4 py-12"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl font-serif font-bold text-center text-slate-800 mb-12"
        >
          Nearby Attractions & Facilities
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nearbyPlaces.map((place, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-amber-100"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-800">{place.name}</h3>
                <MapPin className="text-amber-500" size={20} />
              </div>
              <div className="flex justify-between text-sm text-slate-600">
                <span>{place.distance}</span>
                <span>{place.time}</span>
              </div>
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
        className="max-w-7xl mx-auto px-4 py-12"
      >
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Ready to Book Your Stay?</h2>
          <p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
            Experience the comfort and hospitality of Maa Annapurna Athiti Niwas.
            Contact us today to check availability or make a reservation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/919830431930"
              className="bg-white text-amber-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              WhatsApp Us
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+919830431930 "
              className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-colors"
            >
              <Phone size={20} />
              Call Now
            </motion.a>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-6 text-amber-200"
          >
            We're available 24/7 to assist you with your booking needs
          </motion.p>
        </div>
      </motion.section>

      {/* Testimonial Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-4 py-12"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl font-serif font-bold text-center text-slate-800 mb-12"
        >
          What Our Guests Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              text: "Perfect stay for medical visits to SSKM Hospital. Clean rooms and helpful staff.",
              author: "Rajesh Kumar",
              rating: 5
            },
            {
              text: "Homely food and comfortable rooms. Felt like staying with family!",
              author: "Priya Sharma",
              rating: 5
            },
            {
              text: "Great value for money. Excellent location with all necessary facilities nearby.",
              author: "Amit Patel",
              rating: 4
            }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-6 shadow-md border border-amber-100"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < testimonial.rating ? "text-amber-400 fill-current" : "text-slate-300"}
                  />
                ))}
              </div>
              <p className="text-slate-600 italic mb-4">"{testimonial.text}"</p>
              <p className="text-slate-800 font-semibold">- {testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default FacilitiesPage;