import React from 'react';
import DashboardLayout from '../../components/DashboardLayout/DashboardLayout';
import Table from '../../components/Request/Table';
import Tabs from '../../components/Tab/Tabs';

const RequestApproval = () =>{
    const [tab, setTab]=React.useState("Pending");
    const style = {
        padding: "5%",
        paddingBottom:0
};

    return(
        <DashboardLayout>
           <div style={style}>
            
                <Tabs setTab={setTab}/>
            </div>
                <Table isOnApproving={true} tab={tab}/>
           
        </DashboardLayout>   
    )
}
export default RequestApproval;