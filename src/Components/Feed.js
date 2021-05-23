import React from 'react';
import styles from './css/Feed.css'

function Feed(){

    function handleContentsClick(e){
        alert("컨텐츠 클릭");
    }

    return (<div className="feed-container">
        <div className="p-feed" onClick={handleContentsClick}>
            <img className="image-contents" src={require("../assets/images/template.jpg").default}/>
            <div className="contents-text-container">
                <div className="contents-text-title">
                        익선동에서 나혼자
                </div>
                <div className="contents-text-name">
                        by 내이름은
                </div>
            </div>
        </div>
    </div>);
}

export default Feed;