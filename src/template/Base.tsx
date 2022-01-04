import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { FAQ } from './FAQ';
import { Features } from './Features';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Navbar } from './Navbar';
import { Stats } from './Stats';
import { Testimonial } from './Testimonial';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar />
    <Hero />
    <Stats />
    <Features />
    <VerticalFeatures />
    <Testimonial />
    <FAQ />
    <Banner />
    <Footer />
  </div>
);

export { Base };
