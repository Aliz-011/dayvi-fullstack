import { useState } from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import { router, usePage } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";

const includedFeatures = [
    "Private forum access",
    "Member resources",
    "Entry to annual conference",
    "Official member t-shirt",
];

const Administration = () => {
    const { auth } = usePage().props;
    const user = auth.user;
    const snapToken = usePage().props.flash.snapToken;

    const [loading, setLoading] = useState(false);

    const onClick = () => {
        setLoading(true);

        router.post("payments");

        if (snapToken !== null) {
            window.snap.pay(snapToken);
        } else {
            // If the token is not available, you can choose to wait for it to be available using a different approach
            // Here, we use a timeout to call onSubmit after 100 milliseconds, you can adjust the delay as needed
            setTimeout(onClick, 100);
        }

        setLoading(false);
    };

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Bergabung sekarang
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Untuk bisa menggunakan fitur yang ada di website ini,
                        Anda harus terdaftar. Silahkan isi form d ibawah untuk
                        membuat akun baru ataupun login jika sudah punya akun.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                            Masukan Data Dirimu
                        </h3>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                            Masukan data pribadimu dengan benar dan lengkap agar
                            kami dapat mengetahui informasi lebih lanjut.
                        </p>
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                                What’s included
                            </h4>
                            <div className="h-px flex-auto bg-gray-100" />
                        </div>
                        <ul
                            role="list"
                            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                        >
                            {includedFeatures.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <CheckIcon
                                        className="h-6 w-5 flex-none text-indigo-600"
                                        aria-hidden="true"
                                    />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                                <p className="text-base font-semibold text-gray-600">
                                    Pay once, own it forever
                                </p>
                                <p className="mt-6 flex items-center justify-center gap-3">
                                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                                        $259
                                    </span>
                                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                                        USD
                                    </span>
                                </p>
                                {user.roles.includes("user") && (
                                    <Button
                                        className="mt-8 block w-full"
                                        onClick={onClick}
                                    >
                                        Get access
                                    </Button>
                                )}
                                <p className="mt-6 text-xs leading-5 text-gray-600">
                                    Invoices and receipts available for easy
                                    company reimbursement
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Administration;
