import React, { useState, useEffect } from 'react'
// import axios from 'axios';
// import Loader from '../../components/Loader';
import './topFive.css';

//don't forget to make this suuuuper accessible

const Matches = () => {
    const [match, setMatch] = useState('');
    const [brand, setBrand] = useState('');
    const [brandDropdown, setBrandDropdown] = useState('');
    const [post, setPost] = useState('');
    const [isLoading, setIsLoading] = useState(true);



function topFive() {
    return (
        <div>
            <div className="chart">
                <div className="date">Today is {date}</div>
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

export default topFive
