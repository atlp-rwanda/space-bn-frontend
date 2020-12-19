import React from 'react';
import Footer from '../../components/Footer';
import AuthHeader from '../../components/Header/authHeader';

const Dashboard = () => {
    return ( 
        <>
            <AuthHeader />
            <div style={{textAlign: 'center', marginTop: '20vh', height: '100vh'}}>Welcome to Your Barefoot account</div>
            <Footer />
        </>
     );
}
 
export default Dashboard;