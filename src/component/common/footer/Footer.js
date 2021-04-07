import React, {Component} from 'react';
import './Footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class AboutUs extends Component {
    render() {
        return (
            <div className="row bg-dark">
                <div className="col-4">
                    <div>
                        <img src="../../../assets/club/Ms-Club.jpg" alt="masClub" width="50"/>
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti magni maiores molestias
                            suscipit tempore? Asperiores aut beatae doloremque, enim fugit, illum itaque mollitia nobis
                            optio quo ratione, repudiandae voluptas voluptates.
                        </p>
                    </div>
                </div>
                <div className="col-4">
                    <div>
                        <h5><u>Use Full Links</u></h5>
                        <div>
                            <ul>
                                <li>Home</li>
                                <li>Contact</li>
                                <li>Blog</li>
                                <li>Events</li>
                                <li>Code of Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div>
                        <h5><u>Subscribe</u></h5>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid asperiores dolores
                                harum laboriosam, maiores nobis quae repudiandae tempora voluptatem? Autem esse facilis
                                neque nihil nobis perspiciatis soluta sunt vero!</p>
                        </div>
                        <div>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Email Address"/>
                                <span className="input-group-text">
                                        <FontAwesomeIcon icon={}/>
                                    </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUs;
