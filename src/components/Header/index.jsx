import styled from 'styled-components'
import logo from '../../assets/dark-logo.png'
import { StyledLink } from '../../utils/style/Atoms'
import { Link } from 'react-router-dom'

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const HomeLogo = styled.img`
  height: 70px;
`

function Header() {
  return (
    <StyledNav>
      <Link to="/">
        <HomeLogo src={logo} alt="logo" />
      </Link>
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/freelances">Profils</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </div>
    </StyledNav>
  )
}

export default Header
