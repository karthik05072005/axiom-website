import HeroSection from "@/components/HeroSection";
import ServiceCategories from "@/components/ServiceCategories";
import WhyChooseUs from "@/components/WhyChooseUs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LicenseSelector from "@/components/LicenseSelector";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        
        {/* License Selector Section */}
        <section className="w-full py-24 bg-gray-50 flex justify-center">
          <div className="w-full max-w-6xl px-6 lg:px-8 mx-auto text-center">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">
                Find Your License Solution
              </h2>
              <p className="text-gray-600 mt-2">
                Select your category and facility type to see required licenses.
              </p>
            </div>
            
            <div className="flex justify-center mt-12">
              <div className="w-full max-w-5xl">
                <LicenseSelector />
              </div>
            </div>
          </div>
        </section>
        
        <div id="services">
          <ServiceCategories />
        </div>
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
