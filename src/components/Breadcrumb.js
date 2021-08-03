import React from 'react'
import { NavLink } from 'react-router-dom'

const Breadcrumb = () => {
    return (
        <div className="breadcome-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="breadcome-list">
                                <div className="row">
                                    <div className="col-lg-10 col-md-10 col-sm-6 col-xs-12">
                                        <div className="breadcome-heading">
                                            <form role="search" className="sr-input-func">
                                                <input type="text" placeholder="Search..." className="search-int form-control"/>
                                                <a href="/"><i className="fa fa-search"></i></a>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12">
                                        <ul className="breadcome-menu">
                                            <li><NavLink exact to="/">Home</NavLink> <span className="bread-slash">/</span>
                                            </li>
                                            <li><span className="bread-blod">All Professors</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Breadcrumb;
