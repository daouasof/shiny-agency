import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/survey/1">Question 1</Link>
      <Link to="/results">Résultats</Link>
    </nav>
  )
}

export default Header
