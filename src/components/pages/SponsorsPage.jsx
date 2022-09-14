import React from 'react';
import sponsorsStyleClasses from 'styles/sponsors';
import Sponsors from 'components/elements/Sponsors'

function SponsorsPage() {
  return (
    <div className="container mx-auto pt-5 md:pt-14 pb-56 dark:text-[#F7FAFC]">
      <h1 className="hidden md:block text-2xl font-bold pb-6">Thank you to our Sponsors!</h1>
      <h2 className="visible md:hidden text-2xl pb-5">Sponsors</h2>
      <p className="text-base md:text-lg pt-2 pb-2">
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
