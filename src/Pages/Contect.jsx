import React from 'react';
import Navbar from '../Component/Navbar';

const Contect = () => {
  return (
    <>
    <Navbar />
      {/* header */}
      <header className="flex header-sm">
        <div className="container">
          <div className="header-title">
            <h1>Contact</h1>
            <p>We’d love to hear from you! Reach out for questions, support, or travel advice. Let’s make your next journey unforgettable.</p>
          </div>
        </div>
      </header>
      {/* header */}

      {/* contact section */}
      <section id="contact" className="py-4">
        <div className="container">
          <div className="title-wrap">
            <span className="sm-title">get in touch with us</span>
            <h2 className="lg-title">contact us</h2>
          </div>

          <div className="contact-row">
            <div className="contact-left">
              <form className="contact-form">
                <input type="text" className="form-control" placeholder="Your name" />
                <input type="email" className="form-control" placeholder="Your email" />
                <textarea rows="4" className="form-control" placeholder="Your message" style={{ resize: 'none' }}></textarea>
                <input type="submit" className="btn" value="Send message" />
              </form>
            </div>
            <div className="contact-right my-2">
              <div className="contact-item">
                <span className="contact-icon flex">
                  <i className="fa fa-phone-alt"></i>
                </span>
                <div>
                  <span>Phone</span>
                  <p className="text">+91 9430209077</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon flex">
                  <i className="fa fa-map-marked-alt"></i>
                </span>
                <div>
                  <span>Address</span>
                  <p className="text">Drang Khag Srinagar</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon flex">
                  <i className="fa fa-envelope"></i>
                </span>
                <div>
                  <span>Message</span>
                  <p className="text">info@tripboss.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of contact section */}

      {/* footer */}
      <footer className="py-4">
        <div className="container footer-row">
          <div className="footer-item">
            <a href="/" className="site-brand">
              Trip<span>Boss</span>
            </a>
            <p className="text">TripBoss made my travel dreams come true! From hidden adventures to luxurious stays, every detail was seamless. Even on a budget, I enjoyed unforgettable experiences. TripBoss truly caters to all travelers adventurers, luxury seekers, and budget explorers alike. Traveling has never been this easy and enjoyable!</p>
          </div>

          <div className="footer-item">
            <h2>Follow us on: </h2>
            <ul className="social-links">
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-pinterest"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-google-plus"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-item">
            <h2>Popular Places:</h2>
            <ul>
              <li><a href="#">Thailand</a></li>
              <li><a href="#">Australia</a></li>
              <li><a href="#">Maldives</a></li>
              <li><a href="#">Switzerland</a></li>
              <li><a href="#">Germany</a></li>
            </ul>
          </div>

          <div className="subscribe-form footer-item">
            <h2>Subscribe for Newsletter!</h2>
            <form className="flex">
              <input type="email" placeholder="Enter Email" className="form-control" />
              <input type="submit" className="btn" value="Subscribe" />
            </form>
          </div>
        </div>
      </footer>
      {/* end of footer */}
    </>
  );
};

export default Contect;
