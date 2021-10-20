import React from 'react';
import classNames from 'classnames';
import Head from 'next/head'
import Navbar from '../../components/Navbar';

export default function BasicLayout(props) {
    const { children, className } = props;

    return (
        <>
        <Head>
            <title>React Estate</title>
            <meta name="description" content="React estate app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <Navbar/>

            <div className="container">
            <h1>BasicLayout</h1>
                {children}
            </div>
        </main>
        <footer>
        </footer>
        </>
    )
}
