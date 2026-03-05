import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-black  p-10 text-[#A1A1AA]">
                <aside className="max-w-[350px]">
                    <p className="text-2xl font-bold text-white">
                        CS — Ticket System
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sint, obcaecati fugiat cumque autem consequatur veniam. Dignissimos amet reprehenderit nihil quaerat, eaque, neque aut earum dolore est repellat commodi modi. Lorem ipsum dolor s!</p>
                </aside>
                <nav>
                    <h6 className="text-xl font-medium text-white">Company</h6>
                    <a className="link link-hover ">About Us</a>
                    <a className="link link-hover">Contact Saled</a>
                    <a className="link link-hover">Our Mission</a>
                </nav>
                <nav>
                    <h6 className="text-xl font-medium text-white">Services</h6>
                    <a className="link link-hover">Customer Stories</a>
                    <a className="link link-hover">Products & Services</a>
                    <a className="link link-hover">Download Apps</a>
                </nav>
                <nav>
                    <h6 className="text-xl font-medium text-white">Information</h6>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms & Conditions</a>
                    <a className="link link-hover">Join Us</a>
                </nav>
                <nav>
                    <h6 className="text-xl font-medium text-white">Social Links</h6>
                    <a className="link link-hover flex items-center gap-1"><FaXTwitter />@CS — Ticket System</a>
                    <a className="link link-hover flex items-center gap-1"><FaLinkedin />@CS — Ticket System</a>
                    <a className="link link-hover flex items-center gap-1"><FaFacebook />@CS — Ticket System</a>
                    <a className="link link-hover flex items-center gap-1"> <IoIosMail />support@cst.com</a>
                </nav>
            </footer>
            <div className="divider text-white"></div>
            <footer className="footer sm:footer-horizontal footer-center bg-black text-base-content p-4">
                <aside>
                    <p className="text-white">Copyright © {new Date().getFullYear()} - Ticket System. All right reserved</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;