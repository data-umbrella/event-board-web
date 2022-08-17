import React from 'react';
import privacyStyleClasses from 'styles/privacy';

const PRIVACY_OUTLINE = [
  'Overview',
  'Collect of Information',
  'Use of Information',
  'Sharing Information',
  'Security',
  'International Data Transfers',
  'Your Rights',
  'Contact Data Umbrella',
]

function PrivacyPage() {
  return (
    <>
      <div>
        <div className="block mb-20 mt-10">
          <h1 className={privacyStyleClasses.bodyHeader}>Privacy Policy</h1>
        </div>
        <div className="grid grid-rows-3 grid-flow-col">
          <div className={`${privacyStyleClasses.outlineHeader} row-span-3`}>
            {PRIVACY_OUTLINE.map((title) => {
              return <h1 key={title} className="block"><a>{title}</a></h1>
            })}

          </div>
          <div className="row-span-3">
            <div id="Overview" className="mb-10">
              <p className="font-bold">Effective: August 30, 2022</p>
              <p>
                This privacy policy explains how Data Umbrella (“Data Umbrella” or “we”) collects, uses
                and discloses information and what rights you have with respect to the information.

                Mi leo arcu mauris habitasse cras imperdiet. Aliquam eleifend egestas rhoncus quis est
                mi a. Velit in eu posuere tristique dui. Dui sed risus quis eget consectetur tincidunt. Sed
                mi blandit vitae, suspendisse iaculis amet sit convallis congue. Porttitor viverra venenatis
                viverra ut feugiat id.
              </p>
            </div>

            <div id="collection-of-information" className="mb-10">
              <h1 className={privacyStyleClasses.bodyHeader}>
                Collection of Information
              </h1>
              <p className="font-medium">Information You Provide to Us</p>
              
              Lectus nibh neque leo purus mi tristique pulvinar faucibus. Cursus turpis aliquet diam
              risus consectetur convallis et in nulla. Lobortis faucibus nisi purus commodo dui cum
              ipsum fringilla nibh.

              <ul className="list-disc pl-5">
                <li className="">
                  Amet, venenatis, venenatis interdum mauris, mus nullam tellus leo.
                  Eget aliquam iaculis risus tellus amet duis nisi, et tellus.
                  Fames tempus diam quis morbi cras sed.
                </li>
                <li>
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
              <p>
                Parturient eget pretium, dolor arcu nulla enim.
                Nec fringilla nisl, nisl leo.
                Rutrum consectetur iaculis in enim iaculis vestibulum dolor suspendisse rutrum.
                Sed sit augue ultricies lectus felis tincidunt feugiat.
                Penatibus tincidunt velit posuere a id vulputate arcu pretium.
                Sagittis sit ultrices proin porttitor facilisi id suspendisse.
              </p>
            </div>

            <div id="use-of-information" className="mb-10">
              <h1 className={privacyStyleClasses.bodyHeader}>
                Use of Information
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

            <div id="sharing-of-information" className="mb-10">
              <h1 className={privacyStyleClasses.bodyHeader}>
                Sharing of Information
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

            <div id="security" className="mb-10">
              <h1 className={privacyStyleClasses.bodyHeader}>
                Security
              </h1>
              <p>
                Aliquam eleifend egestas rhoncus quis est mi a.
                Velit in eu posuere tristique dui.
                Dui sed risus quis eget consectetur tincidunt.
                Sed mi blandit vitae, suspendisse iaculis amet sit convallis congue.
                Porttitor viverra venenatis viverra ut feugiat id.
              </p>
            </div>

            <div id="international-data-transfer" className="mb-10">
              <h1 className={privacyStyleClasses.bodyHeader}>
                International Data Transfer
              </h1>
              <p>
                Dapibus lorem orci mauris nam cras et nisi.
                Quis ornare ultrices senectus dui leo sit.
                Feugiat feugiat feugiat vulputate ac porttitor quis.
                Vulputate sit id congue nisi etiam dui a volutpat augue.
                A, vulputate viverra ipsum est nunc elit.
                Nam commodo, leo felis urna lacus, sagittis, a neque, semper.
              </p>
            </div>

            <div id="your-rights" className="mb-10">
              <h1 className={privacyStyleClasses.bodyHeader}>
                Your Rights
              </h1>
              <p>
                In ligula lacus condimentum cursus leo interdum.
                Nibh eu, sem gravida turpis amet ut vitae varius.
                Non cursus purus neque, eget consectetur enim sit quis ornare.
              </p>
              <br />
              <p>
                Sed habitasse dictumst lacus lacus. Odio pretium accumsan ac sapien, pellentesque.
                Et porta erat nunc nibh volutpat.
              </p>
            </div>

            <div id="contact-us" className="mb-10">
              <h1 className={privacyStyleClasses.bodyHeader}>
                Contact Us
              </h1>
              <p>
                In ligula lacus condimentum cursus leo interdum.
                Nibh eu, sem gravida turpis amet ut vitae varius.
                Non cursus purus neque, eget consectetur enim sit quis ornare.
                <br />
                <a href="privacy@dataumbrella.org">privacy@dataumbrella.org</a>
              </p>
            </div>


          </div>
        </div>
      </div>
    </>

  )
}

export default PrivacyPage;
