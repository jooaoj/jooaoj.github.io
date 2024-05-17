import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a 
          className='App-link'
          href='https://react.dev/learn'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <p>Hello world, my name is Jooa Jaakkola</p>
      </header>
      <div className='App-body'>
        <div class="card">
          <div class="content">
            <p>
              Työpaikka<br/>
              Ajankohta<br/>
              Työnkuva<br/>
              Opittua<br/>
            </p>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <p>
              Työpaikka<br/>
              Ajankohta<br/>
              Työnkuva<br/>
              Opittua<br/>
            </p>
          </div>
        </div>
      </div>
      <footer className='App-footer'></footer>
    </div>
  );
}

export default App;
