"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const MovingBorder = ({
    children,
    duration = 2000,
    rx,
    ry,
    ...otherProps
}: {
    children: React.ReactNode;
    duration?: number;
    rx?: string;
    ry?: string;
    [key: string]: any;
}) => {
    return (
        <button
            {...otherProps}
            className={cn(
                "relative bg-transparent p-[1px] overflow-hidden",
                otherProps.className
            )}
        >
            <div
                className="absolute inset-0"
                style={{
                    background: `linear-gradient(90deg, var(--gold-light), var(--gold), var(--gold-dark))`,
                }}
            >
                <motion.div
                    className="h-full w-full"
                    style={{
                        background: `linear-gradient(90deg, var(--gold-light), var(--gold), var(--gold-dark))`,
                    }}
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: duration / 1000,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            </div>

            <div
                className={cn(
                    "relative bg-white z-10 flex items-center justify-center w-full h-full text-sm antialiased"
                )}
            >
                {children}
            </div>
        </button>
    );
};

export const BorderButton = MovingBorder;
