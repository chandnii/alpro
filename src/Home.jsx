import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Home extends Component {
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
            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <div className="single-slide-item slide1">
                  <div className="container">
                    <div className="welcome-hero-content">
                      <div className="row">
                        <div className="col-sm-7">
                          <div className="single-welcome-hero">
                            <div className="welcome-hero-txt">
                              <h4>Alpro B2B</h4>
                              <h2>
                                Procure materials for custom and readymade
                                furnitures, Home décor and packaging solutions.
                              </h2>
                              <p>
                                Procure through our global supplier network of
                                500+ top suppliers from India, Indonesia,
                                Malaysia, Vietnam, Thailand, Russia and more.
                              </p>
                              <button
                                className="btn-cart welcome-add-cart"
                                onClick={() =>
                                  this.props.history.push("/contact")
                                }
                              >
                                Start Sourcing
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-5">
                          <div className="single-welcome-hero">
                            <div className="welcome-hero-img">
                              <img src="assets/images/animated2.gif" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="single-slide-item slide2">
                  <div className="container">
                    <div className="welcome-hero-content">
                      <div className="row">
                        <div className="col-sm-7">
                          <div className="single-welcome-hero">
                            <div className="welcome-hero-txt">
                              <h4>Alpro Factory</h4>
                              <h2>manufacturing experts</h2>
                              <div>
                                We make everything based out of wood for
                                furniture, packaging, Industrial Use, Raw
                                Materials for wood-based industries.
                              </div>
                              <div>
                                ALPRO FACTORY offers high quality customized
                                production at competitive cost across India,
                                Indonesia, Vietnam, Gabon, Russia, and Malaysia.
                              </div>
                              <button
                                className="btn-cart welcome-add-cart"
                                onClick={() =>
                                  this.props.history.push("/contact")
                                }
                              >
                                Get your quote
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-5">
                          <div className="single-welcome-hero">
                            <div className="welcome-hero-img">
                              <img src="assets/images/animated1.gif" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                    <a className="navbar-brand" href="#">
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
                        <a href="#home">home</a>
                      </li>
                      <li className="scroll">
                        <a href="#sofa-collection">Alpro B2B</a>
                      </li>
                      <li className="scroll">
                        <a href="#alpro-work">Alpro Factory</a>
                      </li>
                      <li className="scroll">
                        <a href="#clients">Selling On Alpro</a>
                      </li>
                      <li
                        className="scroll"
                        onClick={() => this.props.history.push("/contact")}
                      >
                        <a href="#newsletter">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
            <div className="clearfix"></div>
          </div>
        </header>
        <section id="populer-products" className="populer-products">
          <div>
            <div className="info row d-flex justify-content-center">
              <div className="col-6 col-sm-2 col-md-2 d-flex flex-column justify-content-center align-items-center">
                <div>
                  <div className="number">100+</div>
                  <div className="type">Verified factories &amp; suppliers</div>
                </div>
              </div>

              <div className="col-6 col-sm-2 col-md-2  d-flex flex-column justify-content-center align-items-center">
                <div>
                  <div className="number">Low MOQ's</div>
                  <div className="type">As low as 20 units</div>
                </div>
              </div>

              <div className="col-6 col-sm-2 col-md-2 -flex flex-column justify-content-center align-items-center">
                <div>
                  <div className="number">10% to 20%</div>
                  <div className="type">Average cost savings</div>
                </div>
              </div>

              <div className="col-6 col-sm-2 col-md-2  d-flex flex-column justify-content-center align-items-center">
                <div>
                  <div className="number">2-4 Weeks</div>
                  <div className="type">Average production turnaround time</div>
                </div>
              </div>

              <div className="col-6 col-sm-2 col-md-2  d-flex flex-column justify-content-center align-items-center">
                <div>
                  <div className="number">100%</div>
                  <div className="type">Visiblity into the process</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="sofa-collection">
          <div className="owl-carousel owl-theme" id="collection-carousel">
            <div className="sofa-collection collectionbg1">
              <div className="container">
                <div className="sofa-collection-txt">
                  <h2>Alpro B2B</h2>
                  <p>
                    ALPRO B2B is a distribution hub for supplies of Plywood, MDF
                    Boards, PVC / WPC Products, Natural Veneers, Sawn Cut
                    Timber, Doors, Laminates and other Decorative. We offer
                    standard and branded products at highly competitive prices.
                    Join with us for best products, intime deliveries, supply
                    credit, and low MOQ.
                  </p>
                  <button className="btn-cart welcome-add-cart sofa-collection-btn">
                    Connect With Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="alpro-work" className="alpro-work">
          <h4>Here's why Alpro works for your sourcing needs</h4>
          <div className="row">
            <div className="col-md-12">
              <div className="col-sm-4 col-md-4 points">
                <div>
                  <img
                    src="assets/images/trusted.png"
                    className="icon"
                    alt=""
                  />
                </div>
                <div className="alpro-work-txt">Trusted Network</div>
                <span>
                  Our unmatched network of verified &amp; reliable manufacturers
                  and suppliers.
                </span>
              </div>
              <div className="col-sm-4 col-md-4 points">
                <div>
                  <img src="assets/images/people.png" className="icon" alt="" />
                </div>
                <div className="alpro-work-txt">High-performance team</div>
                <span>
                  Sourcing experts with tremendous industry depth across
                  categories.
                </span>
              </div>
              <div className="col-sm-4 col-md-4 points">
                <div>
                  <img
                    src="assets/images/sourcing.png"
                    className="icon"
                    alt=""
                  />
                </div>
                <div className="alpro-work-txt">One-stop sourcing platform</div>
                <span>
                  Track progress, chat, share feedback &amp; stay updated.
                </span>
              </div>
            </div>
          </div>
        </section>
        <section id="clients" className="clients">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src="assets/images/quote.png" alt="" />
              </div>
              <div className="col-md-6">
                <h2>Do you want a free quote in 24 hours ?</h2>
                <button className="btn-cart welcome-add-cart">
                  <i className="fa fa-long-arrow-left"></i> &nbsp; Get in touch
                </button>
              </div>
            </div>
          </div>
        </section>
        <section id="cards">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card card-1">
                  <h3>Information</h3>
                  <p>Contact Us.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-2">
                  <h3>Finished Products</h3>
                  <p>
                    Readymade Wardropes , Sofa's, Office Furniture, Beds, Study
                    Work Tables , Modular Funiture, Dinning Bar and more!
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-3">
                  <h3>Source Raw Material</h3>
                  <p>
                    Plywood, Venner, Furnishings, Flooring, Fittings,
                    Wood-Polymer Boards .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="wrapper">
                  <div className="row mb-5">
                    <div className="col-md-3">
                      <div className="dbox w-100 text-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-map-marker"></span>
                        </div>
                        <div className="text">
                          <p>
                            <span>Address:</span> Plot 15B11, APSEZ, Vizag india
                            -530016
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="dbox w-100 text-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-phone"></span>
                        </div>
                        <div className="text">
                          <p>
                            <span>Phone:</span>{" "}
                            <a href="tel://1234567920">+ 1235 2355 98</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="dbox w-100 text-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-paper-plane"></span>
                        </div>
                        <div className="text">
                          <p>
                            <span>Email:</span>{" "}
                            <a href="mailto:info@yoursite.com">
                              info@yoursite.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="dbox w-100 text-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-globe"></span>
                        </div>
                        <div className="text">
                          <p>
                            <span>Website</span> <a href="/">yoursite.com</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="row no-gutters">
                <div className="col-md-7">
                  <div className="contact-wrap w-100 p-md-5 p-4">
                    <h3 className="mb-4">Contact Us</h3>
                  </div>
                  <form className="contactForm">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="label" for="name">
                            Full Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            id="name"
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="label" for="email">
                            Email Address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer id="footer" className="footer">
          <div className="container">
            <div className="hm-footer-copyright text-center">
              <div className="footer-social">
                <a href="/">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="/">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="/">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="/">
                  <i className="fa fa-pinterest"></i>
                </a>
                <a href="/">
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

export default withRouter(Home);
