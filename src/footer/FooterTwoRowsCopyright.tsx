import { ReactNode } from 'react';

import { Logo } from '../template/Logo';

type IFooterTwoRowsCopyrightProps = {
  siteName: string;
  children: ReactNode;
};

const FooterTwoRowsCopyright = (props: IFooterTwoRowsCopyrightProps) => (
  <>
    {props.children}

    <div className="mt-10 flex flex-col sm:flex-row gap-4 text-center sm:text-left items-center justify-between border-t border-gray-300 pt-10">
      <Logo />

      <div className="text-sm">
        {`© Copyright ${new Date().getFullYear()} ${
          props.siteName
        }. All Rights Reserved.`}
      </div>
    </div>
  </>
);

export { FooterTwoRowsCopyright };
