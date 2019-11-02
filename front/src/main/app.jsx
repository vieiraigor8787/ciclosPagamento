import React from 'react';
import { HashRouter } from 'react-router-dom'

import Header from '../common/template/header';
import Sidebar from '../common/template/sidebar';
import Footer from '../common/template/footer';
import Messages from '../common/msg/msgs';

export default props => (
    <div className="wrapper">
        <Header />
        <Sidebar />
        <HashRouter />
        <Footer />
        <Messages />
    </div>
)