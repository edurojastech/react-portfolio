import "./style.css"
export default function Button ({ descricao }){
  return (
    <button className="button">
      {descricao}
    </button>
  )
}