type Props = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({ name, description, image }: Props) => {
  const overlayStyles = `p-5 absolute z-20 flex flex-col h-full w-full items-center justify-center whitespace-normal bg-primary-500 text-white opacity-0 transition duration-500 hover:opacity-90`;

  return (
    <li className="relative mx-5 inline-block h-full w-full">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5 text-base">{description}</p>
      </div>
      <img src={image} alt={image} />
    </li>
  );
};

export default Class;
