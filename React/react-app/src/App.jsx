
import './App.css'
import Demo from './demo';
import ProductTab from './ProductTab';
import Button from './Button';
import Form from './Form'
import Counter from './Couter';
import Likebtn from './Likebtn'
import Lottery from './Lottery'

function Title(){
  return <h1>Hello Ji</h1>
}
function Discription(){
  return <h1>Hello Bhai</h1>
}

function App() { 

return (
<>
  {/* <Title/>
  <Discription/>
  <Title/>
  <Discription/>
  <Demo></Demo>
  <p>{45+45}</p> */}
{/* <ProductTab/> */}
 {/* <Button/> */}
{/* <Form/> */}
{/* <Counter/> */}
{/* <Likebtn/> */}
< Lottery n={3} winingSum={15}/>
</>
);
}

export default App
