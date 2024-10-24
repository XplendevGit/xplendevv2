// pages/LandingApp.js
import React from "react";

const LandingApp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4C1D95] to-[#8B5CF6] flex flex-col items-center">
      
      {/* Header Section */}
      <header className="text-center text-white py-10 px-6">
        <h1 className="text-5xl font-bold">
          Awesome App for Your Modern Lifestyle
        </h1>
        <p className="mt-4 text-lg">
          Manage your daily activities with a simple tap on your phone.
        </p>
        <div className="mt-8 space-x-4">
          <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-800">
            Download App
          </button>
          <button className="bg-white text-purple-600 px-6 py-2 rounded-lg hover:bg-gray-200">
            Become a Member
          </button>
        </div>

        {/* App Mockup Image */}
        <div className="mt-12">
          <img
            src="https://i.postimg.cc/1XWvZMPK/image-mobile3.png" // Reemplaza con la URL de la imagen mockup
            alt="App Mockup"
            className="w-72 mx-auto"
          />
        </div>
      </header>

      {/* Stats Section */}
      <section className="text-white flex flex-wrap justify-center space-x-8 mt-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold">1,265</h2>
          <p>Users</p>
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-bold">1,000</h2>
          <p>Downloads</p>
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-bold">508</h2>
          <p>Likes</p>
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-bold">809</h2>
          <p>5-star Rating</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="text-white py-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mt-12">
        <div className="bg-purple-900 p-6 rounded-xl shadow-lg text-center">
          <img
            src="/path/to/feature1-icon.png" // Reemplaza con la URL del icono correspondiente
            alt="Design & Branding"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h3 className="text-2xl font-bold">Design & Branding</h3>
          <p className="mt-4">
            A clean interface with engaging content tailored to your needs.
          </p>
        </div>
        <div className="bg-purple-900 p-6 rounded-xl shadow-lg text-center">
          <img
            src="/path/to/feature2-icon.png" // Reemplaza con la URL del icono correspondiente
            alt="Fully Secured"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h3 className="text-2xl font-bold">Fully Secured</h3>
          <p className="mt-4">
            Protecting your data with advanced encryption and security.
          </p>
        </div>
        <div className="bg-purple-900 p-6 rounded-xl shadow-lg text-center">
          <img
            src="/path/to/feature3-icon.png" // Reemplaza con la URL del icono correspondiente
            alt="Easy to Edit"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h3 className="text-2xl font-bold">Easy to Edit</h3>
          <p className="mt-4">
            Manage and edit your preferences and settings with ease.
          </p>
        </div>
      </section>

      {/* How it works Section */}
      <section className="text-white py-12 px-6 max-w-6xl text-center">
        <h2 className="text-3xl font-bold mb-8">How does this App Work?</h2>
        <div className="flex flex-wrap justify-center md:space-x-8 space-y-6 md:space-y-0">
          <div className="text-center">
            <img
              src="/path/to/step1-icon.png" // Reemplaza con la URL del icono correspondiente
              alt="Step 1"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Make a Profile</h3>
            <p>Quick setup and customization.</p>
          </div>
          <div className="text-center">
            <img
              src="/path/to/step2-icon.png" // Reemplaza con la URL del icono correspondiente
              alt="Step 2"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Download for Free</h3>
            <p>Available on all platforms.</p>
          </div>
          <div className="text-center">
            <img
              src="/path/to/step3-icon.png" // Reemplaza con la URL del icono correspondiente
              alt="Step 3"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Enjoy the App</h3>
            <p>Track your activities and stay productive.</p>
          </div>
        </div>

        {/* App Mockup Image (Bottom) */}
        <div className="mt-12">
          <img
            src="/path/to/mockup-image-bottom.png" // Reemplaza con la URL de la imagen mockup
            alt="App Bottom Mockup"
            className="w-72 mx-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default LandingApp;
