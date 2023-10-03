import { Head } from "@inertiajs/react";
import { PersonIcon, RocketIcon } from "@radix-ui/react-icons";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import HorizontalScrollbar from "@/Components/HorizontalScrollbar";
import StatusCard from "@/Components/StatusCard";

import { PageProps, User } from "@/types";

const Home = ({ auth, users }: { auth: PageProps; users: User[] }) => {
    console.log(users);

    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />

            <section className="grid gap-4 md:grid-cols-2">
                <StatusCard
                    title="Total Alumni"
                    data={20000}
                    subtitle="10% more than last year"
                    icon={<RocketIcon />}
                />
                <StatusCard
                    title="New Students"
                    data={2000}
                    subtitle="40% more than last year"
                    icon={<PersonIcon />}
                />
            </section>
            <HorizontalScrollbar />
        </AuthenticatedLayout>
    );
};

export default Home;
