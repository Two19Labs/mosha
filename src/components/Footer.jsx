import React from 'react';
import { Mail, Phone, MapPin, Award, Heart } from 'lucide-react';

export default function Footer({ setCurrentTab, setConcernType }) {
  const navigateToTab = (tab) => {
    setCurrentTab(tab);
    window.scrollTo(0, 0);
  };

  const navigateToConcern = (concern) => {
    setConcernType(concern);
    setCurrentTab('concern');
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-sage-900 text-cream-50 pt-16 pb-12 border-t border-sage-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-sage-500 flex items-center justify-center text-cream-100">
                <Heart className="h-4 w-4 fill-cream-100" />
              </div>
              <span className="font-display font-bold text-xl tracking-wide text-cream-100">
                MOSHA<span className="text-sage-300 font-light">HEALTH</span>
              </span>
            </div>
            <p className="text-sm text-sage-200 font-sans leading-relaxed">
              Gut-first formulations and clinical nutrition programs rooted in traditional wisdom and refined with modern science. Reclaiming your vitality from the inside out.
            </p>
            <div className="text-xs text-sage-400 space-y-1">
              <p>GST Registration: 09AAXCA3444N1ZW</p>
              <p>Registered: MOSHA Clintech Private Limited</p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-display font-semibold text-base text-cream-100 mb-6 tracking-wide">
              Useful Links
            </h3>
            <ul className="space-y-3 text-sm text-sage-200">
              <li>
                <button onClick={() => navigateToTab('home')} className="hover:text-coral-300 transition-colors">
                  Home Page
                </button>
              </li>
              <li>
                <button onClick={() => navigateToTab('reset')} className="hover:text-coral-300 transition-colors">
                  14 Day Gut Reset Program
                </button>
              </li>
              <li>
                <button onClick={() => navigateToTab('shop')} className="hover:text-coral-300 transition-colors">
                  Shop All Products
                </button>
              </li>
              <li>
                <button onClick={() => navigateToTab('blogs')} className="hover:text-coral-300 transition-colors">
                  Health Blogs
                </button>
              </li>
            </ul>
          </div>

          {/* Shop Concerns Column */}
          <div>
            <h3 className="font-display font-semibold text-base text-cream-100 mb-6 tracking-wide">
              Shop By Concern
            </h3>
            <ul className="space-y-3 text-sm text-sage-200">
              <li>
                <button onClick={() => navigateToConcern('acidity')} className="hover:text-coral-300 transition-colors">
                  Acidity and GERD
                </button>
              </li>
              <li>
                <button onClick={() => navigateToConcern('gastritis')} className="hover:text-coral-300 transition-colors">
                  H. Pylori and Gastritis
                </button>
              </li>
              <li>
                <button onClick={() => navigateToConcern('bloating')} className="hover:text-coral-300 transition-colors">
                  Bloating Relief
                </button>
              </li>
              <li>
                <button onClick={() => navigateToConcern('constipation')} className="hover:text-coral-300 transition-colors">
                  Constipation and Gut Balance
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h3 className="font-display font-semibold text-base text-cream-100 mb-6 tracking-wide">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm text-sage-200">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-sage-400 shrink-0" />
                <a href="mailto:hello@moshahealth.com" className="hover:text-coral-300 transition-colors">
                  hello@moshahealth.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-sage-400 shrink-0" />
                <a href="tel:+917703866823" className="hover:text-coral-300 transition-colors">
                  +91 77038 66823
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-sage-400 shrink-0" />
                <span>
                  F-71, Sector - 21,<br />Noida, Uttar Pradesh, 201301
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright block */}
        <div className="mt-12 pt-8 border-t border-sage-800 text-center text-xs text-sage-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 MOSHA. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <span className="hover:text-cream-50 cursor-pointer">Terms & Conditions</span>
            <span className="hover:text-cream-50 cursor-pointer">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
