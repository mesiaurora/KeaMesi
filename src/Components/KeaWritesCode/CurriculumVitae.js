import React from 'react'
import {Accordion, Card} from 'react-bootstrap'
import '../Styles/styles.css'
import CollapsibleText from '../PageComponents/CollapsibleText'

const CurriculumVitae = () => {

  const Systam = 'At systam I started as a Junior Engineer. Asp.net stuff'
  const Moogsoft = 'I worked in various back-end projects that required skills in Java 8, MySQL and scripting using Python and Bash. I was a part of the team building the HTTP API endpoints and server side logic for integrating Grafana dashboard with Moogsoft’s AIOps. As a part of this project I reworked and implemented Postman API tests using Javascript and created a Python script to automatically create test data for the Postman tests. /n For CI/CD and build automation I have experience in using Jenkins and GitLab, which was also used for version control. /n Although most of my work I at Moogsoft was back-end, I also participated in front-end development through hack week projects. /n During my time at Moogsoft, we used Kanban and then moved on to Scrum. When that change was happening, I had a chance to participate in a half day Agile workshop. /n Outside my main duties, I took an active role in team-building tasks like organising staff activity days and Christmas festivities. As I was the first intern the company had had, I participated in onboarding new interns and mentored new starters.'
  const MoogsoftIntern = 'During my internship, I built a program that can be used to anonymize /n real-life data from Moogsoft’s AIOps so that the data can be used for research purposes. This program was built using Java and used natural language processing to analyse the data. Lexical analysis was used to tokenize words and allowed user to whitelist words and phrases that didn’t need to be anonymised. Based on my performance, I was offered a scholarship towards my final year tuition fees and a full-time role after graduation.'
  const ArenaInteractive = 'I was in charge of several weekly customer operations, such as targeted SMS message campaigns on behalf of several clients. For our marketing, I designed the company’s advertisement section for print which is still released in eight newspapers weekly. '
  const StarArcade = 'My main duty was to publish Star Arcade’s games in app stores. I also worked on Star Arcade’s social media presence,  organised live and online promotions and worked at Star Arcade stand in industrial shows such as Mobile World Congress in Barcelona.'
  const Sussex = 'Grade: 2:1 (Second Class Honours, Division I) /n At university I gained knowledge on multiple different areas of computer science. While I achieved better than average grades in most of my modules, the most notable modules I undertook were Data Structures and Algorithms (66), Natural Language Processing (71), Compilers and Computer Architecture (72), Computer Networks (69), Software Engineering (70) and Operating Systems (74). /n My dissertation, titled “Distributed graph processing using Apache Spark and Hadoop,” explored ways to process large real-life graph data in distributed fashion so as to calculate graph properties like node centrality. During this project, I implemented a system in Scala that allowed importing graphs, calculating J-sphere of a node and creating a subgraph so that algorithms to calculate node properties, like entropy, could be easily implemented.'

  return (
    <div>
    <h2>Curriculum Vitae</h2>

    <h3>Profile</h3>
      <p className="text-style-content"> I’m a driven full-stack software engineer with a passion for learning.
      I have experience in working in Java, C#/ASP.NET, and have also had a chance to employ Scala,
      in my professional life as well as in academic work. Although I am more experienced in back-end engineering,
      I have worked with front-end on ASP.NET and done an open university course about React.
      In my freetime I like to deepen my programming skills through my own projects and online courses,
      and do handcrafts like crocheting and take care of my plant family.</p>


      <h3>Job experience</h3>
      <CollapsibleText heading="Systam    " role="Developer" date="05/2019 to Current    "  body ={Systam} />
      <CollapsibleText heading="Moogsoft    " role="Software Engineer" date="09/2017 - 11/2018    "  body ={Moogsoft} />
      <CollapsibleText heading="Moogsoft    " role="Data Science Intern" date="06/2016 - 09/2016    "  body ={MoogsoftIntern} />
      <CollapsibleText heading="Arena Interactive    " role="Marketing Assistant" date="09/2013 - 09/2014    "  body ={ArenaInteractive} />
      <CollapsibleText heading="Star Arcade    " role="Content Manager" date="04/2011 - 06/2013    "  body ={StarArcade} />

      <h3>Education</h3>
      <CollapsibleText heading="BSc (Hons) Computer Science" role="University of Sussex" date="09/2014-06/2017"  body ={Sussex} />
    </div>

  )
}

export default CurriculumVitae
