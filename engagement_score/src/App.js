import React from "react";

import LineChartOne from "./Components/LineChartOne/LineChartOne";
import LineChartTwo from "./Components/LineChartTwo/LineChartTwo";
import './App.css';

import Date from './Components/Date.jsx';

const App = () => {

    const date = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full'}).format(new Date())
  
    return( 
    <div>
        <div className="wholePage">
            <div className="chart">
                <div className="date">{date}</div>
                <div className="title">Top Five Posts</div>
                <div className="charts">
                    <LineChartOne /> <LineChartTwo />
                </div>

                <div className="button">
                <span className="buttonText">Go To Top Five Table</span>
                </div>
                
                <div className="footer"></div>
            </div>
        </div>
    </div>)
}

export default App;