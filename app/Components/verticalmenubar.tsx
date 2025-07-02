// "use client";

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// type Template = {
//   id: number;
//   title: string;
//   featured_image: string;
//   custom_fields: {
//     _template_paid?: string[];
//     _template_price?: string[];
//     _template_preview?: string[];
//     _template_link?: string[];
//   };
// };

// export default function VerticalMenubar() {
//   const [templates, setTemplates] = useState<Template[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [pageLoaded, setPageLoaded] = useState<boolean>(false);

//   const apiUrl = "https://webcomponents.blog/wp-json/myplugin/v1/templates";

//   useEffect(() => {
//     axios
//       .get(apiUrl)
//       .then((res) => setTemplates(res.data))
//       .catch((err) => console.error("API fetch error:", err))
//       .finally(() => setLoading(false));
//   }, []);

//   useEffect(() => {
//     const handleLoad = () => setPageLoaded(true);
//     if (document.readyState === "complete") handleLoad();
//     else {
//       window.addEventListener("load", handleLoad);
//       return () => window.removeEventListener("load", handleLoad);
//     }
//   }, []);

//   return (
//     <section className="w-full md:w-90 bg-[#E2E8F0] p-4 md:h-screen h-full overflow-y-auto ">
//       <h2 className="text-xl font-semibold text-gray-800 border-b-1 border-[#dedede]  px-4 py-4 mb-4">
//         All Templates
//       </h2>

//       {loading ? (
//         <p className="text-center text-gray-600">Loading templates...</p>
//       ) : (
//         <div className="vertical__horizontal flex md:grid md:grid-cols-1 gap-4 overflow-x-auto md:overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
//           {templates.map((item) => (
//             <a
//               key={item.id}
//               href={item.custom_fields._template_link?.[0] || "#"}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="card min-w-[260px] md:min-w-full h-full border-1 border-[#E2E8F0] rounded-4xl bg-[#F8FAFC] md:p-4 p-2 hover:bg-zinc-50 hover:scale-[1.02]"
//             >
//               <div className="card__shine"></div>
//               <div className="card__glow"></div>
//               <div className="card__content flex justify-between flex-wrap gap-2 relative">
//                 <div className="left-box w-full md:w-[100%] rounded-3xl overflow-hidden">
//                   <div className="card__image w-full h-full">
//                     {pageLoaded && (
//                       <img
//                         src={item.featured_image}
//                         alt="Card preview"
//                         style={{
//                           width: "100%",
//                           height: "100%",
//                           objectFit: "contain",
//                         }}
//                       />
//                     )}
//                   </div>
//                 </div>
//                 <div className="right-box w-full md:w-[50%] flex flex-col justify-between p-2">
//                   <div className="card__text">
//                     {item.custom_fields._template_paid?.[0] === "paid" && (
//                       <div
//                         className="bg-[#F8FAFC] rounded-xl px-4 py-1 border-1 border-[#E2E8F0] w-[fit-content] mb-2"
//                         style={{
//                           left: "10px",
//                           fontSize: "14px",
//                           color: "#4F46E5",
//                         }}
//                       >
//                         Paid
//                       </div>
//                     )}
//                     <p
//                       className="card__title text-left text-[#1E293B] dark:text-white  mb-5 w-full"
//                       style={{
//                         fontSize: "16px",
//                         fontWeight: "500",
//                       }}
//                     >
//                       {item.title}
//                     </p>
//                   </div>

//                <div className="card__footer">
//                     <div className="flex gap-2 mt-3">
//                       <button className="flex-1 text-sm bg-black text-white py-2 px-3 rounded-md">
//                         {item.custom_fields._template_paid?.[0] === "paid"
//                           ? `₹${item.custom_fields._template_price?.[0] || "0"}`
//                           : "Free"}
//                       </button>
//                       <button
//                         onClick={() =>
//                           window.open(
//                             item.custom_fields._template_preview?.[0],
//                             "_blank"
//                           )
//                         }
//                         className="flex-1 text-sm border border-gray-300 py-2 px-3 rounded-md"
//                       >
//                         Preview
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </a>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }
