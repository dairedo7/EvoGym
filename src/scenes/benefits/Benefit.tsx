import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="mt-5 rounded-md border-2 border-gray-300 py-16 px-5 text-center"
    >
      <div className="mb-4 flex flex-col items-center justify-center">
        <div className="mb-4 h-full rounded-full border-2 border-gray-300 bg-primary-100 p-4">
          {icon}
        </div>
        <div className="text-3xl font-bold md:text-2xl">{title}</div>
        <div className="my-3 mb-4 text-2xl font-normal md:text-base">
          {description}
        </div>
        <AnchorLink
          className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
          onClick={() => setSelectedPage(SelectedPage.Benefits)}
        >
          <p>Learn More</p>
        </AnchorLink>
      </div>
    </motion.div>
  );
};

export default Benefit;
