import React, { useState } from 'react';
import { Search, MessageCircle } from 'lucide-react';

export default function Hero() {
  const [formData, setFormData] = useState({
    country: 'India',
    treatment: '',
    phoneCode: '91',
    phoneNumber: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleChatWithExpert = () => {
    // Trigger chat assistant
    window.dispatchEvent(new CustomEvent('openChat'));
  };

  const handleSearch = () => {
    if (!formData.treatment || !formData.phoneNumber) {
      alert('Please fill in all required fields');
      return;
    }
    
    // In a real implementation, this would process the search
    console.log('Search submitted:', formData);
    alert('Thank you! Our medical experts will contact you shortly.');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1920"
        >
          <source src="https://videos.pexels.com/video-files/6205509/6205509-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/4099355/4099355-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white w-full">
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
            Quicker, Easier, Smarter Medical
            <br className="hidden sm:block" />
            <span className="block sm:inline"> and Wellness Travel</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-gray-200 max-w-4xl mx-auto px-4">
            Healthtrip streamlines your medical travel experience by offering
            <br className="hidden md:block" />
            <span className="block md:inline"> personalized assistance from start to finish.</span>
          </p>

          {/* Search Bar */}
          <div className="mb-8 sm:mb-12 px-4">
            <div className="bg-white rounded-full p-2 max-w-2xl mx-auto shadow-2xl">
              <div className="flex items-center">
                <Search className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 ml-3 sm:ml-4 mr-2 sm:mr-3 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search Doctors, Treatments, Hospitals"
                  className="flex-1 py-2 sm:py-3 px-2 text-gray-700 bg-transparent border-none outline-none text-sm sm:text-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 items-end">
            {/* Resident of */}
            <div className="text-left">
              <label className="flex items-center text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm font-medium">
                <div className="w-4 h-4 sm:w-5 sm:h-5 mr-2 bg-teal-100 rounded flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-teal-500 rounded"></div>
                </div>
                Resident of
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm sm:text-base"
              >
                <option value="India">India</option>
                <option value="Nigeria">Nigeria</option>
                <option value="UAE">UAE</option>
                <option value="Kenya">Kenya</option>
                <option value="Ghana">Ghana</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Egypt">Egypt</option>
                <option value="South Africa">South Africa</option>
              </select>
            </div>

            {/* Treatment */}
            <div className="text-left">
              <label className="flex items-center text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm font-medium">
                <div className="w-4 h-4 sm:w-5 sm:h-5 mr-2 bg-teal-100 rounded flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-teal-500 rounded"></div>
                </div>
                Treatment
              </label>
              <select
                name="treatment"
                value={formData.treatment}
                onChange={handleInputChange}
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm sm:text-base"
              >
                <option value="">Select Treatment</option>
                <option value="cardiac">Cardiac Sciences</option>
                <option value="oncology">Cancer Treatment</option>
                <option value="orthopedic">Orthopedic Surgery</option>
                <option value="neurology">Neurology</option>
                <option value="fertility">Fertility Treatment</option>
                <option value="cosmetic">Cosmetic Surgery</option>
                <option value="bariatric">Bariatric Surgery</option>
                <option value="dental">Dental Treatment</option>
                <option value="eye">Eye Surgery</option>
                <option value="kidney">Kidney Treatment</option>
              </select>
            </div>

            {/* Phone Number */}
            <div className="text-left">
              <label className="flex items-center text-gray-600 mb-2 sm:mb-3 text-xs sm:text-sm font-medium">
                <div className="w-4 h-4 sm:w-5 sm:h-5 mr-2 bg-teal-100 rounded flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-teal-500 rounded"></div>
                </div>
                Phone Number*
              </label>
              <div className="flex">
                <select
                  name="phoneCode"
                  value={formData.phoneCode}
                  onChange={handleInputChange}
                  className="w-16 sm:w-20 p-2 sm:p-3 border border-gray-300 rounded-l-lg text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm sm:text-base"
                >
                  <option value="91">91</option>
                  <option value="234">234</option>
                  <option value="971">971</option>
                  <option value="254">254</option>
                  <option value="233">233</option>
                  <option value="966">966</option>
                  <option value="20">20</option>
                  <option value="27">27</option>
                </select>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Enter your mobile"
                  className="flex-1 p-2 sm:p-3 border border-l-0 border-gray-300 rounded-r-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm sm:text-base"
                  required
                />
              </div>
            </div>

            {/* Chat Button */}
            <div className="sm:col-span-2 lg:col-span-1">
              <button
                onClick={handleChatWithExpert}
                className="w-full bg-orange-500 text-white p-3 sm:p-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center text-sm sm:text-base"
              >
                <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span className="hidden sm:inline">Chat with a health expert now</span>
                <span className="sm:hidden">Chat with expert</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}