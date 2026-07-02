function printHello() {
  console.log("heelo");
}
function printBy() {
  console.log("byyyy");
}
export default function Button() {
  return (
    <div>
      <button onClick={printHello}>Click me</button>
      <p onClick={printBy}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sapiente
        sequi quis quibusdam assumenda dignissimos officiis nostrum molestias
        quasi quisquam nisi, possimus voluptatum expedita modi vitae blanditiis!
        Alias, adipisci nisi?
      </p>
    </div>
  );
}
