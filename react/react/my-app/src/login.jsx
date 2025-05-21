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
          <title>Megabot</title>
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
          {/* login section start */}
          <section className="login-section">
            <a href="index.html"><img src="https://themes.pixelstrap.net/mega_bot/assets/images/logo.svg" className="img-fluid logo-auth" /></a>
            <div className="row m-0">
              <div className="col-lg-7 d-lg-inline-block d-none p-0">
                <div className="login-animation">
                  <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/auth/1.svg" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={100} className="img-fluid img-base" alt="" />
                  <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/auth/2.svg" data-aos="zoom-in-up" data-aos-duration={1000} data-aos-delay={1000} className="img-fluid img-light" alt="" />
                  <div className="img-face" data-aos-delay={2500} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration={1000}> <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/auth/3.svg" className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-lg-5 ms-auto p-0">
                <div className="login-box">
                  <div>
                    <h2>Welcome to <span>Megabot !</span></h2>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="login-tab" data-bs-toggle="tab" data-bs-target="#login-tab-pane" type="button" role="tab" aria-controls="login-tab-pane" aria-selected="true">Login</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="signup-tab" data-bs-toggle="tab" data-bs-target="#signup-tab-pane" type="button" role="tab" aria-controls="signup-tab-pane" aria-selected="false">signup</button>
                      </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                      <div className="tab-pane fade show active" id="login-tab-pane" role="tabpanel" aria-labelledby="login-tab" tabIndex={0}>
                        <form className="auth-form">
                          <div className="mb-3 form-group">
                            <i className="iconsax" data-icon="mail" />
                            <label htmlFor="emailid_signin" className="form-label">Email ID</label>
                            <input type="email" placeholder="Enter your mail id" className="form-control" id="emailid_signin" />
                          </div>
                          <div className="mb-2 form-group">
                            <i className="iconsax" data-icon="lock-2" />
                            <label htmlFor="password_signin" className="form-label">Password</label>
                            <input placeholder="Enter your password" type="password" className="form-control" id="password_signin" />
                          </div>
                          <div className="text-end">
                            <a data-cursor="pointer" href="reset-password.html">Forget Password?</a>
                          </div>
                          <a href="javascript:void(0)" onclick="login()" data-cursor="pointer" className="btn-solid w-100 text-center mt-3">Log me
                            in</a>
                          <h4 className="text-title text-center mt-2">Don’t have an account ? <a data-cursor="pointer" onclick="signupClick()" href="javascript:void(0)">Sign
                              up</a>
                          </h4>
                          <div className="divider">
                            <h3>or sign in with</h3>
                          </div>
                          <ul className="social-btn">
                            <li><a data-cursor="pointer" href="https://www.google.com/"><img src="https://themes.pixelstrap.net/mega_bot/assets/svg/google.svg" className="img-fluid" />Continue with
                                google</a></li>
                            <li><a data-cursor="pointer" href="https://www.apple.com/"><img src="https://themes.pixelstrap.net/mega_bot/assets/svg/apple.svg" className="img-fluid" />Continue with
                                apple</a></li>
                          </ul>
                        </form>
                      </div>
                      <div className="tab-pane fade" id="signup-tab-pane" role="tabpanel" aria-labelledby="signup-tab" tabIndex={0}>
                        <form className="auth-form">
                          <div className="mb-3 form-group">
                            <i className="iconsax" data-icon="user-1" />
                            <label htmlFor="name_signup" className="form-label">Name</label>
                            <input type="name" placeholder="Enter your name" className="form-control" id="name_signup" />
                          </div>
                          <div className="mb-3 form-group">
                            <i className="iconsax" data-icon="mail" />
                            <label htmlFor="emailid_signup" className="form-label">Email ID</label>
                            <input type="email" placeholder="Enter your mail id" className="form-control" id="emailid_signup" />
                          </div>
                          <div className="mb-3 form-group">
                            <i className="iconsax" data-icon="lock-2" />
                            <label htmlFor="password_signup" className="form-label">Password</label>
                            <input placeholder="Enter your password" type="password" className="form-control" id="password_signup" />
                          </div>
                          <div className="mb-3 form-group">
                            <i className="iconsax" data-icon="lock-2" />
                            <label htmlFor="password1" className="form-label">Confirm Password</label>
                            <input placeholder="Enter your password" type="password" className="form-control" id="password1" />
                          </div>
                          <a href="javascript:void(0)" onclick="signup()" data-cursor="pointer" className="btn-solid w-100 text-center mt-4">Sign
                            up</a>
                          <h4 className="text-title text-center mt-2">Already have an account <a data-cursor="pointer" onclick="loginClick()" href="javascript:void(0)">Sign
                              in</a>
                          </h4>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* login section end */}
          {/*custom cursor start  */}
          <div id="cursor" />
          <div id="cursor-border" />
          {/*custom cursor start  */}
          {/* Bootstrap js*/}
          {/* slider js*/}
          {/* custom cursor */}
          {/* aos animation */}
          {/* iconsax js */}
          {/* tab js*/}
          {/* Theme js*/}
        </div>
      );
    }
  });