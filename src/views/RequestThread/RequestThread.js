import React, {useEffect} from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import DashboardLayout from '../../components/DashboardLayout/DashboardLayout';
import backSlideIcon from '../../assets/icons/back-slide-icon.png';
import './RequestThread.css';
import accomaodationImage from '../../assets/images/hotel3.png';
import poolIcon from '../../assets/icons/pool-icon.png';
import wifiIcon from '../../assets/icons/wifi-icon.png';
import parkingIcon from '../../assets/icons/parking-icon.png';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
 import avatarImage from '../../assets/images/avatar.jpg';
import avatar2Image from '../../assets/images/avatar2.png';
import imojeIcon from '../../assets/icons/imoje.png';
import sendIcon from '../../assets/icons/send-icon.png';



const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

 const showBottomMessage = async () => {
    let element = await document.getElementById("box");
    element.scrollIntoView();
    element.scrollIntoView(false);
    element.scrollIntoView({block: "end"});
    element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
 } 

 function RequestThread(){
    useEffect(() => {
       showBottomMessage();
    })

    const classes = useStyles(); 
    const [value, setValue] = React.useState(2);
     const container = {
         width: '100%',
         height: '100vh',
      
     }
     const header = {
         width:'30%',
         marginLeft:'5%',
         marginTop:'6em'
         
     }
     return (
        <DashboardLayout data-testid="Grnhse">
            <div style={container}>
                <div data-testid="threadNav" style={header} className="navigation">
                       <ul>
                           <li>
                               <img src={backSlideIcon} alt="back slide icon" />
                           </li>
                           <li>
                               <hr  style={{color:'#9A9797', marginTop:'1em'}} />
                           </li>
                           <li>2</li>

                       </ul>
                </div>
                <div className="threadContainer">
                <div className="threadWrapper" data-testid="requestInfoWrapper" style={{boxShadow: '0 3px 6px rgba(0,0,0,0.1)'}}>
                     <div className="requestInfoWrapper">
                         <ul>
                             <li>
                                 <h3>Request Info 
                                     <small 
                                     style={{
                                         display:'block', 
                                         fontWeight:'lighter',
                                         fontSize:'12px'
                                         }}>Pending</small></h3>
                             </li>
                             <li className="pending">

                             </li>
                         </ul>

                        <div className="hotelHighRight">
                             <ul>
                                 <li>PROIN GRAVIDA </li>
                                 <li>$112</li>
                             </ul>
                        </div>
                        <div className="hotelImageWrapper">
                            <img src={accomaodationImage} alt="accomadation" />
                           
                            <div style={{marginTop:'1em'}}>
                            <Box component="fieldset" mb={3} borderColor="transparent">
                                <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                                />
                            </Box>
                          </div>
                       </div>

                       <div className="services">
                          <h4>4 Star Hotel</h4>
                          <ul>
                              <li>
                                 <img src={poolIcon} alt = 'pool icon' />   
                                 Pool
                              </li>
                              <li style={{display: 'flex', paddingRight:'30px'}}>
                                  <img style={{paddingRight:'0px', width: '25px'}} src={parkingIcon} alt='parking icon' />
                                  Parking
                              </li>
                              <li> 
                                <img src={wifiIcon} alt = 'wifi icon' />   
                                Free WIFI
                              </li>
                         </ul>
                       </div>

                       <div>
                          
                       <Button  
                       style=
                       {{borderRadius:'20px 20px',
                         background: '#2C98F0', color: 'white'
                       }} variant="contained" color="default" className={classes.button} >
                         <img src={backSlideIcon} style={{paddingLeft:'3px'}} alt="icon" />  BACK TO REQUESTS
                        </Button>        
                       </div>
                         
                     </div>
                     <div className="chatWrapper" data-testid="chatWrapper">
                         <div className="chatWrapperContainer">
                             <div className="chatHeader">
                                  <div className="profileWrapper">
                                        <ul>
                                            <li>John Doe
                                                <small>Manager</small>
                                            </li>
                                            <li><img src={avatarImage} alt="avatar" /></li>
                                        </ul>
                                  </div>
                             </div>


                             <div className="messagesBlock">
                                 <div className="messagesContainer">
                                  <div className="messageItem">
                                     <div className="messageItemHeader" style={{height:'max-content'}}>
                                          <ul>
                                              <li><img src={avatarImage} alt="avatar" /></li>
                                              <li> 
                                                  John Doe
                                                  <small>Manager</small>
                                              </li>
                                          </ul>
                                     </div>
                                     <div className="messageTextBox">
                                         <p style={{height:'max-content'}}>
                                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                     when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                     
                                     </p>
                                     <p className="messageStatus">Dec 17, 2020</p>
                                     </div>
                                  </div>
                                


                                  <div className="messageItem">
                                     <div className="messageItemHeader" style={{height:'max-content'}}>
                                          <ul>
                                              <li><img src={avatar2Image} alt="avatar" /></li>
                                              <li> 
                                                  You
                                                  <small>Requester</small>
                                              </li>
                                          </ul>
                                     </div>
                                     <div className="messageTextBox">
                                         <p style={{height:'max-content'}}>
                                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,

                                     
                                     
                                     </p>
                                     <p className="messageStatus">Seen</p>
                                     </div>
                                  </div>


                                  <div className="messageItem" data-testid='box' id="box">
                                     <div className="messageItemHeader" style={{height:'max-content'}}>
                                          <ul>
                                              <li><img src={avatar2Image} alt="avatar" /></li>
                                              <li> 
                                                  You
                                                  <small>Requester</small>
                                              </li>
                                          </ul>
                                     </div>
                                     <div className="messageTextBox">
                                         <p style={{height:'max-content'}}>
                                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,

                                     
                                     
                                     </p>
                                     <p className="messageStatus">Seen</p>
                                     </div>
                                  </div>


                                </div>
                                
                                
                                <div className="textBoxWrapper">
                                    <input type="text" placeholder="Type message.." />
                                    <div className="textBoxTools">
                                    <ul>
                                       <li><img src = {imojeIcon} alt="imoje icon"  /></li>  
                                       <li><img src = {sendIcon} alt="send icon"  /></li>  

                                    </ul>
                                    </div>
                                </div>
                             </div>
                         </div>
                     </div>
                </div>
                </div>
            </div>
        </DashboardLayout>
       
    )
}

export default RequestThread;