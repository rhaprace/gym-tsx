import { SelectedPage } from "@/shared/types"
import useMediaQueries from "@/hooks/useMediaQueries"
import ActionButton from "@/shared/ActionButton"
import Fitness from "@/assets/Fitness.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import Sponsor3 from '@/assets/sponsor3.png'
import Sponsor2 from "@/assets/sponsor2.png"
import Sponsor1 from "@/assets/test.png"
import Sponsor4 from "@/assets/sponsor4.png"
import AnchorLink from "react-anchor-link-smooth-scroll";
import {motion} from "framer-motion";
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQueries("(min-width:1060px)")
  return (
    <section id="home" className="gap-16 bg-[#D9D9D9] py-10 md:h-full md:pb-0">
        <motion.div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
            <div className="z-10 mt-32 md:basis-3/5">
                <motion.div className="md:-mt-20"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 1}}
                variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: {opacity: 1, x: 0},
                }}
                >
                    <div className="relative">
                        <img alt="home-page-text" src={Fitness} className="h-full w-5/6"/>
                    </div>
                    <p className="mt-8 text-md font-semibold">
                        Atletech is an innovative AI-powered fitness platform that tailors workout plans based on your body data and performance. By leveraging advanced algorithms and machine learning, we help you achieve optimal fitness goals more efficiently.
                    </p>
                </motion.div>
                <motion.div className="mt-8 flex items-center gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{delay: 0.5, duration: 1}}
                variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: {opacity: 1, x: 0},
                }}
                >
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Get Started
                    </ActionButton>
                    <AnchorLink className="text-sm font-bold text-primary-400 underline hover:text-primary-300" onClick={() => setSelectedPage(SelectedPage.ContactUs)} href={`#${SelectedPage.ContactUs}`}>
                        <p>Learn More</p>
                    </AnchorLink>
                </motion.div>
            </div>
            <div className="flex basis-3/5 justify-center md:z-10
            md:ml-40 md:mt-16 md:justify-items-end
            ">
                <img alt="home-pageGraphic" src={HomePageGraphic}/>
            </div>
        </motion.div>

        {isAboveMediumScreens &&(
            <div className="h-[150px] w-full bg-secondary-400 py-10">
                <div className="mx-auto w-5/6">
                    <div className="flex w-3/5 items-center justify-between ">
                        <img alt="sponsor" src={Sponsor1} className="h-20 w-20"/>
                        <img alt="sponsor" src={Sponsor2} className="h-20 w-20"/>
                        <img alt="sponsor" src={Sponsor3} className="h-20 w-20"/>
                        <img alt="sponsor" src={Sponsor4} className="h-20 w-20"/>
                    </div>
                </div>
            </div>
        )}
    </section>
  )
}

export default Home