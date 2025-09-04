import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const VideoCarousel = ({ videos }: { videos: string[] }) => {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % videos.length);
    const prev = () => setIndex((prev) => (prev - 1 + videos.length) % videos.length);

    // Hàm check xem có phải link YouTube không
    const isYouTube = (url: string) => url.includes("youtube.com/embed/");

    return (
        <div className="relative w-full overflow-hidden rounded-xl shadow-lg border border-yellow-500">
            <AnimatePresence mode="wait">
                {isYouTube(videos[index]) ? (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        className="w-full rounded-xl aspect-video"
                    >
                        <iframe
                            width="100%"
                            height="100%"
                            src={videos[index]}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="w-full h-full rounded-xl"
                        ></iframe>
                    </motion.div>
                ) : (
                    <motion.video
                        key={index}
                        src={videos[index]}
                        controls
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full rounded-xl"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                    />
                )}
            </AnimatePresence>

            {/* Nút điều hướng */}
            <button
                onClick={prev}
                className="absolute top-1/2 left-4 -translate-y-1/2 
                           bg-black/70 text-yellow-400 border-2 border-yellow-400 
                           flex items-center justify-center rounded-full 
                           hover:bg-yellow-500 hover:text-black transition"
                style={{ fontSize: "68px", width: "70px", height: "70px" }}
            >
                ‹
            </button>
            <button
                onClick={next}
                className="absolute top-1/2 right-4 -translate-y-1/2 
                           bg-black/70 text-yellow-400 border-2 border-yellow-400 
                           flex items-center justify-center rounded-full 
                           hover:bg-yellow-500 hover:text-black transition"
                style={{ fontSize: "68px", width: "70px", height: "70px" }}
            >
                ›
            </button>

            {/* Dot indicators */}
            <div className="mt-4 mb-2 flex justify-center gap-3">
                {videos.map((_, i) => (
                    <span
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`cursor-pointer transition rounded-full ${
                            i === index
                                ? "scale-110"
                                : "opacity-60 hover:opacity-90"
                        }`}
                        style={{
                            width: "16px",
                            height: "16px",
                            backgroundColor: "#FFDD57",
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default VideoCarousel;
