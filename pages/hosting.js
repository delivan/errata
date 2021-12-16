import React from 'react';

function Hosting () {

    return(
    
    <div className="hosting">
         <header>
        <img className="logoh" alt="erratalogo" src="img/Erratalogo.png"/>
        </header>
      

       
        <h4 className="caef">Create an Errata form</h4>
<form>
      <div className="hr">

      <div className="titlerg">
          <lable>Project name
             
              <br/>
          <input type="text" className="titler"/>
          </lable>
        </div>

        <div className="logorg">
          <label>Logo
              <br/>
          <input type="file" className="logof"/>
          </label>
        </div>

        <div className="descriptionrg">
          <label>Discription
              <br/>
          <input type="file" className="descf" />
          </label>
        </div>

        <button className="continue">Continue</button>

       
    </div>

      <div className="host-registeration-action">
      </div>

    </form>
    </div>
    

       
    );
};

export default Hosting;