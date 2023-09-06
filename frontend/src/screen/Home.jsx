import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import Card from "../components/Card";
//import Carousal from "../components/Carousal";

const Home = () => {

  const [foodCat,setFoodCat]=useState([])
  const [foodItem,setFoodItem]=useState([])
  const [search, setSearch]=useState("")

  const loadData= async ()=>{
    let response=await fetch("https://foodexpress-v6zu.onrender.com/api/foodData",{
      method: "POST",
      headers: {
        'Content-Type':'application/json'
      }
    })

    response = await response.json()
    //console.log(response[1])

    
    setFoodItem(response[0])
    setFoodCat(response[1])
  }


  useEffect(()=>{
    loadData()
  },[])


  return (
    <div>

      <div>
        <Navbar />
      </div>

      
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner" id='carousel'>
    <div className="carousel-caption" style={{zIndex:"10"}}>
    <div className="d-flex justify-content-center">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
      {/**<button className="btn btn-outline-warning text-white bg-warning fw-bold" type="submit">Search</button>*/}
    </div>
    </div>
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/1450x600/?burger" className="d-block w-100"  style={{filter:"brightness(40%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/1450x600/?cupcake" className="d-block w-100" style={{filter:"brightness(40%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/1450x600/?sushi" className="d-block w-100" style={{filter:"brightness(40%)"}}  alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
     

      <div className="container">
        {
          foodCat !==[]
          ?
          foodCat.map((data)=>{
              return (
                <div className="row mb-3">
                  <div key={data._id} className="fs-3 m-3">
                {data.CategoryName}
                </div>
                <hr />
                {foodItem !==[]? foodItem.filter((item)=>(item.CategoryName===data.CategoryName) &&  (item.name.toLowerCase().includes(search.toLowerCase())) ) 
                .map(filteredItems=>
                  <div key={filteredItems._id} className="col-12 col-md-6  col-lg-3 m-3">
                    <Card 
                    foodItem={filteredItems}
                    options={filteredItems.options[0]}
                   

                    />
                  </div>
                )
                :
                 <div>No such data</div>}
                </div>
                
                )
          })
          :
          ""
        }

        
        
      </div>

      <div>
        <Footer />
      </div>

    </div>
  );
};

export default Home;
