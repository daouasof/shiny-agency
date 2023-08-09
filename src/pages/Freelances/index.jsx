import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useEffect, useState } from 'react'
import { Loader } from '../../utils/style/Atoms'

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 30px;
`

const FreelancesWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const FreelancesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

const Subtitle = styled.p`
  color: ${colors.secondary};
`

// const freelanceProfiles = [
//   {
//     name: 'Jane Doe',
//     jobTitle: 'Devops',
//   },
//   {
//     name: 'John Doe',
//     jobTitle: 'Developpeur frontend',
//   },
//   {
//     name: 'Jeanne Biche',
//     jobTitle: 'Développeuse Fullstack',
//   },
// ]

function Freelances() {
  const [isDataLoading, setDataLoading] = useState(false)
  const [freelancersList, setFreelancersList] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchFreelances() {
      setDataLoading(true)
      try {
        const response = await fetch(`http://localhost:8000/freelances`)
        const { freelancersList } = await response.json()
        setFreelancersList(freelancersList)
      } catch (err) {
        console.log('=== error ===', err)
        setError(true)
      } finally {
        setDataLoading(false)
      }
    }

    fetchFreelances()
  }, [])

  if (error) {
    return <span>Oups, something went wrong</span>
  }

  return (
    <FreelancesWrapper>
      <FreelancesContainer>
        <h1>Trouvez votre prestataire</h1>
        <Subtitle>
          {' '}
          Chez Shiny nous réunissons les meilleurs profils pour vous.
        </Subtitle>
        {isDataLoading ? (
          <Loader />
        ) : (
          <CardsContainer>
            {freelancersList.map((profile, index) => (
              <Card
                key={`${profile.name}-${index}`}
                label={profile.jobTitle}
                picture={profile.picture}
                title={profile.name}
              />
            ))}
          </CardsContainer>
        )}
      </FreelancesContainer>
    </FreelancesWrapper>
  )
}

export default Freelances
