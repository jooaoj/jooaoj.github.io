import * as React from "react";
import ReactMarkdown from 'react-markdown'
import {Link, NavLink, Routes, Route, BrowserRouter as Router, useNavigate, useLocation, Navigate} from 'react-router-dom'

//import Logo from "./logo";

import logo from './logo_jj_alt2.svg';
import logo2 from './logo.svg';
import jjpi from './20240818_JJPI-React.svg';
import linkedin from './linkedin.png'
import github from './social.png'
import mie from './mie.png'
import './App.css';

const we_data = ["/2024.md", "/2023.md", "/2021.md", "/2020.md", "/2019.md", "/2018.md"];
const tyo_data = ["/2024_fin.md", "/2023_fin.md", "/2021_fin.md", "/2020_fin.md", "/2019_fin.md", "/2018_fin.md"];
const edu_data = ["/amk.md", "/high.md"];
const kou_data = ["/amk_fin.md", "/lukio.md"];
const text_data = ["/skills.md", "/languages.md"];
const teksti_data = ["/taidot.md", "/kielet.md"]

const EPOCH_1999_10_15 = 939992400
var isEng = false;

const Navigation = () => {
  return (
    <>
      <div className="App-nav">
        <NavLink to="/eng">
          {/* <Logo /> */}
          <img src={jjpi} className="App-logo" alt="logo" style={{ height: 64, width: 64 }} />
        </NavLink>
        <Link to="/work-experience" className="navigation">Experience</Link>
        <Link to="/education" className="navigation">Education</Link>
        <Link to="/skills" className="navigation">Skills</Link>
        {
          isEng
          ? <Link to="/fin" className="navigation-split">🇫🇮</Link>
          : <Link to="/eng" className="navigation-split">🇬🇧/🇺🇸</Link>
        }
      </div>
      <Routes>
        <Route path="work-experience" element={<WorkExperience />} />
        <Route path="education" element={<Education />} />
        <Route path="skills" element={<Skills />} />
        <Route path="lang" element={() => !isEng} />
      </Routes>
    </>
  )
}

const Pitch = (props) => {
  const dynamicAge = (epochBirth) => {
    let seconds = Date.now() / 1000;
    let ageSeconds = seconds - epochBirth;
    let ageHours = ageSeconds / 3600;
    let mod = ageSeconds % 3600;
    let ageDays = ageHours / 24;
    return parseInt(ageDays / 365); // ageYears
  }

  return (
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
  )
}

const Card = (props) => (
  <div className="card">
    <ParseMarkdown data={props.text} />
  </div>
)

const Cards = (props) => (
  <div className="cards-container">
    {
      props.texts.map((text, i) => (
        <Card key={i} text={text} />
      ))
    }
  </div>
)

/*Base flexbox "slides" with pictures:
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
);*/

const WorkExperience = () => {
  const texts = useFetchFiles(we_data);
  return (
    <div className='App-body'>
      <Cards texts={texts} />
    </div>
  )
}

const Education = () => {
  const texts = useFetchFiles(edu_data);
  return (
    <div className="App-body">
      <Cards texts={texts} />
    </div>
  )
}

const Skills = () => {
  const texts = useFetchFiles(text_data);
  return (
    <div className="App-body">
      <Cards texts={texts} />
    </div>
  )
}

const useFetchFiles = (dataLinks) => {
  const [texts, setTexts] = React.useState([]);
  React.useEffect(() => {
    async function fetchFiles() {
      const files = await Promise.all(
        dataLinks.map((link) => fetch(link).then((res) => res.text()))
      );
      setTexts(files);
    }
    fetchFiles();
  }, [dataLinks]);

  return texts;
}

const ParseMarkdown = (props) => (
  <div className="card-content">
    <ReactMarkdown>{props.data}</ReactMarkdown>
  </div>
)

const Contact = () => {
  return (
    <>
      <footer className='App-footer'>
        <a href="https://linkedin.com/in/jooaoliverjaakkola">
          <img src={linkedin} className="App-logo-link" alt="linkedin logo - LI" />
        </a>
        <a href="https://github.com/jooaoj">
          <img src={github} className="App-logo-link" alt="GitHub's octocat logo" />
        </a>
        {/* <form className="App-contact" type="text">Hello</form>
        <button>Send</button> */}
      </footer>
    </>
  )
}

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Pitch />
      <hr />
      <Contact />
    </div>
  );
}

export default App;
