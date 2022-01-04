import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { TestimonialCard } from '../testimonial/TestimonialCard';

const Testimonial = () => (
  <Background color="bg-primary-100">
    <Section title="The Hidden Dream" subtitle="About the Organizers">
      <div className="lg:mx-48">
        <TestimonialCard
          image={{
            src: '/assets/images/avatar.png',
            alt: 'Random name avatar alt text',
          }}
          author={{
            name: 'The Hidden Dream',
            position: 'Non-Profit Organization',
          }}
        >
          The Hidden Dream was built to raise awareness of the countless struggles faced by visa immigrants, 
          share resources, and create a community to uplift those affected by the broken U.S. immigration system.
        </TestimonialCard>
      </div>
    </Section>
  </Background>
);

export { Testimonial };
