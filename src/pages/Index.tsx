import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Barbershop Bonn | BARBER SHOP EMAD</title>
        <meta
          name="description"
          content="Besuche unseren Premium Barbershop BARBER SHOP EMAD in Bonn für erstklassige Haarschnitte, Bartpflege und individuelle Styles. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Barbershop, Herrenfriseur, Haarschnitt, Bartpflege, Rasur, Bonn, BARBER SHOP EMAD"
        />
        <link rel="canonical" href="https://barbershop-emad.de" />

        {/* Open Graph */}
        <meta property="og:title" content="BARBER SHOP EMAD | Premium Barbershop Bonn" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und Bartpflege für den modernen Gentleman in Bonn."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://barbershop-emad.de" />
        <meta property="og:image" content="https://barbershop-emad.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BARBER SHOP EMAD | Premium Barbershop Bonn" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und Bartpflege für den modernen Gentleman."
        />
        <meta name="twitter:image" content="https://barbershop-emad.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "name": "BARBER SHOP EMAD",
            "image": "https://barbershop-emad.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Paul-Kemp-Straße 1",
              "addressLocality": "Bonn",
              "postalCode": "53173",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "50.6841",
              "longitude": "7.1558"
            },
            "url": "https://barbershop-emad.de",
            "telephone": "+49 163 9479949",
            "openingHours": "Mo-Sa 10:00-19:00",
            "priceRange": "€€",
            "servesCuisine": "Barbershop Services",
            "sameAs": [
              "https://www.facebook.com/barbershopemad",
              "https://www.instagram.com/barbershopemad"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;

