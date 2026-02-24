import { useState, useEffect } from "react";
import { ChevronRight, Info, Send, MessageCircle } from "lucide-react";
import { systemTypes, facilityTypes } from "../config/serviceEnquiryConfig";

const HeroLicenseSelector = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedFacilityType, setSelectedFacilityType] = useState("");
  const [selectedLicenses, setSelectedLicenses] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Reset selected licenses when category or facility type changes
  useEffect(() => {
    setSelectedLicenses([]);
  }, [selectedCategory, selectedFacilityType]);

  const mandatoryLicenses = [
    {
      id: "kpme",
      name: "KPME - Clinical License",
      logo: "/logos/kpme (2).png"
    },
    {
      id: "pcb",
      name: "Karnataka Pollution Control Board",
      logo: "/logos/pcb.png"
    },
    {
      id: "bmw",
      name: "Bio Medical Waste Authorization",
      logo: "/logos/dcd.png"
    }
  ];

  const licenseMapping = {
    "Medical": {
      "Clinic with Consultation Only": [
        { id: "kpme", name: "KPME - Clinical License", logo: "/logos/kpme (2).png" },
        { id: "pcb", name: "Karnataka Pollution Control Board", logo: "/logos/pcb.png" },
        { id: "bmw", name: "Bio Medical Waste Authorization", logo: "/logos/dcd.png" }
      ],
      "Clinic with Consultation and Lab": [
        { id: "kpme", name: "KPME - Clinical License", logo: "/logos/kpme (2).png" },
        { id: "pcb", name: "Karnataka Pollution Control Board", logo: "/logos/pcb.png" },
        { id: "bmw", name: "Bio Medical Waste Authorization", logo: "/logos/dcd.png" },
        { id: "pcpndt", name: "PC-PNDT Act", logo: "/logos/pcpndt (2).png" },
        { id: "dcd", name: "Drugs Control Department", logo: "/logos/dcd.png" }
      ],
      "Daycare or Observation up to 5 Beds": [
        { id: "kpme", name: "KPME - Clinical License", logo: "/logos/kpme (2).png" },
        { id: "pcb", name: "Karnataka Pollution Control Board", logo: "/logos/pcb.png" },
        { id: "bmw", name: "Bio Medical Waste Authorization", logo: "/logos/dcd.png" },
        { id: "mtp", name: "MTP & Sterilization", logo: "/logos/mtp.png" }
      ],
      "Hospital with OT and All Specialities": [
        { id: "kpme", name: "KPME - Clinical License", logo: "/logos/kpme (2).png" },
        { id: "pcb", name: "Karnataka Pollution Control Board", logo: "/logos/pcb.png" },
        { id: "bmw", name: "Bio Medical Waste Authorization", logo: "/logos/dcd.png" },
        { id: "pcpndt", name: "PC-PNDT Act", logo: "/logos/pcpndt (2).png" },
        { id: "mtp", name: "MTP & Sterilization", logo: "/logos/mtp.png" },
        { id: "art", name: "ART Clinic", logo: "/logos/artclinic.png" }
      ],
      "Medical Lab / Diagnostic Only": [
        { id: "pcb", name: "Karnataka Pollution Control Board", logo: "/logos/pcb.png" },
        { id: "bmw", name: "Bio Medical Waste Authorization", logo: "/logos/dcd.png" },
        { id: "dcd", name: "Drugs Control Department", logo: "/logos/dcd.png" }
      ],
      "Physiotherapy Clinic": [
        { id: "kpme", name: "KPME - Clinical License", logo: "/logos/kpme (2).png" },
        { id: "pcb", name: "Karnataka Pollution Control Board", logo: "/logos/pcb.png" },
        { id: "bmw", name: "Bio Medical Waste Authorization", logo: "/logos/dcd.png" }
      ],
      "Pharmacy": [
        { id: "dcd", name: "Drugs Control Department", logo: "/logos/dcd.png" },
        { id: "gst", name: "GST Registration", logo: "/logos/gst.png" }
      ]
    },
    "Dental": {
      "Dental Clinic": [
        { id: "kpme", name: "KPME - Clinical License", logo: "/logos/kpme (2).png" },
        { id: "pcb", name: "Karnataka Pollution Control Board", logo: "/logos/pcb.png" },
        { id: "bmw", name: "Bio Medical Waste Authorization", logo: "/logos/dcd.png" },
        { id: "dcd", name: "Drugs Control Department", logo: "/logos/dcd.png" }
      ],
      "Dental Clinic with X-Ray": [
        { id: "kpme", name: "KPME - Clinical License", logo: "/logos/kpme (2).png" },
        { id: "pcb", name: "Karnataka Pollution Control Board", logo: "/logos/pcb.png" },
        { id: "bmw", name: "Bio Medical Waste Authorization", logo: "/logos/dcd.png" },
        { id: "dcd", name: "Drugs Control Department", logo: "/logos/dcd.png" },
        { id: "aerb", name: "AERB - X-Ray License", logo: "/logos/aerb (2).png" }
      ],
      "Dental Clinic with Lab": [
        { id: "kpme", name: "KPME - Clinical License", logo: "/logos/kpme (2).png" },
        { id: "pcb", name: "Karnataka Pollution Control Board", logo: "/logos/pcb.png" },
        { id: "bmw", name: "Bio Medical Waste Authorization", logo: "/logos/dcd.png" },
        { id: "dcd", name: "Drugs Control Department", logo: "/logos/dcd.png" }
      ]
    },
    "Lab Technician": {
      "Laboratory Registration": [
        { id: "pcb", name: "Karnataka Pollution Control Board", logo: "/logos/pcb.png" },
        { id: "bmw", name: "Bio Medical Waste Authorization", logo: "/logos/dcd.png" },
        { id: "dcd", name: "Drugs Control Department", logo: "/logos/dcd.png" }
      ]
    },
    "Ayurveda": {
      "Ayurveda Therapy Center": [
        { id: "ayush", name: "AYUSH Registration", logo: "/logos/ayush.png" },
        { id: "pcb", name: "Karnataka Pollution Control Board", logo: "/logos/pcb.png" },
        { id: "bmw", name: "Bio Medical Waste Authorization", logo: "/logos/dcd.png" }
      ],
      "Ayurveda Clinic": [
        { id: "ayush", name: "AYUSH Registration", logo: "/logos/ayush.png" },
        { id: "kpme", name: "KPME - Clinical License", logo: "/logos/kpme (2).png" },
        { id: "pcb", name: "Karnataka Pollution Control Board", logo: "/logos/pcb.png" },
        { id: "bmw", name: "Bio Medical Waste Authorization", logo: "/logos/dcd.png" }
      ]
    },
    "Homeopathy": {
      "Homeopathy Clinic": [
        { id: "ayush-homo", name: "AYUSH Registration (Homeopathy)", logo: "/logos/ayush.png" },
        { id: "kpme", name: "KPME - Clinical License", logo: "/logos/kpme (2).png" },
        { id: "pcb", name: "Karnataka Pollution Control Board", logo: "/logos/pcb.png" },
        { id: "bmw", name: "Bio Medical Waste Authorization", logo: "/logos/dcd.png" }
      ]
    },
    "Unani": {
      "Unani Clinic": [
        { id: "ayush-unani", name: "AYUSH Registration (Unani)", logo: "/logos/ayush.png" },
        { id: "kpme", name: "KPME - Clinical License", logo: "/logos/kpme (2).png" },
        { id: "pcb", name: "Karnataka Pollution Control Board", logo: "/logos/pcb.png" },
        { id: "bmw", name: "Bio Medical Waste Authorization", logo: "/logos/dcd.png" }
      ]
    },
    "Yoga & Naturopathy": {
      "Yoga Center": [
        { id: "ayush-yoga", name: "AYUSH Registration (Yoga)", logo: "/logos/ayush.png" },
        { id: "pcb", name: "Karnataka Pollution Control Board", logo: "/logos/pcb.png" },
        { id: "bmw", name: "Bio Medical Waste Authorization", logo: "/logos/dcd.png" }
      ],
      "Naturopathy Center": [
        { id: "ayush-yoga", name: "AYUSH Registration (Yoga)", logo: "/logos/ayush.png" },
        { id: "pcb", name: "Karnataka Pollution Control Board", logo: "/logos/pcb.png" },
        { id: "bmw", name: "Bio Medical Waste Authorization", logo: "/logos/dcd.png" }
      ]
    },
    "Integrated System": {
      "Multi-System Clinic": [
        { id: "ayush-integrated", name: "AYUSH Registration (Integrated)", logo: "/logos/ayush.png" },
        { id: "kpme", name: "KPME - Clinical License", logo: "/logos/kpme (2).png" },
        { id: "pcb", name: "Karnataka Pollution Board", logo: "/logos/pcb.png" },
        { id: "bmw", name: "Bio Medical Waste Authorization", logo: "/logos/dcd.png" }
      ]
    },
    "Non Medical / Owner": {
      "Owner / Investor Only": [
        { id: "gst", name: "GST Registration", logo: "/logos/gst.png" },
        { id: "fssai", name: "FSSAI Registration", logo: "/logos/fssai.png" },
        { id: "labour", name: "Shop & Establishment", logo: "/logos/shop and est.png" }
      ]
    }
  };

  const availableFacilityTypes = selectedCategory ? facilityTypes[selectedCategory as keyof typeof facilityTypes] : [];
  
  const getDisplayLicenses = () => {
    if (!selectedCategory || !selectedFacilityType) return [];
    const specificLicenses = licenseMapping[selectedCategory]?.[selectedFacilityType] || [];
    const allLicenses = [...mandatoryLicenses, ...specificLicenses];
    
    // Remove duplicates based on license id
    const uniqueLicenses = allLicenses.filter((license, index, self) =>
      index === self.findIndex((l) => l.id === license.id)
    );
    
    return uniqueLicenses;
  };

  const displayedLicenses = getDisplayLicenses();

  // Debug: Check if licenses are being rendered multiple times
  console.log("Rendering licenses...", displayedLicenses.length, "licenses");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedFacilityType(""); // Reset facility type when category changes
    setSelectedLicenses([]); // Reset all selections
  };

  const handleFacilityTypeChange = (facilityType: string) => {
    setSelectedFacilityType(facilityType);
  };

  const handleLicenseToggle = (licenseId: string) => {
    setSelectedLicenses(prev => {
      if (prev.includes(licenseId)) {
        return prev.filter(id => id !== licenseId);
      } else {
        return [...prev, licenseId];
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCategory || !selectedFacilityType || selectedLicenses.length === 0 || !name || !phone || !email) return;
    
    // Get selected license names
    const selectedLicenseNames = displayedLicenses
      .filter(license => selectedLicenses.includes(license.id))
      .map(license => `• ${license.name}`)
      .join('%0A');
    
    const message = `Hi PRONTO360,%0A%0AI need help with the following licenses:%0A%0A📋 *Category:* ${selectedCategory}%0A🔧 *Facility Type:* ${selectedFacilityType}%0A%0A *Required Licenses:*%0A${selectedLicenseNames}%0A%0A *Contact Details:*%0A• Name: ${name}%0A• Phone: ${phone}%0A• Email: ${email}%0A%0APlease let me know the next steps. Thank you!`;
    
    const whatsappUrl = `https://wa.me/919886709463?text=${message}`;
    window.open(whatsappUrl, '_blank');
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedCategory("");
      setSelectedFacilityType("");
      setSelectedLicenses([]);
      setName("");
      setPhone("");
      setEmail("");
    }, 3000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-border p-7 w-full max-w-2xl">
      {/* Step indicator */}
      <div className="flex flex-col items-center w-full mb-6">
        <div className="flex flex-wrap justify-center gap-2 w-full">
          <div className={`flex items-center gap-2 min-w-max ${selectedCategory ? 'text-primary' : 'text-muted-foreground'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${selectedCategory ? 'bg-primary text-white' : 'bg-gray-200'}`}>1</div>
            <span className="font-medium text-sm whitespace-nowrap">Category</span>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground self-center mx-1" />
          <div className={`flex items-center gap-2 min-w-max ${selectedFacilityType ? 'text-primary' : 'text-muted-foreground'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${selectedFacilityType ? 'bg-primary text-white' : 'bg-gray-200'}`}>2</div>
            <span className="font-medium text-sm whitespace-nowrap">Facility Type</span>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground self-center mx-1" />
          <div className={`flex items-center gap-2 min-w-max ${selectedLicenses.length > 0 ? 'text-primary' : 'text-muted-foreground'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${selectedLicenses.length > 0 ? 'bg-primary text-white' : 'bg-gray-200'}`}>3</div>
            <span className="font-medium text-sm whitespace-nowrap">Licenses</span>
          </div>
        </div>
      </div>

      {/* Dropdowns */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="relative">
          <label className="mb-2 block text-sm font-semibold text-foreground">
            Select Category <span className="text-red-500">*</span>
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="w-full h-14 rounded-lg border-2 border-border bg-white px-4 text-base font-medium text-foreground outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:ring focus:ring-offset-0 hover:border-primary/50"
            required
          >
            <option value="">Choose your category...</option>
            {systemTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="relative">
          <label className="mb-2 block text-sm font-semibold text-foreground">
            Select Facility Type <span className="text-red-500">*</span>
          </label>
          <select
            value={selectedFacilityType}
            onChange={(e) => handleFacilityTypeChange(e.target.value)}
            disabled={!selectedCategory}
            className="w-full h-14 rounded-lg border-2 border-border bg-white px-4 text-base font-medium text-foreground outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:ring focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed hover:border-primary/50"
            required
          >
            <option value="">
              {selectedCategory ? "Select facility type..." : "Select category first"}
            </option>
            {availableFacilityTypes.map((facilityType) => (
              <option key={facilityType} value={facilityType}>
                {facilityType}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* License Cards - Show after both dropdowns are selected */}
      {selectedCategory && selectedFacilityType && (
        <div className="space-y-8 mt-8">
          {/* Enhanced instruction */}
          <div className="text-center bg-muted rounded-2xl p-6 border border-border">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Info className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Available Licenses</h3>
            </div>
            <p className="text-muted-foreground">
              Based on your <span className="font-semibold text-primary">{selectedCategory}</span> selection, 
              choose the licenses you need assistance with:
            </p>
          </div>
          
          {/* Enhanced license cards grid */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {displayedLicenses.map((license, index) => (
              <label
                key={license.id}
                className={`
                  relative group cursor-pointer transition-all duration-300 transform
                  ${selectedLicenses.includes(license.id)
                    ? 'scale-105'
                    : 'hover:scale-102'
                  }
                `}
                style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both` }}
              >
                <div className={`
                  relative flex flex-col items-center p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1
                  ${selectedLicenses.includes(license.id)
                    ? 'bg-muted border-primary shadow-xl'
                    : 'bg-white border-border hover:border-primary'
                  }
                `}>
                  {/* Checkbox */}
                  <input
                    type="checkbox"
                    checked={selectedLicenses.includes(license.id)}
                    onChange={() => handleLicenseToggle(license.id)}
                    className="absolute top-4 right-4 w-5 h-5 text-primary border-2 border-border rounded-lg focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  />
                  
                  {/* Logo container */}
                  <div className={`
                    w-full h-24 mb-4 rounded-2xl flex items-center justify-center transition-all duration-300
                    ${selectedLicenses.includes(license.id)
                      ? 'bg-primary/10'
                      : 'bg-muted group-hover:bg-primary/5'
                    }
                  `}>
                    <img 
                      src={license.logo} 
                      alt={license.name}
                      className="max-h-[70px] max-w-[140px] object-contain transition-all duration-300"
                      onError={(e) => {
                        e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'/%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                  
                  {/* License name */}
                  <span className="text-sm font-semibold text-center text-foreground leading-tight px-2">
                    {license.name}
                  </span>
                  
                  {/* Selection indicator */}
                  {selectedLicenses.includes(license.id) && (
                    <div className="absolute -top-2 -right-2">
                      <div className="bg-success text-white rounded-full p-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </label>
            ))}
          </div>
          
          {/* Enhanced selection counter */}
          <div className="text-center bg-white rounded-xl border border-border p-4 shadow-sm">
            <div className="flex items-center justify-center gap-3">
              <div className={`w-3 h-3 rounded-full ${selectedLicenses.length > 0 ? 'bg-success' : 'bg-muted-foreground'}`}></div>
              <span className="text-lg font-semibold text-foreground">
                {selectedLicenses.length} License{selectedLicenses.length !== 1 ? 's' : ''} Selected
              </span>
              {selectedLicenses.length > 0 && (
                <span className="text-sm text-success font-medium">✓ Ready to proceed</span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Contact Form - Show only after license is selected */}
      {selectedCategory && selectedFacilityType && selectedLicenses.length > 0 && (
        <div className="space-y-8 border-t border-gray-100 pt-8">
          {/* Enhanced contact form header */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-success/20 text-success px-4 py-2 rounded-full text-sm font-medium mb-4">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              Almost done! Just your contact details
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Get Your Free Consultation</h3>
            <p className="text-muted-foreground">
              Our licensing experts will contact you within 24 hours with a personalized solution
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">👤</span>
                  </div>
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 hover:border-muted-foreground"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">📱</span>
                  </div>
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 hover:border-muted-foreground"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">✉️</span>
                </div>
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 hover:border-muted-foreground"
                required
              />
            </div>
            
            {/* Enhanced action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                className="group relative flex-1 bg-primary text-white px-8 py-4 rounded-xl font-semibold shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <span className="flex items-center justify-center gap-2">
                  <Send className="h-5 w-5" />
                  Submit Request
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <a
                href="https://wa.me/919886709463?text=Hi%20PRONTO360%2C%20I%20need%20help%20with%20a%20license."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-1 flex items-center justify-center gap-2 bg-white border border-primary text-primary px-8 py-4 rounded-xl font-semibold shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              </a>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default HeroLicenseSelector;