import Hero from './(sections)/Hero';
import Value from './(sections)/Value';
import Portfolio from './(sections)/Portfolio';
import Testimonials from './(sections)/Testimonials';
import Pricing from './(sections)/Pricing';
import FinalCta from './(sections)/FinalCta';
import Features from './(sections)/Features';
import GlobalReach from './(sections)/GlobalReach';

export default function Home() {
  return (
    <main>
      <Hero />
      <Value />
      <Features />
      <Portfolio />
      <GlobalReach />
      <Testimonials />
      <Pricing />
      <FinalCta />
    </main>
  );
}
