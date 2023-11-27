import { Container } from '@material-ui/core';
import React from 'react';
import FooterTop from './FooterTop/FooterTop';
import './Footer.css';

const Footer = () => {
    return (
        <div className="full-bg">
            <Container style={{ margin: '0 auto', padding: '5rem' }}>
                <FooterTop />
                <div style={{ textAlign: 'center', marginTop: '5rem' }}>
                    Copyright {new Date().getFullYear()}.  All Rights Reserved.
            </div>
            </Container>
        </div>
    );
};

export default Footer;