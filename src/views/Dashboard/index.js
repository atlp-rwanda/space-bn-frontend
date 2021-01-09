import React from 'react';
import RequestWrapper from '../../components/Request';
import DashboardLayout from '../../components/DashboardLayout/DashboardLayout'


const Dashboard = () => {
    return ( 
        <DashboardLayout>
        <>
           
                <RequestWrapper />

        </>
        </DashboardLayout>
     );
}

export default Dashboard;