import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import { ToastContainer } from 'react-toastify';
import Footer from './Footer';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - Ecommerce' : 'Ecommerce'}</title>
        <meta name="description" content="Ecommerce website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer position="bottom-center" limit={1}></ToastContainer>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <Navbar />
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex justify-center items-center h-10 shadow-inner">
          <Footer />
        </footer>
      </div>
    </>
  );
}
