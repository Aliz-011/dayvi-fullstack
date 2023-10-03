import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <>
            <div className="flex min-h-full h-screen">
                <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
                    <div>
                        <h1 className="text-white font-bold text-4xl font-sans">
                            Universitas Torang Bisa
                        </h1>
                        <p className="text-white mt-1">
                            Merupakan salah satu perguruan tinggi terbesar di
                            Indonesia.
                        </p>
                    </div>
                    <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                    <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                    <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                    <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                </div>
                <div className="flex flex-col md:w-1/2 w-full justify-center gap-y-6 py-10 items-center bg-white">
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Create an account
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Enter your email below to create your account
                        </p>
                    </div>
                    {children}
                    <p className="px-8 text-center text-sm text-muted-foreground">
                        By clicking continue, you agree <br /> to our{" "}
                        <span className="underline underline-offset-4 hover:text-primary">
                            Terms of Service
                        </span>{" "}
                        and{" "}
                        <span className="underline underline-offset-4 hover:text-primary">
                            Privacy Policy
                        </span>
                        .
                    </p>
                </div>
            </div>
        </>
    );
}
