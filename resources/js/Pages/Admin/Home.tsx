import { Head } from "@inertiajs/react";
import { PersonIcon, RocketIcon } from "@radix-ui/react-icons";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import HorizontalScrollbar from "@/Components/HorizontalScrollbar";
import StatusCard from "@/Components/StatusCard";

import { PageProps, User } from "@/types";

const Home = ({
    auth,
    users,
    roles,
    permissions,
}: {
    auth: PageProps;
    users: User[];
    roles: [];
    permissions: [];
}) => {
    return (
        <AuthenticatedLayout>
            <Head>
                <title>Dashboard</title>
                <meta
                    name="dashboard"
                    content="This is the dashboard page of your application."
                />
            </Head>

            <section className="grid gap-4 md:grid-cols-2 px-4 lg:px-0">
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
            <HorizontalScrollbar
                users={users}
                roles={roles}
                permissions={permissions}
            />
        </AuthenticatedLayout>
    );
};

export default Home;
