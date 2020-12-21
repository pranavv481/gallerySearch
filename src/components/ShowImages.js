import React from 'react'

const ShowImages = (props) => {
    const {image} = props ;
    console.log(image)
    return (
        <div className="col-md-3">
            <img src={image.src.medium} alt="" className="img-fluid"/>
        </div>
    )
}

export default ShowImages
