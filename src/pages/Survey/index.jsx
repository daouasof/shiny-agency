import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Loader } from '../../utils/style/Atoms'

function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1
  const [surveyData, setSurveyData] = useState({})
  const [isDataLoading, setIsDataLoading] = useState(false)

  useEffect(() => {
    setIsDataLoading(true)
    fetch(`http://localhost:8000/survey`).then((response) =>
      response
        .json()
        .then(({ surveyData }) => {
          setSurveyData(surveyData)
          setIsDataLoading(false)
        })
        .catch((error) => console.log(error)),
    )
  }, [])

  return (
    <div>
      <h1>Question {questionNumber}</h1>
      {isDataLoading ? <Loader /> : <p>{surveyData[questionNumber]} </p>}
      <div>
        <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
        {surveyData[questionNumberInt + 1] ? (
          <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
        ) : (
          <Link to="/results">Résultats</Link>
        )}
      </div>
    </div>
  )
}

export default Survey
