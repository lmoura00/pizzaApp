import {useEffect, useState} from "react"
import { Link } from "react-router-dom"
import { Pizza } from "../dto/pizzaDTO"



const Home = ()=>{
  const [pizzas, setPizzas] = useState<Pizza[]>([])

  useEffect(()=>{
    fetch("http://localhost:3333/pizza")
    .then(
      (data) => data.json().then((response) => setPizzas(response))
    )
  },[])

  return (
    <div>
      <h1>PIZZAS</h1>
      {pizzas.map((pizza)=>(
        <div style={{}}>
            <Link to={`/detail/${pizza.id}`}>
          <h1>{pizza.title}</h1>
            </Link>
        </div>
      ))}
    </div>
  )
}

export default Home
