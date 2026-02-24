import React from 'react';

export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full min-h-screen flex justify-center p-4 sm:p-8">
            <main className="w-full max-w-[1600px] bg-[#f8f8f8] dotted-bg rounded-xl shadow-sm overflow-hidden border border-gray-200">
                <div className="w-full h-full p-6 md:p-12 lg:p-16 flex flex-col gap-y-24">
                    {children}
                </div>
            </main>
        </div>
    );
}
