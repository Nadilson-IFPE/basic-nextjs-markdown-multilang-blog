import React from "react";
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import BlogLayout from '@/components/Layout';
import CookiesProvider from "react-cookie/cjs/CookiesProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <BlogLayout>
        <CookiesProvider>
          <Component {...pageProps} />
        </CookiesProvider>
      </BlogLayout>
    </>
  );
}
