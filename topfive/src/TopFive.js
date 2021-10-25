import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Loader from '../../components/Loader';
import './TopFive.css';

//don't forget to make this suuuuper accessible

// const Matches = () => {
//     const [match, setMatch] = useState('');
//     const [brand, setBrand] = useState('');
//     const [brandDropdown, setBrandDropdown] = useState('');
//     const [post, setPost] = useState('');
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         axios
//           .get(`/api/users/matches/`, { withCredentials: true })
//           .then((response) => {
//             setMatch(response.data);
//           })
//           .catch((error) => {
//             console.log(error);
//           })
//           .finally(() => {
//             setIsLoading(false);
//           });
//       }, []);



function TopFive() {
    let now = new Date();
    let day = ("0" + now.getDate()).slice(-2);
    let month = ("0" + (now.getMonth() + 1)).slice(-2);
    let hour = ("0" + (now.getHours())).slice(-2);
    let min = ("0" + (now.getMinutes())).slice(-2);
    let today = now.getFullYear() + "-" + month + "-" + day + "T" + hour + ":" + min;


    return (
        <div>
            <div className="chart">
                <div className="date">
                    <div className="dateText">{today}</div>
                </div>
                <div className="header">
                    <div className="title">Top 5ive Posts</div>
                    <div className="refresh">Refresh</div>
                </div>
                <div className="selectors">
                    <div className="brand"></div>
                </div>
                <div className="topFive">
                    <div className="first" className="ranking">
                        <div className="image" alt="this is the image that accompanied the post" /*can you find ai to auto read the image?*/>No image</div>
                        <div className="post"></div>
                    </div>
                    <div className="second" className="ranking">
                        <div className="image" alt="this is the image that accompanied the post" /*can you find ai to auto read the image?*/>No image</div>
                        <div className="post"></div>
                    </div>
                    <div className="third" className="ranking">
                        <div className="image" alt="this is the image that accompanied the post" /*can you find ai to auto read the image?*/>No image</div>
                        <div className="post"></div>
                    </div>
                    <div className="fourth" className="ranking">
                        <div className="image" alt="this is the image that accompanied the post" /*can you find ai to auto read the image?*/>No image</div>
                        <div className="post"></div>
                    </div>
                    <div className="fifth" className="ranking">
                        <div className="image" alt="this is the image that accompanied the post" /*can you find ai to auto read the image?*/>No image</div>
                        <div className="post"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopFive;
