import React from "react";

function Home() {
    return (
        <>
            <header id="header">
                <div className="container d-flex">

                    <div className="logo mr-auto">
                        <h1 className="text-light"><a href="index.html">Green<span>.</span>Your<span>.</span>Thumb</a></h1>
                        {/* Uncomment below if you prefer to use an image logo */}
                        {/* <a href="index.html"><img src="assets/img/logo.png" alt="" / className="img-fluid"></a> */}
                    </div>

                    <nav className="nav-menu d-none d-lg-block">
                        <ul>
                            <li className="active"><a href="#header">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#features">Features</a></li>
                            {/* <li><a href="#team">Team</a></li> */}
                            <li><a href="#faq">FAQs</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                            <li className="get-started"><a href="/signup">Get Started</a></li>
                        </ul>
                    </nav>

                </div>
            </header>
            <section id="hero">

                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className=" col-lg-6 py-5 py-lg-0 order-2 order-lg-1" data-aos="fade-right">
                            <h1>your new best friend in every gardening need</h1>
                            <h2>And like any best friend, we are here to help at every step of the process and beyond. So you can relax and
      benefit for the most of your hardwork.</h2>

                            <a className="btn-get-started scrollto" href="/signup">Get Started</a>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left">
                            <img src="assets/img/hero-img3.png" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>

            </section>


            <main id="main">

                {/* <!-- ======= Clients Section ======= --> */}
                {/* <section id="clients" className="clients section-bg">
                    <div className="container">

                        <div className="row no-gutters clients-wrap clearfix wow fadeInUp">

                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="client-logo">
                                    <img src="assets/img/clients/client-1.png" className="img-fluid" alt="" data-aos="flip-right" />
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="client-logo">
                                    <img src="assets/img/clients/client-2.png" className="img-fluid" alt="" data-aos="flip-right"
                                        data-aos-delay="100" />
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="client-logo">
                                    <img src="assets/img/clients/client-3.png" className="img-fluid" alt="" data-aos="flip-right"
                                        data-aos-delay="200" />
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="client-logo">
                                    <img src="assets/img/clients/client-4.png" className="img-fluid" alt="" data-aos="flip-right"
                                        data-aos-delay="300" />
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="client-logo">
                                    <img src="assets/img/clients/client-5.png" className="img-fluid" alt="" data-aos="flip-right"
                                        data-aos-delay="400" />
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="client-logo">
                                    <img src="assets/img/clients/client-6.png" className="img-fluid" alt="" data-aos="flip-right"
                                        data-aos-delay="500" />
                                </div>
                            </div>

                        </div>

                    </div>
                </section> */}
                {/* <!-- End Clients Section --> */}

                {/* <!-- ======= About Section ======= --> */}
                <section id="about" className="about section-bg">
                    <div className="container">

                        <div className="row">
                            <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
                            <div className="col-xl-7 pl-0 pl-lg-5 pr-lg-1 d-flex align-items-stretch">
                                <div className="content d-flex flex-column justify-content-center">
                                    <h3 data-aos="fade-in" data-aos-delay="100">Things are about to get exciting</h3>
                                    <p data-aos="fade-in">
                                        We believe that each one of us has a green thumb, but sometimes we lack right set of tools and
                                        information in order to succeed with our gardening projects.
          </p>
                                    <div className="row">
                                        <div className="col-md-6 icon-box" data-aos="fade-up">
                                            <i className="bx bx-receipt"></i>
                                            <h4><a href="/">Open Source</a></h4>
                                            <p>We engage with passionate and like-minded people without being influenced by corporations or
                endorcements.</p>
                                        </div>
                                        <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                                            <i className="bx bx-cube-alt"></i>
                                            <h4><a href="/">Collaboration is our strength</a></h4>
                                            <p>Our goal is to join hands and work together in one direction. Nobody knows it all but everybody
                knows some.</p>
                                        </div>
                                        <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                                            <i className="bx bx-images"></i>
                                            <h4><a href="/">Keep it Simple</a></h4>
                                            <p>Our approach is to solve some basic problem which get into the everyday life of an urben farmer.
              </p>
                                        </div>
                                        <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                                            <i className="bx bx-shield"></i>
                                            <h4><a href="/">A Cautious Community</a></h4>
                                            <p>We build and drive towards a sustainaable tomorrow, nature is the best teacher to guide us there.
              </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End .content--> */}
                            </div>
                        </div>

                    </div>
                </section>
                {/* <!-- End About Section --> */}

                {/* <!-- ======= Features Section ======= --> */}
                <section id="features" className="features section-bg">
                    <div className="container">

                        <div className="section-title">
                            <h2 data-aos="fade-in">Features</h2>
                            <p data-aos="fade-in">Even as of today we still need light, air, water and a growing medium for a seed to
                            sprout. Technology is here to support us farmers, so at GreenYourThumb we are developing some exciting
                            features to reduce the load of repetitive jobs and increase your chnaces of being a successful urban farmer.
      </p>
                        </div>

                        <div className="row content">
                            <div className="col-md-5" data-aos="fade-right">
                                <img src="assets/img/features-1.svg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-7 pt-4" data-aos="fade-left">
                                <h3>Make the most of your limited space by starting at the right foot.</h3>
                                <p className="font-italic">
                                    "The Green Zone" layout tool lets you create the best possible garden designs, we understand the space
                                    limitations of an urban farmer and also how diverse our requirements can be. All you need to provide is:
        </p>
                                <ul>
                                    <li><i className="icofont-check"></i> Correct dimensions and directions for your garden area</li>
                                    <li><i className="icofont-check"></i> What would you like to grow and for how many people</li>
                                </ul>
                            </div>
                        </div>

                        <div className="row content">
                            <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
                                <img src="assets/img/features-2.svg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
                                <h3>Alerts, reminders and quick tips</h3>
                                <p className="font-italic">
                                    Automation is a must to keep the ball roling. We understand that this is your hobby and you can easily get
                                    distracted by many reasons.
        </p>
                                <p>
                                    Create a watering, fertilizing, succession planting schedule for a simple start and get notified
                                    accordingly. If there is a sudden change in weather, we will send alerts on devices(s) of your preference.
                                    There are always timely tips on improving your skills because it take time to perfect a craft.
        </p>
                            </div>
                        </div>

                        <div className="row content">
                            <div className="col-md-5" data-aos="fade-right">
                                <img src="assets/img/features-3.svg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-7 pt-5" data-aos="fade-left">
                                <h3>All-in-one dashboard for a better user expreince</h3>
                                <p>We want you to spend as less time as possible in front of a computer, so we built a dashboard which can give a quick summary on what is happening in your project.</p>
                                <ul>
                                    <li><i className="icofont-check"></i> Weather updates and forecasts for your area.</li>
                                    <li><i className="icofont-check"></i> Track your progress in realtime.</li>
                                    <li><i className="icofont-check"></i> Be prepared for just a season or the whole year.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="row content">
                            <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
                                <img src="assets/img/features-4.svg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
                                <h3>Learn from mistakes and help others to avoid making the same</h3>
                                <p className="font-italic">
                                    Let others know if something worked for you or if you encountered any issues
        </p>
                                <p>
                                    Sharing your wisdome can help many more. Don't just keep it to yourself. We are building a huge community
                                    of enthusiast just like you. So share what you know and don't hesitate to ask questions too.
        </p>
                            </div>
                        </div>

                    </div>
                </section>
                {/* <!-- End Features Section --> */}

                {/* <!-- ======= Team Section ======= --> */}
                {/* <section id="team" className="team section-bg">
                    <div className="container">

                        <div className="section-title">
                            <h2 data-aos="fade-in">Team</h2>
                            <p data-aos="fade-in">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum
                            quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias
        ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="member" data-aos="fade-up">
                                    <div className="pic"><img src="assets/img/team/team-1.jpg" alt="" /></div>
                                    <h4>Walter White</h4>
                                    <span>Chief Executive Officer</span>
                                    <div className="social">
                                        <a href="/"><i className="icofont-twitter"></i></a>
                                        <a href="/"><i className="icofont-facebook"></i></a>
                                        <a href="/"><i className="icofont-instagram"></i></a>
                                        <a href="/"><i className="icofont-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="member" data-aos="fade-up" data-aos-delay="100">
                                    <div className="pic"><img src="assets/img/team/team-2.jpg" alt="" /></div>
                                    <h4>Sarah Jhinson</h4>
                                    <span>Product Manager</span>
                                    <div className="social">
                                        <a href="/"><i className="icofont-twitter"></i></a>
                                        <a href="/"><i className="icofont-facebook"></i></a>
                                        <a href="/"><i className="icofont-instagram"></i></a>
                                        <a href="/"><i className="icofont-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="member" data-aos="fade-up" data-aos-delay="200">
                                    <div className="pic"><img src="assets/img/team/team-3.jpg" alt="" /></div>
                                    <h4>William Anderson</h4>
                                    <span>CTO</span>
                                    <div className="social">
                                        <a href="/"><i className="icofont-twitter"></i></a>
                                        <a href="/"><i className="icofont-facebook"></i></a>
                                        <a href="/"><i className="icofont-instagram"></i></a>
                                        <a href="/"><i className="icofont-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="member" data-aos="fade-up" data-aos-delay="300">
                                    <div className="pic"><img src="assets/img/team/team-4.jpg" alt="" /></div>
                                    <h4>Amanda Jepson</h4>
                                    <span>Accountant</span>
                                    <div className="social">
                                        <a href="/"><i className="icofont-twitter"></i></a>
                                        <a href="/"><i className="icofont-facebook"></i></a>
                                        <a href="/"><i className="icofont-instagram"></i></a>
                                        <a href="/"><i className="icofont-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section> */}
                {/* <!-- End Team Section --> */}

                {/* <!-- ======= Frequently Asked Questions Section ======= --> */}
                <section id="faq" className="faq section-bg">
                    <div className="container">

                        <div className="section-title">
                            <h2 data-aos="fade-in">Frequently Asked Questions</h2>
                            <p data-aos="fade-in">Gardening, farming or homesteading are not just hobbies, they are a lifestyle in a true sense. You are investing your time and money into something which provides you with both short-term and long-term benefits. We are here to make you the best in your choices.  </p>
                        </div>

                        <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up">
                            <div className="col-lg-5">
                                <i className="bx bx-help-circle"></i>
                                <h4>Is GreenYourThumb a landscaping company?</h4>
                            </div>
                            <div className="col-lg-7">
                                <p>
                                    No, we are not a landscaping company but we provide you the best of resources for you landscape and connect with knowledgeable members.
        </p>
                            </div>
                        </div>
                        {/* <!-- End F.A.Q Item--> */}

                        <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                            <div className="col-lg-5">
                                <i className="bx bx-help-circle"></i>
                                <h4>Do you provide online courses about gardening and farming?</h4>
                            </div>
                            <div className="col-lg-7">
                                <p>
                                    At this point we are not providing any direct courses but you can certainly find out what others are doing to gain knowledge..
        </p>
                            </div>
                        </div>
                        {/* <!-- End F.A.Q Item--> */}

                    </div>
                </section>
                {/* <!-- End Frequently Asked Questions Section --> */}

                {/* <!-- ======= Contact Section ======= --> */}
                <section id="contact" className="contact section-bg">
                    <div className="container">

                        <div className="section-title">
                            <h2 data-aos="fade-in">Contact</h2>
                            <p data-aos="fade-in">Reach out to us with your ideas , suggestions or feedback. We want this platform to be completely user driven. You can shape up this tool as well as the mindset of many by just speaking up.</p>
                        </div>

                        <div className="row">

                            <div className="col-lg-6">

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="info-box" data-aos="fade-up">
                                            <i className="bx bx-map"></i>
                                            <h3>Our Address</h3>
                                            <p>Wylie, TX 75098</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="info-box mt-4" data-aos="fade-up" data-aos-delay="100">
                                            <i className="bx bx-envelope"></i>
                                            <h3>Email Us</h3>
                                            <p>grow@greenyourthumb.org</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="info-box mt-4" data-aos="fade-up" data-aos-delay="100">
                                            <i className="bx bx-phone-call"></i>
                                            <h3>Call Us</h3>
                                            <p>+1 800 GROWING</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-6">
                                {/* <form action="forms/contact.php" method="post" role="form" className="php-email-form" data-aos="fade-up"> */}
                                <form action="/" method="post" >
                                    <div className="form-row">
                                        <div className="col-md-6 form-group">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name"
                                                data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                            <div className="validate"></div>
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email"
                                                data-rule="email" data-msg="Please enter a valid email" />
                                            <div className="validate"></div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject"
                                            data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                        <div className="validate"></div>
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" name="message" rows="5" data-rule="required"
                                            data-msg="Please write something for us" placeholder="Message"></textarea>
                                        <div className="validate"></div>
                                    </div>
                                    {/* <div className="mb-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div> */}
                                    <div className="text-center"><button type="submit">Send Message</button></div>
                                </form>
                            </div>

                        </div>

                    </div>
                </section>
                {/* <!-- End Contact Section --> */}

            </main>
            {/* <!-- End #main --> */}

            {/* <!-- ======= Footer ======= --> */}
            <footer id="footer">

                <div className="footer-top">

                    <div className="container" data-aos="fade-up">

                        <div className="row  justify-content-center">
                            <div className="col-lg-6">
                                <h3>GreenYourThumb.Org</h3>
                                <p>If you would like to get a copy of our weekly newsletter, please subscribe here.</p>
                            </div>
                        </div>

                        <div className="row footer-newsletter justify-content-center">
                            <div className="col-lg-6">
                                <form action="" method="post">
                                    <input type="email" name="email" placeholder="Enter your Email" /><input type="submit" value="Subscribe" />
                                </form>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="/" className="twitter"><i className="bx bxl-twitter"></i></a>
                            <a href="/" className="facebook"><i className="bx bxl-facebook"></i></a>
                            <a href="/" className="instagram"><i className="bx bxl-instagram"></i></a>
                            <a href="/" className="google-plus"><i className="bx bxl-skype"></i></a>
                            <a href="/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                        </div>

                    </div>
                </div>

                <div className="container footer-bottom clearfix">
                    <div className="copyright">
                        &copy; Copyright <strong><span>GreenYourThumb.Org</span></strong>. All Rights Reserved
  </div>
                    <div className="credits">
                        {/* <!-- All the links in the footer should remain intact. -->
    <!-- You can delete the links only if you purchased the pro version. -->
    <!-- Licensing information: https://bootstrapmade.com/license/ -->
    <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/bocor-bootstrap-template-nice-animation/ --> */}
    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div>
                </div>
            </footer>

            <a href="/" className="back-to-top"><i className="icofont-simple-up"></i></a>

        </>

    );
}

export default Home;