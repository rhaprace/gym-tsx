import { JSX } from "react";
import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const Benefit = ({ icon, description, title, setSelectedPage }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center group relative overflow-hidden"
    >

      <div className="mb-4 flex justify-center group-hover:opacity-0 transition-opacity duration-300">
        <div className="rounded-full border-gray-100 bg-secondary-400 p-4">
          {icon}
        </div>
      </div>

 
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h4 className="font-bold">{title}</h4>
        <p className="my-3">{description}</p>
        <AnchorLink
          className="text-sm font-bold text-primary-400 underline hover:text-primary-300"
          onClick={() => setSelectedPage(SelectedPage.ContactUs)}
          href={`#${SelectedPage.ContactUs}`}
        >
          <p>Learn More</p>
        </AnchorLink>
      </div>
    </motion.div>
  );
};

export default Benefit;
