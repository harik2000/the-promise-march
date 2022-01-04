import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { VerticalFeatureElement } from '../feature/VerticalFeatureElement';
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <>
    <Section>
      <VerticalFeatureRow
        title="Plan A"
        image={{
          src: '/assets/images/feature.svg',
          alt: 'First feature alt text',
        }}
        action={
          <Link href="/">
            <a>
              <Button>Learn more</Button>
            </a>
          </Link>
        }
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          tristique nibh ac diam pretium tincidunt. Vestibulum sed est velit.
        </p>
        <p>
          Fusce porttitor ac urna quis bibendum. Nullam iaculis lectus eu
          gravida luctus. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos.
        </p>
      </VerticalFeatureRow>
    </Section>
    <Background color="bg-primary-100">
      <Section>
        <VerticalFeatureRow
          title="Plan B"
          image={{
            src: '/assets/images/feature2.svg',
            alt: 'Second feature alt text',
          }}
          reverse
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            malesuada nisi tellus, non imperdiet nisi tempor at:
          </p>
          <ul className="grid grid-cols-1">
            <VerticalFeatureElement>
              Lorem ipsum dolor sit amet
            </VerticalFeatureElement>
            <VerticalFeatureElement>
              Consectetur adipiscing elit
            </VerticalFeatureElement>
            <VerticalFeatureElement>
              Phasellus malesuada nisi
            </VerticalFeatureElement>
            <VerticalFeatureElement>
              Non imperdiet nisi tempor at
            </VerticalFeatureElement>
            <VerticalFeatureElement>
              Lorem ipsum dolor sit amet
            </VerticalFeatureElement>
          </ul>
        </VerticalFeatureRow>
      </Section>
    </Background>
    <Section>
      <VerticalFeatureRow
        title="Plan C"
        image={{
          src: '/assets/images/feature3.svg',
          alt: 'Third feature alt text',
        }}
        action={
          <Link href="/">
            <a>
              <Button>Read more</Button>
            </a>
          </Link>
        }
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          tristique nibh ac diam pretium tincidunt. Vestibulum sed est velit.
        </p>
        <p>
          Fusce porttitor ac urna quis bibendum. Nullam iaculis lectus eu
          gravida luctus. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos.
        </p>
      </VerticalFeatureRow>
    </Section>
  </>
);

export { VerticalFeatures };
