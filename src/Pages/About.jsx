import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "../Component/Navbar";

export default function About() {
  return (
    <>
    <Navbar />  
      {/* Header */}
      <header className="flex header-sm">
        <div className="container">
          <div className="header-title">
            <h1>About</h1>
            <p>
              Welcome to TripBoss! We plan unforgettable journeys, uncover hidden
              gems, and make every travel experience seamless, inspiring, and
              truly memorable.
            </p>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-4">
        <div className="container">
          <div className="title-wrap">
            <span className="sm-title">things to know about us</span>
            <h2 className="lg-title">our story</h2>
          </div>

          <div className="about-row">
            <div className="about-left my-2">
              <img src="/src/images/about-img.jpg" alt="about img" />
            </div>
            <div className="about-right">
              <h2>15 Years of Experience</h2>
              <p className="text">
                At TripBoss, our journey began with a simple dream: to make
                travel seamless, inspiring, and unforgettable for everyone. Over
                the years, we’ve curated countless adventures, helping travelers
                explore hidden gems, majestic landscapes, and vibrant cultures
                around the world. Our experience lies in planning every
                detail—from accommodations to itineraries—so you can focus on
                making memories. Each trip we organize reflects our passion for
                discovery, comfort, and adventure. Whether you’re seeking luxury,
                thrill, or a budget-friendly escape, TripBoss ensures every
                journey is stress-free, exciting, and meaningful. Join us, and
                let’s create stories you’ll cherish forever, leaving footprints
                across the globe.
              </p>
              <p className="text">
                With TripBoss, every trip becomes an adventure—carefully planned,
                memorable, and full of discovery, comfort, and joy for travelers
                of all kinds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facts Section */}
      <section id="facts" className="py-4 flex">
        <div className="container">
          <div className="title-wrap">
            <span className="sm-title">
              know some facts about our agency
            </span>
            <h2 className="lg-title">fun facts</h2>
          </div>

          <div className="facts-row">
            <div className="facts-item">
              <span className="fas fa-camera-retro facts-icon"></span>
              <div className="facts-info">
                <strong>1220</strong>
                <p className="text">photos taken</p>
              </div>
            </div>

            <div className="facts-item">
              <span className="fas fa-umbrella-beach facts-icon"></span>
              <div className="facts-info">
                <strong>450</strong>
                <p className="text">beaches visited</p>
              </div>
            </div>

            <div className="facts-item">
              <span className="fas fa-mountain facts-icon"></span>
              <div className="facts-info">
                <strong>84</strong>
                <p className="text">mountains climbed</p>
              </div>
            </div>

            <div className="facts-item">
              <span className="fas fa-ship facts-icon"></span>
              <div className="facts-info">
                <strong>120</strong>
                <p className="text">cruises organized</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4">
        <div className="container footer-row">
          <div className="footer-item">
            <a href="index.html" className="site-brand">
              Trip<span>Boss</span>
            </a>
            <p className="text">
              TripBoss made my travel dreams come true! From hidden adventures to
              luxurious stays, every detail was seamless. Even on a budget, I
              enjoyed unforgettable experiences. TripBoss truly caters to all
              travelers adventurers, luxury seekers, and budget explorers alike.
              Traveling has never been this easy and enjoyable!
            </p>
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
              <li>
                <a href="#">Thailand</a>
              </li>
              <li>
                <a href="#">Australia</a>
              </li>
              <li>
                <a href="#">Maldives</a>
              </li>
              <li>
                <a href="#">Switzerland</a>
              </li>
              <li>
                <a href="#">Germany</a>
              </li>
            </ul>
          </div>

          <div className="subscribe-form footer-item">
            <h2>Subscribe for Newsletter!</h2>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter Email"
                className="form-control"
              />
              <input type="submit" className="btn" value="Subscribe" />
            </form>
          </div>
        </div>
      </footer>
    </>
  );
}
