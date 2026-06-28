import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact">
            <div className="container">
                <h1>Your next big idea starts here. Let's discuss it!</h1>
                <h3><a href="mailto:nwachukwudivine02@gmail.com">nwachukwudivine02@gmail.com</a></h3>
            </div>
            <div className="socials">
                <h3>Let's Connect</h3>
                <ul>
                    <li><a href="https://www.instagram.com/chimdike_/"><img src="./assets/instagram-2016-logo-svgrepo-com.svg" height="40px" width="40px" alt="Instagram" /></a></li>
                    {/* Repeat for other social links */}
                </ul>
            </div>
        </section>
    );
};

export default Contact;