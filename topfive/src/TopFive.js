import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from './Components/Loader';
import './TopFive.css';

import Date from './Components/Date.jsx';

// let user_token = process.env.USER_TOKEN;
const page_token = process.env.PAGE_TOKEN;

//don't forget to make this suuuuper accessible (alt tage etc)
function TopFive() {

    const [top, setTop] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
          .get(`https://graph.facebook.com/v12.0/10101400138573354?fields=id,name,app_id&access_token=EAARmuEuuogkBAMI1Fra0y3fItDPLUKZAthKsKhmROoZBVzVGeInwLYWbZB95GtVKKx8BT4481XmEiZCXTBVyIH82p6ZAQWZCtox3vjwdzZC5PhPyqNWDGUETgB3UZBw7844SkdgiLmYeprwLB1OfokYJJAIkibpnrp4iNmxGCwdn3M96fGKBEg8iVw9oieybUl0OhCVZCBTNAUldqsG3sxWAh8vuNZAS5TVaEZD`)
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

    const date = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full'}).format(new Date())


    return (
        <div>
            <div className="wholePage">
            <div className="chart">

                <div className="date">{date}</div>

                <div className="header">
                    <div className="title">Top 5ive Posts</div>
                    <div className="refresh">Refresh</div>
                </div>

                <form className="selectors">
                    <input className="brand" autoComplete="on" placeholder="Search brand..." />
                    <input className="submit" type="button" value="Search" />
                </form>

                <div className="topFive">
                    <div className="top">
                        {top ? 
                        (
                            <div className="ranking" id={top.id || top.name}>

                                <div className="image" alt="this is the image that accompanied the post" /*can you find ai to auto read the image?*/>No image</div>

                                <div className="brand">{top.brand || top.name}</div>

                                <div className="date">{top.date || top.name}</div>

                                <div className="postPreview"  href={top.link || top.name}>{top.postprev || top.name}</div>

                                <div className="engscore">{top.engscore || top.name}</div>

                                <div className="increase">{top.increase || "Increase"}</div>
                            </div>
                            
                            ) : (<Loader />)};
                    </div>
                </div>

            <div className="button">
            <span className="buttonText">Go To Comparison Charts</span>
            </div>
            <div className="footer"></div>
            
            </div>
        </div>
    </div>
    )
}

export default TopFive;






