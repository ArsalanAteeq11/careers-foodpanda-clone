import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Search,
} from "lucide-react";
import { LiaLinkedin } from "react-icons/lia";

const footerLinks = {
  company: [
    { label: "Locations", href: "#" },
    { label: "Teams", href: "#" },
  ],
  legal: [
    { label: "Job Openings", href: "#" },
    { label: "Our Values", href: "#" },
  ],
  support: [{ label: "Cookies and Similar Technologies Policy", href: "#" }],
};

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-2">About Us</h3>
            <ul className="space-y-1">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className=" hover:text-[#E31C79] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Join Us</h3>
            <ul className="space-y-1">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className=" hover:text-[#E31C79] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Privacy Policies</h3>
            <ul className="space-y-1">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className=" hover:text-[#E31C79] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between gap-2 rounded-xl p-2 h-min bg-white text-black">
            <input
              type="text"
              placeholder="start your job search here"
              className="outline-none"
            />
            <Search className="w-5 h-5" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center text-lg gap-2">
          <p>Connect with us:</p>
          <Linkedin className="h-5 " />
        </div>
      </div>
    </footer>
  );
}
