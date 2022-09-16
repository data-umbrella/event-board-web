import React from 'react';
import sponsorsStyleClasses from 'styles/sponsors';
import Sponsors from 'components/elements/Sponsors'

function SponsorsPage() {
  return (
    <div className="container mx-auto pt-5 pb-56 dark:text-[#F7FAFC] md:pt-14">
      <h1 className="hidden pb-6 text-2xl font-bold md:block">Thank you to our Sponsors!</h1>
      <h2 className="visible pb-5 text-2xl md:hidden">Sponsors</h2>
      <p className="py-2 text-base md:text-lg">
        If you would like to sponsor this Event Board, please submit a form&nbsp;
        <a className={sponsorsStyleClasses.hyperlinks} href="/contact">here</a>.
      </p>

      <div className={sponsorsStyleClasses.sponsorsGroup}>
        <Sponsors />
      </div>
    </div>
  )
}

export default SponsorsPage;
