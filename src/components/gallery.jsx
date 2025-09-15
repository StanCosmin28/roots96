import { useState, useEffect } from "react";
import { X } from "lucide-react";

import data from "../Model/data";

const { photo1, photo2, photo3, photo4, photo5, photo6 } = { ...data.gallery };

const galleryImages = [
  {
    src: photo1,
    alt: "Latte Art",
  },
  {
    src: photo2,
    alt: "Coffee Shop Atmosphere",
  },
  {
    src: photo3,
    alt: "Barista at Work",
  },
  {
    src: photo4,
    alt: "Premium Coffee Beans",
  },
  {
    src: photo5,
    alt: "Coffee Counter",
  },
  {
    src: photo6,
    alt: "Community",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Close lightbox when clicking outside or pressing Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    const handleClickOutside = (event) => {
      const lightbox = document.querySelector(".lightbox-background");
      if (lightbox && event.target === lightbox) {
        setSelectedImage(null);
      }
    };

    if (selectedImage !== null) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("click", handleClickOutside);
      document.body.style.overflow = "hidden"; // Prevent scrolling
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "unset"; // Re-enable scrolling
    };
  }, [selectedImage]);

  return (
    <section id="gallery" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-serif">
            Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Step into our world through these moments that capture the essence
            of Roots96
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="lightbox-background fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10 p-2 bg-black/50 rounded-full"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="relative">
                <img
                  src={galleryImages[selectedImage].src || "/placeholder.svg"}
                  alt={galleryImages[selectedImage].alt}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                  onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
