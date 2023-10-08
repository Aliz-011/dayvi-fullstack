import { Fragment } from "react";
import { PersonIcon, GearIcon, LayersIcon } from "@radix-ui/react-icons";

import { Link } from "@inertiajs/react";

const Sidebar = () => {
    const admin = [
        { heading: "Main" },

        {
            text: "Dashboard",
            path: "/admin",
            icon: <LayersIcon />,
        },

        {
            text: "Users",
            path: "/users",
            icon: <PersonIcon />,
        },

        { heading: "Settings" },

        {
            text: "Profile",
            path: "/profile",
            icon: <GearIcon />,
        },
    ];

    return (
        <aside className="sticky top-16 z-40 w-64 h-[calc(100vh-4rem)] py-5 transition-transform -translate-x-full sm:translate-x-0 hidden lg:block lg:col-span-3">
            <div className="h-full px-5 py-4 overflow-y-auto flex w-full flex-col rounded-md border bg-card pb-5 scrollbar-thin scrollbar-thumb-input">
                {admin.map((item, i) => (
                    <Fragment key={i}>
                        {item.heading ? (
                            <h3 className="mb-3 mt-5 text-lg font-semibold first:mt-3">
                                {item.heading}
                            </h3>
                        ) : (
                            <div className="flex flex-col">
                                <Link
                                    href={item.path}
                                    className="mb-2 h-9 justify-start gap-3 px-3 inline-flex items-center"
                                >
                                    {item.icon}
                                    <span>{item.text}</span>
                                </Link>
                            </div>
                        )}
                    </Fragment>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;
