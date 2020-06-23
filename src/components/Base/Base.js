import React, { Fragment } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Base.css';

const Base = ({ children }) => {
    return (
        <Fragment>
            <Header />
            {children}
            <Footer />
        </Fragment>
    )
}

export default Base;