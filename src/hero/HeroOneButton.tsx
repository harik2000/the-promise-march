import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
  image?: {
    src: string;
    alt: string;
  };
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="flex flex-wrap items-center text-center lg:text-left">
    <div className="w-full md:w-4/5 md:mx-auto lg:w-1/2 lg:pr-4">
      <h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">
        {props.title}
      </h1>
      <div className="text-2xl mt-4 mb-6">{props.description}</div>

      {props.button}
    </div>

    {props.image && (
      <div className="w-full lg:w-1/2">
        <img
          className="mt-12 lg:mt-0 mx-auto rounded-md"
          src={props.image.src}
          alt={props.image.alt}
        />
      </div>
    )}
  </header>
);

export { HeroOneButton };
