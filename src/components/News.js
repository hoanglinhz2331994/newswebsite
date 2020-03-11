import React, { Component } from 'react';
import NewsItem from './NewsItem';
import axios from 'axios';
const getProductData = () => axios.get('/getData')
      .then((res)=>res.data)

class News extends Component {
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
      printData = () =>{
        if(this.state.data !== null){
          return this.state.data.map((value,key) => (
            <NewsItem key={key} tinId={value.id} title={value.title} content={value.content} img={value.img}/>
          ))
        }
      }
    render() {
        // var so = [1,3,5,7,9];
        // var so2 = so.map((value, key) => value*3 + " chi so key la " + key);
        // console.log(so2);
        console.log('News', this.state.data);
        return (
            <div>
                <header className="masthead tintuc">
                    <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-lg-12 my-auto">
                        <div className="header-content mx-auto">
                            <h1 className="mb-1 text-center">Trang danh sách Tin</h1>                
                        </div>
                        </div>          
                    </div>
                    </div>
                </header>
                {/* begin tin tuc */}
                <div className="container">
                    <div className="row mt-3">
                        {this.printData()}
                    </div>
                </div>
            </div>
        );
    }
}

export default News;