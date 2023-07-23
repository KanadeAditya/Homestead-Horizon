'use client';

import { useEffect } from "react";

import EmptyState from "@/app/components/EmptyState";

interface ErrorStateProps {
    error: Error
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <>
            <div className="bg-blue-100 h-full  -z-10 fixed inset-0"></div>
            <EmptyState
                title="Uh Oh"
                subtitle="Something went wrong!"
            />
        </>
    );
}

export default ErrorState;
