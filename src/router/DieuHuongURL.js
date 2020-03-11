import React, { Component } from 'react';
import {Route} from "react-router-dom";
import News from '../components/News';
import Home from '../components/Home';
import NewsDetail from '../components/NewsDetail';
import Contact from '../components/Contact';
import Manager from '../components/Manager';

class DieuHuongURL extends Component {
    render() {
        console.log('DieuHuongUrl', this.props.data)
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/home" component={Home}/>
                <Route path="/tin" component={News}/>
                <Route data2={this.props.data} path="/tin-tuc/:slug.:id.html" component={NewsDetail}/> 
                <Route path="/lien-he" component={Contact}/>
                <Route path="/manager" component={Manager}/>  
            </div>             
        );
    }
}

export default DieuHuongURL;