import React, { Component } from 'react';
import TableRows from './TableRows';
import axios from 'axios';

const addNewsAction = (title,content,img)=>(axios.post('/admin',{title,content,img}).then((resp)=>resp.data))
const getProductData = ()  => axios.get('/getData').then((res)=>res.data)

class Manager extends Component {
    constructor(props) {
        super(props);
        this.state={
            title:'',
            content:'',
            img:'',
            data: null,
            timKiem:''
        }
    }
    
    componentDidMount() {
        getProductData().then((res)=>{
          this.setState({
            data:res
          });
        })
      }
    

    isChange = (event)=>{
        var name = event.target.name;
        var value = event.target.value;
        console.log(name);
        console.log(value);
        this.setState({
            [name]:value
        })
    }

    handleClick = ()=>{
        // console.log(JSON.stringify(this.state));
        var {title,content,img} = this.state;
        addNewsAction(title,content,img).then((response)=>{
            console.log(response);
        })
    }

    printData = () =>{
        if(this.state.data !== null){
          return this.state.data.map((value,key) => (
            <TableRows key={key} tinId={value.id} title={value.title} content={value.content} img={value.img}/>
          ))
        }
      }
    
    isChange2 = (event)=>{
        // console.log(event.target.value)
        //Lấy được dữ liệu từ tìm kiếm, gán vào state timKiem
        this.setState({
            timKiem: event.target.value
        })    
    }
    
    render() {
        return (
            <div className="container">
            <div className="row">
                <div className="col-12">
                <h2 className="text-center bg-dark text-white mt-2">THÊM MỚI TIN TỨC</h2>
                <hr />
                </div>
                <div className="col-8 mx-auto">
                <form action="/admin" method="POST">
                    <div className="form-group">
                    <input onChange={(event)=>this.isChange(event)}  type="text" className="form-control" name="title" id="title" aria-describedby="name_text" placeholder="Nhập tiêu đề bài viết" />
                    </div>
                    <div className="form-group">
                    <input onChange={(event)=>this.isChange(event)}  type="text" className="form-control" name="content" id="content" aria-describedby="name_text" placeholder="Nhập nội dung bài viết" />
                    </div>
                    <div className="form-group">
                    <input onChange={(event)=>this.isChange(event)}  type="text" className="form-control" name="img" id="img" aria-describedby="name_text" placeholder="Nhập link URL" />
                    </div>
                    <button onClick={()=>this.handleClick()} type="reset" className="btn btn-info">Thêm mới</button>
                </form>
                </div>

                <div className="col-12">
                <h2 className="text-center bg-success text-white mt-2">THÔNG TIN CHỈNH SỬA</h2>
                <hr />
                </div>
                <div className="col-8 mx-auto">
                <form action="/admin" method="POST">
                    <div className="form-group">
                    <input type="text" className="form-control" name="title2" id="title2" aria-describedby="name_text" placeholder="Sửa tiêu đề" />
                    </div>
                    <div className="form-group">
                    <input type="text" className="form-control" name="content2" id="content2" aria-describedby="name_text" placeholder="Sửa nội dung" />
                    </div>
                    <div className="form-group">
                    <input type="text" className="form-control" name="img2" id="img2" aria-describedby="name_text" placeholder="Sửa link URL" />                      
                    </div>
                    <button type="reset" className="btn btn-warning">Lưu thông tin</button>
                </form>
                </div>
            </div>

            <div className="container">
                <h2 className="text-center bg-danger text-white mt-2">DANH SÁCH TIN TỨC</h2>
                <div className="row">
                <div className="col-12">
                    <div className="form-group">
                    <div className="btn-group">
                        <input onChange={(event)=>this.isChange2(event)} className="form-control" type="text" placeholder="Nhập từ khóa tìm kiếm..." />
                        <div  className="btn btn-info">Tìm</div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="row">
                    {this.printData()}
                </div>
            </div>
            </div>

        );
    }
}

export default Manager;