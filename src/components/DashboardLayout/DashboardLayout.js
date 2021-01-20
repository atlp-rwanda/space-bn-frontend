import React,{useState} from 'react';
import './DashboardLayout.css';
import Sidebar from '../Sidebar/Sidebar';
import AuthHeader from '../../components/Header/authHeader';
import Footer from '../../components/Footer/index'


const DashboardLayout = ({children}) => {
  
  const [isSideBarOpen,setIsSideBarOpen] = useState(false)

  const handleOpen = () => setIsSideBarOpen(open => !open)

    return (
        <div className="containerFluid">
          <AuthHeader handleOpen={handleOpen} onDashboard={true}/>
          <div className="contentContainer">

             <div className="sidebarContainer ">
             <Sidebar data-testid="sidebar" isOpen={isSideBarOpen} handleOpen={handleOpen}/>
             </div>
            
             
            </div>
              <div className="childContainer">
                {children}
                <Footer/>
              </div>
         </div>
    )
}

export default DashboardLayout;