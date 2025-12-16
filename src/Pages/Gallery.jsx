import React from 'react';
import Navbar from '../Component/Navbar';

const Gallery = () => {
  return (
    <>
    <Navbar />
     <header className="flex header-sm">
            <div className="container">
                <div className="header-title">
                    <h1>Gallery</h1>
                    <p>Explore the world through our gallery! Stunning destinations, unforgettable moments, and travel memories captured to inspire your next adventure.</p>
                </div>
            </div>
        </header>
        {/* <!-- header --> */}

        {/* <!-- gallery section --> */}
        <div id="gallery" className="py-4">
            <div className="container">
                <div className="gallery-row">
                    <div className="gallery-item shadow">
                        <img src="src/images/gallery-1.jpg" alt="gallery img" />
                        <span className="zoom-icon">
                            <i className="fas fa-search-plus"></i>
                        </span>
                    </div>
                    <div className="gallery-item shadow">
                        <img src="src/images/gallery-2.jpg" alt="gallery img" />
                        <span className="zoom-icon">
                            <i className="fas fa-search-plus"></i>
                        </span>
                    </div>
                    <div className="gallery-item shadow">
                        <img src="src/images/gallery-3.jpg" alt="gallery img" />
                        <span className="zoom-icon">
                            <i className="fas fa-search-plus"></i>
                        </span>
                    </div>
                    <div className="gallery-item shadow">
                        <img src="src/images/gallery-4.jpg" alt="gallery img" />
                        <span className="zoom-icon">
                            <i className="fas fa-search-plus"></i>
                        </span>
                    </div>
                    <div className="gallery-item shadow">
                        <img src="src/images/gallery-5.jpg" alt="gallery img" />
                        <span className="zoom-icon">
                            <i className="fas fa-search-plus"></i>
                        </span>
                    </div>
                    <div className="gallery-item shadow">
                        <img src="src/images/gallery-6.jpg" alt="gallery img" />
                        <span className="zoom-icon">
                            <i className="fas fa-search-plus"></i>
                        </span>
                    </div>
                    <div className="gallery-item shadow">
                        <img src="src/images/gallery-7.jpg" alt="gallery img" />
                        <span className="zoom-icon">
                            <i className="fas fa-search-plus"></i>
                        </span>
                    </div>
                    <div className="gallery-item shadow">
                        <img src="src/images/gallery-8.jpg" alt="gallery img" />
                        <span className="zoom-icon">
                            <i className="fas fa-search-plus"></i>
                        </span>
                    </div>
                    <div className="gallery-item shadow">
                        <img src="src/images/gallery-9.jpg" alt="gallery img" />
                        <span className="zoom-icon">
                            <i className="fas fa-search-plus"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- end of gallery section --> */}

        {/* <!-- img modal --> */}
        <div id="img-modal-box">
            <div id="img-modal">
                <button type="button" id="modal-close-btn" className="flex">
                    <i className="fas fa-times"></i>
                </button>
                <button type="button" id="prev-btn" className="flex">
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button type="button" id="next-btn" className="flex">
                    <i className="fas fa-chevron-right"></i>
                </button>
                <img src="src/images/gallery-1.jpg" alt="gallery img" />
            </div>
        </div>
        {/* <!-- end of img modal --> */}

        {/* <!-- popular places section --> */}
        <section id="popular" className="py-4">
            <div className="title-wrap">
                <span className="sm-title">know about some coo destination</span>
                <h2 className="lg-title">Popular Places</h2>
            </div>

            <div className="popular-row">
                <div className="popular-item shadow">
                    <img src="src/images/popular-1.jpg" alt="Eiffel Tower, Paris" />
                    <div>
                        <span>Eiffel Tower, Paris</span>
                        <ul className="rating flex">
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star-half-alt"></i></li>
                            <li>&nbsp;400 reviews</li>
                        </ul>
                        <p className="text"></p>
                    </div>
                </div>

                <div className="popular-item shadow">
                    <img src="src/images/popular-2.jpg" alt="Machu Picchu, Peru" />
                    <div>
                        <span>Machu Picchu, Peru</span>
                        <ul className="rating flex">
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star-half-alt"></i></li>
                            <li>&nbsp;400 reviews</li>
                        </ul>
                        <p className="text"></p>
                    </div>
                </div>

                <div className="popular-item shadow">
                    <img src="src/images/popular-3.jpg" alt="Acropolis, Athens" />
                    <div>
                        <span>Acropolis, Athens</span>
                        <ul className="rating flex">
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star-half-alt"></i></li>
                            <li>&nbsp;400 reviews</li>
                        </ul>
                        <p className="text"></p>
                    </div>
                </div>

                <div className="popular-item shadow">
                    <img src="src/images/popular-4.jpg" alt="Bali, Indonesia" />
                    <div>
                        <span>Bali, Indonesia</span>
                        <ul className="rating flex">
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star-half-alt"></i></li>
                            <li>&nbsp;400 reviews</li>
                        </ul>
                        <p className="text"></p>
                    </div>
                </div>

                <div className="popular-item shadow">
                    <img src="src/images/popular-5.jpg" alt="Dubai, United Arab Emirates" />
                    <div>
                        <span>Dubai, United Arab Emirates</span>
                        <ul className="rating flex">
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star-half-alt"></i></li>
                            <li>&nbsp;400 reviews</li>
                        </ul>
                        <p className="text"></p>
                    </div>
                </div>

                <div className="popular-item shadow">
                    <img src="src/images/popular-6.jpg" alt="Paro Taktsang, Bhutan" />
                    <div>
                        <span>Bhutan</span>
                        <ul className="rating flex">
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star-half-alt"></i></li>
                            <li>&nbsp;400 reviews</li>
                        </ul>
                        <p className="text"></p>
                    </div>
                </div>

                <div className="popular-item shadow">
                    <img src="src/images/popular-7.jpg" alt="Havana, Cuba" />
                    <div>
                        <span>Havana, Cuba</span>
                        <ul className="rating flex">
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star-half-alt"></i></li>
                            <li>&nbsp;400 reviews</li>
                        </ul>
                        <p className="text"></p>
                    </div>
                </div>

                <div className="popular-item shadow">
                    <img src="src/images/popular-8.jpg" alt="Moskva, Russia" />
                    <div>
                        <span>Moskva, Russia</span>
                        <ul className="rating flex">
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star-half-alt"></i></li>
                            <li>&nbsp;400 reviews</li>
                        </ul>
                        <p className="text"></p>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- end of popular places section --> */}
        

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
    </>
  );
}

export default Gallery;
