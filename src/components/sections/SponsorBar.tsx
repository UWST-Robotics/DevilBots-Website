import Sponsors from "../../types/Sponsors.ts";

export default function SponsorBar() {
    return (
        <div
            style={{
                backgroundColor: "black",
                color: "white",
                width: "100%",
                textAlign: "center",
                padding: 20,
            }}
        >
            <h1 className={"fs-4"}>
                Proudly Sponsored By
            </h1>
            <div
                style={{
                    display: "flex",
                    flex: 1,
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                {Sponsors.map((sponsor, index) => (
                    <a href={sponsor.href} key={index} className={"sponsor-link"}>
                        <img
                            src={`/images/Sponsors/${sponsor.id}.png`}
                            className="d-inline-block align-top"
                            alt={sponsor.id}
                            style={{
                                maxWidth: 100,
                                maxHeight: 100,
                                margin: 10,
                            }}
                        />
                    </a>
                ))}
            </div>
            <p className={"mb-0"}>
                See our full list of sponsors <a href={"/sponsors"}>here</a>
            </p>
        </div>
    );
}