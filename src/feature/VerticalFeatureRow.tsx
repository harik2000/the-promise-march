import { ReactNode } from 'react';

import className from 'classnames';

type IVerticalFeatureRowProps = {
  title: string;
  children: ReactNode;
  image: {
    src: string;
    alt: string;
  };
  reverse?: boolean;
  action?: ReactNode;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'vertical-feature',
    'first:mt-0',
    'mt-16',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    }
  );

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full md:w-1/2">
        <div className="text-primary-500 text-sm font-bold">
          Mini Date Title?
        </div>
        <h3 className="mt-1 text-3xl text-gray-900 font-semibold">
          {props.title}
        </h3>
        <div className="mt-3 text-lg leading-7">{props.children}</div>
        {props.action && <div className="mt-4">{props.action}</div>}
      </div>

      <div className="w-full md:w-1/2 p-10 sm:p-20 md:p-10 xl:p-20">
        <img src={props.image.src} alt={props.image.alt} />
      </div>

      <style jsx>
        {`
          .vertical-feature :global(p) {
            @apply mt-2;
          }

          .vertical-feature :global(ul) {
            @apply mt-2;
          }
        `}
      </style>
    </div>
  );
};

export { VerticalFeatureRow };
