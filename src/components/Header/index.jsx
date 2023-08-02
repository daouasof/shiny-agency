import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/survey/1">Question 1</Link>
      <Link to="/survey/2">Question 2</Link>
    </nav>
  )
}

export default Header
