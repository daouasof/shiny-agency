import { createGlobalStyle } from 'styled-components'
import { useTheme } from '../hooks'

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }

    body {
        background-color: ${({ theme }) =>
          theme === 'dark' ? '#2F2E41' : 'white'};
        margin: 0;
        color: ${({ theme }) => (theme === 'dark' ? 'white' : 'black')}
    }
`

function GlobalStyle() {
  const { theme } = useTheme()
  return <StyledGlobalStyle theme={theme} />
}

export default GlobalStyle
