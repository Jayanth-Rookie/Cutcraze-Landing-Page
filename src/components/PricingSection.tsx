
import { Check } from 'lucide-react';

const PricingSection = () => {
  const packages = [
    {
      name: "Basic",
      price: "$99",
      period: "per project",
      description: "Perfect for simple edits and small projects",
      features: [
        "Basic video editing",
        "Color correction",
        "Simple transitions",
        "2 rounds of revisions",
        "Delivery in 3-5 days"
      ],
      isPopular: false,
      ctaText: "Get Started"
    },
    {
      name: "Professional",
      price: "$249",
      period: "per project",
      description: "Ideal for professional content creators",
      features: [
        "Advanced video editing",
        "Professional color grading",
        "Custom transitions & effects",
        "Sound design & mixing",
        "4 rounds of revisions",
        "Delivery in 2-3 days"
      ],
      isPopular: true,
      ctaText: "Get Started"
    },
    {
      name: "Premium",
      price: "$499",
      period: "per project",
      description: "For cinematic quality and complex projects",
      features: [
        "Cinema-grade editing",
        "Advanced VFX & compositing",
        "Professional color grading",
        "Complete audio post-production",
        "Unlimited revisions",
        "Delivery in 1-2 days",
        "Raw files included"
      ],
      isPopular: false,
      ctaText: "Get Started"
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Simple, Transparent Pricing</h2>
        <p className="section-subtitle text-center">
          Choose the perfect package for your needs. Custom quotes available for specialized projects.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden transition-all duration-300 ${
                pkg.isPopular 
                  ? 'shadow-2xl border-2 border-cutcraze-purple relative scale-105 z-10 bg-white' 
                  : 'shadow-lg hover:shadow-xl border border-gray-200 bg-white'
              }`}
            >
              {pkg.isPopular && (
                <div className="bg-cutcraze-purple text-white py-2 px-4 text-center font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className="text-gray-500 ml-2">{pkg.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#contact" 
                  className={`block text-center py-3 px-6 rounded-md transition-colors ${
                    pkg.isPopular 
                      ? 'bg-cutcraze-purple text-white hover:bg-cutcraze-light-purple' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  {pkg.ctaText}
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-4">Need a custom solution for your specific project?</p>
          <a href="#contact" className="btn-secondary inline-block">Get Custom Quote</a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
