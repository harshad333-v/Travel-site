import React from 'react';
import Navbar from '../Component/Navbar';

const Blog = () => {
  return (
    <>
      <Navbar />
      {/* header */}
      <header className="flex header-sm">
        <div className="container">
          <div className="header-title">
            <h1>Blog</h1>
            <p>
              Discover travel tips, hidden gems, and inspiring stories! Our blog helps you plan adventures, explore cultures, and make every journey unforgettable.
            </p>
          </div>
        </div>
      </header>
      {/* header */}

      {/* blog section */}
      <section id="blog" className="py-4">
        <div className="container">
          <div className="title-wrap">
            <h2 className="sm-title">read these blog for information</h2>
            <h3 className="lg-title">recent blog</h3>
          </div>

          <div className="blog-row">
            {/* Blog Items */}
            <div className="blog-item my-2 shadow">
              <div className="blog-item-top">
                <img src="/src/images/blog-1.jpg" alt="blog" />
                <span className="blog-date">sep 28, 2025</span>
              </div>
              <div className="blog-item-bottom">
                <span>travel | john doe</span>
                <a href="#">Sun, Sand, and Serenity: Beach Escapes</a>
                <p className="text">
                  Dive into the ultimate beach experiences! Explore pristine shores, turquoise waters, and breathtaking sunsets. From popular destinations to hidden gems, our blog shares travel tips, activities, and inspiration to make your seaside adventures unforgettable. Whether you seek relaxation, adventure, or family fun, discover your perfect beach getaway here.
                </p>
              </div>
            </div>

            <div className="blog-item my-2 shadow">
              <div className="blog-item-top">
                <img src="/src/images/blog-2.jpg" alt="blog" />
                <span className="blog-date">Jan 08, 2025</span>
              </div>
              <div className="blog-item-bottom">
                <span>travel | john doe</span>
                <a href="#">Savor the Flavors: Culinary Journeys</a>
                <p className="text">
                  Explore the world of taste! From local delicacies to fine dining, our blog guides you through must-visit restaurants, hidden gems, and unforgettable culinary experiences. Discover recipes, food tips, and mouthwatering dishes that make every meal a delightful adventure.
                </p>
              </div>
            </div>

            <div className="blog-item my-2 shadow">
              <div className="blog-item-top">
                <img src="/src/images/blog-3.jpg" alt="blog" />
                <span className="blog-date">Dec 27, 2024</span>
              </div>
              <div className="blog-item-bottom">
                <span>travel | john doe</span>
                <a href="#">Reach New Heights: Mountain Adventures</a>
                <p className="text">
                  Embark on thrilling mountain climbing journeys! Explore majestic peaks, conquer challenging trails, and experience breathtaking views. Our blog shares expert tips, gear advice, and inspiring stories for adventurers seeking both thrill and serenity in the world’s most stunning mountains.
                </p>
              </div>
            </div>

            <div className="blog-item my-2 shadow">
              <div className="blog-item-top">
                <img src="/src/images/blog-4.jpg" alt="blog" />
                <span className="blog-date">July 20, 2024</span>
              </div>
              <div className="blog-item-bottom">
                <span>travel | john doe</span>
                <a href="#">Wonders of the World: Travel Moments</a>
                <p className="text">
                  Journey across continents through stunning photos! From iconic landmarks to hidden gems, our gallery captures unforgettable moments and breathtaking views. Get inspired to explore new destinations, cultures, and adventures around the globe.
                </p>
              </div>
            </div>

            <div className="blog-item my-2 shadow">
              <div className="blog-item-top">
                <img src="/src/images/blog-5.jpg" alt="blog" />
                <span className="blog-date">Feb 28, 2024</span>
              </div>
              <div className="blog-item-bottom">
                <span>travel | john doe</span>
                <a href="#">Desert Adventures: Sands of Wonder</a>
                <p className="text">
                  Experience the magic of deserts! From golden dunes to stunning sunsets, our blog shares thrilling desert tours, camel rides, and cultural encounters. Discover tips, hidden gems, and unforgettable adventures in some of the world’s most breathtaking arid landscapes.
                </p>
              </div>
            </div>

            <div className="blog-item my-2 shadow">
              <div className="blog-item-top">
                <img src="/src/images/blog-6.jpg" alt="blog" />
                <span className="blog-date">Jan 18, 2024</span>
              </div>
              <div className="blog-item-bottom">
                <span>travel | john doe</span>
                <a href="#">Scenic Drives: Hills &amp; Highways”</a>
                <p className="text">
                  Hit the road and explore breathtaking hill stations! Enjoy winding roads, panoramic views, and serene landscapes. Our guide shares tips for safe driving, must-visit stops, and memorable journeys through the world’s most scenic hilly terrains.
                </p>
              </div>
            </div>

            <div className="blog-item my-2 shadow">
              <div className="blog-item-top">
                <img src="/src/images/blog-7.jpg" alt="blog" />
                <span className="blog-date">oct 28, 2023</span>
              </div>
              <div className="blog-item-bottom">
                <span>travel | john doe</span>
                <a href="#">Captured Moments: Memories Forever?</a>
                <p className="text">
                  Relive your travel adventures through stunning photos! From breathtaking landscapes to joyful experiences, our gallery preserves the memories that make every journey unforgettable. Explore, remember, and get inspired for your next adventure.
                </p>
              </div>
            </div>

            <div className="blog-item my-2 shadow">
              <div className="blog-item-top">
                <img src="/src/images/blog-8.jpg" alt="blog" />
                <span className="blog-date">oct 08, 2023</span>
              </div>
              <div className="blog-item-bottom">
                <span>travel | john doe</span>
                <a href="#">Solitude in the Hills: Nature’s Embrace</a>
                <p className="text">
                  Find peace sitting alone amidst the hills. Breathe fresh air, enjoy panoramic views, and connect with nature. Let the serene landscapes calm your mind, inspire reflection, and make your solo journey truly unforgettable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of blog section */}

      {/* footer */}
      <footer className="py-4">
        <div className="container footer-row">
          <div className="footer-item">
            <a href="/" className="site-brand">
              Trip<span>Boss</span>
            </a>
            <p className="text">
              TripBoss made my travel dreams come true! From hidden adventures to luxurious stays, every detail was seamless. Even on a budget, I enjoyed unforgettable experiences. TripBoss truly caters to all travelers adventurers, luxury seekers, and budget explorers alike. Traveling has never been this easy and enjoyable!
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

export default Blog;
