function Price({ oldPrice, newPrice }) {
  let styles = {
    backgroundColor: "yellow",
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
    height:"30px",
    alignItems: "center",
  };
  return (
    <div style={styles}>
      <span style={{ textDecoration: "line-through" }}>{oldPrice}</span>
      &nbsp; &nbsp; &nbsp;
      <span><b>{newPrice}</b></span>
    </div>
  );
}
export default Price;
