import styled from 'styled-components'
import colors from '../../utils/style/colors.jsx'
import { ThemeContext } from '../../utils/context/index.jsx'
import { useContext } from 'react'

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
`

const NightModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.secondary};
`

function Footer() {
  const { toggleTheme } = useContext(ThemeContext)
  return (
    <FooterContainer>
      <NightModeButton onClick={() => toggleTheme()}>
        Changer de mode
      </NightModeButton>
    </FooterContainer>
  )
}

export default Footer
