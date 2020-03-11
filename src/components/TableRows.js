import React, { Component } from 'react';

class TableRows extends Component {
    handleClick = ()=>{
        
    }
    render() {
        return (
            <div className="col-4">
                <div className="card-deck">
                    <div className="card">
                        <div className="card-body">
                        <h4 className="card-title"> {this.props.title}</h4>
                        <p className="card-text">{this.props.content}</p>
                        </div>
                        <div className="btn-group">
                        <button onClick={()=>this.handleClick()} type="button" className="btn btn-primary">Sửa</button>
                        <button type="button" className="btn btn-danger">Xóa</button>
                    </div>                    
                    </div>
                </div>
                
            </div>
        );
    }
}

export default TableRows;