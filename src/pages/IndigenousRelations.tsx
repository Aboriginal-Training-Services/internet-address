import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Leaf, 
  Users, 
  Heart, 
  Mountain, 
  Wind, 
  Sun, 
  TreePine,
  ArrowRight,
  Shield,
  Eye,
  Compass,
  Star,
  AlertTriangle
} from 'lucide-react';

const IndigenousRelations: React.FC = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeError, setIframeError] = useState(false);

  const handleIframeLoad = () => {
    setIframeLoaded(true);
    setIframeError(false);
  };

  const handleIframeError = () => {
    setIframeError(true);
    setIframeLoaded(false);
  };

  const coreValues = [
    {
      icon: <Leaf className="h-6 sm:h-8 w-6 sm:w-8 text-green-600" />,
      title: "Land Stewardship",
      description: "Our responsibility to protect and preserve the land for future generations through sustainable technology practices.",
      principle: "We are the keepers of the land, using drone technology to monitor, protect, and understand our environment."
    },
    {
      icon: <Eye className="h-6 sm:h-8 w-6 sm:w-8 text-blue-600" />,
      title: "Data Guardianship",
      description: "Protecting and responsibly managing the information we gather, ensuring it serves the community's best interests.",
      principle: "We are the keepers of the data, maintaining accuracy, privacy, and ethical use of all collected information."
    },
    {
      icon: <Shield className="h-6 sm:h-8 w-6 sm:w-8 text-purple-600" />,
      title: "Environmental Protection",
      description: "Using technology as a tool to safeguard our natural world and monitor environmental changes.",
      principle: "We are the keepers of the environment, utilizing drones to protect ecosystems and wildlife habitats."
    },
    {
      icon: <Users className="h-6 sm:h-8 w-6 sm:w-8 text-orange-600" />,
      title: "Community Service",
      description: "Ensuring our technological capabilities serve the broader community and Indigenous nations.",
      principle: "Technology should strengthen communities and preserve cultural connections to the land."
    }
  ];

  const culturalIntegration = [
    {
      title: "Traditional Knowledge Meets Modern Technology",
      description: "Combining centuries of Indigenous land knowledge with cutting-edge drone technology to create comprehensive environmental monitoring solutions.",
      image: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Respectful Data Collection",
      description: "Implementing protocols that honor Indigenous data sovereignty and ensure community consent in all data gathering activities.",
      image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Environmental Monitoring",
      description: "Using drone technology to monitor traditional territories, track environmental changes, and support conservation efforts.",
      image: "https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Space & Indigenous Knowledge",
      description: "Exploring the ancestral understanding of space, celestial bodies, and the deep relationship between Indigenous teachings and the cosmos, inspiring innovative pathways in aerospace technologies.",
      image: "https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const heritageElements = [
    {
      icon: <Mountain className="h-5 sm:h-6 w-5 sm:w-6 text-amber-700" />,
      title: "Connection to Land",
      description: "Deep spiritual and practical connection to the territories we serve and protect."
    },
    {
      icon: <Wind className="h-5 sm:h-6 w-5 sm:w-6 text-blue-500" />,
      title: "Respect for Nature",
      description: "Understanding that technology must work in harmony with natural systems."
    },
    {
      icon: <Sun className="h-5 sm:h-6 w-5 sm:w-6 text-yellow-500" />,
      title: "Wisdom of Elders",
      description: "Incorporating traditional knowledge and guidance in our technological applications."
    },
    {
      icon: <TreePine className="h-5 sm:h-6 w-5 sm:w-6 text-green-600" />,
      title: "Sustainable Practices",
      description: "Ensuring our operations support long-term environmental and community health."
    },
    {
      icon: <Heart className="h-5 sm:h-6 w-5 sm:w-6 text-red-500" />,
      title: "Community First",
      description: "Prioritizing community needs and cultural values in all our services."
    },
    {
      icon: <Compass className="h-5 sm:h-6 w-5 sm:w-6 text-purple-600" />,
      title: "Guided Purpose",
      description: "Using technology with clear intention and respect for its impact on communities."
    }
  ];

  const applications = [
    {
      title: "Traditional Territory Mapping",
      description: "Creating detailed maps of traditional territories to support land claims, resource management, and cultural preservation.",
      benefits: [
        "Accurate boundary documentation",
        "Historical site preservation",
        "Resource management planning",
        "Cultural education support"
      ]
    },
    {
      title: "Environmental Monitoring",
      description: "Monitoring ecosystem health, wildlife populations, and environmental changes to support conservation efforts.",
      benefits: [
        "Wildlife habitat assessment",
        "Water quality monitoring",
        "Forest health evaluation",
        "Climate change documentation"
      ]
    },
    {
      title: "Cultural Site Documentation",
      description: "Preserving and documenting important cultural and historical sites for future generations.",
      benefits: [
        "3D site reconstruction",
        "Historical preservation",
        "Educational resource creation",
        "Cultural heritage protection"
      ]
    },
    {
      title: "Community Development",
      description: "Supporting infrastructure development and community planning while respecting cultural values.",
      benefits: [
        "Sustainable development planning",
        "Infrastructure assessment",
        "Community consultation support",
        "Cultural impact evaluation"
      ]
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden relative bg-gradient-to-br from-amber-50 to-blue-50" style={{ scrollBehavior: 'smooth' }}>
      {/* 3D Tipi Background - Body Only */}
      <div 
        className="fixed inset-0 w-full h-full"
        style={{ 
          zIndex: 1,
          pointerEvents: 'none'
        }}
      >
        {/* Spline 3D Tipi */}
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src="https://my.spline.design/nativeamericantippie-IQCnbEaY7LnPGzsddUkTcpfl/"
            className="absolute inset-0"
            style={{ 
              width: '120%',
              height: '120%',
              border: 'none',
              background: 'transparent',
              transform: 'translate(-10%, -10%) scale(1.5)',
              transformOrigin: 'center center',
              opacity: iframeLoaded ? 0.6 : 0,
              transition: 'opacity 2s ease-in-out'
            }}
            title="3D Sacred Tipi"
            loading="eager"
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            sandbox="allow-scripts allow-same-origin allow-presentation allow-forms"
          />
        </div>

        {/* CSS Fallback 3D Tipi - Always visible */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div 
              className="w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 relative"
              style={{
                transform: 'rotateX(15deg) rotateY(45deg) scale(1.2)',
                transformStyle: 'preserve-3d',
                animation: 'float 6s ease-in-out infinite, rotate 20s linear infinite'
              }}
            >
              {/* Main Tipi structure */}
              <div 
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                style={{
                  width: '200px',
                  height: '300px',
                  background: 'linear-gradient(45deg, #8B4513 0%, #D2691E 30%, #CD853F 60%, #DEB887 100%)',
                  clipPath: 'polygon(50% 0%, 15% 85%, 85% 85%)',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.3), inset 0 0 50px rgba(255,255,255,0.1)',
                  filter: 'drop-shadow(0 0 20px rgba(139, 69, 19, 0.4))',
                  opacity: 0.7
                }}
              />
              
              {/* Tipi entrance */}
              <div 
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                style={{
                  width: '30px',
                  height: '60px',
                  background: 'linear-gradient(180deg, #654321, #8B4513)',
                  clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
                  zIndex: 2,
                  opacity: 0.8
                }}
              />
              
              {/* Sacred smoke effect */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 sm:w-3 h-2 sm:h-3 bg-gray-300 rounded-full opacity-40"
                    style={{
                      top: `${-15 - (i * 10)}px`,
                      left: `${-8 + (i * 4)}px`,
                      animation: `smoke ${3 + i}s ease-in-out infinite`,
                      animationDelay: `${i * 0.5}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All content positioned above the 3D Tipi background */}
      <div className="relative min-h-screen" style={{ zIndex: 10 }}>
        {/* Hero Section */}
        <section className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-br from-green-900/20 via-blue-900/20 to-purple-900/20 backdrop-blur-[2px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transform transition-all duration-1000 hover:scale-[1.02] z-10">
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-white drop-shadow-2xl">
                Indigenous Relations
                <span className="block text-green-300">& Modern Technology</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-3 sm:mb-4 text-blue-200 font-semibold drop-shadow-xl">
                Keepers of the land, keepers of the data, and keepers of the environment
              </p>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-white max-w-4xl mx-auto leading-relaxed bg-black/30 backdrop-blur-md rounded-lg p-4 sm:p-6 shadow-2xl border border-white/20">
                Honoring Indigenous values while advancing drone technology for environmental protection, 
                community service, and cultural preservation.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-900/10 to-green-900/10 backdrop-blur-[1px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-2xl">
                Our Core Values
              </h2>
              <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto leading-relaxed bg-black/30 backdrop-blur-md rounded-lg p-4 shadow-2xl border border-white/20">
                Indigenous principles that guide our approach to drone technology and environmental stewardship.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {coreValues.map((value, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-xl rounded-xl shadow-2xl p-6 sm:p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-3xl border-2 border-white/50">
                  <div className="flex items-start mb-4 sm:mb-6">
                    <div className="bg-white rounded-full w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center mr-4 sm:mr-6 transform transition-all duration-300 hover:scale-110 shadow-xl">
                      {value.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{value.title}</h3>
                      <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{value.description}</p>
                    </div>
                  </div>
                  <div className="bg-blue-50/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 border-2 border-blue-200">
                    <p className="text-blue-800 italic font-medium text-sm sm:text-base">{value.principle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cultural Integration Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-green-900/10 to-purple-900/10 backdrop-blur-[1px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-2xl">
                Cultural Integration in Technology
              </h2>
              <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto leading-relaxed bg-black/30 backdrop-blur-md rounded-lg p-4 shadow-2xl border border-white/20">
                How we blend traditional Indigenous knowledge with modern drone technology 
                to create respectful and effective solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {culturalIntegration.map((item, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-xl rounded-xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-3xl border-2 border-white/50">
                  <div className="h-32 sm:h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform transition-all duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Heritage Elements Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-purple-900/5 to-blue-900/5 backdrop-blur-[0.5px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-2xl">
                Indigenous Heritage Elements
              </h2>
              <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto leading-relaxed bg-black/20 backdrop-blur-md rounded-lg p-4 shadow-2xl border border-white/20">
                The foundational principles that guide our work and shape our approach to technology, 
                blessed by the sacred presence of our ancestors.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {heritageElements.map((element, index) => (
                <div key={index} className="bg-white/85 backdrop-blur-xl rounded-xl shadow-2xl p-4 sm:p-6 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-3xl border-2 border-white/50">
                  <div className="bg-white rounded-full w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center mx-auto mb-3 sm:mb-4 transform transition-all duration-300 hover:scale-110 shadow-xl">
                    {element.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">{element.title}</h3>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{element.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-900/10 to-green-900/10 backdrop-blur-[1px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-2xl">
                Indigenous-Focused Applications
              </h2>
              <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto leading-relaxed bg-black/30 backdrop-blur-md rounded-lg p-4 shadow-2xl border border-white/20">
                Specific ways we apply drone technology to serve Indigenous communities 
                and support cultural and environmental objectives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {applications.map((app, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-xl border-2 border-white/50 rounded-xl shadow-2xl p-6 sm:p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-3xl">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{app.title}</h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{app.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Key Benefits:</h4>
                    <ul className="space-y-1 sm:space-y-2">
                      {app.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs sm:text-sm transform transition-all duration-300 hover:translate-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-green-900/10 to-purple-900/10 backdrop-blur-[1px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white drop-shadow-2xl">
                Our Commitment to Indigenous Communities
              </h2>
              <p className="text-lg sm:text-xl text-white max-w-4xl mx-auto leading-relaxed bg-black/30 backdrop-blur-md rounded-lg p-4 shadow-2xl border border-white/20">
                We pledge to operate with respect, transparency, and genuine partnership 
                with Indigenous communities in all our technological endeavors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center transform transition-all duration-500 hover:scale-105 bg-white/90 backdrop-blur-xl rounded-xl p-6 sm:p-8 shadow-2xl border-2 border-white/50">
                <Globe className="h-12 sm:h-16 w-12 sm:w-16 text-green-600 mx-auto mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900">Global Perspective</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Connecting Indigenous communities worldwide through shared knowledge and technology.
                </p>
              </div>
              
              <div className="text-center transform transition-all duration-500 hover:scale-105 bg-white/90 backdrop-blur-xl rounded-xl p-6 sm:p-8 shadow-2xl border-2 border-white/50">
                <Users className="h-12 sm:h-16 w-12 sm:w-16 text-blue-600 mx-auto mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900">Community Partnership</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Working alongside communities as partners, not just service providers.
                </p>
              </div>
              
              <div className="text-center transform transition-all duration-500 hover:scale-105 bg-white/90 backdrop-blur-xl rounded-xl p-6 sm:p-8 shadow-2xl border-2 border-white/50">
                <Heart className="h-12 sm:h-16 w-12 sm:w-16 text-red-500 mx-auto mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900">Cultural Respect</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Honoring traditions while embracing innovation for community benefit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-purple-900/10 to-blue-900/10 backdrop-blur-[1px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-3xl p-8 sm:p-12 border-2 border-white/50">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Join Us in Protecting Our Heritage
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
                Learn how drone technology can serve your community while honoring Indigenous values 
                and protecting the environment for future generations.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href="/#contact"
                  className="bg-blue-700 hover:bg-blue-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center shadow-xl"
                >
                  Start a Conversation
                  <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
                </a>
                <a
                  href="/training"
                  className="border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  Explore Training
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: rotateX(15deg) rotateY(45deg) scale(1.2) translateY(0px); }
          50% { transform: rotateX(15deg) rotateY(45deg) scale(1.2) translateY(-20px); }
        }
        
        @keyframes rotate {
          0% { transform: rotateX(15deg) rotateY(45deg) scale(1.2) rotateZ(0deg); }
          100% { transform: rotateX(15deg) rotateY(45deg) scale(1.2) rotateZ(360deg); }
        }
        
        @keyframes smoke {
          0% { opacity: 0.4; transform: translateY(0px) scale(1); }
          50% { opacity: 0.2; transform: translateY(-30px) scale(1.2); }
          100% { opacity: 0; transform: translateY(-60px) scale(0.8); }
        }
      `}</style>
    </div>
  );
};

export default IndigenousRelations;