import React, { useState,useEffect } from "react"
import './App.css';
import Tours from "./components/Tours"
import Loading from "./components/Loading"

const url="https://course-api.com/react-tours-project"

function App() {

  const [isLoading,setIsLoading]=useState(true)
  const [tours,setTours]=useState([])
  

  const removeTour=(id)=>{
    const newTour=tours.filter((tour)=>tour.id!=id)
    setTours(newTour)
  }

  const fetchTour=async()=>{
    setIsLoading(true)
    const response=await fetch(url)
    const data=await response.json()
    
    setIsLoading(false)
    setTours(data)
    
    
    // console.log(data)
  }

  useEffect(()=>{

    fetchTour()
  },[])

    if (isLoading){
      return (
        <main>
          <Loading />
        </main>
        
      )
    }
  
    if (tours.length===0){
      return(
        <main>
          <div className="title">
            <h2>no tours left</h2>
            <button className="btn" onClick={()=>{fetchTour()}}>refresh</button>
          </div>
        </main>
        
        
      )
    }
  
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
    
  );
}

export default App;
