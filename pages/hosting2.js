import React from 'react'
import './styles.css'

function Hosting2 () {

    return(

    <div className="hosting2">
       
<h4 className="lcaef">Help contributers discover your Errata</h4>
<hr className="line1"/>
<div className="host2">
        < div className="hosthost">

        <div className="fundingrg">
        <label>External funding history
            <br/>
        <input type="text" className="textbox" />
        </label>
      </div>

<br/>
<br/>

      <div className="categoryrg">
        <label>Category
        <br/>
        <input type="text" className="textbox"/>
        
        </label>
      </div>

<br/>
<br/>

      <div className="initialrg">
        <label>Initial round funding amount
            <br/>
        <input type="number" min="1000" step="100" />
        </label>
      </div>

<br/>
<br/>
      <div className="epochrg">
        <label>Epoch number
            <br/>
        <input type="range" min="1" max="20" step="1" />
        </label>
      </div>

<br/>



</div>
        <button className="continue2">Continue</button>

        
 </div>
 </div>


    );
};

export default Hosting2

