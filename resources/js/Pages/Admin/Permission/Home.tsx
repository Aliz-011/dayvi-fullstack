import { Head } from "@inertiajs/react";
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const data: Payment[] = [
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
    },
    {
        id: "839e1e33",
        amount: 100,
        status: "success",
        email: "dini@example.com",
    },
    {
        id: "489e1d42",
        amount: 125,
        status: "processing",
        email: "example@gmail.com",
    },
];

const Home = () => {
    return (
        <AuthenticatedLayout>
            <Head>
                <title>Permissions</title>
                <meta
                    name="dashboard"
                    content="This is the dashboard page of your application."
                />
            </Head>

            <div>
                <DataTable columns={columns} data={data} />
            </div>
        </AuthenticatedLayout>
    );
};

export default Home;
