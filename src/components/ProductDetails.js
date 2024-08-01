// import React from 'react'

// const ProductDetails = (data, addToCart) => {
//   return (
//     <div>
//       <div>
//       <div className="container mt-5">
//         <div className="row ">
//           {data.map((product) => (
//             <div
//               className="col-sm-12 col-md-6 col-lg-4 mt-5"
//               key={product.prodId}
//               style={{ marginTop: "20px" }}
//             >
//               <div className="card" style={{ width: "18rem" }}>
//                 <img
//                   className="card-img-top"
//                   src={product.image}
//                   alt="Product"
//                   width={100}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{product.prodName}</h5>
//                   <p className="card-text">{product.proddes}</p>
//                   <h4 className="card-text">{product.color}</h4>
//                   <h3 className="card-text">{product.price}</h3>
//                   <button
//                     className="btn btn-primary"
//                     onClick={() => addToCart(product)}
//                   >
//                     Add to Cart
//                   </button>
                  
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default ProductDetails
import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = ({ data, addToCart }) => {
  const { prodId } = useParams();
  const product = data.find((item) => item.prodId === parseInt(prodId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4 mt-5" key={product.prodId} style={{ marginTop: "20px" }}>
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src={product.image} alt="Product" width={100} />
              <div className="card-body">
                <h5 className="card-title">{product.prodName}</h5>
                <p className="card-text">{product.proddes}</p>
                <h4 className="card-text">{product.color}</h4>
                <h3 className="card-text">{product.price}</h3>
                <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
