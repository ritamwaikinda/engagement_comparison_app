import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Loader from '../../components/Loader';
import './TopFive.css';
import Date from './Components/Date.jsx';

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

                    <div className="ranking" id="first">
                        <div className="image" alt="this is the image that accompanied the post" /*can you find ai to auto read the image?*/>No image</div>
                        <div className="post"></div>
                    </div>

                    <div className="ranking" id="second">
                        <div className="image" alt="this is the image that accompanied the post" /*can you find ai to auto read the image?*/>No image</div>
                        <div className="post"></div>
                    </div>

                    <div className="ranking" id="third">
                        <div className="image" alt="this is the image that accompanied the post" /*can you find ai to auto read the image?*/>No image</div>
                        <div className="post"></div>
                    </div>

                    <div className="ranking" id="fourth">
                        <div className="image" alt="this is the image that accompanied the post" /*can you find ai to auto read the image?*/>No image</div>
                        <div className="post"></div>
                    </div>

                    <div className="ranking" id="fifth">
                        <div className="image" alt="this is the image that accompanied the post" /*can you find ai to auto read the image?*/>No image</div>
                        <div className="post"></div>
                    </div>
                    
                </div>
            </div>
            </div>
        </div>
    )
}

export default TopFive;
