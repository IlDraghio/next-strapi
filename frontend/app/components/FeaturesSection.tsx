import { StrapiImageProps } from "./StrapiImage";
import { StrapiImage } from "./StrapiImage"; 

interface FeatureProps{
    id: string;
    title: string;
    descritpion: string;
    icon: StrapiImageProps;
}

interface FeatureSectionProps{
    id: string;
    __component: string;
    title: string;
    description: string;
    Features: FeatureProps[];
}

export function FeatureSection({
    data,
    }:{
        readonly data: FeatureSectionProps;
    }) { 
        const { Features } = data;
        console.log(Features.map((feature) => (feature.title)))
                  
    return(
    <div>
        <section>
            <div>
                {Features.map((feature) => (
                    <div
                    key={feature.id}>
                        <StrapiImage 
                        url={feature.icon.url}
                        alt="miao"
                        height={300}
                         width={500}
                        />
                    <h2>{feature.title}</h2>
                    <p>{feature.descritpion}</p>
                    </div>

                ))}
            </div>
        </section>
    </div>
    )
} 