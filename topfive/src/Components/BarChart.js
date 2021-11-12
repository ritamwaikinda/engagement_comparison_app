import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
    return (
        <div>
            <Bar 
                data={{
                    labels: ['Brands', 'Or', 'Array', 'One', 'Two', 'Three'],
                    datasets: [{
                        label: '# of Votes',
                        data: [1, 2, 3, 4, 5, 6],
                        backgroundColor: [
                            red, blue, green, yellow, orange, purple
                        ],
                        borderColor: [
                            black, brown, grey, beige, pink, white
                        ],
                        borderWidth: 1
                    }],
                }}
                options={{
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false,
                }}
            />
            
        
        
        
        
        </div>
    )
}

export default BarChart;