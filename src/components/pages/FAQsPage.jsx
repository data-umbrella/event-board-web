import React from 'react';
import formStyleClasses from "styles/forms";

function FAQsPage() {
  return (
    <div className="container mx-auto pt-10 pb-40 text-l leading-7 dark:text-white">
      <div>
        <h1 className="font-bold text-lg mb-8">
          Frequently Asked Questions
        </h1>
      </div>

      <div className="">
        Q: I could not enter information into the form <br/>
        A: Fill out this &quot;
        <a className={formStyleClasses.hyperlinks} href="/contact">
          Contact Us
        </a>
        &quot; Form to report the issue
      </div>

      <br/>

      <div>
        Q: How can I contribute to this event board? <br/>
        A: The repositories for frontend and backend are on Github. Contributions can be made there:
        <br/>

        <ul className="list-disc pl-8 pt-4">
          <li>Frontend:&nbsp;
            <a className={formStyleClasses.hyperlinks} href="https://github.com/data-umbrella/event-board-web">
              https://github.com/data-umbrella/event-board-web
            </a>
          </li>
          <li>Backend:&nbsp;
            <a className={formStyleClasses.hyperlinks} href="https://github.com/data-umbrella/event-board-api">
              https://github.com/data-umbrella/event-board-api
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FAQsPage;
