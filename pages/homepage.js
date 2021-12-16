import React from 'react';
import './styles.css';
import Header from './header';




function Homepage () {

       
         
             
    const temp1 = {
        width: '496px',
        height:'591px',
  
        position: 'absolute',
        top: '188px',
        left:'190px',
        right:'122px',
        bottom: '121px'
        
      }
      const temp2 = {
        width: '700px',
        height:'591px',
        
        position: 'absolute',
        top: '188px',
        left: '618px',
        bottom: '121px'
        
      }

          

     
        

    return(


       <div className="Homepage">
         
            <div className="main-container">
            </div>
            <Header/>
            <div className="temp-container1" style={temp1}></div>
            <div className="temp-container2" style={temp2}></div>

                < div className="dao">
                    <h1 className="decent">Decentralized</h1>
                    <br/>
                    <h1 className="audit">Audit</h1>
                    <br/>
                    <h1 className="Organ">Organization</h1>
                </div>

                <div className="tmi">
                    <h4>A platform where token sales and audits</h4>
                    <br/>
                    <h4>  are conducted simultaneously within </h4>
                    <br/>
                    <h4> a transparent investment environment.</h4>
                </div>

                <div className="buttons">
                    <button className="host">Host Errata</button>
                    <button className="Invest">Invest</button>
                </div>
                
               <h4 className="oge">Ongoing Errata</h4>

               <div className="Projectbox">

                   <img className="progectbox" src="./img/project.png" alt="gara"></img>
                        
                </div>

                <h4 className="ep">Explore Projects -></h4>
                

         </div>
               

            
      

    );
};


export default Homepage;