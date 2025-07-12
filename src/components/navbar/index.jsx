import "./style.css"
export default function NavBar () {
  return (
    <nav className="navbar">
      <img src="https://eduardorojas.com.br/assets/logoEdu.svg" alt="logo" width={150}/>
      <div className="navbar__links">
        <a href="#" className="navbar-brand text-white">About</a>
        <a href="#" className="navbar-brand text-white">Projects</a>
        <a href="#" className="navbar-brand text-white">Testimonials</a>
        <a href="#" className="navbar-brand text-white">Contato</a>
      </div>
    </nav>
  )
}