interface GalleryImageProps {
    index: number;
}

export default function GalleryImage(props: GalleryImageProps) {
    return (
        <img
            src={`images/Gallery/${props.index + 1}.jpg`}
            alt={"Devil Bots"}
            className={"rounded-5 w-100 appear-scroll"}
            style={{
                objectFit: "cover",
                objectPosition: "center",
                aspectRatio: "1/1",
            }}
        />
    )
}