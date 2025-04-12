import { Mail, MapPin, Facebook, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <img src="/assets/logo-min-white.png" alt="SkillSync" className="w-24 h-24" />
            <p className="mt-3 text-slate-400">
            Find the Right Talent Instantly with AI-Powered Resume Ranking
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-primary transition">Home</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition">Services</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="mt-3 space-y-2">
              <li className="flex items-center gap-2 text-slate-400">
                <Mail className="w-5 h-5 text-primary" /> contact@SkillSync.com
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-5 h-5 text-primary" /> Casablanca, Morocco
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-8 border-t border-slate-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-400">&copy; {new Date().getFullYear()} SkillSync. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-primary transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-primary transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-primary transition">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-primary transition">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
