import { ReactNode } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <footer className="bg-foreground text-background py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-sm">
              © {new Date().getFullYear()} EcoRide. All rights reserved.
            </p>
            <p className="text-xs mt-2 opacity-80">
              Safe, Sustainable, and Reliable Transportation
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
