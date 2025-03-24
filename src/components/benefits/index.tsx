import { BenefitType, SelectedPage } from "@/shared/types"
import { motion} from "framer-motion";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import Nutrition from "@/assets/nutrition.jpg"
import Calories from "@/assets/calories.jpg"
import Exercise from "@/assets/exercise.jpg"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import ActionButton from "@/shared/ActionButton";
motion
type Props = {
    setSelectedPage: (value: SelectedPage) => void;

}

const Benefits = ({setSelectedPage}: Props) => {
    const benefits: Array<BenefitType> = [
    {
        image: Nutrition,
        title: "Nutrition",
        description: "Our AI-driven meal plans are personalized to meet your weight loss or weight gain goals. Get tailored nutrition advice based on your activity level, preferences, and dietary needs, ensuring a healthy balance for optimal progress."
    },
    {
        image: Calories,
        title: "Calories",
        description: "Track your calorie intake and expenditure with our easy-to-use tracking system. Our AI adjusts your meal and exercise plans to maintain the right caloric balance, ensuring you stay on target for your fitness goals."
    },
    {
        image: Exercise,
        title: "Exercise",
        description: "AI-powered exercise routines tailored to your goals—whether it's weight loss or muscle gain. From cardio to strength training, our personalized workouts adjust as you progress, keeping your body challenged and motivated."
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
                <HText>MORE THAN JUST A GYM.</HText>
                <p className="my-5 text-md">
                    Our AI analyzes your goals, current fitness level, and preferences to generate a workout plan just for you!

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
                    image={benefit.image}
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
                        <div>
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
                       <p className="my-5">At our core, we are dedicated to helping you achieve your fitness goals and live a healthier, more active life. Whether you're just getting started or are a seasoned athlete, our community of millions is here to support and inspire you every step of the way. With a range of resources, expert advice, and motivation, we ensure that fitness becomes a sustainable part of your lifestyle.</p>
                       <p className="mb-5">Join us today and be part of a growing movement toward better health and well-being. Together, we can push boundaries, break personal records, and celebrate every milestone on the journey to becoming the best version of yourself!</p>
                    </motion.div>
                    <div className="relative mt-16">
                        <div>
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