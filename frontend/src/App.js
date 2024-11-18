import { useEffect, useState } from "react";
import axios from "axios"


function App() {
  const [entervalue,setEntervalue]= useState("")

  const [fruit,setFruit]= useState([])

  useEffect(function(){
    axios.get("http://localhost:7000/fruitlist")
    .then(function(data){
      setFruit(data.data)
      
    })
  },[])

  function handlevalue(evt)
  {
     setEntervalue(evt.target.value)
  }
  function add()
  {
    axios.post("http://localhost:7000/addfruit",{newfruit:entervalue})
    setFruit([...fruit,{name:entervalue}])
    setEntervalue("")
  }
  return (
    <div className="todo">
      <h1>Healthy Fruits </h1>
      <div className="todoinput">
      <input type="text" onChange={handlevalue}/>
      <button onClick={add}>Click</button>

      </div>
     <div className="todolist">
     {fruit.map(function(item,idx){
       return <h2 key={idx}>{idx+1}.{item.name}</h2>
      })}
     </div>
      
    </div>
  );
}

export default App;