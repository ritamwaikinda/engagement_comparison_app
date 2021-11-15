import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../Loader';
import './LineChartOne.css';
import { Line } from 'react-chartjs-2';

// let user_token = process.env.USER_TOKEN;
const page_token = process.env.PAGE_TOKEN;


function LineChartOne() {

    const [top, setTop] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
          .get(`https://graph.facebook.com/v12.0/111560247096449?fields=id,name,app_id&access_token=EAARmuEuuogkBAElLZAqTq4WEQCGvH2eQnuFM4HkCdW1vs8kxERpFyACwZAXZCmJDTqyfGS3lxoT6FUc64AlyRl22wUy6JzRlnY1ZA4VZCrFlLH7K7XeZC7kH2xP2WkGlRQmotCWh3gZALMmZCBapZAR5kAdNHxGxIlfZA3MKTlKGmwA0IDEVsyr7yEhfwGTUHIZAuqhWoWWhyoRJCMPvEEIJ5CWcwTFG85NNXcZD`)
          .then((response) => {
            setTop(response.data);
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            setIsLoading(false);
          });
      }, []);


    if (isLoading) return <Loader />;

    return (
        <div>
            <div className="wrapperOne">
                <form className="selectors">
                        <input className="brand" autoComplete="on" placeholder="Search brand..." />
                        <input className="submit" type="button" value="Search" />
                </form>

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
                    height={100}
                    width={100}
                    options={{
                        responsive: true,
                        maintainAspectRatio: true,
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
        </div>
    )
}

export default LineChartOne
