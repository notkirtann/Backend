interface ChaiCardProp{
    name:string,
    jersey:number,
    injured?:boolean
}
function PlayerCard({name,jersey,injured=false}:ChaiCardProp) {
  return (
    <article>
        <h2>{name} {injured && <span>⭐⭐⭐⭐⭐</span> }</h2>
        <p> Jersey Number : {jersey} </p>
    </article>
  )
}


export default PlayerCard
