const styleClasses = {
  introSection: `
    container
    mx-auto
    mb-10
  `,
  eventBoardHeading: `
    text-5xl
    font-bold
  `,
}

function IntroductionSection() {
  return (
    <div className={styleClasses.introSection}>
      <div className="mb-10 mt-10">
        <h1 className={styleClasses.eventBoardHeading}>
          Data Events Board
        </h1>
        <small>A Data Umbrella Initiative</small>
      </div>
    </div>
  )
}

export default IntroductionSection;
