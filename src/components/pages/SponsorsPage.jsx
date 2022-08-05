import sponsorsStyleClasses from 'styles/sponsors';
import Sponsors from 'components/elements/Sponsors'

function SponsorsPage() {
  return (
    <div className="container mx-auto p-10">
      <h1 className="text-2xl font-bold">Thank you to our Sponsors!</h1>
      <p className="text-lg pl-0.5 pt-2 pb-2">
        If you would like to sponsor this Event Board, please submit a form <a className={sponsorsStyleClasses.hyperlinks} href="/pages">here</a>.
      </p>

      <div className={sponsorsStyleClasses.sponsorsGroup}>
        <Sponsors />
      </div>
    </div>
  )
}

export default SponsorsPage;
