import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { Section } from '../layout/Section';
import { NavbarMenuCenter } from '../navigation/NavbarMenuCenter';
import { Logo } from './Logo';

const Navbar = () => (
  <Background color="bg-primary-100">
    <Section yPadding="py-6">
      <NavbarMenuCenter
        logo={<Logo xl />}
        rightMenu={
          <>
            <li>
              <Link href="/">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="https://m.facebook.com/events/509183733569265?view=permalink&id=509183740235931&m_entstream_source=timeline&anchor_composer=false">
                <a>
                  <Button>Fight For Change</Button>
                </a>
              </Link>
            </li>
          </>
        }
      >
        {/* <li>
          <Link href="/">
            <a>Products</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Examples</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Contact</a>
          </Link>
        </li> */}
      </NavbarMenuCenter>
    </Section>
  </Background>
);

export { Navbar };
