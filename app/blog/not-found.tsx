'use client';

import EmptyState from "../components/EmptyState";
 
export default function NotFound() {
    return (
        <>
            <div className="bg-blue-100 h-full  -z-10 fixed inset-0"></div>
            <EmptyState
                title="Not Found"
                subtitle="Could not find requested resource"
            />
        </>
    );
}
