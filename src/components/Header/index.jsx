import styled from 'styled-components'
import darkLogo from '../../assets/dark-logo.png'
import lightLogo from '../../assets/light-logo.png'
import { StyledLink } from '../../utils/style/Atoms'
import { Link } from 'react-router-dom'
import { useTheme } from '../../utils/hooks'

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
  const { theme } = useTheme()

  return (
    <StyledNav>
      <Link to="/">
        <HomeLogo src={theme === 'light' ? darkLogo : lightLogo} alt="logo" />
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
