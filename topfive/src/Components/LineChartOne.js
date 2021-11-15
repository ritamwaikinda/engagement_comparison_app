import React from 'react';

import { Line } from 'react-chartjs-2';


function LineChartOne() {
    return (
        <div>
            Line Chart

            <Line 
                data={{
                    labels: ['Brands', 'Or', 'Dates', 'One', 'Two', 'Three'],
                    datasets: [{
                        label: '# of Votes',
                        data: [1, 2, 3, 4, 5, 6],
                        backgroundColor: [
                            'red', 'blue', 'green', 'yellow', 'orange', 'purple'
                        ],
                        borderColor: [
                            'black', 'brown', 'grey', 'beige', 'pink', 'white'
                        ],
                        borderWidth: 1,
                    },
                {
                    label: 'Quantity',
                    data: [10, 4, 3, 8, 10, 5],
                    backgroundColor: 'grey',
                    borderColor: 'black',
                    borderWidth: 1,
                }],
                }}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                            }
                        }]
                    }
                }}
            />
            
        </div>
    )
}

export default LineChartOne
