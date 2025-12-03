import Image from "next/image";
import {getStrapiMedia} from "../lib/utils";

export interface StrapiImageProps {
    url: string;
    alt: string;
    height?: number;
    width?: number;
    className?: string;
}

export function StrapiImage({
    url,
    alt,
    height,
    width,
    className,
}: Readonly<StrapiImageProps>) {
    if (!url) return null;
    const imageUrl = getStrapiMedia(url);
    const imageFallback = `https://placehold.co/${width}x${height}`;
    return (
        <Image
            src={imageUrl ?? imageFallback}
            alt={alt}
            height={height}
            width={width}
            className={className}
            unoptimized
        />
    );
}