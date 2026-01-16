import { Satellite } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
              <Satellite className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-tight">
                GALACTIC
              </span>
              <span className="text-[10px] text-muted-foreground -mt-1 tracking-wider">
                PT Galactic Indonesia Perkasa
              </span>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center md:text-right">
            © {new Date().getFullYear()} Galactic Indonesia Perkasa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
