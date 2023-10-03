import { PropsWithChildren } from "react";

import { Toaster } from "@/Components/ui/toaster";
import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";

export default function Authenticated({ children }: PropsWithChildren) {
    return (
        <>
            <Toaster />
            <Navbar />
            <div className="max-w-screen-xl mx-auto lg:grid lg:grid-cols-12 lg:gap-10">
                <Sidebar />
                <main className="py-5 col-span-full lg:col-span-9">
                    <div>{children}</div>
                </main>
            </div>
        </>
    );
}
