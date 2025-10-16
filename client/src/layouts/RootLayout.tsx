import { Button } from "@/components/ui/button";
import { NavMenu } from "./NavMenu";
import { NavigationSheet } from "./NavigationSheet";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-muted">
      <nav className="h-16 bg-background border-b">
        <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
          ChessGuidex

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />

          <div className="flex items-center gap-3">
            <Button variant="outline" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button>Get Started</Button>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
