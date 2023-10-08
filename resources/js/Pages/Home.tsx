import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Sponsor from "@/Components/Sponsor";
import { Lecturer } from "@/Components/Lecturer";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";
import Administration from "@/Components/Administration";

export default function Home({ auth }: PageProps) {
    return (
        <>
            <Head title="Home" />
            {/* navbar */}
            <Navbar />

            {/* hero */}
            <Hero />

            {/* about */}
            <About />

            {/* administration */}
            <Administration />

            {/* sponsors */}
            <Sponsor />

            {/* lecturers */}
            <Lecturer />

            {/* contact */}
            <Contact />

            {/* footer */}
            <Footer />
        </>
    );
}
