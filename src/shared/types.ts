export enum SelectedPage {
    Home ="home",
    Benefits = "benefits",
    OurClasses = "ourclasses",
    ContactUs = "contactus",
    SignUp = "signup",
    LogIn = "login",
    Weight = "weight",
}

export interface BenefitType{
    image: string;
    title: string;
    description: string;
}

export interface ClassType{
    name: string;
    description?: string;
    image: string;
}