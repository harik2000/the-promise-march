type IVerticalFeatureElementProps = {
  children: string;
};

const VerticalFeatureElement = (props: IVerticalFeatureElementProps) => (
  <li className="flex items-center mt-2">
    <svg
      className="stroke-current stroke-2 text-white h-5 w-5 mr-3 flex items-center justify-center rounded-full bg-green-400 p-1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M5 12l5 5L20 7" />
    </svg>
    {props.children}
  </li>
);

export { VerticalFeatureElement };
