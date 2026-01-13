import ChaiCard from "./components/ChaiCard"
import Counter from "./components/Counter"
import OrderForm from "./components/OrderForm"
import PlayerList from "./components/PlayerList"
import type { Player } from "./types/types"

const player:Player[]=[{
  id:1,
  name:"Fede Valverde",
  jersey:8,
  injured:false
},{
  id:2,
  name:"Kylian Mbappe",
  jersey:10,
  injured:true
}]



function App() {
  return (
    <>
      <div>
        <OrderForm onSubmit={(order)=>{
          console.log(`Name: ${order.name}, Jersey:${order.jersey}`);
        }} />
      </div>
      <h1>Hello </h1>
      <ChaiCard name="Headphone" price={20000} />
      <ChaiCard name="iPhone" price={80000} isSpecial={true} />
      <div>
        <Counter/>
      </div>
      <div>
        <PlayerList data={player}/>
      </div>
    
    </>
  )
}
export default App
