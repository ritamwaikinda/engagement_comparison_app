import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../../components/Loader';
import './TopFive.css';
import Date from './Components/Date.jsx';

//don't forget to make this suuuuper accessible (alt tage etc)
function TopFive() {

    const [top, setTop] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
          .get(`/api/users/matches/`, { withCredentials: true })
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
                        top.map((match) => {
                            return (

                            <div className="ranking" id={top.indexId}>
                                <div className="image" alt="this is the image that accompanied the post" /*can you find ai to auto read the image?*/>No image</div>
                                <div className="brand">{top.brand}</div>
                                <div className="date">{top.date}</div>
                                <div className="postPreview">{top.postprev}</div>
                                <div className="engscore">{top.engscore}</div>
                                <div className="increase">{top.increase}</div>
                            </div>
                            
                            )})) : (<Loader />)};
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






