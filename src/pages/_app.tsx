import React from "react";
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import BlogLayout from '@/components/Layout';
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <BlogLayout>
        <Component {...pageProps} />
      </BlogLayout>
    </>
  );
}
