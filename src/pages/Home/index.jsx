import Button from "../../components/button"
import NavBar from "../../components/navbar"
import "../../styles/global.css"
import "./style.css"

export default function Home () {
  return (
    <main>
      <section id="intro">
        <NavBar />
        <div className="descriptions text-white text-center">
          <h5>Posso ajudar sua empresa</h5>
          <h1>Transformando projetos em <span className="textt-primary">experiências de usuário</span></h1>
          <h3>Olá! Aqui é Eduardo Rojas, seu Programador Web</h3>
          <Button descricao="Veja meu trabalho"/>
        </div>
      </section>
    </main>
  )}