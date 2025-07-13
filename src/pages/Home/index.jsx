import IntroDesc from "../../components/IntroDesc"
import NavBar from "../../components/navbar"
import "../../styles/global.css"
import "./style.css"

export default function Home () {
  return (
    <main>
      <section id="intro">
        <NavBar />
        <IntroDesc />
      </section>
    </main>
  )}