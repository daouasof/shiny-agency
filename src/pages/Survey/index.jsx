import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber, 10)
  const next = questionNumberInt + 1
  const previous =
    questionNumberInt === 1 ? questionNumberInt : questionNumberInt - 1

  return (
    <div>
      <h1>Questionnaire</h1>
      <h2>Question {questionNumber}</h2>
      <Link to={`/survey/${previous}`}>Précédent</Link>
      {questionNumberInt !== 10 && <Link to={`/survey/${next}`}>Suivant</Link>}
      {questionNumberInt === 10 && <Link to="/results">Résultats</Link>}
    </div>
  )
}

export default Survey
