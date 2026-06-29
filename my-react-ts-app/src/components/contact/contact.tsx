// filepath: /src/components/Contact.tsx
import React from 'react';
import styles from '../styles/contact.module.css';

const Contact: React.FC = () => {
    return (
        <section id="contact" className={styles.contactContainer}>
            <h1 className={styles.contactTitle}>
                Your next big idea starts here. Let's discuss it!
            </h1>
            <h3 className={styles.contactEmail}>
                <a href="mailto:nwachukwudivine02@gmail.com">
                    nwachukwudivine02@gmail.com
                </a>
            </h3>
            <div className={styles.socials}>
                <h3>Let's Connect</h3>
                <div className={styles.socialLinks}>
                    <a href="https://www.instagram.com/chimdike_/">
                        <img
                            src="./assets/instagram-2016-logo-svgrepo-com.svg"
                            alt="Instagram"
                        />
                    </a>
                    <a href="https://github.com/chimdike21">
                        <img
                            src="./assets/github-logo-svgrepo-com.svg"
                            alt="GitHub"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/chimdike-nwachukwu/">
                        <img
                            src="./assets/linkedin-logo-svgrepo-com.svg"
                            alt="LinkedIn"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;