import { Inter } from "@next/font/google";
import React, { PropsWithChildren } from "react";
import CookieBanner from "./CookieBanner";
import Footer from "./Footer";
import Head from "./Head";
import NavigationBar from "./NavigationBar";

/* interface LayoutProps {
    children: React.ReactNode | undefined
} */

const inter = Inter({ subsets: ['latin'] });

const BlogLayout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Head />
            <div className="mx-auto flex max-w-full flex-col antialiased">
                <NavigationBar />
            </div>
            <div className={inter.className}>
                <div className="min-w-screen bg-[#303049] min-h-screen">
                    <div className="mx-auto flex max-w-5xl flex-col antialiased">
                        <main className="pt-52 pb-36 sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl text-center">
                            {children}
                        </main>
                    </div>
                </div>
                <CookieBanner />
                <Footer />
            </div>
        </>
    );
};

export default BlogLayout;