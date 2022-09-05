import React from 'react';
import conductStyleClasses from 'styles/conduct'

function CodeOfConductPage() {
  return (
    <div className="container mx-auto p-20">
      <h1 className="text-left text-lg font-bold">
        { "Code of Conduct" }
      </h1>
      <p className={conductStyleClasses.p}>
        Like the technical community as a whole, the 
        <span style= {{ fontWeight: 'bold' }} > AAAAAA </span>
        team and community is made up of a mixture of 
        professionals and volunteers from all over the world, working on every aspect of the mission - 
        including mentorship, 
        teaching, and connecting people.
      </p>
      <p className={conductStyleClasses.p}>
        Diversity is one of our huge strengths, but it can also lead to communication issues and unhappiness.
        To that end, we have a few ground rules that we ask people to adhere to. This code applies equally to 
        founders, mentors and those seeking help and guidance.   
      </p>
      <p className={conductStyleClasses.p}>
        This isn’t an exhaustive list of things that you can&apos;t do. 
        Rather, take it in the spirit in which it&apos;s
        intended - a guide to make it easier to enrich all of us and the technical 
        communities in which we participate.
      </p>
      <p className={conductStyleClasses.p}>
        This code of conduct applies to all spaces managed by the 
        <span style= {{ fontWeight: 'bold' }} > AAAAAA </span>project or 
        <span style= {{ fontWeight: 'bold' }} > AAAAAA </span> 
        Software Foundation. This 
        includes IRC, the mailing lists, the issue tracker, 
        DSF events, and any other forums created by the project team 
        which the community uses for communication. In addition, 
        violations of this code outside these spaces may affect 
        a person&apos;s ability to participate within them.
      </p>
      <p className={conductStyleClasses.p}>
        This code of conduct applies to all spaces managed by the 
        <span style= {{ fontWeight: 'bold' }} > AAAAAA </span>project or 
        <span style= {{ fontWeight: 'bold' }} > AAAAAA </span>  
        Software Foundation. This includes IRC, the mailing lists, the issue tracker, DSF events,
        and any other forums created by the project team which the community uses for communication. In addition, 
        violations of this code outside these spaces may affect a person&apos;s ability to participate within them.
      </p>
      <p className={conductStyleClasses.p}>
        If you believe someone is violating the code of conduct, we ask that you report it by emailing 
        conduct@
        <span style={{ fontWeight: 'bold' }} > AAAAAA</span>.com. For more 
        details please see our Reporting Guidelines
      </p>
      <li className="leading-6 mt-8 text-sm">
        <span style= {{ fontWeight: 'bold' }} >Be friendly and patient.</span>
      </li>
      <li className={conductStyleClasses.li}>
        <span style= {{ fontWeight: 'bold' }} >Be welcoming. </span>
        We strive to be a community that welcomes and supports people 
        of all backgrounds and identities. This includes, but is not limited to members 
        of any race, ethnicity, culture, national origin, colour, immigration status, 
        social and economic class, educational level, sex, sexual orientation, gender 
        identity and expression, age, size, family status, political belief, religion, 
        and mental and physical ability.
      </li>
      <li className={conductStyleClasses.li}>
        <span style= {{ fontWeight: 'bold' }} > Be considerate. </span>
        Your work will be used by other people, and you in turn will 
        depend on the work of others. Any decision you take will affect users and colleagues, 
        and you should take those consequences into account when making decisions. Remember that 
        we&apos;re a world-wide community, so you might not be communicating in someone else&apos;s primary language.
      </li>
      <li className={conductStyleClasses.li}>
        <span style= {{ fontWeight: 'bold' }} >Be respectful. </span>
        Not all of us will agree all the time, but disagreement is no excuse for 
        poor behavior and poor manners. We might all experience some frustration now and then, but we 
        cannot allow that frustration to turn into a personal attack. It&apos;s important to remember that a 
        community where people feel uncomfortable or threatened is not a productive one. Members of the 
        <span style= {{ fontWeight: 'bold' }} > AAAAAA </span> community should be respectful when 
        dealing with other members as well as with people outside the AAAAAA community.
      </li>
      <li className={conductStyleClasses.li}>
        <span style= {{ fontWeight: 'bold' }} > Be careful in the words that you choose. </span>
        We are a community of professionals, and we conduct 
        ourselves professionally. Be kind to others. Do not insult or put down other participants. 
        Harassment and other exclusionary behavior aren&apos;t acceptable. This includes, but is not limited to:
        <li className={conductStyleClasses.nestedLi}>Violent threats or language directed against another person.</li>
        <li className={conductStyleClasses.nestedLi}>Discriminatory jokes and language.</li>
        <li className={conductStyleClasses.nestedLi}>Posting sexually explicit or violent material.</li>
        <li className={conductStyleClasses.nestedLi}>Posting (or threatening to post) other people&apos;s personally 
        identifying information (&quot;doxing&quot;).
        </li>
        <li className={conductStyleClasses.nestedLi}>Personal insults, especially those using racist or 
        sexist terms.</li>
        <li className={conductStyleClasses.nestedLi}>Unwelcome sexual attention.</li>
        <li className={conductStyleClasses.nestedLi}>Advocating for, or encouraging, any of the above 
        behavior.</li>
        <li className={conductStyleClasses.nestedLi}>Repeated harassment of others. In general, if someone 
        asks you to stop, then stop.</li>
      </li>
      <li className={conductStyleClasses.li}>
        <span style= {{ fontWeight: 'bold' }} >When we disagree, try to understand why. </span>
        Disagreements, both social and technical, 
        happen all the time and <span style= {{ fontWeight: 'bold' }} > AAAAAA </span> is no exception. 
        It is important that we resolve disagreements and differing views constructively. 
        Remember that we&apos;re different. The strength of 
        <span style= {{ fontWeight: 'bold' }} > AAAAAA </span> comes from its varied community, 
        people from a wide range of backgrounds. Different people have different perspectives 
        on issues. Being unable to understand why someone holds a viewpoint doesn&apos;t mean that
        they&apos;re wrong. Don&apos;t forget that it is human to err and blaming each other doesn&apos;t get us 
        anywhere. Instead, focus on helping to resolve issues and learning from mistakes.
      </li>
      <h1 className="mt-8 text-left ml-8 text-lg font-bold">
        { "Questions?" }
      </h1>

    </div>
  )
}

export default CodeOfConductPage;




