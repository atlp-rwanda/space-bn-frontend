import React from 'react';
import AuthHeader from '../../components/Header/authHeader';
import Footer from '../../components/Footer';
import ProfileInfos from "../../components/ProfileInfos";

const Profile = () => {
    return ( 
        <>
            <AuthHeader />              
            <div>
                <ProfileInfos />
            </div>
            <Footer />
        </>
    );
}

export default Profile;