export default function LinksSection() {
    return (
        <section className="tiles-container">

            <a
                className="tile"
                href="https://www.linkedin.com/in/amanda-helmer-4a47b6269/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="icon">
                    {/* LinkedIn SVG */}
                </div>
                <p>LinkedIn</p>
                <div className="tile-share-button" aria-label="Share LinkedIn">
                    {/* Share SVG */}
                </div>
            </a>

            <a
                className="tile"
                href="https://github.com/helmera83"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="icon">
                    {/* GitHub SVG */}
                </div>
                <p>GitHub</p>
                <div className="tile-share-button" aria-label="Share GitHub">
                    {/* Share SVG */}
                </div>
            </a>

            <a
                className="tile"
                href="https://next-res-2-yfvn.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="icon">
                    {/* Portfolio SVG */}
                </div>
                <p>Portfolio</p>
                <div className="tile-share-button" aria-label="Share Portfolio">
                    {/* Share SVG */}
                </div>
            </a>

        </section>
    );
}
