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
          {/* breadcrumb section start */}
          <section className="breadcrumb-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="breadcrumb-content">
                    <div>
                      <h2><img src="../assets/images/breadcrumb-title.png" className="img-fluid" alt="title-effect" />Terms &amp; Condition
                      </h2>
                      <p><i className="ri-subtract-line" />Rules and guidelines for using this website.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 d-lg-inline-block d-none">
                  <div className="breadcrumb-img">
                    <img src="https://themes.pixelstrap.net/mega_bot/assets/svg/blog-details-vector.svg" className="img-fluid" alt="service" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* breadcrumb section end */}
          {/* blog details start */}
          <section className="ratio_40">
            <div className="container">
              <div className="blog-details">
                <div className="row">
                  <div className="col-lg-8 col-md-10 m-auto">
                    <div className="blog-main-content mt-0">
                      <h3 c><img src="https://themes.pixelstrap.net/mega_bot/assets/svg/title-effect2.svg" className="img-fluid" alt="effect" />Terms and
                        Conditions</h3>
                      <p>Last updated: August 20, 2024</p>
                      <p>Please read these terms and conditions carefully before using Our Service.</p>
                      <h3 className="mt-xl-5 mt-md-3 mt-2"><img src="https://themes.pixelstrap.net/mega_bot/assets/svg/title-effect2.svg" className="img-fluid" alt="effect" />Interpretation
                        and Definitions</h3>
                      <h4>Interpretation</h4>
                      <p>The words of which the initial letter is capitalized have meanings defined under the
                        following conditions. The following definitions shall have the same meaning regardless
                        of whether they appear in singular or in plural.</p>
                      <h4>Definitions</h4>
                      <p>For the purposes of these Terms and Conditions:</p>
                      <ol>
                        <li>
                          <p>Affiliate means an entity that controls, is controlled by or is
                            under common control with a party, where "control" means ownership of
                            50% or more of the shares, equity interest or other securities entitled to vote
                            for election of directors or other managing authority.</p>
                        </li>
                        <li>
                          <p>Country refers to: Lahore, Pakistan</p>
                        </li>
                        <li>
                          <p>Company(referred to as either "the Company",
                            "We", "Us" or "Our" in this Agreement) refers to
                            AlignAI.</p>
                        </li>
                        <li>
                          <p>Device means any device that can access the Service such as a
                            computer, a cellphone or a digital tablet.</p>
                        </li>
                        <li>
                          <p>Service refers to the Website.</p>
                        </li>
                        <li>
                          <p>Terms and Conditions(also referred as "Terms") mean
                            these Terms and Conditions that form the entire agreement between You and the
                            Company regarding the use of the Service.</p>
                        </li>
                        <li>
                          <p>Third-party Social Media Service means any services or content
                            (including data, information, products or services) provided by a third-party
                            that may be displayed, included or made available by the Service.</p>
                        </li>
                        <li>
                          <p>Website refers to AlignAI, accessible from <a data-cursor="pointer" href=" https://alignai.example.com" rel="external nofollow noopener" target="_blank">https://alignai.example.com</a></p>
                        </li>
                        <li>
                          <p>You means the individual accessing or using the Service, or the
                            company, or other legal entity on behalf of which such individual is accessing
                            or using the Service, as applicable.</p>
                        </li>
                      </ol>
                      <h3 className="mt-xl-5 mt-md-3 mt-2"><img src="https://themes.pixelstrap.net/mega_bot/assets/svg/title-effect2.svg" className="img-fluid" alt="effect" />Acknowledgment
                      </h3>
                      <p>These are the Terms and Conditions governing the use of this Service and the agreement
                        that operates between You and the Company. These Terms and Conditions set out the rights
                        and obligations of all users regarding the use of the Service.</p>
                      <p>Your access to and use of the Service is conditioned on Your acceptance of and compliance
                        with these Terms and Conditions. These Terms and Conditions apply to all visitors, users
                        and others who access or use the Service.</p>
                      <p>By accessing or using the Service You agree to be bound by these Terms and Conditions. If
                        You disagree with any part of these Terms and Conditions then You may not access the
                        Service.</p>
                      <p>Your access to and use of the Service is also conditioned on Your acceptance of and
                        compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our
                        policies and procedures on the collection, use and disclosure of Your personal
                        information when You use the Application or the Website and tells You about Your privacy
                        rights and how the law protects You. Please read Our Privacy Policy carefully before
                        using Our Service.</p>
                      <h3 className="mt-xl-5 mt-md-3 mt-2"><img src="https://themes.pixelstrap.net/mega_bot/assets/svg/title-effect2.svg" className="img-fluid" alt="effect" />Links to Other
                        Websites</h3>
                      <p>Our Service may contain links to third-party web sites or services that are not owned or
                        controlled by the Company.</p>
                      <p>The Company has no control over, and assumes no responsibility for, the content, privacy
                        policies, or practices of any third party web sites or services. You further acknowledge
                        and agree that the Company shall not be responsible or liable, directly or indirectly,
                        for any damage or loss caused or alleged to be caused by or in connection with the use
                        of or reliance on any such content, goods or services available on or through any such
                        web sites or services.</p>
                      <p>We strongly advise You to read the terms and conditions and privacy policies of any
                        third-party web sites or services that You visit.</p>
                      <h3 className="mt-xl-5 mt-md-3 mt-2"><img src="https://themes.pixelstrap.net/mega_bot/assets/svg/title-effect2.svg" className="img-fluid" alt="effect" />Termination
                      </h3>
                      <p>We may terminate or suspend Your access immediately, without prior notice or liability,
                        for any reason whatsoever, including without limitation if You breach these Terms and
                        Conditions.</p>
                      <p>Upon termination, Your right to use the Service will cease immediately.</p>
                      <h3 className="mt-xl-5 mt-md-3 mt-2"><img src="https://themes.pixelstrap.net/mega_bot/assets/svg/title-effect2.svg" className="img-fluid" alt="effect" />Limitation of
                        Liability</h3>
                      <p>Notwithstanding any damages that You might incur, the entire liability of the Company and
                        any of its suppliers under any provision of this Terms and Your exclusive remedy for all
                        of the foregoing shall be limited to the amount actually paid by You through the Service
                        or 100 USD if You haven't purchased anything through the Service.</p>
                      <p>To the maximum extent permitted by applicable law, in no event shall the Company or its
                        suppliers be liable for any special, incidental, indirect, or consequential damages
                        whatsoever (including, but not limited to, damages for loss of profits, loss of data or
                        other information, for business interruption, for personal injury, loss of privacy
                        arising out of or in any way related to the use of or inability to use the Service,
                        third-party software and/or third-party hardware used with the Service, or otherwise in
                        connection with any provision of this Terms), even if the Company or any supplier has
                        been advised of the possibility of such damages and even if the remedy fails of its
                        essential purpose.</p>
                      <p>Some states do not allow the exclusion of implied warranties or limitation of liability
                        for incidental or consequential damages, which means that some of the above limitations
                        may not apply. In these states, each party's liability will be limited to the greatest
                        extent permitted by law.</p>
                      <h3 className="mt-xl-5 mt-md-3 mt-2"><img src="https://themes.pixelstrap.net/mega_bot/assets/svg/title-effect2.svg" className="img-fluid" alt="effect" />"AS
                        IS" and "AS AVAILABLE" Disclaimer</h3>
                      <p>The Service is provided to You "AS IS" and "AS AVAILABLE" and with
                        all faults and defects without warranty of any kind. To the maximum extent permitted
                        under applicable law, the Company, on its own behalf and on behalf of its Affiliates and
                        its and their respective licensors and service providers, expressly disclaims all
                        warranties, whether express, implied, statutory or otherwise, with respect to the
                        Service, including all implied warranties of merchantability, fitness for a particular
                        purpose, title and non-infringement, and warranties that may arise out of course of
                        dealing, course of performance, usage or trade practice. Without limitation to the
                        foregoing, the Company provides no warranty or undertaking, and makes no representation
                        of any kind that the Service will meet Your requirements, achieve any intended results,
                        be compatible or work with any other software, applications, systems or services,
                        operate without interruption, meet any performance or reliability standards or be error
                        free or that any errors or defects can or will be corrected.</p>
                      <p>Without limiting the foregoing, neither the Company nor any of the company's provider
                        makes any representation or warranty of any kind, express or implied: (i) as to the
                        operation or availability of the Service, or the information, content, and materials or
                        products included thereon; (ii) that the Service will be uninterrupted or error-free;
                        (iii) as to the accuracy, reliability, or currency of any information or content
                        provided through the Service; or (iv) that the Service, its servers, the content, or
                        e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan
                        horses, worms, malware, timebombs or other harmful components.</p>
                      <p>Some jurisdictions do not allow the exclusion of certain types of warranties or
                        limitations on applicable statutory rights of a consumer, so some or all of the above
                        exclusions and limitations may not apply to You. But in such a case the exclusions and
                        limitations set forth in this section shall be applied to the greatest extent
                        enforceable under applicable law.</p>
                      <h3 className="mt-xl-5 mt-md-3 mt-2"><img src="https://themes.pixelstrap.net/mega_bot/assets/svg/title-effect2.svg" className="img-fluid" alt="effect" />Governing Law
                      </h3>
                      <p>The laws of the Country, excluding its conflicts of law rules, shall govern this Terms
                        and Your use of the Service. Your use of the Application may also be subject to other
                        local, state, national, or international laws.</p>
                      <h3 className="mt-xl-5 mt-md-3 mt-2"><img src="https://themes.pixelstrap.net/mega_bot/assets/svg/title-effect2.svg" className="img-fluid" alt="effect" />Disputes
                        Resolution</h3>
                      <p>If You have any concern or dispute about the Service, You agree to first try to resolve
                        the dispute informally by contacting the Company.</p>
                      <h3 className="mt-xl-5 mt-md-3 mt-2"><img src="https://themes.pixelstrap.net/mega_bot/assets/svg/title-effect2.svg" className="img-fluid" alt="effect" />For European
                        Union (EU) Users</h3>
                      <p>If You are a European Union consumer, you will benefit from any mandatory provisions of
                        the law of the country in which you are resident in.</p>
                      <h3 className="mt-xl-5 mt-md-3 mt-2"><img src="https://themes.pixelstrap.net/mega_bot/assets/svg/title-effect2.svg" className="img-fluid" alt="effect" />Severability
                        and Waiver</h3>
                      <h4>Severability</h4>
                      <p>If any provision of these Terms is held to be unenforceable or invalid, such provision
                        will be changed and interpreted to accomplish the objectives of such provision to the
                        greatest extent possible under applicable law and the remaining provisions will continue
                        in full force and effect.</p>
                      <h4>Waiver</h4>
                      <p>Except as provided herein, the failure to exercise a right or to require performance of
                        an obligation under these Terms shall not effect a party's ability to exercise such
                        right or require such performance at any time thereafter nor shall the waiver of a
                        breach constitute a waiver of any subsequent breach.</p>
                      <h3 className="mt-xl-5 mt-md-3 mt-2"><img src="https://themes.pixelstrap.net/mega_bot/assets/svg/title-effect2.svg" className="img-fluid" alt="effect" />Translation
                        Interpretation</h3>
                      <p>These Terms and Conditions may have been translated if We have made them available to You
                        on our Service.
                        You agree that the original English text shall prevail in the case of a dispute.</p>
                      <h3 className="mt-xl-5 mt-md-3 mt-2"><img src="https://themes.pixelstrap.net/mega_bot/assets/svg/title-effect2.svg" className="img-fluid" alt="effect" />Changes to
                        These Terms and Conditions</h3>
                      <p>We reserve the right, at Our sole discretion, to modify or replace these Terms at any
                        time. If a revision is material We will make reasonable efforts to provide at least 30
                        days' notice prior to any new terms taking effect. What constitutes a material change
                        will be determined at Our sole discretion.</p>
                      <p>By continuing to access or use Our Service after those revisions become effective, You
                        agree to be bound by the revised terms. If You do not agree to the new terms, in whole
                        or in part, please stop using the website and the Service.</p>
                      <h3 className="mt-xl-5 mt-md-3 mt-2"><img src="https://themes.pixelstrap.net/mega_bot/assets/svg/title-effect2.svg" className="img-fluid" alt="effect" />Contact Us
                      </h3>
                      <p>If you have any questions about these Terms and Conditions, You can contact us:</p>
                      <ul>
                        <li>
                          <p>By email: husnainmazhar45@gmail.com</p>
                        </li>
                        <li>
                          <p>By visiting this page on our website: <a data-cursor="pointer" href=" https://alignai.example.com" rel="external nofollow noopener" target="_blank">https://alignai.example.com</a></p>
                        </li>
                        <br />
                        <li>
                          <p>By phone number: +923016000506</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* blog details end */}
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