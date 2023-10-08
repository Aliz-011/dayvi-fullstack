import { Link } from "@inertiajs/react";

const Hero = () => {
    return (
        <div className="py-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-4">
                <div className="flex flex-col gap-y-6">
                    <span className="text-xs font-semibold tracking-widest uppercase">
                        universitas torang bisa
                    </span>
                    <h1 className="font-bold text-2xl md:text-5xl lg:text-6xl leading-8">
                        Mencapai tujuan yang lebih baik.
                    </h1>
                    <p className="font-extralight">
                        Kami adalah sebuah universitas yang bergerak dibidang
                        teknologi, pengembangan software dan juga membentuk
                        perusahaan IT terkemuka di Indonesia.
                    </p>

                    <div v-if="!authStore.isLoggedin">
                        <Link
                            href="/"
                            className="text-sm shadow font-medium bg-indigo-500 rounded px-5 py-2 text-white"
                        >
                            Register
                        </Link>
                    </div>
                </div>

                <div className="relative hidden md:block mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
                    <div className="absolute top-20 -left-4 w-72 h-72 bg-indigo-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob -z-10 animation-delay-2000"></div>
                    <div className="absolute bottom-4 right-10 w-72 h-72 bg-rose-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob -z-10 animation-delay-4000"></div>
                    <div className="absolute top-12 -right-4 w-72 h-72 bg-violet-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob -z-10"></div>
                    <div className="absolute bottom-8 left-4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob -z-10 animation-delay-4000"></div>
                    <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                    <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                    <div className="rounded-[2rem] relative overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                        <img
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png"
                            className="dark:hidden w-[272px] h-[572px]"
                            alt=""
                        />
                        <img
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png"
                            className="hidden dark:block w-[272px] h-[572px]"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
