import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Pizza } from '../dto/pizzaDTO'

const Detail = () => {
    const [pizza, setPizza] = useState<Pizza>({}as Pizza)
    const {id} = useParams()
    useEffect(()=>{
        fetch(`http://localhost:3333/pizza/${id}`).then((data)=>data.json().then((response)=>setPizza(response)))
    },[])
  return (
    <div>
        <h1>{pizza.title}</h1>
        <h2>{pizza.id}</h2>
        <img src={pizza.imageUrl} alt={pizza.title} />
        <h2>{Number(pizza.amount).toLocaleString("pt-BR",{style:"currency", currency:"BRL"})}</h2>
    </div>
  )
}
export default Detail