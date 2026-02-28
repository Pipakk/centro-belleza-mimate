import { HeroVideo } from '@/components/HeroVideo';
import { ServicesGrid } from '@/components/ServicesGrid';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Gallery } from '@/components/Gallery';
import { Reviews } from '@/components/Reviews';
import { LocationHours } from '@/components/LocationHours';
import { ContactForm } from '@/components/ContactForm';

export default function HomePage() {
  return (
    <>
      <HeroVideo />
      <ServicesGrid />
      <WhyChooseUs />
      <Gallery />
      <Reviews />
      <LocationHours />
      <ContactForm />
    </>
  );
}
