export function ApplicantBoard() {
  const stages = [
    ['Applied', '18', '6 new this week'],
    ['Screening', '21', '8 need review'],
    ['Interview', '14', '3 today'],
    ['Offer', '4', '2 awaiting signature'],
    ['Hired', '5', 'Onboarding started'],
  ]

  return (
    <div className="board">
      {stages.map(([stage, count, detail]) => (
        <article className="stage-column" key={stage}>
          <div className="stage-column__header">
            <strong>{stage}</strong>
            <span>{count}</span>
          </div>
          <p>{detail}</p>
          <div className="candidate-card">
            <strong>{stage === 'Offer' ? 'Rafael Dizon' : 'Candidate pool'}</strong>
            <span>{detail}</span>
          </div>
        </article>
      ))}
    </div>
  )
}
