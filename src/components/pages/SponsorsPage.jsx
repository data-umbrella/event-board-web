import React from 'react';
import sponsorsStyleClasses from 'styles/sponsors';
import Sponsors from 'components/elements/Sponsors'

function SponsorsPage() {
  return (
    <div className="container md mx-auto pt-14 pb-56">
      <h1 className="hidden md:block text-2xl font-bold">Thank you to our Sponsors!</h1>
      <h1 className="visible md:hidden text-2xl font-bold">Sponsors</h1>
      <p className="text-lg pt-2 pb-2">
        If you would like to sponsor this Event Board, please submit a form&nbsp;
        <a className={sponsorsStyleClasses.hyperlinks} href="/pages">here</a>.
      </p>

      <div className={sponsorsStyleClasses.sponsorsGroup}>
        <Sponsors />
      </div>
    </div>
  )
}

export default SponsorsPage;
