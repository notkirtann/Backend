import React, { useState } from 'react'

interface OrderFormProps{
    onSubmit(order:{name:string,jersey:number}):void
}

function OrderForm({onSubmit}:OrderFormProps) {
    const [name, setName] = useState<string>("");
    const [jersey, setJersey] = useState<number>(1);

    function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        onSubmit({name,jersey})
    }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Player Name</label>
      <input type="text" value={name} onChange={(e:React.ChangeEvent<HTMLInputElement >)=>setName(e.target.value)}/>
      <label htmlFor="">Player Jersey</label>
      <input type="number" value={jersey} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setJersey(Number(e.target.value))}/>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default OrderForm
