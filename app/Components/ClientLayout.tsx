// "use client";

// import { useState } from "react";
// import Sidebar from "./sidebar";
// import Header from "./header";

// export default function ClientLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <>
//       <section className="flex flex-col sm:flex-row md:flex-row lg:flex-row  h-full md:min-h-screen md:max-h-screen">
//         <Sidebar sidebarOpen={sidebarOpen} />
//         <section>
//           <Header setSidebarOpen={setSidebarOpen} />
//           <main className="flex-grow overflow-y-auto overflow-x-hidden md:p-4 p-2">
//             {children}
//           </main>
//         </section>
//       </section>
//     </>
//   );
// }

"use client";

import { useState } from "react";
import Sidebar from "./sidebar";
import Header from "./header";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen overflow-hidden flex">
      {/* Sidebar fixed left */}
      <div className="hidden md:block fixed left-0 top-0 h-screen w-24 z-40">
        <Sidebar sidebarOpen={sidebarOpen} />
      </div>

      {/* Right side: full width minus sidebar */}
      <div className="flex flex-col flex-1 md:ml-24 w-full h-screen">
        {/* Header fixed top */}
        <div className="fixed top-0 left-0 md:left-24 right-0 z-30">
          <Header setSidebarOpen={setSidebarOpen} />
        </div>

        {/* Scrollable content under fixed header */}
        <main className="mt-[64px] p-2 md:p-4 overflow-y-auto h-full">
          {children}
        </main>
      </div>
    </div>
  );
}
