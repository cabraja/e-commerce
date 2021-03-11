import React from 'react'
import '../assets/home.css'
import '../assets/home-mobile.css'
import {Link} from 'react-router-dom'
import Cart from './Cart'

function Home({cart,setCart,isCartOpen,setIsCartOpen}) {
    return (
        <>
            <main>
                <div id="top-left">
                    <div id="top-left-text">
                        <h1>Moderna</h1>
                    <h3>State Of The Art Furniture</h3>
                    </div>
                </div>

                <div id="top-right">
                    <nav>
                        <Link to='/'><i class="fas fa-home"></i></Link>
                        <Link to='/shop' ><i class="fas fa-store"></i></Link>
                        <div id="cart" onClick={() => setIsCartOpen(true)}>
                            <i class="fas fa-shopping-cart"></i>
                            <div id="cart-num">{cart.length}</div>
                        </div>
                        
                    </nav>

                    <h2>Decorate Your Home</h2>
                    <p>
                        Well maybe you are and you just don't know it yet. It's information about the future isn't it. I warned you about this kid. The consequences could be disastrous. Oh, hi , Marty. I didn't hear you come in. Fascinating device, this video unit. Hey man, look at Marvin's hand. He can't play with his hands like that, and we can't play without him. Um, yeah, I'm on my way. Alright, McFly, you're asking for it, and now you're gonna get it. 
                    </p>

                    <Link to='/shop'><button className='main-button'>Explore</button></Link>
                </div>

                <div id="bottom-left">
                    <h2>Best Choice</h2>
                    <p>
                        Last night, Darth Vader came down from planet Vulcan. And he told me that if I didn't take Lorraine, that he'd melt my brain. Oh, you make it sound so easy. I just, I wish I wasn't so scared. Nothing. That's for messing up my hair. No, get out of town, my mom thinks I'm going camping with the guys. Well, Jennifer, my mother would freak out if she knew I was going up there with you. Doc, look, all we need is a little plutonium. No no no, Doc, I just got here, okay, Jennifer's here, we're gonna take the new truck for a spin.
                    </p>

                    <Link to='/shop'><button className='main-button'>Products</button></Link>
                </div>

                <div id="bottom-right">

                </div>
            </main>

            <article>
                <section>
                    <i class="fas fa-truck"></i>
                    <h4>Free Shipping</h4>
                    <p>Hi, it's really a pleasure to meet you. Well, I guess that's everything. Doc, I'm from the future. I came here in a time machine that you invented. Now, I need your help to get back to the year 1985. You guys, take him in back and I'll be right there. </p>
                </section>

                <section>
                    <i class="fas fa-phone-alt"></i>
                    <h4>Tech Support</h4>
                    <p>Hi, it's really a pleasure to meet you. Well, I guess that's everything. Doc, I'm from the future. I came here in a time machine that you invented. Now, I need your help to get back to the year 1985. You guys, take him in back and I'll be right there. </p>
                </section>

                <section>
                    <i class="fas fa-tag"></i>
                    <h4>Best Price</h4>
                    <p>Hi, it's really a pleasure to meet you. Well, I guess that's everything. Doc, I'm from the future. I came here in a time machine that you invented. Now, I need your help to get back to the year 1985. You guys, take him in back and I'll be right there. </p>
                </section>
            </article>

            <div id="couch-div-wrapper">
                <div id="couch-div">
                    <h3>What are you waiting for?</h3>
                    <Link to='/shop'><button className='main-button'>Check Out Our Shop <span id='right-arrow'>&rarr;</span></button></Link>
                </div>
            </div>

            <footer>
                <div id="footer-logo">
                    <h5>Moderna Furniture</h5>
                    <div className="social-media">
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-youtube"></i>
                        <i class="fab fa-facebook-f"></i>
                    </div>
                </div>

                <div id="footer-contact">
                    <h5 className='footer-h5'>Contact</h5>
                    <a href="#">012/3456-789</a>
                    <a href="#">modernastudio@mail.com</a>
                    <a href="#">1210 East Street, Seattle</a>
                    <a href="#">FAQ</a>
                </div>

                <div id="footer-moderna">
                    <h5 className='footer-h5'>Moderna</h5>
                    <a href="#">Founders</a>
                    <a href="#">Employees</a>
                    <a href="#">Designers</a>
                </div>

                <div id="newsletter">
                    <h5>Stay in touch with us:</h5>
                    <input type="email" placeholder='Your Email Address'/>
                    <button id='signup'>Sign Up</button>
                </div>

            </footer>

            {isCartOpen && <Cart setIsCartOpen={setIsCartOpen} cart={cart} setCart={setCart} />}
        </>
    )
}

export default Home
