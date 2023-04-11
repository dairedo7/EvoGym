import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import HText from "../../shared/Htext";
import { ClassType } from "../../shared/types";
import Class from "./Class";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam maiores dicta ipsam praesentium doloremque odit, magni repudiandae sit, non inventore, nisi veritatis?",
    image: image1,
  },
  {
    name: "Training Classes",
    image: image2,
  },
  {
    name: "Yoga Classes",
    description:
      "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam maiores dicta ipsam praesentium doloremque odit, magni repudiandae sit, non inventore, nisi veritatis?",
    image: image3,
  },
  {
    name: "Ab Core Classes",
    description:
      "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam maiores dicta ipsam praesentium doloremque odit, magni repudiandae sit, non inventore, nisi veritatis?",
    image: image4,
  },
  {
    name: "Adventure Classes",
    description:
      "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam maiores dicta ipsam praesentium doloremque odit, magni repudiandae sit, non inventore, nisi veritatis?",
    image: image5,
  },
  {
    name: "Fitness Classes",
    image: image6,
  },
];

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="our-classes" className="mx-auto w-full bg-primary-100 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      ></motion.div>
      <motion.div
        className="mx-auto w-5/6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -70 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <HText>Our Classes</HText>
          <p className="py-5 text-base md:text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
            maiores dicta ipsam praesentium doloremque odit, magni repudiandae
            sit, non inventore, nisi veritatis? Totam quo eos neque ea, nostrum
            aspernatur amet.
          </p>
        </div>
      </motion.div>
      <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
        <ul className="mx-auto flex w-[2800px] justify-between whitespace-nowrap">
          {classes.map((item, i) => (
            <Class
              key={`${item.name}-${i}`}
              name={item.name}
              description={item.description}
              image={item.image}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OurClasses;
