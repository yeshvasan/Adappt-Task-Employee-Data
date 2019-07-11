import React from 'react';
import loadingGif from '../images/gif/loading.gif';

function Loading() {
    return (
        <div className="loading">
          <h4>Loading Employee Data..</h4> 
          <img src={loadingGif} alt=""></img>

        </div>
    )
}

export default Loading;