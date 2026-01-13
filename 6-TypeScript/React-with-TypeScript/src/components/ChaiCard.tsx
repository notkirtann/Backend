interface ChaiCardProp{
    name:string,
    price:number,
    isSpecial?:boolean
}
function ChaiCard({name,price,isSpecial=false}:ChaiCardProp) {
  return (
    <article>
        <h2>{name} {isSpecial && <span>⭐⭐⭐⭐⭐</span> }</h2>
        <p> Price : {price} </p>
    </article>
  )
}

export default ChaiCard
