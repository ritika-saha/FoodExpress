import React from "react";

const Card = (props) => {

  let options=props.options
  
  let priceOptions=Object.keys(options)

  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img src={props.imgSrc} className="card-img-top" alt="..." style={{height:"200px", objectFit:"fill"}} />
        <div className="card-body">
          <h5 className="card-title text-warning fw-bolder">{props.foodName}</h5>
          <p className="card-text mb-0">Order now! best quality in town</p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
