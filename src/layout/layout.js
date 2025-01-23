import React from "react";
import Footer from "./Footer"; // Footer Component Import करो

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <header className="bg-[#242D6F] text-white p-4">
        <h1 className="text-center text-2xl font-semibold">My Website</h1>
      </header>

      {/* Main Content Section */}
      <main className="flex-grow">{children}</main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Layout;
