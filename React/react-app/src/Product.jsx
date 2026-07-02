import "./Product.css";
import Price from "./Price";

function Product({ title, ind }) {
  let oldPrice = ["12,000", "24,000", "1,500", "599"];
  let newPrice = ["8,999", "9,199", "599", "299"];
  let des = [
    ["8000 Dp", "8000 Dp"],
    ["intutive surface", "8000 Dp"],
    ["degined for i pad", "8000 Dp"],
    ["wireless", "8000 Dp"],
  ];

  return (
    //   <div className="Product" style={price>30000 ? {backgroundColor:"Black"}:null}>
    //     {/* <h1>Title:{title}</h1> */}
    //     {/* <h3>Price:{price}</h3> */}
    //     {/* <h4>{feature}</h4> */}
    //     {/* <h4>{feature1.a}</h4> */}
    //     {/* rendaring array
    //     <h6>{feature.map((feature)=>(<li>{feature}</li>))}</h6> */}
    //      {/* <h1>{props.price}</h1>
    //     <h3>{props.title}</h3> */}

    //       {/* conditions */}

    //     <h1>Title:{title}</h1>
    //     {/* <h3>{price>30000 ?<p>Discount 5%</p>:null}</h3> */}
    //     <h3>{price>30000 && <p>Dis 5%</p>}</h3>
    // </div>

    <div className="Product">
      <h4>{title}</h4>
      <h4>{des[ind][0]}</h4>
      <h4>{des[ind][1]}</h4>
      <Price oldPrice={oldPrice[ind]} newPrice={newPrice[ind]} />
    </div>
  );
}
export default Product;
