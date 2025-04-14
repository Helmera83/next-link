export default function LinksSection() {
    const url = "https://www.linkedin.com/in/amanda-helmer-4a47b6269/";

    return (
        <section className="tiles-container">
            <a
                className="tile"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="icon">
                    {/* Inline SVGs */}
                </div>
                <p>LinkedIn</p>
                <div className="tile-share-button" aria-label="Share LinkedIn">
                    {/* Inline Share SVG */}
                </div>
            </a>
        </section>
    );
}
