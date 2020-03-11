import React, { Component } from 'react';
import NewsItem from './NewsItem';
import axios from 'axios';
// import dl from './dulieu.json';

const getProductData = () => axios.get('/getData')
      .then((res)=>res.data)

class News extends Component {
    constructor(props) {
        super(props);
        this.state={
          data:null
        }
      }
      UNSAFE_componentWillMount() {
        if(this.state.data===null){
            getProductData().then((res)=>{
              this.setState({
                data:res
              });
            })
          }
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
                    {/* {
                        dl.map((value, key) => {
                            return(
                            <NewsItem key={key}
                            tinId={value.id}
                            anh={value.anh}
                            tieuDe={value.tieuDe}
                            trichDan={value.trichDan}> </NewsItem>
                        )})
                    }          */}
                    {this.printData()}
                    {/* <NewsItem anh="https://i-vnexpress.vnecdn.net/2020/02/06/dieu-gi-xay-ra-neu-khong-co-su-tach-roi-luc-dia-1580984044_220x132.jpg" tieude="Điều gì xảy ra nếu không có sự tách rời lục địa?" trichdan="Sự đa dạng sinh học, phân bố môi trường sống và cảnh quan trên Trái Đất sẽ thay đổi lớn nếu các lục địa không tách rời như ngày nay."> </NewsItem>
                    
                    <NewsItem anh="https://i-vnexpress.vnecdn.net/2020/02/06/dieu-gi-xay-ra-neu-khong-co-su-tach-roi-luc-dia-1580984044_220x132.jpg" tieude="Điều gì xảy ra nếu không có sự tách rời lục địa?" trichdan="Sự đa dạng sinh học, phân bố môi trường sống và cảnh quan trên Trái Đất sẽ thay đổi lớn nếu các lục địa không tách rời như ngày nay."> </NewsItem> */}
                    
                   
                    {/* <div className="col-4">
                        <div className="card-deck">
                        <div className="card">
                            <a href="/tin-chi-tiet"><img className="card-img-top" src="http://placehold.it/800x400" alt="" /></a>
                            <div className="card-body">
                            <h4 className="card-title"> <a href="/tin-chi-tiet">Tin tuc so 2</a></h4>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorem saepe consectetur at a dolore veritatis fugit itaque. Sint repellat ad eaque odio itaque, harum assumenda voluptates voluptatibus cum et!</p>
                            </div>
                        </div>
                        </div>
                        <hr />
                    </div>
                    <div className="col-4">
                        <div className="card-deck">
                        <div className="card">
                            <a href="/tin-chi-tiet"><img className="card-img-top" src="http://placehold.it/800x400" alt="" /></a>
                            <div className="card-body">
                            <h4 className="card-title"> <a href="/tin-chi-tiet">Tin tuc so 2</a></h4>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorem saepe consectetur at a dolore veritatis fugit itaque. Sint repellat ad eaque odio itaque, harum assumenda voluptates voluptatibus cum et!</p>
                            </div>
                        </div>
                        </div>
                        <hr />
                    </div>
                    <div className="col-4">
                        <div className="card-deck">
                        <div className="card">
                            <a href="/tin-chi-tiet"><img className="card-img-top" src="http://placehold.it/800x400" alt="" /></a>
                            <div className="card-body">
                            <h4 className="card-title"> <a href="/tin-chi-tiet">Tin tuc so 2</a></h4>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorem saepe consectetur at a dolore veritatis fugit itaque. Sint repellat ad eaque odio itaque, harum assumenda voluptates voluptatibus cum et!</p>
                            </div>
                        </div>
                        </div>
                        <hr />
                    </div>
                    <div className="col-4">
                        <div className="card-deck">
                        <div className="card">
                            <a href="/tin-chi-tiet"><img className="card-img-top" src="http://placehold.it/800x400" alt="" /></a>
                            <div className="card-body">
                            <h4 className="card-title"> <a href="/tin-chi-tiet">Tin tuc so 2</a></h4>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorem saepe consectetur at a dolore veritatis fugit itaque. Sint repellat ad eaque odio itaque, harum assumenda voluptates voluptatibus cum et!</p>
                            </div>
                        </div>
                        </div>
                        <hr />
                    </div>
                    <div className="col-4">
                        <div className="card-deck">
                        <div className="card">
                            <a href="/tin-chi-tiet"><img className="card-img-top" src="http://placehold.it/800x400" alt="" /></a>
                            <div className="card-body">
                            <h4 className="card-title"> <a href="/tin-chi-tiet">Tin tuc so 2</a></h4>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorem saepe consectetur at a dolore veritatis fugit itaque. Sint repellat ad eaque odio itaque, harum assumenda voluptates voluptatibus cum et!</p>
                            </div>
                        </div>
                        </div>
                        <hr />
                    </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default News;
<div className="col-4">
    <div className="card-deck">
        <div className="card">
            <div className="card-body">
            <h4 className="card-title"> {this.props.title}</h4>
            <p className="card-text">{this.props.content}</p>
            </div>                    
        </div>
    </div>
    <div className="btn-group">
        <button type="button" className="btn btn-primary">Sửa</button>
        <button type="button" className="btn btn-danger">Xóa</button>
    </div>
</div>