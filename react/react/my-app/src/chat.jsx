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
          <section className="chatting-wrapper pt-0">
            <nav className="navbar navbar-expand-md p-0">
              <button className="navbar-toggler d-none" type="button" data-bs-toggle="collapse" data-bs-target="#mainnavbarNav" aria-controls="mainnavbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i className="iconsax" data-icon="text-align-justify" />
              </button>
              <div className="collapse navbar-collapse" id="mainnavbarNav">
                <div className="menu-panel">
                  <button data-bs-toggle="collapse" data-bs-target="#mainnavbarNav" className="mainnav-close d-block d-md-none"><i className="iconsax" data-icon="close-circle" />
                  </button>
                  <a href="index.html" className="logo-icon d-none d-md-flex">
                    <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/logo-icon.svg" className="img-fluid" />
                  </a>
                  <ul className="nav nav-tabs menu-wrapper" id="myTab" role="tablist">
                    <li data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Chat" className="nav-item" role="presentation">
                      <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#chat" type="button" role="tab" aria-controls="chat" aria-selected="true"><i className="iconsax" data-icon="messages-2" />
                        <span>Chat</span> </button>
                    </li>
                    <li data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="History" className="nav-item" role="presentation">
                      <button className="nav-link" data-bs-toggle="tab" data-bs-target="#history" type="button" role="tab" aria-controls="history" aria-selected="false"><i className="iconsax" data-icon="refresh-circle" />
                        <span>History</span> </button>
                    </li>
                    <li data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Subscription" className="nav-item" role="presentation">
                      <button className="nav-link" data-bs-toggle="tab" data-bs-target="#subscription" type="button" role="tab" aria-controls="subscription" aria-selected="false"><i className="iconsax" data-icon="crown-2" /> <span>Subscription</span></button>
                    </li>
                    <li data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Help" className="nav-item" role="presentation">
                      <button className="nav-link" data-bs-toggle="tab" data-bs-target="#help" type="button" role="tab" aria-controls="help" aria-selected="false"><i className="iconsax" data-icon="question-message
                                  " /> <span>Help</span> </button>
                    </li>
                    <li data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Ratings" className="nav-item" role="presentation">
                      <button type="button" className="btn btn-primary nav-link" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i className="iconsax" data-icon="star" /> <span>
                          Rating
                        </span>
                      </button>
                    </li>
                    <li data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Settings" className="nav-item" role="presentation">
                      <button className="nav-link" data-bs-toggle="tab" data-bs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false"><i className="iconsax" data-icon="setting-1" /><span>Setting</span></button>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="tab-content">
              <div className="tab-pane fade show active" id="chat" role="tabpanel" aria-labelledby="chat" tabIndex={0}>
                <div className="main-wrapper">
                  <nav className="navbar navbar-expand-lg bg-light p-0">
                    <button className="navbar-toggler d-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <i className="iconsax" data-icon="text-align-justify" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                      <div className="inner-menu-panel">
                        <button data-bs-toggle="collapse" data-bs-target="#navbarNav" className="inner-close d-block d-lg-none">Back
                        </button>
                        <div className="search-box">
                          <i className="iconsax" data-icon="search-normal-2" />
                          <input type="text" className="form-control" placeholder="Search here.." />
                        </div>
                        <ul className="inner-links-list" id="innerLink">
                          <li className="active"><a href="#!" data-title="Ask anything">Ask anything</a></li>
                          <li><a href="#!" data-title="Image generator">Image generator</a></li>
                          <li><a href="#!" data-title="Content writer">Content writer</a></li>
                          <li><a href="#!" data-title="Code generator">Code generator</a></li>
                          <li><a href="#!" data-title="Translate anything">Translate anything</a></li>
                          <li><a href="#!" data-title="Social media">Social media</a></li>
                          <li><a href="#!" data-title="Email generator">Email generator</a></li>
                          <li><a href="#!" data-title="Personal advise">Personal advise</a></li>
                          <li><a href="#!" data-title="Password generator">Password generator</a></li>
                          <li><a href="#!" data-title="Travel/hangout">Travel/hangout</a></li>
                          <li><a href="#!" data-title="Essay writer">Essay writer</a></li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                  <div className="chat-header">
                    <div className="d-flex align-items-center gap-2">
                      <button className="navbar-toggler d-md-none d-block" type="button" data-bs-toggle="collapse" data-bs-target="#mainnavbarNav" aria-controls="mainnavbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="iconsax" data-icon="text-align-justify" />
                      </button>
                      <a href="index.html" className="logo-icon d-flex d-md-none">
                        <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/logo-icon.svg" className="img-fluid" />
                      </a>
                      <h3 id="targetDiv">Ask anything</h3>
                    </div>
                    <div className="header-option">
                      <a className="del-btn" data-cursor="pointer" href="#"><i className="iconsax" data-icon="trash" /></a>
                      <a className="premium-btn" id="subscriptionBtn" data-cursor="pointer" href="#!"><i className="iconsax" data-icon="crown-2" /> Get
                        <span>premium</span></a>
                    </div>
                  </div>
                  <div className="main-chat">
                    <div className="no-chat">
                      <div>
                        <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/no-chat.svg" className="img-fluid" alt="" />
                        <h3>Ask anything to chatbot</h3>
                      </div>
                    </div>
                    <div className="msger-chat">
                    </div>
                    <form className="msger-inputarea">
                      <button className="navbar-toggler d-lg-none d-block msger-send-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="iconsax" data-icon="text-align-justify" />
                      </button>
                      <input type="text" className="msger-input" placeholder="Ask any question here..." />
                      <a href="#" className="scan-icon"><i className="iconsax" data-icon="scan-1" /></a>
                      <a href="#" className="mic-icon"><i className="iconsax" data-icon="mic-1" /></a>
                      <button type="submit" className="msger-send-btn"><i className="iconsax" data-icon="send-1" /></button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="history" role="tabpanel" aria-labelledby="history" tabIndex={0}>
                <div className="main-wrapper p-0">
                  <div className="fixed-header">
                    <div className="d-flex align-items-center gap-2">
                      <button className="navbar-toggler d-md-none d-block" type="button" data-bs-toggle="collapse" data-bs-target="#mainnavbarNav" aria-controls="mainnavbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="iconsax" data-icon="text-align-justify" />
                      </button>
                      <a href="index.html" className="logo-icon d-flex d-md-none">
                        <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/logo-icon.svg" className="img-fluid" />
                      </a>
                      <h3>History</h3>
                    </div>
                    <a className="premium-btn" data-cursor="pointer" href="#"><i className="iconsax" data-icon="crown-2" />
                      Get
                      <span>premium</span></a>
                  </div>
                  <div className="main-section">
                    <div className="container card p-0">
                      <div className="card-header">
                        <h3 className="text-white">Detailed History</h3>
                        <form className="auth-form d-none d-md-block">
                          <div className="form-group">
                            <i className="iconsax" data-icon="search-normal-2" />
                            <input type="search" className="form-control" placeholder="Search here" />
                          </div>
                        </form>
                      </div>
                      <div className="card-body px-sm-4 px-3">
                        <ul className="history-sec">
                          <li className="history-main">
                            <div className="history-detail text-truncate">
                              <i className="iconsax" data-icon="message-text" />
                              <div>
                                <p>What is app development ?</p>
                                <p className="d-sm-none d-inline-block">2 min ago</p>
                              </div>
                            </div>
                            <div className="history-time d-sm-flex d-none">
                              <ul>
                                <li>Chat</li>
                                <li>2 min ago</li>
                              </ul>
                            </div>
                          </li>
                          <li className="history-main">
                            <div className="history-detail text-truncate">
                              <i className="iconsax" data-icon="message-text" />
                              <div>
                                <p>Dino has sent you message.</p>
                                <p className="d-sm-none d-inline-block">50 min ago</p>
                              </div>
                            </div>
                            <div className="history-time d-sm-flex d-none">
                              <ul>
                                <li>Image</li>
                                <li>50 min ago</li>
                              </ul>
                            </div>
                          </li>
                          <li className="history-main">
                            <div className="history-detail text-truncate">
                              <i className="iconsax" data-icon="message-text" />
                              <div>
                                <p>Marvel has sent you an image.</p>
                                <p className="d-sm-none d-inline-block">Yesterday</p>
                              </div>
                            </div>
                            <div className="history-time d-sm-flex d-none">
                              <ul>
                                <li>Personal</li>
                                <li>Yesterday</li>
                              </ul>
                            </div>
                          </li>
                          <li className="history-main">
                            <div className="history-detail text-truncate">
                              <i className="iconsax" data-icon="message-text" />
                              <div>
                                <p>Wishes of father’s day</p>
                                <p className="d-sm-none d-inline-block">26 Mar, 2023</p>
                              </div>
                            </div>
                            <div className="history-time d-sm-flex d-none">
                              <ul>
                                <li>Translation</li>
                                <li>26 Mar, 2023</li>
                              </ul>
                            </div>
                          </li>
                          <li className="history-main">
                            <div className="history-detail text-truncate">
                              <i className="iconsax" data-icon="message-text" />
                              <div>
                                <p>Marvel has sent you an image.</p>
                                <p className="d-sm-none d-inline-block">25 Mar, 2023</p>
                              </div>
                            </div>
                            <div className="history-time d-sm-flex d-none">
                              <ul>
                                <li>Social media</li>
                                <li>25 Mar, 2023</li>
                              </ul>
                            </div>
                          </li>
                          <li className="history-main">
                            <div className="history-detail text-truncate">
                              <i className="iconsax" data-icon="message-text" />
                              <div>
                                <p>“How are you ?” Translate it</p>
                                <p className="d-sm-none d-inline-block"> 25 Mar, 2023</p>
                              </div>
                            </div>
                            <div className="history-time d-sm-flex d-none">
                              <ul>
                                <li>Essay writing</li>
                                <li> 25 Mar, 2023</li>
                              </ul>
                            </div>
                          </li>
                          <li className="history-main">
                            <div className="history-detail text-truncate">
                              <i className="iconsax" data-icon="message-text" />
                              <div>
                                <p>Include a hashtag in your caption for the goa photo and some music
                                  suggestions.</p>
                                <p className="d-sm-none d-inline-block">25 Mar, 2023</p>
                              </div>
                            </div>
                            <div className="history-time d-sm-flex d-none">
                              <ul>
                                <li>Chat</li>
                                <li>25 Mar, 2023</li>
                              </ul>
                            </div>
                          </li>
                          <li className="history-main">
                            <div className="history-detail text-truncate">
                              <i className="iconsax" data-icon="message-text" />
                              <div>
                                <p>Write essay about “Cow”</p>
                                <p className="d-sm-none d-inline-block">23 Mar, 2023</p>
                              </div>
                            </div>
                            <div className="history-time d-sm-flex d-none">
                              <ul>
                                <li>Image</li>
                                <li>23 Mar, 2023</li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="subscription" role="tabpanel" aria-labelledby="subscription" tabIndex={0}>
                <div className="main-wrapper p-0">
                  <div className="fixed-header">
                    <div className="d-flex align-items-center gap-2">
                      <button className="navbar-toggler d-md-none d-block" type="button" data-bs-toggle="collapse" data-bs-target="#mainnavbarNav" aria-controls="mainnavbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="iconsax" data-icon="text-align-justify" />
                      </button>
                      <a href="index.html" className="logo-icon d-flex d-md-none">
                        <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/logo-icon.svg" className="img-fluid" />
                      </a>
                      <h3>Subscription</h3>
                    </div>
                    <a className="premium-btn" data-cursor="pointer" href="#"><i className="iconsax" data-icon="crown-2" />
                      Get
                      <span>premium</span></a>
                  </div>
                  <div className="main-section">
                    <div className="container card p-0">
                      <div className="card-header">
                        <h3 className="text-white">Choose Period of Plan :</h3>
                        <div className="header-option d-none d-md-flex">
                          <label htmlFor="currency" className="form-label text-white">Currency :</label>
                          <select className="form-select" aria-label="Default select example" id="currency">
                            <option selected>Us Dollar</option>
                            <option value={1}>Euro</option>
                            <option value={2}>Yuan</option>
                          </select>
                        </div>
                      </div>
                      <div className="card-body px-sm-4 px-3">
                        <div className="row justify-content-center">
                          <div className="col-xl-4 col-md-6 col-12">
                            <div className="card inner-card">
                              <div className="card-header">
                                <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/pricing/weekly.svg" className="img-fluid" alt="" />
                                <h4 className="text-white mb-0">Weekly Plan</h4>
                              </div>
                              <div className="card-body">
                                <h3>$3.99 only/-</h3>
                                <ul>
                                  <li>Intelligent AI chatbot</li>
                                  <li>Unlimited answer of question</li>
                                  <li>Avoid buying coin forever</li>
                                  <li>No ad in background</li>
                                  <li>Early access to new features</li>
                                </ul>
                                <button className="select-plan ">
                                  <i className="iconsax" data-icon="thick-arrow-right" />
                                  Select this plan
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-md-6 col-12">
                            <div className="card inner-card">
                              <div className="card-header">
                                <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/pricing/monthly.svg" className="img-fluid" alt="" />
                                <h4 className="text-white mb-0">Monthly Plan</h4>
                              </div>
                              <div className="card-body">
                                <h3>$3.99 only/-</h3>
                                <ul>
                                  <li>Intelligent AI chatbot</li>
                                  <li>Unlimited answer of question</li>
                                  <li>Avoid buying coin forever</li>
                                  <li>No ad in background</li>
                                  <li>Early access to new features</li>
                                </ul>
                                <button className="no-select-plan select-plan">
                                  <i className="iconsax" data-icon="thick-arrow-right" />
                                  Select this plan
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-4 col-md-6 col-12">
                            <div className="card inner-card">
                              <div className="card-header">
                                <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/pricing/yearly.svg" className="img-fluid" alt="" />
                                <h4 className="text-white mb-0">Lifetime Plan</h4>
                              </div>
                              <div className="card-body">
                                <h3>$3.99 only/-</h3>
                                <ul>
                                  <li>Intelligent AI chatbot</li>
                                  <li>Unlimited answer of question</li>
                                  <li>Avoid buying coin forever</li>
                                  <li>No ad in background</li>
                                  <li>Early access to new features</li>
                                </ul>
                                <button className="no-select-plan select-plan">
                                  <i className="iconsax" data-icon="thick-arrow-right" />
                                  Select this plan
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="subscription-continue">
                          <button className="no-select-plan select-plan">Continue</button>
                          <a href="#" className="text-white">
                            Continue with limited version
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="help" role="tabpanel" aria-labelledby="help" tabIndex={0}>
                <div className="main-wrapper p-0">
                  <div className="fixed-header">
                    <div className="d-flex align-items-center gap-2">
                      <button className="navbar-toggler d-md-none d-block" type="button" data-bs-toggle="collapse" data-bs-target="#mainnavbarNav" aria-controls="mainnavbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="iconsax" data-icon="text-align-justify" />
                      </button>
                      <a href="index.html" className="logo-icon d-flex d-md-none">
                        <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/logo-icon.svg" className="img-fluid" />
                      </a>
                      <h3>FAQ</h3>
                    </div>
                    <a className="premium-btn" data-cursor="pointer" href="#"><i className="iconsax" data-icon="crown-2" />
                      Get
                      <span>premium</span></a>
                  </div>
                  <div className="faq-section main-section">
                    <div className="container card p-0">
                      <div className="card-header">
                        <h3 className="text-white title-basic aos-init aos-animate" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={100}>FAQ</h3>
                      </div>
                      <div className="card-body px-sm-4 px-3">
                        <div className="accordion" id="accordionPanelsStayOpenExample">
                          <div className="accordion-item aos-init aos-animate" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={200}>
                            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                              <button data-cursor="pointer" className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                Is the content unique?
                              </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                              <div className="accordion-body">
                                <p>Yes. The AI generates 95% of the material, which is unique and
                                  creative.
                                  We also give a
                                  uniqueness score for longer form material created, so you can be
                                  assured
                                  that the stuff
                                  you got is unique.</p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item aos-init aos-animate" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={300}>
                            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                              <button data-cursor="pointer" className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                How can I boost my traffic with Copy matic?
                              </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                              <div className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden
                                by
                                default, until
                                the collapse plugin adds the appropriate classes that we use to style
                                each
                                element. These
                                classes control the overall appearance, as well as the showing and
                                hiding
                                via CSS
                                transitions. You can modify any of this with custom CSS or overriding
                                our
                                default variables.
                                It's also worth noting that just about any HTML can go within the
                                <code>.accordion-body</code>, though the transition does limit overflow.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item aos-init aos-animate" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={400}>
                            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                              <button data-cursor="pointer" className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                How long would it take to write an article with AI?
                              </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                              <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden
                                by
                                default, until the
                                collapse plugin adds the appropriate classes that we use to style each
                                element. These
                                classes control the overall appearance, as well as the showing and
                                hiding
                                via CSS
                                transitions. You can modify any of this with custom CSS or overriding
                                our
                                default variables.
                                It's also worth noting that just about any HTML can go within the
                                <code>.accordion-body</code>, though the transition does limit overflow.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item aos-init aos-animate" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={500}>
                            <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                              <button data-cursor="pointer" className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                Is it beneficial to a digital marketer or a content writer?
                              </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                              <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden
                                by
                                default, until the
                                collapse plugin adds the appropriate classes that we use to style each
                                element. These
                                classes control the overall appearance, as well as the showing and
                                hiding
                                via CSS
                                transitions. You can modify any of this with custom CSS or overriding
                                our
                                default variables.
                                It's also worth noting that just about any HTML can go within the
                                <code>.accordion-body</code>, though the transition does limit overflow.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item aos-init aos-animate" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={600}>
                            <h2 className="accordion-header" id="panelsStayOpen-headingFive">
                              <button data-cursor="pointer" className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                                What languages do you support?
                              </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
                              <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden
                                by
                                default, until the
                                collapse plugin adds the appropriate classes that we use to style each
                                element. These
                                classes control the overall appearance, as well as the showing and
                                hiding
                                via CSS
                                transitions. You can modify any of this with custom CSS or overriding
                                our
                                default variables.
                                It's also worth noting that just about any HTML can go within the
                                <code>.accordion-body</code>, though the transition does limit overflow.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item aos-init aos-animate" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={700}>
                            <h2 className="accordion-header" id="panelsStayOpen-headingSix">
                              <button data-cursor="pointer" className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                                Is there a limit to the amount of stuff I can create?
                              </button>
                            </h2>
                            <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSix">
                              <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden
                                by
                                default, until the
                                collapse plugin adds the appropriate classes that we use to style each
                                element. These
                                classes control the overall appearance, as well as the showing and
                                hiding
                                via CSS
                                transitions. You can modify any of this with custom CSS or overriding
                                our
                                default variables.
                                It's also worth noting that just about any HTML can go within the
                                <code>.accordion-body</code>, though the transition does limit overflow.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="settings" tabIndex={0}>
                <div className="main-wrapper p-0">
                  <div className="fixed-header">
                    <div className="d-flex align-items-center gap-2">
                      <button className="navbar-toggler d-md-none d-block" type="button" data-bs-toggle="collapse" data-bs-target="#mainnavbarNav" aria-controls="mainnavbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="iconsax" data-icon="text-align-justify" />
                      </button>
                      <a href="index.html" className="logo-icon d-flex d-md-none">
                        <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/logo-icon.svg" className="img-fluid" />
                      </a>
                      <h3>Settings</h3>
                    </div>
                    <a className="premium-btn" data-cursor="pointer" href="#"><i className="iconsax" data-icon="crown-2" />
                      Get
                      <span>premium</span></a>
                  </div>
                  <div className="main-section d-flex gap-4 flex-column">
                    <div className="container card p-0">
                      <div className="card-header">
                        <h3 className="text-white">My account</h3>
                      </div>
                      <div className="card-body px-sm-4 px-3">
                        <div className="my-account">
                          <div className="user-detail" />
                          <div className="user-main">
                            <div className="user-profile">
                              <img src="../assets/images/user/4.jpg" className="img-fluid" />
                              <i className="iconsax" data-icon="camera" />
                            </div>
                            <div className="user-option">
                              <h4>Shanaya John</h4>
                              <p>shanayajohn@gmail.com</p>
                            </div>
                          </div>
                          <form className="msger-inputarea mb-0">
                            <div className="row">
                              <div className="col-sm-6 col-12">
                                <div className="mb-3">
                                  <label htmlFor="firstname" className="form-label">First
                                    Name</label>
                                  <input type="email" className="msger-input" id="firstname" placeholder="firstname@example.com" />
                                </div>
                              </div>
                              <div className="col-sm-6 col-12">
                                <div className="mb-3">
                                  <label htmlFor="lastname" className="form-label">Last
                                    Name</label>
                                  <input type="email" className="msger-input" id="lastname" placeholder="lastname@example.com" />
                                </div>
                              </div>
                              <div className="col-sm-6 col-12">
                                <div className="mb-3">
                                  <label htmlFor="emailid" className="form-label">Email
                                    address</label>
                                  <input type="email" className="msger-input" id="emailid" placeholder="emailid@example.com" />
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="setting-btn">
                          <button className="select-plan ">Update
                          </button>
                          <button className="no-select-plan select-plan">
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="container card p-0">
                      <div className="card-header">
                        <h3 className="text-white">Change password</h3>
                      </div>
                      <div className="card-body px-sm-4 px-3">
                        <div className="my-account">
                          <form className="msger-inputarea mb-0">
                            <div className="row">
                              <div className="col-sm-6 col-12">
                                <div className="mb-3">
                                  <label htmlFor="firstname" className="form-label">New Password</label>
                                  <input type="email" className="msger-input" id="firstname" placeholder="firstname@example.com" />
                                </div>
                              </div>
                              <div className="col-sm-6 col-12">
                                <div className="mb-3">
                                  <label htmlFor="lastname" className="form-label">Confirm password</label>
                                  <input type="email" className="msger-input" id="lastname" placeholder="lastname@example.com" />
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="setting-btn">
                          <button className="select-plan ">Update password
                          </button>
                          <button className="no-select-plan select-plan">
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="modal rating-modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">Your Rating</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    <i className="iconsax" data-icon="close-square" />
                  </button>
                </div>
                <div className="modal-body">
                  <form className="auth-form">
                    <div className="form-group">
                      <label htmlFor="comment" className="form-label text-white">Type Something</label>
                      <textarea type="search" className="form-control" placeholder="Write your review here" id="comment" defaultValue={""} />
                    </div>
                  </form>
                  <ul data-aos="fade-up" data-aos-duration={1000} data-aos-delay={200} className="star-rating">
                    <li><i className="ri-star-fill" /></li>
                    <li><i className="ri-star-fill" /></li>
                    <li><i className="ri-star-fill" /></li>
                    <li><i className="ri-star-fill" /></li>
                    <li><i className="ri-star-fill" /></li>
                  </ul>
                </div>
                <div className="modal-footer">
                  <button type="button" className="modal-submit m-0" data-bs-dismiss="modal">Send</button>
                </div>
              </div>
            </div>
          </div>
          {/*custom cursor start  */}
          <div id="cursor" />
          <div id="cursor-border" />
          {/*custom cursor start  */}
          {/* Bootstrap js*/}
          {/* slider js*/}
          {/* custom cursor */}
          {/* iconsax js */}
          {/* chat page js */}
          {/* iconsax js */}
          {/* Theme js*/}
        </div>
      );
    }
  });