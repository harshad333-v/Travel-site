import React from 'react';
import { Link, Router } from 'react-router-dom';
import Navbar from '../Component/Navbar';

const Home = () => {
  return (





    <>
      <Navbar />


      {/* <!-- header --> */}
      <header className="flex">
        <div className="container">
          <div className="header-title">
            <h1>Leave Your Footprints</h1>
            <p>Your journey begins here! Whether it’s a weekend escape, an adventure with friends, or a dream vacation, we’re here to help you plan every step. Discover destinations, create memories, and leave your footprints around the world. Let’s make your travel dreams come true! 🌴✈️</p>
          </div>

        </div>
      </header>
      {/* <!-- end of header --> */}

      {/* <!-- featured section --> */}
      <section id="featured" className="py-4">
        <div className="container">
          <div className="title-wrap">
            <span className="sm-title">know about some places before your travel</span>
            <h2 className="lg-title">featured places</h2>
          </div>

          <div className="featured-row">
            <div className="featured-item my-2 shadow">
              <img src="src\images\featured-reo-de-janeiro-brazil.jpg
              " alt="featured place" />
              <div className="featured-item-content">
                <span>
                  <i className="fas fa-map-marker-alt"></i>
                  Reo De Janeiro, Brazil
                </span>
                <div>
                  <p className="text">A vibrant city of beaches, samba, Christ the Redeemer, and Carnival, blending breathtaking nature with lively culture.</p>
                </div>
              </div>
            </div>

            <div className="featured-item my-2 shadow">
              <img src="src/images/featured-north-bondi-australia.jpg" alt="featured place" />
              <div className="featured-item-content">
                <span>
                  <i className="fas fa-map-marker-alt"></i>
                  North Bondi, Australia
                </span>
                <div>
                  <p className="text">A relaxed coastal spot known for golden sands, surf-friendly waves, scenic views, and a laid-back beach lifestyle.</p>
                </div>
              </div>
            </div>

            <div className="featured-item my-2 shadow">
              <img src="src/images/featured-berlin-germany.jpg" alt="featured place" />
              <div className="featured-item-content">
                <span>
                  <i className="fas fa-map-marker-alt"></i>
                  Berlin, Germany
                </span>
                <div>
                  <p className="text">A vibrant capital blending rich history, modern art, iconic landmarks, and dynamic nightlife, making it a hub of culture and creativity.</p>
                </div>
              </div>
            </div>

            <div className="featured-item my-2 shadow">
              <img src="src/images/featured-khwaeng-wat-arun-thailand.jpg" alt="featured place" />
              <div className="featured-item-content">
                <span>
                  <i className="fas fa-map-marker-alt"></i>
                  Khwaeng wat arun, thailand
                </span>
                <div>
                  <p className="text">Famous for the Temple of Dawn, this riverside area offers stunning architecture, cultural charm, and peaceful views of the Chao Phraya River.</p>
                </div>
              </div>
            </div>

            <div className="featured-item my-2 shadow">
              <img src="src/images/featured-rome-italy.jpg" alt="featured place" />
              <div className="featured-item-content">
                <span>
                  <i className="fas fa-map-marker-alt"></i>
                  Rome, Italy
                </span>
                <div>
                  <p className="text">The Eternal City, famed for ancient ruins, Vatican treasures, piazzas, and timeless charm blending history, art, and romance.</p>
                </div>
              </div>
            </div>

            <div className="featured-item my-2 shadow">
              <img src="src/images/featured-fuvahmulah-maldives.jpg" alt="featured place" />
              <div className="featured-item-content">
                <span>
                  <i className="fas fa-map-marker-alt"></i>
                  fuvahmulah, maldives
                </span>
                <div>
                  <p className="text">A unique island paradise with lush landscapes, vibrant marine life, black pebble beaches, and world-className diving experiences.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end of featured section --> */}

      {/* <!-- services section --> */}
      <section id="services" className="py-4">
        <div className="container">
          <div className="title-wrap">
            <span className="sm-title">know about services that we offer</span>
            <h2 className="lg-title">Our services</h2>
          </div>

          <div className="services-row">
            <div className="services-item">
              <span className="services-icon">
                <i className="fas fa-hotel"></i>
              </span>
              <h3>Luxurious Hotel</h3>
              <p className="text">Experience comfort and elegance with world-className amenities, exquisite rooms, fine dining, and exceptional service for a truly unforgettable stay.</p>
              <a href="#" className="btn">Read more</a>
            </div>

            <div className="services-item">
              <span className="services-icon">
                <i className="fas fa-map-marked-alt"></i>
              </span>
              <h3>Trave Guide</h3>
              <p className="text">Explore destinations like a local with expert tips, hidden gems, itineraries, and insider advice for a seamless and memorable journey.</p>
              <a href="#" className="btn">Read more</a>
            </div>

            <div className="services-item">
              <span className="services-icon">
                <i className="fas fa-money-bill"></i>
              </span>
              <h3>Suitable Price</h3>
              <p className="text">Enjoy unforgettable trips and premium services without overspending. We offer travel packages that suit every budget.</p>
              <a href="#" className="btn">Read more</a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end of services section --> */}

      {/* <!-- testimonials section --> */}
      <section id="testimonials" className="py-4">
        <div className="container">
          <div className="title-wrap">
            <span className="sm-title">what our clients say about us</span>
            <h2 className="lg-title">testimonials</h2>
          </div>

          <div className="test-row">
            <div className="test-item">
              <p className="text">Traveling with TripBoss was amazing! From thrilling adventures to luxury stays, every detail was seamless. Even on a budget, I enjoyed incredible experiences. Their expert planning and personalized touch make every trip unforgettable for adventurers, luxury seekers, and budget travelers alike.</p>
              <div className="test-item-info">
                <img src="src/images/test-1.jpg" alt="testimonial" />
                <div>
                  <h3>Kevin Wilson</h3>
                  <p className="text">Trip to Brazil</p>
                </div>
              </div>
            </div>

            <div className="test-item">
              <p className="text">I can’t recommend TripBoss enough! They helped me explore hidden treasures, enjoy luxurious accommodations, and stick to my budget. Their service is thoughtful, professional, and perfect for every type of traveler. Every journey felt effortless, memorable, and full of joy.</p>
              <div className="test-item-info">
                <img src="src/images/test-2.jpg" alt="testimonial" />
                <div>
                  <h3>Ben Davis</h3>
                  <p className="text">Trip to Maldives</p>
                </div>
              </div>
            </div>

            <div className="test-item">
              <p className="text">Thanks to TripBoss, I experienced the perfect balance of adventure, comfort, and affordability. Every trip was carefully planned, from sightseeing to accommodations. Whether you seek luxury, excitement, or value, their services make traveling easy, enjoyable, and unforgettable.</p>
              <div className="test-item-info">
                <img src="src/images/test-3.jpg" alt="testimonial" />
                <div>
                  <h3>Jaura Jones</h3>
                  <p className="text">Trip to Thailand</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end of testimonials section --> */}

      {/* <!-- video section --> */}
      <section id="video">
        <div className="video-wrapper flex">
          <video loop>
            <source src="src/videos/video-section.mp4" type="video/mp4" />
          </video>
          {/* <button type="button" id="play-btn">
            <i className="fas fa-play"></i>
          </button> */}
        </div>
      </section>
      {/* <!-- end of video section --> */}

      {/* <!-- footer --> */}
      <footer className="py-4">
        <div className="container footer-row">
          <div className="footer-item">
            <a href="index.html" className="site-brand">
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
      {/* <!-- end of footer --> */}

      {/* <!-- js --> */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"></script>
     
    </>
    

  );
}

export default Home;
