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
                        <table>
                            <tr className="header">
                                <th>Brand</th>
                                <th>Date</th>
                                <th>Post Preview</th>
                                <th>Eng. Score</th>
                                <th>Increase</th>
                            </tr>
                            {top ? 
                                (
                            <tr div className="ranking" id={top.id}>
                                <td className="image" alt="this is the image that accompanied the post" /*can you find ai to auto read the image?*/>No Image</td>
                                <td className="brand">{top.brand || top.name}</td>
                                <td className="date">{top.date || top.name}</td>
                                <td className="postPreview"  href={top.link || top.name}>{top.postprev || top.name}</td>
                                <td className="engscore">{top.engscore || top.name}</td>
                                <td className="increase">{top.increase || "Increase"}</td>
                            </tr>
                            ) : (<Loader />)};
                        </table> 
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






