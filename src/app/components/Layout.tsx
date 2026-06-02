import { Outlet } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingCart } from "./FloatingCart";
import { CartProvider } from "../context/CartContext";

export function Layout() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <FloatingCart />
      </div>
    </CartProvider>
  );
}
