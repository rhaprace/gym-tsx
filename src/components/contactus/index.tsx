import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import HText from "@/shared/HText";

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const ContactUs = ({ setSelectedPage }: Props) => {
    const inputStyles = `mb-5 w-full rounded-lg bg-secondary-400 px-5 py-3 placeholder-white text-white`
    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();

    const onSubmit = async (e) => {
        const isValid = await trigger();
        if (!isValid){
            e.preventDefault();
        }
    }

    return (
        <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
            >
                <motion.div
                    className="md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <HText>
                        <span className="text-red-700">Join Now</span> TO GET IN SHAPE
                    </HText>
                    <p className="my-5">
                       We’d love to hear from you! Whether you have a question, need support, or simply want to share your feedback, our team is here to help. You can reach us through any of the following methods
                    </p>
                </motion.div>

                <div className="mt-10 justify-between gap-8 md:flex">
                    <motion.div
                        className="mt-10 basis-3/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <form
                            target="_blank"
                            onSubmit={onSubmit}
                            action="https://formsubmit.co/e8fd48d6f4ba9f5b7a178bc3fdd44948"
                            method="POST"
                        >
                            <input className={inputStyles} type="text"
                                placeholder="Name: "
                                {...register("name", {
                                    required: true,
                                    maxLength: 100,
                                })}
                                required
                            />
                            {errors.name && (
                                <p className="mt-1 text-red-600">
                                    {errors.name.type === "required" && "This field is required."}
                                    {errors.name.type === "maxLength" && "Max Length is 100 character."}
                                </p>
                            )}

                            <input className={inputStyles} type="text"
                                placeholder="Email: "
                                {...register("email", {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9,-]+\.[A-Z]{2,}$/i,
                                })}
                                required
                            />
                            {errors.email && (
                                <p className="mt-1 text-red-600">
                                    {errors.email.type === "required" && "This field is required."}
                                    {errors.email.type === "pattern" && "Invalid Email!"}
                                </p>
                            )}

                            <textarea className={inputStyles}
                                rows={4}
                                cols={50}
                                placeholder="Message: "
                                {...register("message", {
                                    required: true,
                                    maxLength: 2000,
                                })}
                                required
                            />
                            {errors.message && (
                                <p className="mt-1 text-red-600">
                                    {errors.message.type === "required" && "This field is required."}
                                    {errors.message.type === "maxLength" && "Max Length is 2000 character."}
                                </p>
                            )}
                            <button
                                type="submit"
                                className="mt-5 rounded-lg bg-secondary-400 px-20 py-3 transition duration-500 hover:text-white"
                            >
                                SUBMIT
                            </button>
                        </form>
                    </motion.div>
                    <motion.div className="relative mt-16 basis-2/5 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    >
                        <div
                        className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[1]"
                        >
                            <img 
                            className="w-full"
                            alt="contact-us-page-graphic"
                            src={HomePageGraphic}
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}

export default ContactUs;
