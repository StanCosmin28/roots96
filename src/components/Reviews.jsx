"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Reviews() {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: "Maria Popescu",
      rating: 5,
      date: "2 weeks ago",
      text: "The best coffee in Iași! Amazing atmosphere and the staff is incredibly friendly. Their cold brew is perfection.",
      source: "Google Reviews",
    },
    {
      name: "Alexandru Ionescu",
      rating: 5,
      date: "1 month ago",
      text: "Roots96 has become my daily stop. The quality of coffee is exceptional and the minimalist design makes it perfect for working.",
      source: "Google Reviews",
    },
    {
      name: "Elena Vasile",
      rating: 5,
      date: "3 weeks ago",
      text: "Absolutely love this place! The attention to detail in every cup is remarkable. Their pastry selection is also delicious.",
      source: "Google Reviews",
    },
    {
      name: "Andrei Mihai",
      rating: 5,
      date: "2 months ago",
      text: "A hidden gem in the city. The coffee is always perfect and the service is outstanding. Highly recommend the signature latte!",
      source: "Facebook Reviews",
    },
    {
      name: "Cristina Nistor",
      rating: 5,
      date: "1 week ago",
      text: "The perfect blend of great coffee and wonderful ambiance. I come here every weekend to relax and enjoy their amazing brews.",
      source: "Google Reviews",
    },
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-serif">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover why our community loves Roots96. Here's what our customers
            are saying about their experience.
          </p>
        </div>

        {/* Main Review Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border relative">
            <Quote className="absolute top-6 left-6 h-8 w-8 text-primary/20" />

            <div className="text-center mb-6">
              {/* Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-6 w-6 ${
                      i < reviews[currentReview].rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-lg text-foreground italic leading-relaxed mb-6">
                "{reviews[currentReview].text}"
              </p>

              {/* Reviewer Info */}
              <div>
                <h4 className="font-semibold text-foreground text-lg">
                  {reviews[currentReview].name}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {reviews[currentReview].date} •{" "}
                  {reviews[currentReview].source}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <button
                onClick={prevReview}
                className="p-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex space-x-1">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentReview
                        ? "bg-primary w-4"
                        : "bg-border hover:bg-primary/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextReview}
                className="p-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Additional Small Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {reviews.slice(0, 3).map((review, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 shadow-md border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < review.rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-foreground mb-4 line-clamp-3">
                "{review.text}"
              </p>
              <div>
                <p className="font-semibold text-foreground text-sm">
                  {review.name}
                </p>
                <p className="text-muted-foreground text-xs">{review.source}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=Roots+96+Recenzii"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Star className="h-4 w-4 mr-2 fill-current" />
            Read More Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
