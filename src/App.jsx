import react, {useState} from 'react'
import Result from './Components/Result';

const App = ()=> {
  const [statement, setStatement]=  useState([])
  const [clicked, setClicked] = useState(false)
  const [result, setResult] =useState(0)

  return (
    <div >
      <input value={result} onChange={(e)=>e.preventDefault()}></input>
    { 
     [1,2,3,4,5,6,7,8,9,0,'+', '-'].map((ele,index)=>{
        return <button key ={index} onClick={(e)=>{
          setStatement([...statement, e.target.innerText])         
        }}>{ele}</button>

      })
    }
    <button onClick={()=>{
        setClicked(!clicked)
    }}>
      =
    </button>
    {clicked ? <Result statement={statement} setResult={setResult} setStatement={setStatement}/> :null}
    </div>
  );
}

export default App;
