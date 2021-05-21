import React from 'react'
import Tour from "./Tour"

function Tours({tours,removeTour}) {

    return (
        <section>
            <div className="title">
                <h1>Our tours</h1>
                <div className="underline"></div>
            </div>
            <div>
                {tours.map((tour)=>{
                    return (<Tour id={tour.key} {...tour} removeTour={removeTour} />)
                })} 
            </div>
        </section>
        
    )
}

export default Tours
