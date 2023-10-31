import ImageGallery from "react-image-gallery";
import React from "react";

const IMAGE_COUNT = 3;

export default function HeroGallery() {
    const images = React.useMemo(() => {
        const images = [];
        for (let i = 1; i <= IMAGE_COUNT; i++) {
            images.push({
                original: `/images/HeroGallery/${i}.jpg`,
                originalHeight: 400
            })
        }
        return images;
    }, []);

    return (
        <div
            style={{
                backgroundColor: "black"
            }}
        >
            <ImageGallery
                items={images}
                showThumbnails={false}
                showFullscreenButton={false}
                showPlayButton={false}
                autoPlay={true}
            />
        </div>
    )
}