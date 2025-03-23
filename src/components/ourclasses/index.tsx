import imageall from "@/assets/HomePageGraphic.png";
import { SelectedPage,ClassType } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";
const classes:Array<ClassType> = [
    {
    name: "Weight Training Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium non eos quis ipsa consectetur, dolor quisquam commodi facilis, numquam quos, aliquid odit facere eius sunt ea mollitia temporibus? Pariatur, culpa.",
    image: imageall,
    },
    {
    name: "Weight Training Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium non eos quis ipsa consectetur, dolor quisquam commodi facilis, numquam quos, aliquid odit facere eius sunt ea mollitia temporibus? Pariatur, culpa.",
    image: imageall,
    },
    {
    name: "Weight Training Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium non eos quis ipsa consectetur, dolor quisquam commodi facilis, numquam quos, aliquid odit facere eius sunt ea mollitia temporibus? Pariatur, culpa.",
    image: imageall,
    },
    {
    name: "Weight Training Classes",
    image: imageall,
    },
    {
    name: "Weight Training Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium non eos quis ipsa consectetur, dolor quisquam commodi facilis, numquam quos, aliquid odit facere eius sunt ea mollitia temporibus? Pariatur, culpa.",
    image: imageall,
    },
    {
    name: "Weight Training Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium non eos quis ipsa consectetur, dolor quisquam commodi facilis, numquam quos, aliquid odit facere eius sunt ea mollitia temporibus? Pariatur, culpa.",
    image: imageall,
    },
]
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-gray-20 py-40">
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div
            className="mx-auto w-5/6"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 1}}
            variants={{
                hidden: {opacity: 0, x: -50},
                visible: {opacity: 1, x: 0},
            }}
            >
            <div className="md:w-3/5">
                <HText>OurClasses</HText>
                <p className="py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aliquid dolore sequi nulla officiis dicta? Assumenda quibusdam pariatur est iure sequi non earum qui. Quibusdam temporibus tempora commodi assumenda! Corrupti!</p>
            </div>
            </motion.div>
            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                    {classes.map((item: ClassType, index) =>(
                        <Class
                        key={`${item.name}-${index}`}
                        name={item.name}
                        description={item.description}
                        image={item.image}
                        />
                    ))}
                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default OurClasses