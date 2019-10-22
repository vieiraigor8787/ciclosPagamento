import React from 'react';
import '../common/template/dependences';

import Header from '../common/template/header';
import Sidebar from '../common/template/sidebar';
import Footer from '../common/template/footer';

export default props => (
    <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="content-wrapper">
            <h1>content</h1>
        </div>
        <Footer />
    </div>
)