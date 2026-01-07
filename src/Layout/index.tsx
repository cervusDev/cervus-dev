import { Outlet, useLocation } from "react-router";
import Header from "./header";
import LogosSlider from "@/components/logoSlider";

export default function MainLayout() {
  const location = useLocation();

  const hasHome = location.pathname == "/";

  return (
    <div className="min-h-screen text-white">
      <Header />
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <Outlet />
        </div>
        {hasHome && <LogosSlider />}
      </main>
    </div>
  );
}
