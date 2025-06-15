import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./Components/sidebar";
import ClientLayout from "./Components/ClientLayout";

export const metadata: Metadata = {
  title: "Website Templates",
  description: "Website Templates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased h-full`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

{
  /* <section className="flex flex-col sm:flex-row md:flex-row lg:flex-row  h-full md:min-h-screen md:max-h-screen overflow-hidden">
          <Sidebar sidebarOpen={sidebarOpen} />
          {/* <VerticalMenubar /> 
          <div className="flex-1 overflow-y-auto p-2 md:p-4 bg-white scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
     
          </div>
        </section> */
}
