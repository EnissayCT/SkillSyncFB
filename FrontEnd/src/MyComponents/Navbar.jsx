import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/30 backdrop-blur-lg border-b border-slate-200">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-12 h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/assets/logo-min-black.png" alt="SkillSync" className="w-8 h-8" />
          <h1 className="text-lg font-bold text-slate-900">SkillSync</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-slate-900 hover:text-primary">
            Home
          </Link>
          <Link to="/criteria" className="text-sm font-medium text-slate-900 hover:text-primary">
            Criteria
          </Link>
          <Link to="/pricing" className="text-sm font-medium text-slate-900 hover:text-primary">
            Pricing
          </Link>
          <Link to="/leaderboard" className="text-sm font-medium text-slate-900 hover:text-primary">
            leaderboard
          </Link>
          <Link to="/contact" className="text-sm font-medium text-slate-900 hover:text-primary">
            Contact
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm">
            Log in
          </Button>
          <Button size="sm">Sign up</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-slate-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-lg border-t py-4 px-6">
          <nav className="flex flex-col items-center space-y-4">
            <Link
              to="/landing"
              className="text-sm font-medium text-slate-900 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/criteria"
              className="text-sm font-medium text-slate-900 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Criteria
            </Link>
            <Link
              to="/pricing"
              className="text-sm font-medium text-slate-900 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-slate-900 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="outline" size="sm" className="w-full justify-center">
                Log in
              </Button>
              <Button size="sm" className="w-full justify-center">
                Sign up
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
