import React from 'react';
import ProfileInfos from "../../components/ProfileInfos";
import DashboardLayout from '../../components/DashboardLayout/DashboardLayout';

const Profile = () => {
    return ( 
        <DashboardLayout>
        <>
            <div>
                <ProfileInfos />
            </div>
        </>
        </DashboardLayout>
    );
}

export default Profile;