import React, { Component } from 'react';
import NewsRelated from './NewsRelated';


class NewsDetail extends Component {
    render() {
        var dem=1;
        return (
            <div>
                <header className="masthead tintuc">
                    <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-lg-12 my-auto">
                        <div className="header-content mx-auto">
                            <h1 className="mb-1 text-center">Trang chi tiết Tin</h1>                
                        </div>
                        </div>          
                    </div>
                    </div>
                </header>
                {/* begin tin tuc */} 

                {/* begin tin lien quan */}                 
                <div className="container">
                    <h4 className="card-title text-center">Tin liên quan</h4>
                    <div className="row">
                    <div className="col-12">
                        <div className="card-deck">
                                                                       
                        </div>
                    </div>
                    </div>     
                </div>
            </div>
        );
    }
}

export default NewsDetail;