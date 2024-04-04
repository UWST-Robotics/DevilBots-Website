export interface YoutubeEmbedProps {
    url: string;
    title: string;
    width?: number;
    height?: number;
}

export default function YoutubeEmbed(props: YoutubeEmbedProps) {
    return (
        <div
            style={{
                position: "relative",
                paddingBottom: "56.25%",
                paddingTop: 25,
                height: 0,
            }}
        >
            <iframe
                width={props.width || 560}
                height={props.height || 315}
                src={props.url}
                title={props.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                }}
            />
        </div>
    )
}