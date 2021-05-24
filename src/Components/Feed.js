import React, {useState, useEffect  } from 'react';
import styles from './css/Feed.css';
import imgPath from "../assets/images/template.jpg";

function Feed({feed}){
    const {title, writer, imagePath} = feed;


    
    function handleContentsClick(e){
        alert("컨텐츠 클릭");
    }

    return (<div className="feed-container">
        <div className="p-feed" onClick={handleContentsClick}>
            <img className="image-contents" src={imagePath}/>
            <div className="contents-text-container">
                <div className="contents-text-title">
                        {title}
                </div>
                <div className="contents-text-name">
                        By {writer}
                </div>
            </div>
        </div>
    </div>);
}

export default Feed;