import React, { useState } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";

const Card = (props) => {

  let options=props.options
  let priceOptions=Object.keys(options)
  const [qty, setQty]=useState(1)
  const [size, setSize]=useState("")

  const handleAddToCart=()=>{
    
  }
  return (
    <div>
      <div className="card mt-3" style={{ width: "19rem", maxHeight: "460px" }}>
        <img src={props.foodItem.img} className="card-img-top" alt="..." style={{height:"200px", objectFit:"fill"}} />
        <div className="card-body">
          <h5 className="card-title text-warning fw-bolder">{props.foodItem.name}</h5>
          <div className="container w-100">
            <select className="m-2  h-100 bg-warning rounded">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-warning rounded">
              {
                priceOptions.map((data)=>{
                  return (
                    <option key={data} value={data}>{data}</option>
                  )
                })
              }
            </select>

            <div className="h-100 fs-5">Total price- </div>
            <hr />
            <button className="btn btn-warning justify-center ms-2 text-white fw-bold" onClick={handleAddToCart}>Add to Cart </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
