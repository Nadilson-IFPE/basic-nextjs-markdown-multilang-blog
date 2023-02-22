import { Inter } from "@next/font/google";
import React, { PropsWithChildren } from "react";
import CookieBanner from "./CookieBanner";
import Footer from "./Footer";
import Head from "./Head";
import NavigationBar from "./NavigationBar";

/* interface LayoutProps {
    children: React.ReactNode | undefined
} */

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

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
                        <main className="pt-40 pb-24 text-center">
                            <div className="w-full max-w-5xl px-2 mx-auto md:px-4">
                                {children}
                            </div>
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