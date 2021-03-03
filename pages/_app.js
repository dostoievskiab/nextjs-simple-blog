import React from 'react';
import Router from 'next/router';
import layoutStyle from '../styles/Layout.module.css'
import Alert from '../components/Alert';

export default function simpleBlog({ Component, pageProps }) {
    return (
        <div className={layoutStyle.container}>
                <div className={layoutStyle.content}>
                    <Component {...pageProps} />
                </div>
        </div>
    )
}