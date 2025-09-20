import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
  Clock,
  User,
  MailIcon,
  MessageSquare
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

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    roomType: 'AC Room'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create WhatsApp message
    const message = `Hello! I would like to make an inquiry about staying at Maa Annapurna Athiti Niwas.\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Room Type:* ${formData.roomType}\n` +
      `*Check-in:* ${formData.checkIn}\n` +
      `*Check-out:* ${formData.checkOut}\n` +
      `*Guests:* ${formData.guests}\n` +
      `*Message:* ${formData.message}\n\n` +
      `Please contact me with availability and pricing. Thank you!`;

    // Open WhatsApp with pre-filled message (URL-encoded)
    window.open(`https://wa.me/9830431930?text=${encodeURIComponent(message)}`, '_blank');

    // Show success animation
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      checkIn: '',
      checkOut: '',
      guests: '1',
      roomType: 'AC Room'
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 9830431930"],
      action: "tel:+919830431930",
      buttonText: "Call Now",
      color: "bg-green-100 text-green-700"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["Quick responses", "24/7 available"],
      action: "https://wa.me/9830431930",
      buttonText: "Message on WhatsApp",
      color: "bg-green-100 text-green-700"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["probirmondal240176@gmail.com", "Quick reply within hours"],
      action: "mailto:probirmondal240176@gmail.com",
      buttonText: "Send Email",
      color: "bg-blue-100 text-blue-700"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["B/79/H/6 Turf Road", "Kolkata: 700025"],
      action: "https://www.google.com/maps/place/MAA+ANNAPURNA+ATITHI+NIBASH(guest+House)/@22.537102,88.339992,16z/data=!4m6!3m5!1s0x3a02776b96514013:0x586c252167431f7b!8m2!3d22.5371024!4d88.3399921!16s%2Fg%2F11h7krtwfq?hl=en&entry=ttu&g_ep=EgoyMDI1MDkxNi4wIKXMDSoASAFQAw%3D%3D",
      buttonText: "Get Directions",
      color: "bg-amber-100 text-amber-700"
    }
  ];

  const faqs = [
    {
      question: "What are the check-in and check-out times?",
      answer: "Check-in is from 12:00 PM and check-out is until 11:00 AM. Early check-in and late check-out may be available upon request."
    },
    {
      question: "Do you offer long-term stay discounts?",
      answer: "Yes, we offer special rates for stays longer than 7 days. Please contact us for monthly rates and discounts."
    },
    {
      question: "Is parking available?",
      answer: "Yes, we provide secure parking space for our guests at no additional cost."
    },
    {
      question: "Do you provide meals?",
      answer: "Yes, we serve delicious homely meals in our in-house restaurant. Both vegetarian and non-vegetarian options are available."
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
          Get In Touch
        </motion.span>
        <motion.h1
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-6"
        >
          Contact Us
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-xl text-slate-600 max-w-2xl mx-auto"
        >
          We're here to help you plan your perfect stay at Maa Annapurna Athiti Niwas
        </motion.p>
      </motion.section>

      {/* Contact Methods */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-4 py-12"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-slate-100 text-center"
            >
              <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <method.icon size={28} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{method.title}</h3>
              <div className="space-y-1 mb-4">
                {method.details.map((detail, i) => (
                  <p key={i} className="text-slate-600 text-sm">{detail}</p>
                ))}
              </div>
              <motion.a
                whileHover={pulse.hover}
                whileTap={pulse.tap}
                href={method.action}
                className={`inline-block ${method.color.replace('text-', 'hover:bg-').split(' ')[0]} px-4 py-2 rounded-lg font-medium text-sm transition-colors`}
              >
                {method.buttonText}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-4 py-12"
      >
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            variants={scaleIn}
            className="bg-white rounded-2xl p-8 shadow-xl border border-amber-100 relative overflow-hidden"
          >
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  className="absolute inset-0 bg-green-500/90 flex items-center justify-center z-10 rounded-2xl"
                >
                  <div className="text-center text-white p-6">
                    <CheckCircle size={64} className="mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p>We'll contact you shortly on WhatsApp</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <h2 className="text-2xl font-serif font-bold text-slate-800 mb-6">Send us a Message</h2>
            <p className="text-slate-600 mb-8">Fill out the form below and we'll contact you on WhatsApp immediately</p>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Your Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <div className="relative">
                  <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Check-in Date</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Check-out Date</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Number of Guests</label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  >
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Room Preference</label>
                  <select
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  >
                    <option value="AC Room">AC Room</option>
                    <option value="Non-AC Room">Non-AC Room</option>
                    <option value="Deluxe AC Room">Deluxe AC Room</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Your Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={pulse.hover}
                whileTap={pulse.tap}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send via WhatsApp
              </motion.button>
            </form>
          </motion.div>

          {/* Info Sidebar */}
          <motion.div
            variants={fadeInUp}
            className="space-y-8"
          >
            {/* Address Card */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-amber-100">
              <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <MapPin className="text-amber-500" />
                Our Location
              </h3>
              <p className="text-slate-600 mb-4">
                B/79/H/6 Turf Road<br />
                Kolkata: 700025
              </p>
              <motion.a
                whileHover={pulse.hover}
                whileTap={pulse.tap}
                href="https://goo.gl/maps/example"
                className="inline-block bg-amber-500 text-white px-4 py-2 rounded-lg font-medium"
              >
                Get Directions
              </motion.a>
            </div>

            {/* Hours Card */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-amber-100">
              <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <Clock className="text-amber-500" />
                Reception Hours
              </h3>
              <div className="space-y-2 text-slate-600">
                <p><strong>Monday - Sunday:</strong> 24/7</p>
                <p className="text-sm text-slate-500">Our staff is always available to assist you</p>
              </div>
            </div>

            {/* FAQ Card */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-amber-100">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Quick Answers</h3>
              <div className="space-y-4">
                {faqs.slice(0, 2).map((faq, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-slate-800 mb-1">{faq.question}</h4>
                    <p className="text-sm text-slate-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scaleIn}
        className="max-w-7xl mx-auto px-4 py-12"
      >
        <div className="bg-white rounded-2xl p-6 shadow-xl border border-amber-100">
          <h2 className="text-2xl font-serif font-bold text-slate-800 mb-6 text-center">Find Us Easily</h2>
          <div className="rounded-2xl overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7370.244010306869!2d88.339992!3d22.537102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02776b96514013%3A0x586c252167431f7b!2sMAA%20ANNAPURNA%20ATITHI%20NIBASH(guest%20House)!5e0!3m2!1sen!2sin!4v1758280711320!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactPage;