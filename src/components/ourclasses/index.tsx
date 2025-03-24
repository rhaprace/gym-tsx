import image1 from "@/assets/image1.jpg"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.jpg";
import image4 from "@/assets/image4.jpg"
import image5 from "@/assets/image5.jpg"
import image6 from "@/assets/image6.jpg"
import { SelectedPage,ClassType } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";
const classes:Array<ClassType> = [
    {
        name: "AI-Driven Weight Loss Workouts",
        description: "Achieve your weight loss goals with personalized workout plans powered by AI. These workouts are designed to maximize fat burning, improve cardiovascular health, and build lean muscle. Track your progress and adjust intensity with every session to stay on the right path toward your weight loss targets.",
        image: image5,
    },
    {
        name: "Custom Meal Plans for Weight Loss",
        description: "Our AI-based meal plans are tailored to your body’s needs to ensure healthy, sustainable weight loss. Receive personalized nutrition guidance based on your activity level, preferences, and goals, with delicious and balanced meals that help fuel your fitness journey.",
        image: image2,
    },
    {
        name: "Weight Gain Workouts",
        description: "Build muscle and gain weight in a healthy, controlled manner with workouts specifically designed to target muscle growth. These personalized exercise routines, powered by AI, focus on strength training and progressive overload to help you increase muscle mass while keeping your workouts varied and exciting.",
        image: image1,
    },
    {
        name: "Nutritional Tracking & Adjustments",
        description: "Track your calories and macronutrients effortlessly with our AI-powered nutritional tracker. Get automatic adjustments to your meal plans based on your progress, ensuring that your diet always matches your fitness goals—whether you're looking to lose or gain weight.",
        image: image3,
    },
    {
        name: "Fat Loss Conditioning",
        description: "Boost your fat-burning potential with high-intensity workouts designed to keep your metabolism elevated. These AI-driven conditioning routines combine strength training, cardio, and functional movements to optimize fat loss while building endurance and strength.",
        image: image6,
    },
    {
        name: "AI-Personalized Weight Maintenance Plan",
        description: "Maintain your optimal weight with an AI-powered workout and meal plan tailored to your specific needs. Whether you're in the maintenance phase after weight loss or just looking to stay healthy, our personalized approach ensures that your diet and exercise routines are balanced for long-term success.",
        image: image4,
    },
]
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-white py-40">
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
                <p className="py-5">At our fitness center, we offer a wide range of classes designed to meet every fitness level and goal. Whether you're looking to build strength, improve flexibility, or boost cardiovascular health, we have something for everyone. Our experienced instructors create a motivating and supportive environment, ensuring that each class is both challenging and enjoyable. Join us and experience the difference in a class that fits your needs, from high-energy workouts to calming yoga sessions. Every step you take with us brings you closer to a healthier, stronger version of yourself!</p>
            </div>
            </motion.div>
            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap ">
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