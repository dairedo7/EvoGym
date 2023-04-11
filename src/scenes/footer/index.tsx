import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";
import Logo from "../../assets/Logo.png";

const footerLinks = [
  {
    name: "Nemo lemi irmantus",
    href: "#",
  },
  {
    name: "Rivaro sivaro liunis",
    href: "#",
  },
  {
    name: "Masro raino iner",
    href: "#",
  },
];

const Footer = () => {
  const descriptionStyles = `text-sm md:text-base mt-4`;
  return (
    <footer className="mx-auto mt-5 bg-primary-100 px-5 py-20">
      <motion.div
        className="mx-auto md:w-5/6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="flex flex-col justify-between text-left md:flex-row">
          <div className="mb-16 md:w-3/6">
            <img src={Logo} alt="Footer logo" />
            <p className={`${descriptionStyles} `}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
              laudantium corporis alias iure consequuntur magni ratione animi
              fugiat ut, molestiae labore quia fugit! Ducimus, labore. Adipisci
              assumenda optio ullam laboriosam!
            </p>
            <p className={descriptionStyles}>
              &#xae; Evogym All Rights Reserved
            </p>
          </div>
          <ul className="mb-16 md:w-1/6">
            <h4 className="text-lg md:text-xl">Links</h4>
            {footerLinks.map((item) => (
              <li key={item.name} className={descriptionStyles}>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
          <div className="md:w-1/6">
            <h4 className="text-lg md:text-xl">Contact Us</h4>
            <p className={descriptionStyles}>
              Livitus adiatarus levis virtarus.
            </p>
            <p className={descriptionStyles}>(000)235 759</p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
