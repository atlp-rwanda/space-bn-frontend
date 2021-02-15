import React from 'react';
import ProfileInfos from "../../components/profileDetails";
import DashboardLayout from '../../components/DashboardLayout/DashboardLayout';

const profileDetailsView = () => {
    return ( 
        <DashboardLayout>
        <>
            <div>
                <ProfileInfos/>
            </div>
        </>
        </DashboardLayout>
    );
}

export default profileDetailsView;