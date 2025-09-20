import React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    X,
    ChevronLeft,
    ChevronRight,
    Search,
    Grid,
    List,
    Filter,
    Download,
    Share2,
    ZoomIn
} from 'lucide-react';

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

const galleryItem = {
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

// Sample gallery images
const galleryImages = [
    { id: 1, src: "/1.jpg", category: "ac-room", title: "AC Room" },
    { id: 2, src: "/2.jpg", category: "non-ac-room", title: "Non-AC Room" },
    { id: 3, src: "/3.jpg", category: "ac-room", title: "AC Room" },
    { id: 4, src: "/4.jpg", category: "temple", title: "Temple" },
    { id: 5, src: "/5.jpg", category: "common", title: "Common Area" },
    { id: 6, src: "/6.jpeg", category: "non-ac-room", title: "Non-AC Room" },
    { id: 7, src: "/7.jpeg", category: "common", title: "Common Area" },
    { id: 8, src: "/8.jpeg", category: "temple", title: "Temple" },
    { id: 9, src: "/9.jpeg", category: "non-ac-room", title: "Non-AC Room" },
    { id: 10, src: "/10.jpeg", category: "non-ac-room", title: "Non-AC Room" },
    { id: 11, src: "/11.jpeg", category: "ac-room", title: "AC Room" },
    { id: 12, src: "/12.jpeg", category: "non-ac-room", title: "Non-AC Room" },
    { id: 13, src: "/13.jpeg", category: "non-ac-room", title: "Non-AC Room" },
    { id: 14, src: "/main.jpg", category: "exterior", title: "Exterior View" },
];

const categories = ["all", "ac-room", "temple", "non-ac-room", "exterior"];

const GalleryPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [viewMode, setViewMode] = useState("grid");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const [filteredImages, setFilteredImages] = useState(galleryImages);

    // Filter images based on category and search query
    useEffect(() => {
        let result = galleryImages.slice(); // always start from original array

        if (selectedCategory !== "all") {
            result = result.filter(image => image.category === selectedCategory);
        }

        if (searchQuery.trim() !== "") {
            result = result.filter(image =>
                image.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        setFilteredImages(result);
    }, [selectedCategory, searchQuery]);

    // Scroll to top when category changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [selectedCategory]);

    const openLightbox = (image) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'unset';
    };

    const goToNext = () => {
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
        const nextIndex = (currentIndex + 1) % filteredImages.length;
        setSelectedImage(filteredImages[nextIndex]);
    };

    const goToPrev = () => {
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
        const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
        setSelectedImage(filteredImages[prevIndex]);
    };

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedImage) {
                if (e.key === 'Escape') closeLightbox();
                if (e.key === 'ArrowRight') goToNext();
                if (e.key === 'ArrowLeft') goToPrev();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50 pt-20">
            {/* Header */}
            <motion.header
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
                    Visual Journey
                </motion.span>
                <motion.h1
                    variants={fadeInUp}
                    className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-6"
                >
                    Explore Our Rooms
                </motion.h1>
                <motion.p
                    variants={fadeInUp}
                    className="text-xl text-slate-600 max-w-2xl mx-auto"
                >
                    Take a visual tour of our premium accommodations, facilities, and amenities at Annapurna Atithi Niwas
                </motion.p>
            </motion.header>

            {/* Filters and Controls */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="sticky top-20 z-30 bg-white/80 backdrop-blur-md py-6 px-4 shadow-sm"
            >
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Search */}
                    {/* <motion.div variants={fadeInUp} className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search images..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </motion.div> */}

                    {/* Category Filters */}
                    <motion.div variants={fadeInUp} className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                                    ? 'bg-amber-500 text-white shadow-md'
                                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                    }`}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </button>
                        ))}
                    </motion.div>

                    {/* View Toggle */}
                    <motion.div variants={fadeInUp} className="flex items-center gap-2">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`p-2 rounded-lg ${viewMode === 'grid'
                                ? 'bg-amber-500 text-white'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                }`}
                        >
                            <Grid size={20} />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`p-2 rounded-lg ${viewMode === 'list'
                                ? 'bg-amber-500 text-white'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                }`}
                        >
                            <List size={20} />
                        </button>
                    </motion.div>
                </div>
            </motion.section>

            {/* Gallery Grid */}
            <motion.section
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="max-w-7xl mx-auto px-4 py-12"
            >
                {filteredImages.length === 0 ? (
                    <motion.div
                        variants={fadeInUp}
                        className="text-center py-16"
                    >
                        <Filter className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-slate-600 mb-2">No images found</h3>
                        <p className="text-slate-500">Try adjusting your filters or search query</p>
                    </motion.div>
                ) : (
                    <div className={
                        viewMode === 'grid'
                            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                            : "grid grid-cols-1 gap-6"
                    }>
                        {filteredImages.map((image, index) => (
                            <motion.div
                                key={image.id}
                                variants={galleryItem}
                                className={`group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 ${viewMode === 'list' ? 'flex h-40' : 'aspect-square'
                                    }`}
                                onClick={() => openLightbox(image)}
                            >
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${viewMode === 'list' ? 'flex-shrink-0 w-56' : ''
                                        }`}
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-end">
                                    <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                                        <h3 className="font-semibold">{image.title}</h3>
                                        <p className="text-sm text-slate-200 capitalize">{image.category}</p>
                                    </div>
                                </div>
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="bg-white/90 p-2 rounded-full shadow-md"
                                    >
                                        <ZoomIn size={16} className="text-slate-700" />
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </motion.section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        onClick={closeLightbox}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25 }}
                            className="relative max-w-6xl max-h-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close button */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={closeLightbox}
                                className="absolute -top-12 right-0 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                            >
                                <X size={24} />
                            </motion.button>

                            {/* Navigation buttons */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={goToPrev}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                            >
                                <ChevronLeft size={24} />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={goToNext}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                            >
                                <ChevronRight size={24} />
                            </motion.button>

                            {/* Image */}
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                className="max-w-full max-h-[80vh] object-contain rounded-lg"
                            />

                            {/* Image info */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-4 rounded-lg"
                            >
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="font-semibold text-lg">{selectedImage.title}</h3>
                                        <p className="text-slate-200 capitalize">{selectedImage.category}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="p-2 rounded-full hover:bg-white/20 transition-colors"
                                        >
                                            <Download size={20} />
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="p-2 rounded-full hover:bg-white/20 transition-colors"
                                        >
                                            <Share2 size={20} />
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* CTA Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-16 px-4 text-center"
            >
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-serif font-bold mb-6">Ready to Experience Our Hospitality?</h2>
                    <p className="text-xl mb-8 text-amber-100">
                        Book your stay at Annapurna Atithi Niwas and experience the comfort yourself
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-amber-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg"
                    >
                        Book Your Stay Now
                    </motion.button>
                </div>
            </motion.section>
        </div>
    );
};

export default GalleryPage;