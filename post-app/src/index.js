import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/';

const root = ReactDOM.createRoot(document.getElementById('root'));

class WhoAmI extends Component {
  constructor(props) {
      super(props);
      this.state = {
        years: 26
      }
  }
  
  nextYear = () => {
    this.setState(state => ({
      years: ++state.years
    }))
  }

  render() {
    const {name, surname, link} = this.props;
    const {years} = this.state;
    return (
        <>
          <button onClick={this.nextYear}>++</button>
          <h1>My name is {name}, surname - {surname}, years = {years}</h1>
          <a href={link}>My profile</a>
        </>
    )
  }
}

const All = () => {
  return(
    <>
      <WhoAmI name="John" surname="Smith" link="facebook.com" />
      <WhoAmI name="Alex" surname="Jones" link="vk.com" />
      <WhoAmI name="Simba" surname="Kronk" link="facebook.com" />
    </>
  )
}

root.render(
  <React.StrictMode>
    {/* <All/> */}
    <App />
  </React.StrictMode>,
);
