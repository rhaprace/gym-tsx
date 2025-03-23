import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion} from "framer-motion";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import ActionButton from "@/shared/ActionButton";
motion
type Props = {
    setSelectedPage: (value: SelectedPage) => void;

}

const Benefits = ({setSelectedPage}: Props) => {
    const benefits: Array<BenefitType> = [
        {
            icon: <HomeModernIcon className="h-6 w-6"/>,
            title: "Nutrition",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem minus dolores saepe maiores magnam at debitis sit fuga quos rerum assumenda numquam consectetur alias architecto, veritatis nemo mollitia voluptate consequatur."
        },
        {
            icon: <UserGroupIcon className="h-6 w-6"/>,
            title: "Calories",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem minus dolores saepe maiores magnam at debitis sit fuga quos rerum assumenda numquam consectetur alias architecto, veritatis nemo mollitia voluptate consequatur."
        },
        {
            icon: <AcademicCapIcon className="h-6 w-6"/>,
            title: "Exercise",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem minus dolores saepe maiores magnam at debitis sit fuga quos rerum assumenda numquam consectetur alias architecto, veritatis nemo mollitia voluptate consequatur."
        }
    ]

    const container = {
        hidden: {},
        visible: {
            transition: {staggerChildren: 0.5}
        }
    }
  return (
    <section id="benefits"
    className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 1}}
            variants={{
                hidden: {opacity: 0, x: -50},
                visible: {opacity: 1, x: 0},
            }}
            className="md:my-5 md:w-3/5">
                <HText>MORE THAT JUST A GYM.</HText>
                <p className="my-5 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quae nulla velit totam. Exercitationem consectetur at debitis suscipit amet! Perspiciatis ex rerum laboriosam, veritatis explicabo deleniti incidunt quas dolorum. Omnis.
                </p>
            </motion.div>

            <motion.div 
            className="md:flex items-center justify-between gap-8 mt-5"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            variants={container}
            >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit
                    key={benefit.title}
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                    setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>

            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                <img
                className="mx-auto"
                alt="benefits-page-graphic"
                src={HomePageGraphic}
                />

                <div>
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                            <motion.div
                             initial="hidden"
                             whileInView="visible"
                             viewport={{once: true, amount: 0.5}}
                             transition={{duration: 1}}
                             variants={{
                                 hidden: {opacity: 0, x: 50},
                                 visible: {opacity: 1, x: 0},
                             }}
                            >
                                <HText>
                                    MILLION OF HAPPY MEMBERS GETTIN {" "}
                                    <span className="text-red-700">FIT.</span>  
                                </HText>
                            </motion.div>
                        </div>
                    </div>
                    <motion.div
                     initial="hidden"
                     whileInView="visible"
                     viewport={{once: true, amount: 0.5}}
                     transition={{delay: 0.2, duration: 1}}
                     variants={{
                         hidden: {opacity: 0, x: 50},
                         visible: {opacity: 1, x: 0},
                     }}
                    >
                        <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore animi quisquam totam cupiditate, dignissimos illo saepe facere perspiciatis expedita doloribus tempore fugit eos necessitatibus amet eveniet quidem ex neque deserunt!</p>
                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum suscipit totam eos voluptatum reprehenderit similique consequatur, quaerat ipsam, nisi dignissimos exercitationem commodi, perferendis id. Dolor facere nam quo vero error!</p>
                    </motion.div>
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits