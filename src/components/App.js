import React, { Component } from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import './../css/App.css';
import Nav from './Nav';
import Footer from './Footer';
import DieuHuongURL from '../router/DieuHuongURL';
import axios from 'axios';
const getProductData = () => axios.get('/getData')
      .then((res)=>res.data)

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      data:null
    }
  }

  componentDidMount() {
    getProductData().then((res)=>{
      this.setState({
        data:res
      });
    })
  }
  
  render() {
    const data = this.state.data
    console.log('App', data);
    return (
      <div>
        <Router>
          <div>
            <Nav/>
            {/* <Home/>
            <News/>
            <NewsDetail/>
            <Contact/> */}
            <DieuHuongURL data={data} />
            <Footer dulieu={data}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

