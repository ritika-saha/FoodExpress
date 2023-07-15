import React from "react";

const Card = () => {
  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img src="https://th.bing.com/th/id/R.d9db32c03c737a34a9e7b12fd5304266?rik=jP1xpmPDgeYwqw&riu=http%3a%2f%2fimages.4ever.eu%2fdata%2fdownload%2faliments-et-boissons%2ftiramisu%2c-dessert-165263.jpg%3fno-logo&ehk=dmEZ1GSXU%2bzt6Q11nd2d71OVYc7HGXepH1wzBXN9fd4%3d&risl=&pid=ImgRaw&r=0" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Lorem ipsum dolor sit amet.</p>
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
            <select className="m-2  h-100 bg-warning rounded">
              <option value="Half">Half</option>
              <option value="Full">Full</option>
            </select>

            <div className="d-inline h-100 fs-5">Total price</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
