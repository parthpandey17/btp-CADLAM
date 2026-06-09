"use client";

import NavbarElements from "@/data/navbar-elements.json";
import Hamburger from "@/components/animated/hamburger";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import SparklingText from "./SparklingText";

// Dummy search data - Pages available on the site
const SEARCH_DATA = [
  { id: 1, title: "Home", description: "Main landing page", link: "/", date: "2027-02-11" },
  { id: 2, title: "Committees", description: "Organizing and program committees", link: "/commitees", date: "2027-02-11" },
  { id: 3, title: "Invited Speakers", description: "Distinguished keynote speakers", link: "/invitedspeakers", date: "2027-02-11" },
  { id: 4, title: "Call for Papers", description: "Submit your research papers", link: "/call-for-papers", date: "2027-02-11" },
  { id: 5, title: "Registration", description: "Register for the conference", link: "/registration", date: "2027-02-11" },
  { id: 6, title: "Venue", description: "Location and venue information", link: "/venue", date: "2027-02-11" },
  { id: 7, title: "Pre-Conference School", description: "Training and pre-conference events", link: "/pre-conference-school", date: "2027-02-11" },
];

// Debounce hook
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

export default function Navbar() {
  const mobileNavbarVariants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
    },
    exit: {
      scaleY: 0,
    },
  };

  const router = useRouter();
  const [openNavbar, setOpenNavbar] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchInputRef = useRef(null);
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  // Filter search results
  useEffect(() => {
    if (debouncedSearchQuery.trim() === "") {
      setSearchResults([]);
    } else {
      const query = debouncedSearchQuery.toLowerCase();
      const filtered = SEARCH_DATA.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
      );
      setSearchResults(filtered);
    }
  }, [debouncedSearchQuery]);

  // Focus search input when opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Keyboard shortcut (Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
      // Close search with Escape
      if (e.key === "Escape") {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSearchResultClick = (link) => {
    router.push(link);
    setIsSearchOpen(false);
    setSearchQuery("");
  };

  return (
    <>
      <div className="sticky left-0 top-0 z-30 bg-bluevariants-200 text-white shadow-md">
        <div className="relative flex items-center justify-between px-5 py-3">
          {/* Logo */}
          <h1
            onClick={(e) => {
              e.preventDefault();
              router.push("/");
            }}
            className="mr-10 cursor-pointer text-2xl font-bold whitespace-nowrap"
          >
            CALDAM <p className="text-center text-xs">2027</p>
          </h1>

          {/* Desktop View Navigation */}
          <div className="hidden items-center justify-center space-x-8 lg:flex flex-1">
            {NavbarElements.map((elem, index) => {
              return (
                <div key={index} className="py-4">
                  {/* Link */}
                  {!elem.animate && (
                    <Link
                      prefetch
                      target={elem?.item ? "_blank" : ""}
                      href={elem?.item ? elem.item : elem.link}
                      onClick={() => setOpenNavbar(false)}
                      className="inline-block text-white text-sm hover:text-gray-200 transition-colors duration-200"
                    >
                      {elem.name}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Side - Search Icon */}
          <div className="flex items-center space-x-4 lg:space-x-6">
            {/* Search Icon */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-200"
              title="Search (Ctrl+K)"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Mobile View Hamburger */}
            <div className="lg:hidden z-10">
              <Hamburger
                onClick={() => {
                  setOpenNavbar(!openNavbar);
                }}
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {openNavbar && (
            <motion.div
              variants={mobileNavbarVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed top-0 left-0 w-full h-screen bg-bluecolor p-5 lg:hidden flex flex-col items-start justify-start overflow-y-auto"
            >
              {/* Title Section */}
              <div className="w-full">
                <h1
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/");
                  }}
                  className="cursor-pointer text-xl mb-4 font-bold"
                >
                  CALDAM
                  <p className="text-sm">2027</p>
                </h1>
              </div>

              {/* Navbar Elements */}
              {NavbarElements.map((elem, index) => {
                return (
                  <div key={index} className="py-4 text-white w-full">
                    {/* Animated element for mobile */}
                    {elem.animate && (
                      <SparklingText content="Submission date extended" />
                    )}

                    {/* Link without animation */}
                    {!elem.animate && (
                      <Link
                        prefetch
                        target={elem?.item ? "_blank" : ""}
                        href={elem?.item ? elem.item : elem.link}
                        onClick={() => setOpenNavbar(false)}
                        className="block w-full text-left text-white"
                      >
                        {elem.name}
                      </Link>
                    )}
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Search Modal Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setIsSearchOpen(false);
                setSearchQuery("");
              }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
            />

            {/* Search Modal */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-lg"
            >
              <div className="max-w-4xl mx-auto px-4 py-6">
                {/* Search Input */}
                <div className="relative flex items-center">
                  <svg
                    className="absolute left-3 w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>

                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search pages, speakers, papers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-12 py-3 text-lg border-none outline-none bg-transparent text-gray-900 placeholder-gray-400"
                  />

                  {/* Close Button */}
                  <button
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery("");
                    }}
                    className="absolute right-3 p-1 hover:bg-gray-100 rounded transition-colors"
                  >
                    <svg
                      className="w-6 h-6 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Divider */}
                <div className="border-b border-gray-200 mt-4" />

                {/* Search Results */}
                <div className="mt-4 max-h-96 overflow-y-auto">
                  {searchQuery.trim() === "" ? (
                    <div className="py-8 text-center text-gray-500">
                      <p className="text-sm">Type to search the site...</p>
                      <p className="text-xs mt-2 text-gray-400">
                        Press <kbd className="px-2 py-1 bg-gray-100 rounded text-xs font-semibold">Esc</kbd> to close
                      </p>
                    </div>
                  ) : searchResults.length > 0 ? (
                    <div className="space-y-3">
                      {searchResults.map((result) => (
                        <button
                          key={result.id}
                          onClick={() => handleSearchResultClick(result.link)}
                          className="w-full text-left p-4 rounded-lg hover:bg-gray-50 transition-colors duration-150 border border-transparent hover:border-gray-200"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className="text-base font-semibold text-gray-900">
                                {result.title}
                              </h3>
                              <p className="text-sm text-gray-600 mt-1">
                                {result.description}
                              </p>
                            </div>
                            <div className="text-xs text-gray-400 ml-4 whitespace-nowrap">
                              {new Date(result.date).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="py-8 text-center text-gray-500">
                      <p className="text-sm">No pages found for &quot;{searchQuery}&quot;</p>
                    </div>
                  )}
                </div>

                {/* Footer Info */}
                {searchQuery.trim() === "" && (
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500">
                      Tip: Press <kbd className="px-2 py-1 bg-gray-100 rounded text-xs font-semibold">Ctrl</kbd> + <kbd className="px-2 py-1 bg-gray-100 rounded text-xs font-semibold">K</kbd> to open search anytime
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
