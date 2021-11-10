import React from "react";


import BarChart from "./Components/BarChart";
import LineChartOne from "./Components/LineChartOne";
import LineChartTwo from "./Components/LineChartTwo";
import './App.css';



const App = () => {
    return( 
    <div>
    <BarChart />
    <br></br>
    <LineChartOne />
    <br></br>
    <LineChartTwo />
    <br></br>
    </div>)
}

export default App;