import React from 'react';
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
            <script
src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
crossorigin="anonymous"></script>
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
