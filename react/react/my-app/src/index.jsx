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
            <a href="index.html">
              <div style={{display: 'flex', alignItems: 'center'}}>
                <img src="../assets/images/favicon.png" className="img-fluid" alt="logo" style={{marginRight: '10px'}} />
                <h2>AlignAI</h2>
              </div>
            </a>
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
          {/* home section start */}
          <section className="home-section">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="home-content">
                    <div className="bg-effect">
                      <img src="../assets/images/home/home-bg.gif" className="img-fluid bg-gif" alt="" />
                      <img src="../assets/svg/home/1.png" className="img-fluid effect1 rotate-effect" alt="" />
                      <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/home/2.svg" className="img-fluid effect2 rotate-effect" alt="" />
                    </div>
                    <div>
                      <h1>Revolutionize Stroke <div className="title-effect">
                          <img src="../assets/images/title-effect.png" alt="" /><span>Rehabilitation</span>
                        </div> with AlignAI </h1>
                      <p>
                        AlignAI combines cutting-edge AI technology with personalized
                        physiotherapy to transform the way stroke patients recover.
                        Our platform offers real-time feedback, detailed progress tracking,
                        and tailored exercise recommendations to help you achieve
                        your rehabilitation goals efficiently.
                      </p>
                    </div>
                  </div>
                  <div className="home-laptop px-md-0 px-3">
                    <div className="laptop-sec position-relative">
                      <div className="hand-sec">
                        <img src="../assets/images/home/hand.png" className="img-fluid left-hand" alt="hand" />
                        <img src="../assets/images/home/hand.png" className="img-fluid right-hand" alt="hand" />
                        <img src="../assets/images/home/finger.png" className="img-fluid left-finger" alt="hand" />
                        <img src="../assets/images/home/finger.png" className="img-fluid right-finger" alt="hand" />
                      </div>
                      <img src="../assets/images/home/laptop.png" className="img-fluid laptop-img" alt="laptop" />
                    </div>
                    <div className="home-info">
                      <ul className="info-list">
                        <li>Ask about stroke </li>
                        <li>Monitor exercises</li>
                      </ul>
                      <ul className="star-rating">
                        <li><i className="ri-star-fill" /></li>
                        <li><i className="ri-star-fill" /></li>
                        <li><i className="ri-star-fill" /></li>
                        <li><i className="ri-star-fill" /></li>
                        <li><i className="ri-star-fill" /></li>
                      </ul>
                      <h4>A technique to monitor
                        all of your exercises better than the physcial physiotherpist.</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* home section end */}
          {/* service section start */}
          <div className="service-section section-b-space">
            <div className="container">
              <div className="row g-5">
                <div className="col-lg-6">
                  <div className="row g-4 service-row">
                    <div className="col-sm-6">
                      <div className="service-box">
                        <div className="service-icon">
                          <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/service/copy.svg" className="img-fluid outline-icon" alt="" />
                          <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/service/copy-bold.svg" className="img-fluid bold-icon" alt="" />
                        </div>
                        <div className="service-content">
                          <h3><img src="https://themes.pixelstrap.net/mega_bot/assets/svg/service-title.svg" alt="effect" className="img-fluid" />Personalized Plans</h3>
                          <p>Tailored exercises to match your unique stroke recovery needs.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="service-box">
                        <div className="service-icon">
                          <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/service/graph.svg" className="img-fluid outline-icon" alt="" />
                          <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/service/graph-bold.svg" className="img-fluid bold-icon" alt="" />
                        </div>
                        <div className="service-content">
                          <h3><img src="https://themes.pixelstrap.net/mega_bot/assets/svg/service-title.svg" alt="effect" className="img-fluid" />Real-Time
                            Tracking</h3>
                          <p>Monitor exercise performance and see progress instantly after each session.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="service-box">
                        <div className="service-icon">
                          <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/service/search.svg" className="img-fluid outline-icon" alt="" />
                          <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/service/search-bold.svg" className="img-fluid bold-icon" alt="" />
                        </div>
                        <div className="service-content">
                          <h3><img src="https://themes.pixelstrap.net/mega_bot/assets/svg/service-title.svg" alt="effect" className="img-fluid" />Progress
                            Dashboard</h3>
                          <p>Visualize improvements with clear metrics and celebrate personal milestones.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="service-box">
                        <div className="service-icon">
                          <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/service/text.svg" className="img-fluid outline-icon" alt="" />
                          <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/service/text-bold.svg" className="img-fluid bold-icon" alt="" />
                        </div>
                        <div className="service-content">
                          <h3><img src="https://themes.pixelstrap.net/mega_bot/assets/svg/service-title.svg" alt="effect" className="img-fluid" />Secure Data
                            Storage</h3>
                          <p>Your progress data is safely stored, accessible anytime for review.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="service-info">
                    <div>
                      <div className="title">
                        <h2>For Stroke Recovery Patients</h2>
                        <h3>In the journey of recovery, AlignAI supports every step you take.</h3>
                      </div>
                      <p>Introducing a revolutionary AI partner for stroke recovery—a groundbreaking
                        tool designed to transform your rehabilitation experience. Empower your
                        recovery process as you explore personalized, adaptive exercises.
                        Say goodbye to uncertainty, and let this remarkable AI companion
                        guide you to a new era of effective rehabilitation and renewed hope.</p>
                      <a data-cursor="pointer" className="btn-arrow" href="#">
                        <div className="icon-arrow"><i className="iconsax" data-icon="arrow-up" /></div>View all
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* service section end */}
          {/* about section start */}
          <section className="about-section section-b-space section-mb-space">
            <div className="bg-effect" data-aos="fade-left" data-aos-duration={1000} data-aos-delay={500} />
            <div className="container">
              <div className="row g-md-5 g-4">
                <div className="col-lg-6 order-lg-0 order-1">
                  <div className="about-content">
                    <div>
                      <div className="title">
                        <span className="number-pattern">01.</span>
                        <h2 className="text-white">AlignAI: Personalized Stroke Recovery in One Click</h2>
                      </div>
                      <p>Revolutionize your rehabilitation with customized plans tailored just for you.
                        AlignAI understands your unique journey and crafts a recovery path that suits your
                        needs.</p>
                      <ul>
                        <li><img src="https://themes.pixelstrap.net/mega_bot/assets/svg/tick.svg" className="img-fluid" alt="tick" />Get personalized
                          exercise recommendations based on your progress</li>
                        <li><img src="https://themes.pixelstrap.net/mega_bot/assets/svg/tick.svg" className="img-fluid" alt="tick" />Engage with
                          adaptive exercises designed to enhance your recovery. </li>
                        <li><img src="https://themes.pixelstrap.net/mega_bot/assets/svg/tick.svg" className="img-fluid" alt="tick" />Track your
                          improvements effortlessly with real-time feedback and guidance.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-img">
                    <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/character/1.svg" className="img-fluid" alt="about" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* about section end */}
          {/* about section start */}
          <section className="about-section right-version section-b-space section-mb-space">
            <div className="bg-effect" data-aos="fade-right" data-aos-duration={1000} data-aos-delay={500} />
            <div className="container">
              <div className="row g-md-5 g-4">
                <div className="col-lg-6">
                  <div className="about-img">
                    <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/character/2.svg" className="img-fluid" alt="about" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-content">
                    <div>
                      <div className="title">
                        <span className="number-pattern">02.</span>
                        <h2>Transform Your Stroke Recovery with Precision Tracking</h2>
                      </div>
                      <p>"Unlock Recovery Potential: Tailor Your Exercises to Achieve
                        Better Results! Discover What Works Best for You with AlignAI.!"</p>
                      <ul>
                        <li><img src="https://themes.pixelstrap.net/mega_bot/assets/svg/tick.svg" className="img-fluid" alt="tick" />Gain valuable insights
                          into your daily, weekly, and monthly progress.</li>
                        <li><img src="https://themes.pixelstrap.net/mega_bot/assets/svg/tick.svg" className="img-fluid" alt="tick" /> Visualize your
                          improvement with metrics that matter most.</li>
                        <li><img src="https://themes.pixelstrap.net/mega_bot/assets/svg/tick.svg" className="img-fluid" alt="tick" />Identify the
                          exercises that bring the best results and adjust as needed. </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* about section end */}
          {/* about section start */}
          <section className="about-section section-b-space">
            <div className="bg-effect" data-aos="fade-left" data-aos-duration={1000} data-aos-delay={500} />
            <div className="container">
              <div className="row g-md-5 g-4">
                <div className="col-lg-6 order-lg-0 order-1">
                  <div className="about-content">
                    <div>
                      <div className="title">
                        <span className="number-pattern">03.</span>
                        <h2 className="text-white"> Your Secure Companion for Stroke Rehabilitation!</h2>
                      </div>
                      <p>Experience peace of mind with AlignAI’s secure and personalized data storage.
                        Your progress is safely recorded, providing you with a reliable recovery journey.</p>
                      <ul>
                        <li><img src="https://themes.pixelstrap.net/mega_bot/assets/svg/tick.svg" className="img-fluid" alt="tick" />Keep your personal
                          recovery data secure and accessible anytime. </li>
                        <li><img src="https://themes.pixelstrap.net/mega_bot/assets/svg/tick.svg" className="img-fluid" alt="tick" />Easily review
                          past performance and plan future exercises.</li>
                        <li><img src="https://themes.pixelstrap.net/mega_bot/assets/svg/tick.svg" className="img-fluid" alt="tick" />Enjoy a tailored
                          rehabilitation experience with all your data in one place.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-img">
                    <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/character/3.svg" className="img-fluid" alt="about" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* about section end */}
          {/* feature section start */}
          <section className="feature-section section-b-space">
            <div className="bg-effect">
              <img src="../assets/images/feature.gif" className="img-fluid feature-left" alt="" />
              <img src="../assets/images/feature.gif" className="img-fluid feature-right" alt="" />
              <img src="../assets/images/feature-bg.png" className="img-fluid feature-bg" alt="" />
              <span className="round-effect" />
            </div>
            <div className="container">
              <div className="title-basic">
                <h2>Unlock Limitless Potential with AlignAI’s Versatile Features
                </h2>
              </div>
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
                          <h4>Ask anything about your recovery journey, and let our AI provide tailored advice
                            just for you!</h4>
                          <div data-cursor="pointer" className="link-overflow"><a href="service.html">Read more <i className="iconsax" data-icon="arrow-right" /></a>
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
                          <h4>Keep your recovery data safe and accessible, ensuring personalized care at every
                            step.
                          </h4>
                          <div data-cursor="pointer" className="link-overflow"><a href="service.html">Read more <i className="iconsax" data-icon="arrow-right" /></a>
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
                          <div data-cursor="pointer" className="link-overflow"><a href="service.html">Read more <i className="iconsax" data-icon="arrow-right" /></a>
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
                          <h4>Access expert guidance to optimize your recovery and regain strength with every
                            move.</h4>
                          <div data-cursor="pointer" className="link-overflow"><a href="service.html">Read more <i className="iconsax" data-icon="arrow-right" /></a>
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
                          <h4>Evaluate your progress regularly and adjust your routine to stay on the path to
                            recovery.
                          </h4>
                          <div data-cursor="pointer" className="link-overflow"><a href="service.html">Read more <i className="iconsax" data-icon="arrow-right" /></a>
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
                          <div data-cursor="pointer" className="link-overflow"><a href="service.html">Read more <i className="iconsax" data-icon="arrow-right" /></a>
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
                          <h4>Celebrate your milestones and set new goals with each personal best you achieve.
                          </h4>
                          <div data-cursor="pointer" className="link-overflow"><a href="service.html">Read more <i className="iconsax" data-icon="arrow-right" /></a>
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
                          <h4>Monitor your progress with precision, ensuring each session brings you closer to
                            your goals.</h4>
                          <div data-cursor="pointer" className="link-overflow"><a href="service.html">Read more <i className="iconsax" data-icon="arrow-right" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination feature-pagination" />
          </section>
          {/* feature section end */}
          {/* testimonial section start */}
          <section className="testimonial-section section-b-space">
            <div className="container">
              <div className="title-basic">
                <h2>Check out how much AlignAI is loved
                  by our users!</h2>
              </div>
              <div className="swiper testimonialSlider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testimonial-box">
                      <div className="content-sec">
                        <div className="quote-img">
                          <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/quote.svg" className="img-fluid outline-img" alt="" />
                          <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/quote-green.svg" className="img-fluid fill-img" alt="" />
                        </div>
                        <p> As a stroke survivor, I was struggling with my rehabilitation exercises.
                          AlignAI has been a game-changer, providing personalized guidance that
                          has significantly improved my recovery process.
                        </p>
                      </div>
                      <div className="small-circle"><span /></div>
                      <div className="large-circle"><span /></div>
                      <div className="avtar-img">
                        <img src="../assets/images/user/ammad.png" className="img-fluid" alt="user" />
                      </div>
                      <h4>Ammad Bin Shahid</h4>
                      <h5>Carpenter</h5>
                    </div>
                  </div>
                  <div className="swiper-slide" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={400}>
                    <div className="testimonial-box">
                      <div className="content-sec">
                        <div className="quote-img">
                          <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/quote.svg" className="img-fluid outline-img" alt="" />
                          <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/quote-green.svg" className="img-fluid fill-img" alt="" />
                        </div>
                        <p>Using AlignAI, I can clearly track my improvements over time. The progress dashboard
                          motivates me to keep going, and the adaptive exercises are just what I needed.
                        </p>
                      </div>
                      <div className="small-circle"><span /></div>
                      <div className="large-circle"><span /></div>
                      <div className="avtar-img">
                        <img src="../assets/images/user/faraz.png" className="img-fluid" alt="user" />
                      </div>
                      <h4>Ahmad Faraz</h4>
                      <h5>Programmer</h5>
                    </div>
                  </div>
                  <div className="swiper-slide" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={500}>
                    <div className="testimonial-box">
                      <div className="content-sec">
                        <div className="quote-img">
                          <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/quote.svg" className="img-fluid outline-img" alt="" />
                          <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/quote-green.svg" className="img-fluid fill-img" alt="" />
                        </div>
                        <p>I was unsure about how to approach my recovery until I started using AlignAI.
                          The personalized recommendations and rehabilitation guide have given me confidence
                          and direction.
                        </p>
                      </div>
                      <div className="small-circle"><span /></div>
                      <div className="large-circle"><span /></div>
                      <div className="avtar-img">
                        <img src="../assets/images/user/umer.png" className="img-fluid" alt="user" />
                      </div>
                      <h4>Umer Farooq</h4>
                      <h5>Office Manager</h5>
                    </div>
                  </div>
                  <div className="swiper-slide" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={200}>
                    <div className="testimonial-box">
                      <div className="content-sec">
                        <div className="quote-img">
                          <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/quote.svg" className="img-fluid outline-img" alt="" />
                          <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/quote-green.svg" className="img-fluid fill-img" alt="" />
                        </div>
                        <p>AlignAI's secure data storage and improvement analysis help me stay on top of my
                          progress.
                          It's like having a personal physiotherapist with me at all times.
                        </p>
                      </div>
                      <div className="small-circle"><span /></div>
                      <div className="large-circle"><span /></div>
                      <div className="avtar-img">
                        <img src="../assets/images/user/husnain.png" className="img-fluid" alt="user" />
                      </div>
                      <h4>Husnain Ahmad</h4>
                      <h5>Content writer</h5>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination" />
              </div>
            </div>
          </section>
          {/* testimonial section end */}
          {/* faq section start */}
          <section className="faq-section">
            <div className="container">
              <div className="title-basic">
                <h2 className="text-white">Have inquiries? In our FAQ, you'll find all the solutions you need.</h2>
              </div>
              <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                    <button data-cursor="pointer" className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                      How does AlignAI help in stroke recovery?
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div className="accordion-body">
                      <p>AlignAI provides personalized exercise recommendations and monitors your progress over
                        time,
                        helping you stay on track with your rehabilitation journey. </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                    <button data-cursor="pointer" className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                      Is AlignAI suitable for all stages of recovery?
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                    <div className="accordion-body">
                      Yes, AlignAI adapts to your individual progress, offering exercises and guidance that match
                      your
                      current abilities and gradually increase in difficulty.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                    <button data-cursor="pointer" className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                      How does AlignAI track my improvement?
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div className="accordion-body">
                      Using computer vision, AlignAI analyzes your movements during exercises and stores data in a
                      secure database. It then visualizes your progress on a dashboard, showing improvements in
                      areas
                      like range of motion and speed.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                    <button data-cursor="pointer" className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                      Can I use AlignAI if I’m not tech-savvy?
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                    <div className="accordion-body">
                      Absolutely! AlignAI is designed with a user-friendly interface, making it easy for anyone to
                      use,
                      regardless of their technical skills.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="panelsStayOpen-headingFive">
                    <button data-cursor="pointer" className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                      Is my personal information safe with AlignAI?
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
                    <div className="accordion-body">
                      Yes, your data is securely stored, and we take privacy very seriously, ensuring that your
                      personal information remains confidential.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="panelsStayOpen-headingSix">
                    <button data-cursor="pointer" className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                      What happens if I don’t see improvement?
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSix">
                    <div className="accordion-body">
                      After 15 days, AlignAI evaluates your progress. If improvement is minimal, our LLM may
                      suggest easier exercises to help you gradually build up your strength.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="panelsStayOpen-headingSix">
                    <button data-cursor="pointer" className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                      Can I access AlignAI on multiple devices?
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSix">
                    <div className="accordion-body">
                      Yes, AlignAI is accessible across different devices, allowing you to continue your recovery
                      journey whether you’re at home or on the go.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* faq section end */}
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
          {/* laptop animation js */}
          {/* header sticky js */}
          {/* pricing js */}
          {/* Theme js*/}
        </div>
      );
    }
  });