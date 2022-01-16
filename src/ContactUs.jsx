import React, { Component } from "react";

class ContactUs extends Component {
  render() {
    return (
      <div className="App">
        <header id="home" className="welcome-hero">
          <div
            id="header-carousel"
            className="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#header-carousel"
                data-slide-to="0"
                className="active"
              >
                <span className="small-circle"></span>
              </li>
              <li data-target="#header-carousel" data-slide-to="1">
                <span className="small-circle"></span>
              </li>
            </ol>
          </div>

          <div className="top-area">
            <div className="header-area">
              <nav
                className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy"
                data-minus-value-desktop="70"
                data-minus-value-mobile="55"
                data-speed="1000"
              >
                <div className="top-search">
                  <div className="container">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="fa fa-search"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                      <span className="input-group-addon close-search">
                        <i className="fa fa-times"></i>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="container">
                  <div className="attr-nav"></div>
                  <div className="navbar-header">
                    <button
                      type="button"
                      className="navbar-toggle"
                      data-toggle="collapse"
                      data-target="#navbar-menu"
                    >
                      <i className="fa fa-bars"></i>
                    </button>
                    <a className="navbar-brand" href="/">
                      Alpro
                    </a>
                  </div>
                  <div
                    className="collapse navbar-collapse menu-ui-design"
                    id="navbar-menu"
                  >
                    <ul
                      className="nav navbar-nav navbar-center"
                      data-in="fadeInDown"
                      data-out="fadeOutUp"
                    >
                      <li className=" scroll active">
                        <a href="/">home</a>
                      </li>
                      <li className="scroll">
                        <a href="/">Alpro B2B</a>
                      </li>
                      <li className="scroll">
                        <a href="/">Alpro Factory</a>
                      </li>
                      <li className="scroll">
                        <a href="/">Selling On Alpro</a>
                      </li>
                      <li className="scroll">
                        <a href="/">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
            <div className="clearfix"></div>
          </div>
        </header>
        <main id="contact">
          <div className="content">
            <div className="container">
              <div className="row align-items-stretch no-gutters contact-wrap">
                <div className="col-md-8">
                  <div className="form h-100">
                    <h3>Send us a message</h3>
                    <form
                      className="mb-5"
                      method="post"
                      id="contactForm"
                      name="contactForm"
                    >
                      <div className="row">
                        <div className="col-md-6 form-group mb-5">
                          <label htmlFor="" className="col-form-label">
                            Name *
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            id="name"
                            placeholder="Your name"
                          />
                        </div>
                        <div className="col-md-6 form-group mb-5">
                          <label htmlFor="" className="col-form-label">
                            Email *
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="Your email"
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 form-group mb-5">
                          <label htmlFor="" className="col-form-label">
                            Phone
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="phone"
                            id="phone"
                            placeholder="Phone #"
                          />
                        </div>
                        <div className="col-md-6 form-group mb-5">
                          <label htmlFor="" className="col-form-label">
                            Company
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="company"
                            id="company"
                            placeholder="Company  name"
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12 form-group mb-5">
                          <label htmlFor="message" className="col-form-label">
                            Message *
                          </label>
                          <textarea
                            className="form-control"
                            name="message"
                            id="message"
                            cols="30"
                            rows="4"
                            placeholder="Write your message"
                          ></textarea>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 form-group">
                          <input
                            type="submit"
                            value="Send Message"
                            className="btn btn-primary rounded-0 py-2 px-4"
                          />
                          <span className="submitting"></span>
                        </div>
                      </div>
                    </form>

                    <div id="form-message-warning mt-4"></div>
                    <div id="form-message-success">
                      Your message was sent, thank you!
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="contact-info h-100">
                    <h3>Contact Information</h3>
                    <ul className="list-unstyled">
                      <li className="d-flex">
                        <span className="wrap-icon icon-room mr-3"></span>
                        <span className="text">
                          Address: Plot 15B11, APSEZ, Vizag India -530016
                        </span>
                      </li>
                      <li className="d-flex">
                        <span className="wrap-icon icon-phone mr-3"></span>
                        <span className="text">+1 (91) 1235 2355 98</span>
                      </li>
                      <li className="d-flex">
                        <span className="wrap-icon icon-envelope mr-3"></span>
                        <span className="text">info@mywebsite.com</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer id="footer" className="footer">
          <div className="container">
            <div className="hm-footer-copyright text-center">
              <div className="footer-social">
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="#">
                  <i className="fa fa-pinterest"></i>
                </a>
                <a href="#">
                  <i className="fa fa-behance"></i>
                </a>
              </div>
              <p>
                &copy;copyright. designed and developed by{" "}
                <a href="https://www.therichpost.com/">Alpro</a>
              </p>
            </div>
          </div>
          <div id="scroll-Top">
            <div className="return-to-top">
              <i
                className="fa fa-angle-up "
                id="scroll-top"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                data-original-title="Back to Top"
                aria-hidden="true"
              ></i>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default ContactUs;
