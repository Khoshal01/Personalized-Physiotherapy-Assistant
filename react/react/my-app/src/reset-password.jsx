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
          {/* section start */}
          <section className="login-section section-b-space">
            <a href="index.html"><img src="https://themes.pixelstrap.net/mega_bot/assets/images/logo.svg" className="img-fluid logo-auth" /></a>
            <div className="row m-0">
              <div className="col-lg-7 d-sm-block d-none p-0">
                <div className="login-animation">
                  <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/auth/1.svg" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={100} className="img-fluid img-base" alt="" />
                  <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/auth/2.svg" data-aos="zoom-in-up" data-aos-duration={1000} data-aos-delay={1000} className="img-fluid img-light" alt="" />
                  <div className="img-face" data-aos-delay={2500} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration={1000}> <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/auth/3.svg" className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-lg-5 ms-auto p-0">
                <div className="login-box mt-sm-0">
                  <div>
                    <h2><span>Reset password</span></h2>
                    <p>When you provide your email address, we'll send you a message with information on how to
                      reset.</p>
                    <form className="auth-form">
                      <div className="mb-3 form-group">
                        <i className="iconsax" data-icon="mail" />
                        <label htmlFor="emailid" className="form-label">Email ID</label>
                        <input type="email" placeholder="Enter your mail id" className="form-control" id="emailid" />
                      </div>
                      <a href="otp.html" data-cursor="pointer" className="btn-solid btn-absolute text-center mt-3">Reset
                        Password</a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* section end */}
          {/*custom cursor start  */}
          <div id="cursor" />
          <div id="cursor-border" />
          {/*custom cursor start  */}
          {/* Bootstrap js*/}
          {/* slider js*/}
          {/* custom cursor */}
          {/* aos animation */}
          {/* iconsax js */}
          {/* Theme js*/}
        </div>
      );
    }
  });