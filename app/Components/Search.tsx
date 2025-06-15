"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import UserAvatarGroup from "./avgroup";

interface TemplateItem {
  id: number;
  title: string;
  featured_image: string;
  custom_fields: {
    _template_link?: string[]; // it's optional and an array
  };
}

const ResponsiveSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<TemplateItem[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchSearchResults = async (query: string) => {
    if (!query) return;
    setLoading(true);
    try {
      const res = await fetch(
        `https://webcomponents.blog/wp-json/myplugin/v1/templates?search=${query}`
      );
      const data = await res.json();
      setResults(data);
      setShowResults(true);
    } catch (err) {
      console.error("Search error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchQuery.length > 1) {
        fetchSearchResults(searchQuery);
      } else {
        setResults([]);
        setShowResults(false);
      }
    }, 400); // debounce delay

    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  return (
    <section className="my-10 relative">
      <div className="text-center mb-6">
        <h2
          className="text-center text-2xl font-bold text-black dark:text-white md:text-4xl"
          style={{
            lineHeight: "1.4",
            marginBottom: "1rem",
          }}
        >
          FREE Webcomponents <br></br> and Templates
        </h2>
      </div>
      <label
        className="mx-auto w-[90%] md:w-[50%] relative bg-white  flex flex-col md:flex-row items-center justify-center border border-gray-300 py-2 px-2 md:rounded-1xl rounded-3xl gap-2 shadow-2xl focus-within:border-gray-300"
        htmlFor="search-bar"
      >
        <input
          id="search-bar"
          placeholder="Find your template here"
          autoComplete="off"
          className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white  focus:outline-none focus:ring-0 focus:border-gray-300
         focus:bg-white"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {showResults && (
          <div className="absolute top-full mt-2 bg-white dark:bg-[#1a1a1a] border  rounded-3xl shadow-lg w-full max-h-[400px] overflow-y-auto transition-all z-50 border-gray-300   ">
            {loading ? (
              <p className="p-4 text-center text-gray-500">Searching...</p>
            ) : results.length > 0 ? (
              results.map((item) => (
                <a
                  href={item.custom_fields._template_link?.[0] || "#"}
                  key={item.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 hover:bg-neon-green dark:hover:bg-[#111] "
                >
                  <Image
                    src={item.featured_image}
                    alt={item.title}
                    className="w-12 h-12 object-cover rounded-lg border-1 border-gray-200"
                  />
                  <div className="text-sm text-left">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </p>
                  </div>
                </a>
              ))
            ) : (
              <p className="p-4 text-center text-gray-500">
                No templates found
              </p>
            )}
          </div>
        )}
        <button
          className="cursor-pointer w-full md:w-auto px-6 py-3 bg-[#8366ff] border-[#8366ff] text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-3xl md:rounded-1xl transition-all disabled:opacity-70"
          style={{
            boxShadow: "0 2px 20px 0 #8366ff",
          }}
        >
          <div className="relative">
            <span className="text-sm text-[#fff] font-semibold whitespace-nowrap truncate mx-auto">
              Search
            </span>
          </div>
        </button>
      </label>

      <div className="flex justify-center items-center gap-2  flex-col  mt-4">
        {loading ? (
          // Skeleton Loader
          <div className="flex space-x-2">
            {[...Array(4)].map((_, idx) => (
              <div
                key={idx}
                className="h-10 w-10 rounded-full bg-gray-300 animate-pulse"
              ></div>
            ))}
          </div>
        ) : (
          <UserAvatarGroup />
        )}
        <p>Regular users</p>
      </div>
    </section>
  );
};

export default ResponsiveSearchBar;
