import { Carousel, Typography, Button } from "@material-tailwind/react";
import { NextPage } from "next";
import Image from "next/image";

interface BannerData {
    title: string;
    img: string;
    description: string;
}

const Banner: NextPage<BannerData> = (banner: BannerData) => {
    const image = `url(${banner.img})`
    return (

        <div className="relative h-full w-full">
        <Image
            src={banner.img}
            alt="image 1"
            width={300}
            height={400}
            className="h-full w-full object-cover"
            quality={100}
            
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
                <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                    {banner.title}
                </Typography>
                <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80"
                >
                    {banner.description}
                </Typography>
                <div className="flex justify-center gap-2">
                    <Button size="lg" color="white">
                        Explore
                    </Button>
                    <Button size="lg" color="white" variant="text">
                        Gallery
                    </Button>
                </div>
            </div>
        </div>
        </div>
      
    )
}

export default Banner;