import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PageProps, User } from "@/types";
import { Head } from "@inertiajs/react";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const Home = ({
    auth,
    users,
    roles,
    permissions,
}: {
    auth: PageProps;
    users: [];
    roles: [];
    permissions: [];
}) => {
    return (
        <Authenticated>
            <Head>
                <title>Users</title>
                <meta
                    name="users"
                    content="This is the users page of your application."
                />
            </Head>

            <div>
                <DataTable columns={columns} data={users} />
            </div>
        </Authenticated>
    );
};

export default Home;
