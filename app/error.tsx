"use client";

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-transparent px-4">
            <div className="flex flex-col items-center gap-6 text-center max-w-md">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-3xl">!</span>
                </div>
                <h2 className="text-2xl font-bold" style={{ color: 'var(--card-title)' }}>
                    Algo salió mal
                </h2>
                <p className="text-sm" style={{ color: 'var(--card-body)' }}>
                    Ocurrió un error inesperado. Probá recargar la página o volvé a intentar.
                </p>
                <button
                    onClick={reset}
                    className="px-6 py-3 rounded-full bg-primary text-white font-bold text-sm hover:opacity-90 transition-all shadow-md"
                >
                    Intentar de nuevo
                </button>
            </div>
        </div>
    );
}
