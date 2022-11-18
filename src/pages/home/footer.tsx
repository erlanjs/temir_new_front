import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    const menuLeft = [
        {
            title: "Home"
        },
        {
            title: "order"
        },
    ]
    const menuRight = [
        {
            title: "about"
        },
        {
            title: "Contacts"
        },
    ]
    const des = [
        {
            subtitle: "Mall Of Emirates. G-floor."
        },
        {
            subtitle2: "Near: Rado, Pandora, Steve Madden"
        },
    ]

    return (
        <footer id="footer">
            <div className="container">
                <div className="footer flex items-center content-center flex-col py-24">
                    <div className="flex items-center content-center">
                        {
                            menuLeft.map(el => (
                                <Link to={"/"} className="px-8 uppercase text-sm tracking-tight">{el.title}</Link>

                            ))
                        }
                        <h1 className="px-12 font-normal text-3xl">TEMIR LLC</h1>
                        {
                            menuRight.map(el => (
                                <Link to={"/"} className="px-8 uppercase text-sm tracking-tight">{el.title}</Link>
                            ))
                        }
                    </div>
                    <div className="py-10">
                        {
                            des.map(el => (
                                <div>
                                    <p className="w-72 text-gray-500 text-center pb-0.5 text-xl uppercase tracking-tight">{el.subtitle}</p>
                                    <p className="w-72 text-gray-500 leading-8 text-center  text-xl uppercase tracking-tight">{el.subtitle2}</p>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;