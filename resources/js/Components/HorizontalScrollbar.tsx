import { FormEventHandler, useEffect, useState } from "react";
import { router } from "@inertiajs/react";

import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "@/Components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import Select from "react-select";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { useToast } from "@/Components/ui/use-toast";
import { User } from "@/types";
import { Avatar, AvatarFallback } from "@/Components/ui/avatar";

interface AdminData {
    name: {
        first: string;
        last: string;
    };
    picture: {
        thumbnail: string;
    };
}

interface RolesInterface {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

const HorizontalScrollbar = ({
    users,
    roles,
    permissions,
}: {
    users: User[];
    roles: RolesInterface[];
    permissions: [];
}) => {
    const [admins, setAdmins] = useState<AdminData[]>([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [selectRole, setSelectRole] = useState<any>(roles[0]);

    const { toast } = useToast();

    const onSubmit: FormEventHandler = (e) => {
        e.preventDefault();

        try {
            router.post("admin", {
                name,
                email,
                roles: [selectRole.name],
            });

            toast({
                title: "Admin Added",
            });
        } catch (error) {
            toast({
                title: "Uh oh! Something went wrong.",
                description: error as string,
            });
        }
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    "https://randomuser.me/api/?results=8"
                );
                const json = await response.json();
                const results = json.results;
                setAdmins(results);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    function getFirstLetters(input: string) {
        // Split the input sentence into words
        const words = input.split(" ");

        // Initialize an array to store the first letters
        const firstLetters = [];

        // Iterate through the words, taking the first letter of each
        for (let i = 0; i < Math.min(2, words.length); i++) {
            const word = words[i];
            if (word.length > 0) {
                firstLetters.push(word[0]);
            }
        }

        // Join the first letters together and return the result
        const result = firstLetters.join("");
        return result;
    }

    function getFirstTwoWords(input: string) {
        // Split the input sentence into words
        const words = input.split(" ");

        // Take the first two words and join them together
        const result = words.slice(0, 2).join(" ");

        return result;
    }

    return (
        <section className="mt-5 px-4 lg:px-0">
            <h3 className="font-medium mt-5 mb-3">Admins</h3>
            <div className="flex w-full items-start gap-4 overflow-x-auto border rounded-lg bg-background p-5 scrollbar-thin scrollbar-thumb-input scrollbar-track-rounded-full scrollbar-thumb-rounded-full">
                <Dialog>
                    {/* trigger */}
                    <DialogTrigger asChild>
                        <div className="flex shrink-0 flex-col items-center gap-2">
                            <Button
                                variant="outline"
                                size={"icon"}
                                className="flex items-center justify-center rounded-full bg-muted"
                            >
                                <PlusIcon />
                            </Button>
                            <div>
                                <p className="text-sm font-semibold">Add</p>
                            </div>
                        </div>
                    </DialogTrigger>

                    {/* content */}
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Create New User</DialogTitle>
                            <DialogDescription>
                                Add a new user to the system.
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={onSubmit}>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        autoComplete="name"
                                        placeholder="Dayvi Eluzai"
                                        className="col-span-3"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        autoComplete="email"
                                        placeholder="eluzai@example.com"
                                        className="col-span-3"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </div>

                                {/* roles */}
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="roles">Roles</Label>
                                    <Select
                                        name="roles"
                                        options={roles}
                                        className="w-[10rem]"
                                        value={selectRole}
                                        onChange={setSelectRole}
                                        getOptionLabel={(option) => option.name}
                                        getOptionValue={(option) => option} // It should be unique value in the options. E.g. ID
                                    />
                                </div>

                                {/* TODO: permissions */}

                                <div className="inline-flex justify-end items-center">
                                    <Button type="submit">Create User</Button>
                                </div>
                            </div>
                        </form>
                    </DialogContent>
                </Dialog>

                {/* {admins.map((item, i) => (
                    <div
                        key={i}
                        className="flex shrink-0 flex-col items-center gap-2"
                    >
                        <img
                            src={item.picture.thumbnail}
                            alt={item.name.first}
                            className="h-10 w-10 rounded-full object-cover"
                        />
                        <div className="text-center">
                            <p className="text-sm">{`${item.name.first} ${item.name.last}`}</p>
                        </div>
                    </div>
                ))} */}

                {users.length > 0 ? (
                    users.map((item, i) => (
                        <div
                            className="flex shrink-0 flex-col items-center gap-2"
                            key={i}
                        >
                            <Avatar className="h-10 w-10">
                                <AvatarFallback>
                                    {getFirstLetters(item.name)}
                                </AvatarFallback>
                            </Avatar>
                            <div className="text-center">
                                <p className="text-sm">
                                    {getFirstTwoWords(item.name)}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>
                        <p className="text-sm">No Admin</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default HorizontalScrollbar;
