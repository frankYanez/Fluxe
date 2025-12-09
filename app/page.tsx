import Hero from './(sections)/Hero';
import Value from './(sections)/Value';
import Portfolio from './(sections)/Portfolio';
import Testimonials from './(sections)/Testimonials';
import Pricing from './(sections)/Pricing';
import FinalCta from './(sections)/FinalCta';

export default function Home() {
  return (
    <main>
      <Hero />
      <Value />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <FinalCta />
    </main>
  );
}

