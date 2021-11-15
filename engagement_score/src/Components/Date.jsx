import React, { useState, useEffect } from 'react'

function Time() {
    const Clock = props => {
        const [date, setDate] = React.useState(new Date());
      
       //Replaces componentDidMount and componentWillUnmount
       React.useEffect(() => {
        var timerID = setInterval( () => tick(), 1000 );
        return function cleanup() {
            clearInterval(timerID);
          };
       });
      
         function tick() {
          setDate(new Date());
         }
      
         return (
            <div>
              <h1>Hello, world!</h1>
              <h2>It is {date.toLocaleTimeString()}.</h2>
            </div>
          );
      }      


    let date = new Date()

    return (
        <div>
        setTimeout(function(){
 	{date}
        }, 1000);
            
        </div>
    )
}

export default Date
