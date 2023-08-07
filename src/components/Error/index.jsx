import ErrorPicture from '../../assets/404.svg'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const ErrorWrapper = styled.div`
  background-color: ${colors.backgroundLight};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 50px;
  color: ${colors.secondary};
`

const ErrorImage = styled.img`
  width: 75%;
`

function Error() {
  return (
    <ErrorWrapper>
      <h2>Oups...</h2>
      <ErrorImage src={ErrorPicture} alt="404" />
      <h2>Il semblerait qu'il y ait un problème</h2>
    </ErrorWrapper>
  )
}

export default Error
