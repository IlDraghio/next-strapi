import Link from "next/link";
import { StrapiImage } from "./StrapiImage";

interface ImageProps {
    id: number;
    url: string;
    alternativeText: string;
}

interface LinkProps {
    id: number;
    url: string;
    text: string;
}

interface HeroSectionProps {
    data:{
        id: number;
        __component: string;
        heading: string;
        description: string;
        image: ImageProps;
        link: LinkProps;
    }
}

export function HeroSection({ data }: Readonly<HeroSectionProps>){
    const {heading, description, image, link} = data
    return(
        <div>
            <h1>{heading}</h1>
            <h2>{description}</h2>
            <StrapiImage 
                alt="Background"
                height={500}
                width={900}
                src={image.url}
            />
            <Link href={link.url}>{link.text}</Link>
        </div>
    )
}