import * as React from "react";
import ReactMarkdown from 'react-markdown'
import {Link, NavLink, Routes, Route, BrowserRouter as Router, useNavigate, useLocation, Navigate} from 'react-router-dom'

import logo from './logo_jj_alt.svg';
import linkedin from './linkedin.png'
import github from './social.png'
import './App.css';

const we_data = ["/2024.md", "/2023.md", "/2021.md", "/2020.md"];
const edu_data = ["/amk.md", "/high.md"];
const text_data = ["/skills.md", "/languages.md"];

const EPOCH_1999_10_15 = 939992400

const Navigation = () => {
  return (
    <div className="App-nav">
      <NavLink to="/work-experience" className="navigation">Work Experience</NavLink><br/>
      <Link to="/education" className="navigation">Education</Link><br/>
      <Link to="/skills" className="navigation">Skills</Link><br/>

      <Routes>
        <Route path="work-experience" element={<WorkExperience />} />
        <Route path="education" element={<Education />} />
        <Route path="skills" element={<Skills />} />
      </Routes>
    </div>
  )
}

const WorkCard = (props) => (
  
  <div className="card">
    <ParseMarkdown data={props.text} />
  </div>
)

const WorkCards = (props) => (
  <div className="cards-container">
    { console.log(props.texts) }
    {
      props.texts.map((text, i) => (
        <WorkCard key={i} text={text} />
      ))
    }
  </div>
)

const WorkExperience = () => {
  
  let [texts, setTexts] = React.useState([]);
  React.useEffect(() => {
    async function main() {
      const files = await Promise.all(
        we_data.map((link) => fetch(link).then((res) => res.text()))
      );
      setTexts(files);
    }
    main();
  }, [setTexts]);

  return (
    <div className='App-body'>
      <WorkCards texts={texts} />
      {
      /*
      <div className="card">
        <div className="content">
          <ParseMarkdown data={texts[1]} />
        </div>
      </div>
      <div className="card">
        <div className="content">
          <ParseMarkdown data={texts[2]} />
        </div>
      </div>
      <div className="card">
        <div className="content">
          <ParseMarkdown data={texts[3]} />
        </div>
      </div> 
      */
      }
    </div>
  )
}

const Education = () => {
  let [texts, setTexts] = React.useState("");
  React.useEffect(() => {
    async function main() {
      const files = await Promise.all(
        edu_data.map((link) => fetch(link).then((res) => res.text()))
      );
      setTexts(files);
    }
    main();
  }, [setTexts]);

  return (
    <div className="App-body">
      <h1>Education</h1>
      <div className="card">
        <div className="content">
          <ParseMarkdown data={texts[0]} />
        </div>
      </div>
      <div className="card">
        <div className="content">
          <ParseMarkdown data={texts[1]} />
        </div>
      </div>
    </div>
  )
}

const Skills = () => {
  let [texts, setTexts] = React.useState("");
  React.useEffect(() => {
    async function main() {
      const files = await Promise.all(
        text_data.map((link) => fetch(link).then((res) => res.text()))
      );
      setTexts(files);
    }
    main();
  }, [setTexts]);

  return (
    <div className="App-body">
      <h1>Skills & Competencies</h1>
      <div className="card">
        <div className="content">
          <ParseMarkdown data={texts[0]} />
          {/* <ul>
            <li>Programming - <em>Very good</em></li>
            <p>I know basic concepts and can fairly easily adapt to different problems.<br/>
                Some programming languages and "tech" I have the most experience with include: 
                C, Python, C#, Rust, JSX/TSX, HTML/CSS, Bash, JSON, git, Markdown, and Jest</p>
            <li>Office 356 & other tools - <em>Very good</em></li>
            <p>I understand GUI-tools very well and can learn them pretty quickly</p>
            <li>Any operating system - <em>Very good</em></li>
            <p>Whether Windows, OSX, Ubuntu, Debian, or just something in the terminal, I can find my way home (so to speak...)</p>
          </ul> */}
        </div>
      </div>
      <div className="card">
        <div className="content">
          <ParseMarkdown data={texts[1]} />
          {/* <ul>
            <li>Finnish - <em>Native proficiency</em></li>
            <li>English - <em>Full professional proficiency</em></li>
            <li>Swedish - <em>Professional working proficiency</em></li>
            <li>Russian - <em>Elementary proficiency</em></li>
          </ul> */}
        </div>
      </div>
    </div>
  )
}

const ParseMarkdown = (props) => (
  <div className="card-content">
    <ReactMarkdown>{props.data}</ReactMarkdown>
  </div>
)

const Card = (props) => (
  <div className="card">
    <img src={ props.imgUrl } 
      alt={ props.alt || 'Image' } />
    <div className="card-content">
      <h2>{ props.title }</h2>
      <p>{ props.content }</p>
    </div>
  </div>
);

const CardContainer = (props) => (
  <div className="cards-container">
    {
      props.cards.map((card) => (
        <Card title={ card.title }
          content={ card.content }
          imgUrl={ card.imgUrl } />
      ))
    }
  </div>
);

const App = () => {
  const cardsData = [
    {id: 1, title: 'CARD 1', content: 'Clark Kent', imgUrl: 'https://unsplash.it/200/200'},
    {id: 2, title: 'CARD 2', content: 'Bruce Wayne', imgUrl: 'https://unsplash.it/201/200'},
    {id: 3, title: 'CARD 3', content: 'Peter Parker', imgUrl: 'https://unsplash.it/200/201'},
    {id: 4, title: 'CARD 4', content: 'Tony Stark', imgUrl: 'https://unsplash.it/201/201'},
    {id: 5, title: 'CARD 5', content: 'Reed Richards', imgUrl: 'https://unsplash.it/202/200'},
    {id: 6, title: 'CARD 6', content: 'Wade Wilson', imgUrl: 'https://unsplash.it/200/199'},
    {id: 7, title: 'CARD 7', content: 'Peter Quill', imgUrl: 'https://unsplash.it/199/199'},
    {id: 8, title: 'CARD 8', content: 'Steven Rogers', imgUrl: 'https://unsplash.it/199/200'},
    {id: 9, title: 'CARD 9', content: 'Bruce Banner', imgUrl: 'https://unsplash.it/200/198'},
    {id: 10, title: 'CARD 10', content: 'Vincent Strange', imgUrl: 'https://unsplash.it/198/199'},
  ]

  const dynamicAge = (epochBirth) => {
    let seconds = Date.now() / 1000;
    let ageSeconds = seconds - epochBirth;
    let ageHours = ageSeconds / 3600;
    let mod = ageSeconds % 3600;
    let ageDays = ageHours / 24;
    return parseInt(ageDays / 365); // ageYears
  }

  return (
    <div className="App">
      <header className="App-header">
        <a 
          className='App-link'
          href='/'
          rel='noopener noreferrer'
        >
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <div className="elevator-pitch">
          <p>
            Hello world, my name is Jooa Jaakkola!<br/>
            I am a {dynamicAge(EPOCH_1999_10_15)} year old excited <em>engineer</em>,<br/>
            <em>programmer</em>, and <em>problem solver</em>.<br/>
            I'm also an obedient, adaptable, and honest<br/>
            optimistic introvert, that gets along with anyone!<br/>
            At <em>Turku University of Applied Sciences</em><br/>
            I specialised in <em>Embedded Systems & IoT</em>, but<br/>
            I am well versed in all kinds
            of <em>software engineering</em>.
          </p>
        </div>
      </header>

      <Navigation />

      <CardContainer cards={cardsData} />

      <footer className='App-footer'>
        <div>
          <a href="https://linkedin.com/in/jooaoliverjaakkola">
            <img src={linkedin} className="App-logo-2" alt="linkedin logo - LI" />
          </a>
          <a href="https://github.com/jooaoj">
            <img src={github} className="App-logo-2" alt="GitHub's octocat logo" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
