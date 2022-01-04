import { Section } from '../layout/Section';
import { NumberText } from '../stats/NumberText';

const Stats = () => (
  <Section
    title="Come together alongside 30+ immigrants "
    description="to protest on March 11, 2022. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
  >
    <div className="mx-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 justify-items-center">
      <NumberText text="days to go.">67</NumberText>
      {/* <NumberText text="Products">10+</NumberText>
      <NumberText text="Components">150+</NumberText>
      <NumberText text="Employees">10+</NumberText> */}
    </div>
  </Section>
);

export { Stats };
