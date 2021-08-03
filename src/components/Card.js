import React from 'react';
import { NavLink } from 'react-router-dom';
const Card = (props) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="hpanel hblue contact-panel contact-panel-cs responsive-mg-b-30">
                            <div className="panel-body custom-panel-jw">
                                <div className="social-media-in">
                                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" ><i className="fa fa-facebook"></i></a>
                                    <a href="https://twitter.com/?lang=en" target="_blank" rel="noreferrer" ><i className="fa fa-twitter"></i></a>
                                    <a href="https://in.pinterest.com/" target="_blank" rel="noreferrer" ><i className="fa fa-pinterest"></i></a>
                                </div>
                                <img alt="logo" className="img-circle m-b" src={props.img}/>
                                <h3><NavLink to="/">{props.name}</NavLink></h3>
                                <p className="all-pro-ad">{props.country}</p>
                                <p>
                                    Lorem ipsum dolor sit amet of, consectetur adipiscing elitable. Vestibulum tincidunt est vitae ultrices accumsan.
                                </p>
                            </div>
                            <div className="panel-footer contact-footer">
                                <div className="professor-stds-int">
                                    <div className="professor-stds">
                                        <div className="contact-stat"><span>Likes: </span> <strong>956</strong></div>
                                    </div>
                                    <div className="professor-stds">
                                        <div className="contact-stat"><span>Comments: </span> <strong>350</strong></div>
                                    </div>
                                    <div className="professor-stds">
                                        <div className="contact-stat"><span>Views: </span> <strong>450</strong></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}

export default Card;
