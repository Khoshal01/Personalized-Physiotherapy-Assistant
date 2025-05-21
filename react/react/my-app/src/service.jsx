var MyClass = React.createClass({
    render: function() {
      return (
        <div>
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="megabot" />
          <meta name="keywords" content="megabot" />
          <meta name="author" content="megabot" />
          <link rel="icon" href="../assets/images/favicon.png" type="image/x-icon" />
          <link rel="shortcut icon" href="../assets/images/favicon.png" type="image/x-icon" />
          <title>AlignAI</title>
          {/*Google font*/}
          <link rel="preconnect" href="https://fonts.googleapis.com/" />
          <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;900&display=swap" rel="stylesheet" />
          {/* bootstrap css */}
          <link id="rtl-link" rel="stylesheet" type="text/css" href="../assets/css/vendors/bootstrap.css" />
          {/* remixicon css */}
          <link rel="stylesheet" type="text/css" href="../assets/css/vendors/remixicon.css" />
          {/* iconsax css */}
          <link rel="stylesheet" type="text/css" href="../assets/css/vendors/iconsax.css" />
          {/* animation css */}
          <link rel="stylesheet" type="text/css" href="../assets/css/vendors/aos.css" />
          {/* swiper slider css */}
          <link rel="stylesheet" type="text/css" href="../assets/css/vendors/swiper-bundle.min.css" />
          {/* style css */}
          <link rel="stylesheet" type="text/css" href="../assets/css/style.css" />
          {/* header start */}
          <header>
            <button className="navbar-toggler d-xl-none d-inline navbar-menu-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#primaryMenu">
              <span className="navbar-toggler-icon">
                <i className="iconsax" data-icon="text-align-justify" />
              </span>
            </button>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <img src="../assets/images/favicon.png" className="img-fluid" alt="logo" style={{marginRight: '10px'}} />
              <h2 style={{color: '#3BEDB2'}}>AlignAI</h2>
            </div>
            <nav className="header-nav-middle">
              <div className="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
                <div className="offcanvas offcanvas-collapse order-xl-2" id="primaryMenu">
                  <div className="offcanvas-header navbar-shadow">
                    <h5 className="mb-0">Back</h5>
                    <button className="btn-close lead" type="button" data-bs-dismiss="offcanvas" aria-label="Close" />
                  </div>
                  <div className="offcanvas-body">
                    <ul className="navbar-nav">
                      <li className="nav-item active">
                        <a className="nav-link" href="index.html">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="chat.html">Chat</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="terms.html">Terms</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="service.html">service</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="contact-us.html">contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
            <a data-cursor="pointer" href="login.html" className="btn btn-theme d-sm-inline-block d-none"><span>Login
                Now</span></a>
          </header>
          {/* header end */}
          {/* breadcrumb section start */}
          <section className="breadcrumb-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="breadcrumb-content">
                    <div>
                      <h2><img src="../assets/images/breadcrumb-title.png" className="img-fluid" alt="title-effect" />Services
                      </h2>
                      <p><i className="ri-subtract-line" />We offer AI-driven solutions and consulting services
                        designed to optimize your stroke rehabilitation journey and enhance patient care.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 d-lg-inline-block d-none">
                  <div className="breadcrumb-img">
                    <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/service-vector.svg" className="img-fluid" alt="service" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* breadcrumb section end */}
          {/* service section start */}
          <section className="feature-section pb-0">
            <div className="container pb-md-5 pb-0">
              <div className="title-basic fs-sm">
                <h2 className="text-white">A comprehensive suite of features to support
                  stroke recovery and patient management.</h2>
              </div>
              <ul className="tab-section">
                <li className="active"><a href="#">Quick service</a></li>
                <li><a href="#">Recommendations</a></li>
                <li><a href="#">Adaptive Exercises</a></li>
                <li><a href="#">Rehabilitation Guide</a></li>
                <li><a href="#">Improvement Analysis</a></li>
                <li><a href="#">Exercise Tracker</a></li>
              </ul>
              <div className="container">
                <div className="swiper featureSlider">
                  <div id="featureSlider" className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="row g-xxl-5 g-4">
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                          <div className="feature-box">
                            <div className="feature-top">
                              <div className="feature-icon">
                                <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/feature/message.svg" className="img-fluid outline-icon" alt="" />
                                <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/feature/message-bold.svg" className="img-fluid bold-icon" alt="" />
                              </div>
                              <h3>Personalized Recommendations</h3>
                            </div>
                            <h4>Ask anything about your recovery journey, and let our AI provide tailored
                              advice
                              just for you!</h4>
                            <div data-cursor="pointer" className="link-overflow"><a href="service.html">Read
                                more <i className="iconsax" data-icon="arrow-right" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                          <div className="feature-box">
                            <div className="feature-top">
                              <div className="feature-icon">
                                <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/feature/code.svg" className="img-fluid outline-icon" alt="" />
                                <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/feature/code-bold.svg" className="img-fluid bold-icon" alt="" />
                              </div>
                              <h3>Secure Data Storage</h3>
                            </div>
                            <h4>Keep your recovery data safe and accessible, ensuring personalized care at
                              every
                              step.
                            </h4>
                            <div data-cursor="pointer" className="link-overflow"><a href="service.html">Read
                                more <i className="iconsax" data-icon="arrow-right" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                          <div className="feature-box">
                            <div className="feature-top">
                              <div className="feature-icon">
                                <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/feature/play.svg" className="img-fluid outline-icon" alt="" />
                                <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/feature/play-bold.svg" className="img-fluid bold-icon" alt="" />
                              </div>
                              <h3>Adaptive Exercises</h3>
                            </div>
                            <h4>Receive exercise recommendations that evolve with your progress for maximum
                              effectiveness.</h4>
                            <div data-cursor="pointer" className="link-overflow"><a href="service.html">Read
                                more <i className="iconsax" data-icon="arrow-right" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                          <div className="feature-box">
                            <div className="feature-top">
                              <div className="feature-icon">
                                <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/feature/insta.svg" className="img-fluid outline-icon" alt="" />
                                <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/feature/insta-bold.svg" className="img-fluid bold-icon" alt="" />
                              </div>
                              <h3>Rehabilitation Guide</h3>
                            </div>
                            <h4>Access expert guidance to optimize your recovery and regain strength with
                              every
                              move.</h4>
                            <div data-cursor="pointer" className="link-overflow"><a href="service.html">Read
                                more <i className="iconsax" data-icon="arrow-right" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                          <div className="feature-box">
                            <div className="feature-top">
                              <div className="feature-icon">
                                <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/feature/mail.svg" className="img-fluid outline-icon" alt="" />
                                <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/feature/mail-bold.svg" className="img-fluid bold-icon" alt="" />
                              </div>
                              <h3>Improvement Analysis</h3>
                            </div>
                            <h4>Evaluate your progress regularly and adjust your routine to stay on the path
                              to
                              recovery.
                            </h4>
                            <div data-cursor="pointer" className="link-overflow"><a href="service.html">Read
                                more <i className="iconsax" data-icon="arrow-right" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                          <div className="feature-box">
                            <div className="feature-top">
                              <div className="feature-icon">
                                <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/feature/hashtag.svg" className="img-fluid outline-icon" alt="" />
                                <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/feature/hashtag-bold.svg" className="img-fluid bold-icon" alt="" />
                              </div>
                              <h3>Progress Dashboard</h3>
                            </div>
                            <h4>Visualize your achievements and track improvements with clear, insightful
                              metrics.
                            </h4>
                            <div data-cursor="pointer" className="link-overflow"><a href="service.html">Read
                                more <i className="iconsax" data-icon="arrow-right" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                          <div className="feature-box">
                            <div className="feature-top">
                              <div className="feature-icon">
                                <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/feature/box.svg" className="img-fluid outline-icon" alt="" />
                                <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/feature/box-bold.svg" className="img-fluid bold-icon" alt="" />
                              </div>
                              <h3>Personal Bests</h3>
                            </div>
                            <h4>Celebrate your milestones and set new goals with each personal best you
                              achieve.
                            </h4>
                            <div data-cursor="pointer" className="link-overflow"><a href="service.html">Read
                                more <i className="iconsax" data-icon="arrow-right" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                          <div className="feature-box">
                            <div className="feature-top">
                              <div className="feature-icon">
                                <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/feature/marketing.svg" className="img-fluid outline-icon" alt="" />
                                <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/feature/marketing-bold.svg" className="img-fluid bold-icon" alt="" />
                              </div>
                              <h3>Exercise Tracker</h3>
                            </div>
                            <h4>Monitor your progress with precision, ensuring each session brings you
                              closer to
                              your goals.</h4>
                            <div data-cursor="pointer" className="link-overflow"><a href="service.html">Read
                                more <i className="iconsax" data-icon="arrow-right" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination feature-pagination" />
            </div>
          </section>
          {/* service section end */}
          {/* contact us start */}
          <section className="info-section section-b-space">
            <div className="container">
              <div className="info-box" data-aos="fade-in" data-aos-duration={1000} data-aos-delay={100}>
                <div className="hand-effect d-md-block d-none">
                  <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/hand.svg" className="img-fluid left-hand" alt="hand" />
                  <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/hand.svg" className="img-fluid right-hand" alt="hand" />
                </div>
                <h2>Ready to <span>move <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/title-effect.svg" className="img-fluid" alt="title-effect" /></span>
                  ahead?</h2>
                <p>Unlock the power of AlignAI and take control of your rehabilitation with cutting-edge technology
                  designed
                  for personalized care. Embrace a smarter recovery today and discover what's possible with AlignAI by
                  your side.</p>
                <ul>
                  <li><img src="https://themes.pixelstrap.net/mega_bot/assets/svg/tick.svg" className="img-fluid" alt="tick" />Personalized exercise plans tailored to your needs</li>
                  <li><img src="https://themes.pixelstrap.net/mega_bot/assets/svg/tick.svg" className="img-fluid" alt="tick" />Track your progress with real-time insights</li>
                  <li><img src="https://themes.pixelstrap.net/mega_bot/assets/svg/tick.svg" className="img-fluid" alt="tick" />Easy-to-use interface for everyone</li>
                  <li><img src="https://themes.pixelstrap.net/mega_bot/assets/svg/tick.svg" className="img-fluid" alt="tick" /> 24/7 support and guidance</li>
                </ul>
                <a data-cursor="pointer" className="btn-arrow" href="#">
                  <div className="icon-arrow"><i className="iconsax" data-icon="arrow-up" /></div>Contact us now
                </a>
              </div>
            </div>
          </section>
          {/* contact us end */}
          {/* footer section start*/}
          <footer>
            <div className="container">
              <div className="footer-row">
                <div className="footer-main">
                  <h2>AlignAI</h2>
                  <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
                  <form>
                    <div className="input-group">
                      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your mail" />
                      <a href="#" data-cursor="pointer" className="btn-basic">Subscribe</a>
                    </div>
                  </form>
                  <ul className="social-links">
                    <li><a data-cursor="pointer" href="https://www.facebook.com/"><img src="https://themes.pixelstrap.net/mega_bot/assets/svg/social/fb.svg" className="img-fluid" alt="facebook" /></a></li>
                    <li><a data-cursor="pointer" href="https://in.linkedin.com/"><img src="https://themes.pixelstrap.net/mega_bot/assets/svg/social/linkedin.svg" className="img-fluid" alt="linkedin" /></a></li>
                    <li><a data-cursor="pointer" href="https://www.instagram.com/"><img src="https://themes.pixelstrap.net/mega_bot/assets/svg/social/insta.svg" className="img-fluid" alt="insta" /></a></li>
                    <li><a data-cursor="pointer" href="https://twitter.com/login"><img src="https://themes.pixelstrap.net/mega_bot/assets/svg/social/twitter.svg" className="img-fluid" alt="twitter" /></a></li>
                  </ul>
                </div>
                <div className="link-section">
                  <div className="footer-title">
                    <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/star.svg" className="img-fluid" alt="star" />
                    Quick Link
                  </div>
                  <div className="footer-content">
                    <ul>
                      <li><a data-cursor="pointer" href="index.html">Home</a></li>
                      <li><a data-cursor="pointer" href="service.html">Service</a></li>
                      <li><a data-cursor="pointer" href="terms.html">Terms</a></li>
                    </ul>
                  </div>
                </div>
                <div className="link-section">
                  <div className="footer-title">
                    <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/star.svg" className="img-fluid" alt="star" />
                    Our service
                  </div>
                  <div className="footer-content">
                    <ul>
                      <li><a data-cursor="pointer" href="chat.html">Recommendations</a></li>
                      <li><a data-cursor="pointer" href="chat.html">Exercise tracker</a></li>
                      <li><a data-cursor="pointer" href="chat.html">Rehabilitation guide</a></li>
                    </ul>
                  </div>
                </div>
                <div className="link-section">
                  <div className="footer-title">
                    <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/star.svg" className="img-fluid" alt="star" />
                    Our company
                  </div>
                  <div className="footer-content">
                    <ul>
                      <li><a data-cursor="pointer" href="login.html">Login</a></li>
                      <li><a data-cursor="pointer" href="contact-us.html">Contact us</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-copyright">
                <h4>@2024 All the Copyright Reserved by Husnain Mazhar.</h4>
                <ul className="footer-links">
                  <li><a href="terms.html">Privacy Policy </a></li>
                  <li><a href="terms.html">Terms &amp; Condition </a></li>
                </ul>
              </div>
            </div>
          </footer>
          {/* footer section end*/}
          {/* Tap To Top Button Start */}
          <div className="tap-to-top-box hide">
            <button className="tap-to-top-button"><i className="iconsax" data-icon="chevron-up" /></button>
          </div>
          {/* Tap To Top Button End */}
          {/*custom cursor start  */}
          <div id="cursor" />
          <div id="cursor-border" />
          {/*custom cursor start  */}
          {/* Bootstrap js*/}
          {/* slider js*/}
          {/* custom cursor */}
          {/* aos animation */}
          {/* iconsax js */}
          {/* header sticky js */}
          {/* Theme js*/}
        </div>
      );
    }
  });