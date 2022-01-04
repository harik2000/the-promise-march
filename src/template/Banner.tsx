import { Background } from '../background/Background';
import { Newsletter } from '../form/Newsletter';
import { Section } from '../layout/Section';

const Banner = () => (
  <Background color="bg-primary-100">
    <Section
      title="The Time Is Now"
      subtitle="Its now or never"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, assumenda voluptatem."
    >
      <Newsletter />
    </Section>
  </Background>
);

export { Banner };
