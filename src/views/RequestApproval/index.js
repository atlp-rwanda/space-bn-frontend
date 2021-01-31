import React from 'react';
import DashboardLayout from '../../components/DashboardLayout/DashboardLayout';
// import Table_Pending from './rejected';
// import Tabs from '../../components/tab/Tabs';

const RequestApproval = () =>{
    const wrap1 = {
        background:"lightblue",
        with: "600px !important",
        display: "flex",
        justifyContent: "space-around",
        height: "500px"
};
const wrap2 = {
     background: "pink",
    // with: "600px !important", 
    height: "400px",

}
    
    return(
        <DashboardLayout>
           <div style={{width: "500px", background: "red"}}>
                <div style = {wrap2}>
                <div>
                    <h1>REQUESTS APPROVING</h1>
                </div> 
                </div>  
                {/* <Tabs/> */}
                {/* <Table_Pending> */}

           </div>
        </DashboardLayout>   
    )
}

export default RequestApproval;