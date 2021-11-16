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
          .get(`https://graph.facebook.com/v12.0/%20111560247096449/published_posts?fields=created_time%2Cinsights%2Clikes%2Creactions%2Cmessage%2Cpermalink_url&access_token=EAARmuEuuogkBAIxhUAZBESdwSJcnPti6JlB9zZApBCAocZAN9LZBTy0NdbSsO8yhR2Xd6KKN51oI3VKiZA2dfmZAZCF91t9B7ryNmpv6s6UrCedH6THL7ZBE2DvrhJNUgOLWPXGOmXkXZA1a2oMuG5GKwclh7W41DsrGIEe3ZBvPkWsMiBHA5wxgkDj8ZAq8qvg5EnWZAL92xKeiQJBzZAa2HNjsO5EgrbM7Xnb4ZD`)
          .then((response) => {
            setTop(response.data);
            console.log(top)
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
        </div>
    )
}

export default LineChartOne
