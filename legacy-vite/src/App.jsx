import { WishlistProvider } from "./context/Wishlist";
import { ToastProvider } from "./components/Toast";
import ScrollProgress from "./components/ScrollProgress";
import AgeGate from "./components/AgeGate";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandStrip from "./components/BrandStrip";
import Collections from "./components/Collections";
import Shop from "./components/Shop";
import Humidor from "./components/Humidor";
import Stats from "./components/Stats";
import Events from "./components/Events";
import RequestForm from "./components/RequestForm";
import Testimonials from "./components/Testimonials";
import Visit from "./components/Visit";
import Footer from "./components/Footer";
import WishlistDrawer from "./components/WishlistDrawer";

export default function App() {
  return (
    <WishlistProvider>
      <ToastProvider>
        <ScrollProgress />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <AgeGate />
        <Navbar />

        <main id="main">
          <span id="top" />
          <Hero />
          <BrandStrip />
          <Collections />
          <Shop />
          <Humidor />
          <Stats />
          <Events />
          <RequestForm />
          <Testimonials />
          <Visit />
        </main>

        <Footer />
        <WishlistDrawer />
      </ToastProvider>
    </WishlistProvider>
  );
}
