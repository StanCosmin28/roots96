import Navigation from "./components/navigation";
import Hero from "./components/hero";
import About from "./components/about";
import MenuPreview from "./components/menu-preview";
import Gallery from "./components/gallery";
import LocationHours from "./components/location-hours";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Reviews from "./components/Reviews";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <MenuPreview />
      <Gallery />
      <LocationHours />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
