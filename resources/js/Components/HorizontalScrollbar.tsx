import { FormEventHandler, useEffect, useState } from "react";
import { useForm } from "@inertiajs/react";

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
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { useToast } from "@/Components/ui/use-toast";
import { User } from "@/types";

interface AdminData {
    name: {
        first: string;
        last: string;
    };
    picture: {
        thumbnail: string;
    };
}

const HorizontalScrollbar = () => {
    const [admins, setAdmins] = useState<AdminData[]>([]);
    const { data, setData, post, processing, errors, reset, hasErrors } =
        useForm({
            name: "",
            email: "",
            roles: "",
        });
    const { toast } = useToast();

    const onSubmit: FormEventHandler = (e) => {
        e.preventDefault();

        try {
            post(route("dashboard"));
            if (hasErrors) throw new Error(errors.name || errors.email);
            if (data) {
                return toast({
                    title: "Admin Added",
                });
            }
            reset();
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

    return (
        <section className="mt-5">
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
                            <DialogTitle>Edit profile</DialogTitle>
                            <DialogDescription>
                                Make changes to your profile here. Click save
                                when you're done.
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={onSubmit}>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        value={data.name}
                                        autoComplete="name"
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        className="col-span-3"
                                    />
                                    {errors.name && <div>{errors.name}</div>}
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        autoComplete="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        className="col-span-3"
                                    />
                                    {errors.email && <div>{errors.email}</div>}
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="roles">Roles</Label>
                                    <Select
                                        onValueChange={(value) =>
                                            setData("roles", value)
                                        }
                                    >
                                        <SelectTrigger className="col-span-3">
                                            <SelectValue placeholder="Select user Roles" />
                                        </SelectTrigger>
                                        <SelectContent id="roles">
                                            <SelectGroup>
                                                <SelectLabel>Roles</SelectLabel>
                                                <SelectItem value="1">
                                                    Super Admin
                                                </SelectItem>
                                                <SelectItem value="2">
                                                    Admin
                                                </SelectItem>
                                                <SelectItem value="3">
                                                    Mahasiswa
                                                </SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <Button type="submit" disabled={processing}>
                                    Save changes
                                </Button>
                            </div>
                        </form>
                    </DialogContent>
                </Dialog>

                {admins.map((item, i) => (
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
                ))}
            </div>
        </section>
    );
};

export default HorizontalScrollbar;
