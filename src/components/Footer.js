import React from "react";

import {
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-16 bg-primary">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="h2 uppercase mb-6 font-semibold">
            Subscribe to our newsletter
          </h2>
          <p className="text-white/60">
            Be the first to know about new products, special offers, and more!
          </p>
        </div>
        {/* Form */}
        <form className="w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-5 my-10">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full h-[50px] rounded-lg border-primary px-4"
          />
          <button className="btn btn-accent">Subscribe</button>
        </form>
        {/* Link */}
        <div className=" text-base text-white/60 flex gap-x-6 capitalize max-w-max mx-auto mb-10">
          <a href="#" className="hover:text-white transition-all">
            Return policy
          </a>
          <a href="#" className="hover:text-white transition-all">
            Track your order
          </a>
          <a href="#" className="hover:text-white transition-all">
            Shipping & delivery
          </a>
        </div>
        {/* Sosial */}
        <div className=" flex gap-x-6 max-w-max mx-auto text-lg mb-16">
          <a href="#" className="hover:text-white transition-all">
            <FaYoutube />
          </a>
          <a href="#" className="hover:text-white transition-all">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-white transition-all">
            <FaWhatsapp />
          </a>
          <a href="#" className="hover:text-white transition-all">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-white transition-all">
            <FaFacebook />
          </a>
        </div>
      </div>
      <div className="py-10 border-t border-t-white/10">
        <div className="container mx-auto">
          <div className="text-center text-sm text-white/60">
            Copyrigth © 2023. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
