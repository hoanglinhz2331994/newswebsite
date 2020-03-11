import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state ={
            isRedirect: false,
            // fName: "",
            // fEmail:"",
            // fPhone:"",
            // fMess: "",
            fNgay: "thu3"
        }
    }    
    submitForm = (event) => {
       event.preventDefault(); //prevent ngăn chặn (ngăn chặn các thao tác mặc định, ko reload lại trang)
       this.setState({
            isRedirect:true
       })       
    }
    isChange = (event) =>{
        // console.log("Halu");
        const ten = event.target.name;
        const giatri = event.target.value;
        //console.log(ten);
        //console.log(giatri);
        //console.log(event.target.value); 
        this.setState({
            [ten]:giatri
        })      
    }
    isFileChange = (event) =>{
        // const fAnh = event.target.files[0];
        const tenanh = event.target.files[0].name;
        // console.log(fAnh2);
        this.setState({
            fAnh: tenanh
        });        
    }

    getGiatri = () => {
        var noiDung = "";
        noiDung += "Ten nhan duoc la: " + this.state.fName;
        noiDung += " /Email nhan duoc la: " + this.state.fEmail;
        noiDung += " /Phone nhan duoc la: " + this.state.fPhone;
        noiDung += " /Message nhan duoc la: " + this.state.fMess;
        noiDung += " /Ngay nhan duoc la: " + this.state.fNgay;
        noiDung += " /Anh nhan duoc la: " + this.state.fAnh;
        return noiDung;
    }

    render() {
        if(this.state.isRedirect){
            //console.log(this.state.fName);
            console.log(this.getGiatri());                        
            return <Redirect to="/"/>
        }
        return (
            <div>
                <header className="masthead tintuc">
                    <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-lg-12 my-auto">
                        <div className="header-content mx-auto">
                            <h1 className="mb-1 text-center">Trang liên hệ</h1>                
                        </div>
                        </div>          
                    </div>
                    </div>
                </header>
                {/* begin contact */}
                <section className="page-section" id="contact">
                    <div className="container">
                    {/* Contact Section Heading */}
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">LIÊN HỆ VỚI CHÚNG TÔI</h2>
                    {/* Icon Divider */}
                    <div className="divider-custom">
                        <div className="divider-custom-line" />
                        <div className="divider-custom-icon">
                        <i className="fas fa-star" />
                        </div>
                        <div className="divider-custom-line" />
                    </div>
                    {/* Contact Section Form */}
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                        {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. */}
                        <form name="sentMessage" id="contactForm" noValidate="novalidate">
                            <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Name</label>
                                <input onChange={(event) => this.isChange(event)} name="fName" className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                                <p className="help-block text-danger" />
                            </div>
                            </div>
                            <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Email Address</label>
                                <input onChange={(event) => this.isChange(event)} name="fEmail" className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                                <p className="help-block text-danger" />
                            </div>
                            </div>
                            <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Phone Number</label>
                                <input onChange={(event) => this.isChange(event)} name="fPhone" className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                                <p className="help-block text-danger" />
                            </div>
                            </div>
                            <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Message</label>
                                <textarea onChange={(event) => this.isChange(event)} name="fMess" className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                                <p className="help-block text-danger" />
                            </div> 
                            </div>
                            <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Chọn ngày</label>
                                <div className="form-group">
                                  <select value={this.state.fNgay} onChange={(event) => this.isChange(event)} name="fNgay" className="form-control" >
                                    <option value="thu2">Ngày thứ 2</option>
                                    <option value="thu3">Ngày thứ 3</option>
                                    <option value="thu4">Ngày thứ 4</option>
                                    <option value="thu5">Ngày thứ 5</option>
                                    <option value="thu6">Ngày thứ 6</option>
                                    <option value="thu7">Ngày thứ 7</option>
                                    <option value="cn">Chủ nhật</option>
                                  </select>
                                </div>
                                <p className="help-block text-danger" />
                            </div> 
                            </div>
                            <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                  <input onChange={(event) => this.isFileChange(event)} type="file" className="form-control-file" name="fAnh" />
                                <p className="help-block text-danger" />
                            </div> 
                            </div>
                            <br />
                            <div id="success" />
                            <div className="form-group">
                            <button type="submit" onClick={(event) => this.submitForm(event)} className="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
           
        );
    }
}

export default Contact;