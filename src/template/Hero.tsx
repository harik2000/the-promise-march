import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const Hero = () => (
  <Background color="bg-primary-100">
    <Section yPadding="py-24">
      <HeroOneButton
        title={
          <>
            The {' '}
            <span className="text-primary-500">Promise March.</span>
          </>
        }
        description="This administration has failed on keeping its campaign promises to many communities, especially the immigrant community. Without a voice to vote we are especially vulnerable. Immigrants keep our farms, schools, hospitals, and tech companies running; it is time to show this country the impact of losing its immigrants."
        button={
          <Link href="https://m.facebook.com/events/509183733569265?view=permalink&id=509183740235931&m_entstream_source=timeline&anchor_composer=false">
            <a>
              <Button xl>Fight For Change</Button>
            </a>
          </Link>
        }
        image={{
          src: '/assets/images/hero-image.png',
          alt: 'Hero screenshot',
        }}
      />
    </Section>
  </Background>
);

export { Hero };
