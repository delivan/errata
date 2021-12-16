import React from 'react'
import './styles.css'

function Host3 () {

    return(

    <div className="Host3">
        <h4 className="lcaefS">Set goals for Errata</h4>
        <hr className="line1"/>
        <div className="lists">
        <div className="epochlrg">
        <label>Epoch length(days)
           
            <br/>
        <input type="number" max="40" min="1" step="1" />
        </label>
        </div>
    <br/>
    <br/>
      <div className="goalrg">
        <label>Set Goal for each epoch
            <br/>
        <input type="text" />
        </label>
      </div>
    <br/>
    <br/>
      <div className="scoperg">
        <label>Target vulnerabilities in scope
            <br/>
        <input type="file" />
       
      </label>
      </div>
    </div>
    <button className="launcherrata">Launch Errata</button>
    </div>

    );
};

export default Host3