"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const beams = [
        {
            initialX: 10,
            translateX: 10,
            duration: 7,
            repeatDelay: 3,
            delay: 2,
            left: "10%",
        },
        {
            initialX: 600,
            translateX: 600,
            duration: 3,
            repeatDelay: 3,
            delay: 4,
            left: "25%",
        },
        {
            initialX: 100,
            translateX: 100,
            duration: 7,
            repeatDelay: 7,
            height: "1.5rem",
            left: "40%",
        },
        {
            initialX: 400,
            translateX: 400,
            duration: 5,
            repeatDelay: 14,
            delay: 4,
            left: "55%",
        },
        {
            initialX: 800,
            translateX: 800,
            duration: 11,
            repeatDelay: 2,
            height: "5rem",
            left: "70%",
        },
        {
            initialX: 1000,
            translateX: 1000,
            duration: 4,
            repeatDelay: 2,
            height: "3rem",
            left: "85%",
        },
        {
            initialX: 1200,
            translateX: 1200,
            duration: 6,
            repeatDelay: 4,
            delay: 2,
            height: "1.5rem",
            left: "95%",
        },
    ];

    if (!mounted) {
        return null;
    }

    return (
        <div
            className={className}
            style={{
                position: "absolute",
                inset: 0,
                height: "100%",
                width: "100%",
                overflow: "hidden",
                pointerEvents: "none",
            }}
        >
            {beams.map((beam, idx) => (
                <motion.div
                    key={`beam-${idx}`}
                    initial={{
                        translateY: beam.initialX,
                        translateX: 0,
                    }}
                    animate={{
                        translateY: beam.translateX,
                        translateX: 0,
                    }}
                    transition={{
                        duration: beam.duration || 8,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear",
                        delay: beam.delay || 0,
                        repeatDelay: beam.repeatDelay || 0,
                    }}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: beam.left,
                        height: beam.height || "0.5rem",
                        width: "1px",
                        borderRadius: "9999px",
                        background: "linear-gradient(to top, rgba(199, 160, 70, 0) 0%, rgba(199, 160, 70, 0.4) 50%, rgba(199, 160, 70, 0) 100%)",
                    }}
                />
            ))}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, white, rgba(255, 255, 255, 0.8), transparent)",
                    pointerEvents: "none",
                }}
            />
        </div>
    );
};
