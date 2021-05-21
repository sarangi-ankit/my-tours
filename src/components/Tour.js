import React, { useState } from 'react'

function Tour({id,name,info,image,price,removeTour}) {

    const [readMore,setReadmore]=useState(false)
    return (
        
        <article className="single-tour">
            <div>
                <img src={image} alt={name}/>
            </div>
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">${price}</h4>
                </div>
                <p>
                    {readMore? info:`${info.substring(0,200)}  ...`}
                    <button onClick={()=>{setReadmore(!readMore)}}>
                    {readMore? 'show less': 'read more'}
                    </button>
                </p>
                    <button className="delete-btn" onClick={()=>removeTour(id)}>not intrested</button>
                
            </footer>

        </article>
        
    )
}

export default Tour
