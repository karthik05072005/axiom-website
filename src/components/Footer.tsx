import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-foreground text-white">
      <div className="container-section py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <img 
                src="/logo.png" 
                alt="AXIOM360 AI Logo" 
                className="h-8 w-8 rounded-lg object-contain"
                onError={(e) => {
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'/%3E%3C/svg%3E";
                }}
              />
              <span className="text-lg font-extrabold text-white">
                AXIOM<span className="text-primary">360 AI</span>
              </span>
            </div>
            <p className="mb-4 text-sm text-gray-300">
              Fast. Reliable. 360° Business & Legal Solutions. Your trusted partner for business registration, legal, tax, and licensing needs. We own both Pronto360 and AXIOM360 AI business, providing comprehensive solutions for all your business requirements.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/services?category=business" className="transition-colors hover:text-primary">Business Registration</Link></li>
              <li><Link to="/services?category=legal" className="transition-colors hover:text-primary">Legal Services</Link></li>
              <li><Link to="/services?category=tax" className="transition-colors hover:text-primary">Tax & Compliance</Link></li>
              <li><Link to="/services?category=government" className="transition-colors hover:text-primary">Government & Licenses</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/contact" className="transition-colors hover:text-primary">Contact Us</Link></li>
              <li><Link to="/services" className="transition-colors hover:text-primary">All Services</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                +91 98867 09463
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                +91 98861 09466
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                hello@axiom360ai.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                Bangalore, Karnataka, India
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-300">
          © {new Date().getFullYear()} AXIOM360 AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
