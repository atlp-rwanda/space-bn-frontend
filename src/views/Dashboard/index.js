import React from 'react';
import Footer from '../../components/Footer';
import AuthHeader from '../../components/Header/authHeader';
import RequestWrapper from '../../components/Request';


const Dashboard = () => {
    return ( 
        <>
            <AuthHeader />
                <RequestWrapper />
            <Footer />
        </>
    );
}

export default Dashboard;