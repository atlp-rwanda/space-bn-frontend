import React,{useState} from 'react';
import './DashboardLayout.css';
import DashboardNav from '../DashboardNav/DashboardNav';
import Sidebar from '../Sidebar/Sidebar';

const DashboardLayout = ({children}) => {
  
  const [isSideBarOpen,setIsSideBarOpen] = useState(false)

  const handleOpen = () => setIsSideBarOpen(open => !open)

    return (
        <div className="containerFluid">
          <DashboardNav handleOpen={handleOpen}/>
          <div className="contentContainer">

             <div className="sidebarContainer ">
             <Sidebar data-testid="sidebar" isOpen={isSideBarOpen} handleOpen={handleOpen}/>
             </div>
            
             
            </div>
              <div className="childContainer">
                {children}
              </div>
         </div>
    )
}

export default DashboardLayout;