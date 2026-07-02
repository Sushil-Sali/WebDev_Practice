
import Product from "./Product";

function ProductTab() {
  // let option=["1","2"]
  // let option1={a:"hi-tech",b:"Durable"}
  let styles={
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"center",
    alignItems: "center",
  
  }
  return (
    // <>
    //   {/* <Product title="Laptop" price={45000} feature={["1","2","hello"]} feature1={{a:"hi-tech",b:"Durable"}} /> */}
    //   {/* <Product title="Books" price={500} feature={option} feature1={option1}/>
    //   <Product title="pen"price={20}feature={option} feature1={option1}/> */}

    //   {/* <Product title="Laptop" price={45000}/>
    //   <Product title="Books" price={500} />
    //   <Product title="pen"price={20}/>  */}
    //   <MsgBox usename="Sushil" txtcolor="pink"/>
    //      <MsgBox usename="rahul" txtcolor="yellow"/>

    // </>

    <div style={styles}>
      <Product title="Logitech Mx Master"  ind={0}/>
      <Product title="Apple Pencil (2D)"  ind={1}/>
      <Product title="Zebronic Z blass"  ind={2} />
      <Product title="Pentanic toad 23"  ind={3}/>
    </div>
  );
}
export default ProductTab;
