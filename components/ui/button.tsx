import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    children: React.ReactNode;
}

export function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
    const baseStyles = "px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2";

    const variants = {
        primary: "bg-primary text-white font-bold hover:opacity-95 hover:shadow-[0_4px_20px_rgba(113,0,122,0.3)]",
        secondary: "bg-neutral-800 text-white hover:bg-neutral-700",
        outline: "border border-primary text-primary hover:bg-primary/10",
        ghost: "bg-transparent text-primary hover:bg-primary/10",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
