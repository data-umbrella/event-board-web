import React from 'react';
import termsStyleClasses from 'styles/terms';

const TERMS_OUTLINE = [
  { id: 'introduction', title:'Introduction' }, 
  { id: 'service-provided', title:'Service Provided by Us' }, 
  { id: 'use-of-event-board', title:'Your Use of the Event Board Service' }, 
  { id: 'content-ip-rights', title:'Content and Intellectual Property Rights' }, 
  { id: 'customer-support', title:'Customer Support, Information, Questions, Complaints' }, 
  { id: 'international-data-transfer', title:'International Data Transfers' }, 
  { id: 'problems-disputes', title:'Problems and Disputes' }, 
  { id: 'about-terms', title:'About These Terms' }, 
  { id: 'contact-data-umbrella', title:'Contact Data Umbrella' }, 
]

function TermsPage() {
  return (
    <>
      <div>
        <div className="block mb-20 mt-10">
          <h1 className={termsStyleClasses.bodyHeader}>Terms of Service</h1>
        </div>
        <div className="grid grid-rows-3 grid-flow-col">
          <div className={`${termsStyleClasses.outlineHeader} row-span-3`}>
            {TERMS_OUTLINE.map(({ title, id }) => {
              return <h1 key={title} className="block"><a href={`#${id}`}>{title}</a></h1>
            })}

          </div>
          <div className="row-span-3">
            <div id="overview" className="mb-10">
              <p className="">Effective: August 30, 2022</p>
              <p className={termsStyleClasses.body}>
                These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Data Science 
                Event Board website, apps, APIs, and widgets. Please read these Terms carefully, and 
                contact us if you have any questions. By accessing or using Data Science Event Board, 
                you agree to be bound by these Terms, our 
                <a className="underline" href="/privacy">Privacy Policy</a>, and our 
                <a className="underline"  href="/code-of-conduct">Code of Conduct</a>. 
              </p>
            </div>

            <div id="service-provided" className={termsStyleClasses.body}> 
              <h1 className={termsStyleClasses.bodyHeader}>
                Service Provided by Us
              </h1>
              
              Lectus nibh neque leo purus mi tristique pulvinar faucibus. Cursus turpis aliquet diam
              risus consectetur convallis et in nulla. Lobortis faucibus nisi purus commodo dui cum
              ipsum fringilla nibh.

              <ul className="list-disc pl-5">
                <li className="leading-10">
                  Amet, venenatis, venenatis interdum mauris, mus nullam tellus leo.
                  Eget aliquam iaculis risus tellus amet duis nisi, et tellus.
                  Fames tempus diam quis morbi cras sed.
                </li>
                <li className="leading-10">
                  Ut risus non, sed ut sollicitudin est nulla eu viverra.
                  Imperdiet egestas auctor et ullamcorper.
                  Euismod egestas integer feugiat tortor enim lorem lobortis.
                  Parturient eget pretium, dolor arcu nulla enim. Nec fringilla nisl, nisl leo.
                  Rutrum consectetur iaculis in enim iaculis vestibulum dolor suspendisse rutrum.
                  Sed sit augue ultricies lectus felis tincidunt feugiat.
                  Penatibus tincidunt velit posuere a id vulputate arcu pretium.
                  Sagittis sit ultrices proin porttitor facilisi id suspendisse.
                </li>
              </ul>
              <p className={termsStyleClasses.body}>
                Parturient eget pretium, dolor arcu nulla enim.
                Nec fringilla nisl, nisl leo.
                Rutrum consectetur iaculis in enim iaculis vestibulum dolor suspendisse rutrum.
                Sed sit augue ultricies lectus felis tincidunt feugiat.
                Penatibus tincidunt velit posuere a id vulputate arcu pretium.
                Sagittis sit ultrices proin porttitor facilisi id suspendisse.
              </p>
            </div>

            <div id="use-of-event-board" className={termsStyleClasses.body}>
              <h1 className={termsStyleClasses.bodyHeader}>
                Your Use of the Data Science Event Board Service
              </h1>
              <p className="font-medium">
                We may use information about you for various purposes, including to:
              </p>
              <ul className="list-disc pl-5">
                <li>Porttitor est quis augue dui tellus.</li>
                <li>Porttitor est quis augue dui tellus.</li>
                <li>Porttitor est quis augue dui tellus.</li>
                <li>Porttitor est quis augue dui tellus.</li>
                <li>Porttitor est quis augue dui tellus.</li>
                <li>Porttitor est quis augue dui tellus.</li>
                <li>Porttitor est quis augue dui tellus.</li>
                <li>Porttitor est quis augue dui tellus.</li>
                <li>Porttitor est quis augue dui tellus.</li>
              </ul>
            </div>

            <div id="content-ip-rights" className="mb-10 leading-10">
              <h1 className={termsStyleClasses.bodyHeader}>
                Content and Intellectual Property Rights
              </h1>
              <p className="font-medium">
                We may share information about you as follows or as otherwise described in this Privacy Policy:
              </p>
              <ul className="list-disc pl-5">
                <li>
                  Mi iaculis aliquet sit ultricies arcu ut sit id.
                  Cursus cursus morbi ut risus fringilla et donec eget.
                  Arcu, urna consectetur facilisis odio.
                </li>
                <li>
                  Felis purus ipsum at bibendum duis tincidunt.
                  Tempor adipiscing quam in egestas facilisis arcu tempor, vulputate condimentum.
                </li>
                <li>
                  Mauris non, imperdiet et, aliquet nulla vitae euismod in.
                  Quam praesent mauris vitae pellentesque platea tellus.
                  Pellentesque elit ut amet felis.
                  Dignissim massa eros montes, mollis pellentesque.
                </li>
                <li>
                  Proin consectetur nisi molestie lacus, at.
                  Volutpat curabitur mi a sed mauris mi et.
                  Adipiscing lorem nisi, ultrices urna.
                  Semper ut arcu eget lorem tristique aliquam mi varius viverra. 
                </li>
                <li>
                Massa at tincidunt tortor sed rhoncus, commodo neque amet, quam. 
                Convallis mi lobortis sit non, vitae ipsum.
                </li>
              </ul>
            </div>

            <div id="customer-support" className="mb-10">
              <h1 className={termsStyleClasses.bodyHeader}>
                Customer Support, Information, Questions, Complaints
              </h1>
              <p className={termsStyleClasses.body}>
                Aliquam eleifend egestas rhoncus quis est mi a.
                Velit in eu posuere tristique dui.
                Dui sed risus quis eget consectetur tincidunt.
                Sed mi blandit vitae, suspendisse iaculis amet sit convallis congue.
                Porttitor viverra venenatis viverra ut feugiat id.
              </p>
            </div>

            <div id="problems-disputes" className="mb-10">
              <h1 className={termsStyleClasses.bodyHeader}>
                Problems and Disputes
              </h1>
              <p className={termsStyleClasses.body}>
                Dapibus lorem orci mauris nam cras et nisi.
                Quis ornare ultrices senectus dui leo sit.
                Feugiat feugiat feugiat vulputate ac porttitor quis.
                Vulputate sit id congue nisi etiam dui a volutpat augue.
                A, vulputate viverra ipsum est nunc elit.
                Nam commodo, leo felis urna lacus, sagittis, a neque, semper.
              </p>
            </div>

            <div id="about-terms" className="mb-10">
              <h1 className={termsStyleClasses.bodyHeader}>
                About These Terms
              </h1>
              <p className={termsStyleClasses.body}>
                In ligula lacus condimentum cursus leo interdum.
                Nibh eu, sem gravida turpis amet ut vitae varius.
                Non cursus purus neque, eget consectetur enim sit quis ornare.
              </p>
              <br />
              <p className={termsStyleClasses.body}>
                Sed habitasse dictumst lacus lacus. Odio pretium accumsan ac sapien, pellentesque.
                Et porta erat nunc nibh volutpat.
              </p>
            </div>

            <div id="contact-data-umbrella" className="mb-10">
              <h1 className={termsStyleClasses.bodyHeader}>
                Contact Us
              </h1>
              <p className={termsStyleClasses.body}>
                In ligula lacus condimentum cursus leo interdum.
                Nibh eu, sem gravida turpis amet ut vitae varius.
                Non cursus purus neque, eget consectetur enim sit quis ornare.
                <br />
                <a className="text-blue-500 underline" href="terms@dataumbrella.org">terms@dataumbrella.org</a>
              </p>
            </div>


          </div>
        </div>
      </div>
    </>

  )
}

export default TermsPage;
