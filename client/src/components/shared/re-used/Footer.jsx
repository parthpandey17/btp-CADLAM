"use client";
import React from "react";
import Link from "next/link";
import footerData from "@/data/footer.json";
import { BiCopyright } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { usePathname } from "next/navigation";

function Footer() {
  const path = usePathname();

  return (
    <div className=" bg-bluecolor p-8 text-white">
      <div
        className={`relative mb-8 flex justify-between max-lg:flex-col max-lg:space-y-10`}
      >
        <div>
          <iframe
            src="https://www.google.com/maps?q=The%20LNM%20Institute%20of%20Information%20Technology%20Jaipur&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen=""
            className="h-full w-full"
          ></iframe>
        </div>
        <div className={`lg:text-right `}>
          <div className={`mb-8 text-lg  `}>
            <h1 className="text-2xl font-bold">CONTACT</h1>
           <a
            href="mailto:caldam2027@lnmiit.ac.in"
            className="text-blue-500 underline cursor-pointer"
          >
            caldam2027@lnmiit.ac.in
          </a>
          
          </div>
          <div className="text-lg">
            <h1 className="text-2xl font-bold">IMPORTANT LINKS</h1>
            {footerData["importantLinks"].map((link, index) => (
              <div key={index}>
                <Link href={link.URL}>{link.title}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="mb-4 h-[2px] bg-orange"></div>
        <div className="space-y-2 text-balance ">
          <p>
            <BiCopyright className="inline" /> 2027, The LNM Institute of
            Information Technology
          </p>
          <p>
            CSA Tech Team
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
