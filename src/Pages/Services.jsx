import React,{useContext} from 'react';
import { MyContext } from '../Context/MyContext';

const Services = () => {
  const {sharedData,setSharedData}=useContext(MyContext);
  const services = [
    {
      title: "Web Development",
      description: "Building fast and scalable websites using React, Next.js, and other modern web technologies.",
      icon: "🌐",
    },
    {
      title: "UI/UX Design",
      description: "Creating beautiful and user-friendly interfaces, ensuring an intuitive user experience.",
      icon: "🎨",
    },
    {
      title: "E-commerce Solutions",
      description: "Helping businesses set up powerful and secure online stores with full-featured shopping carts.",
      icon: "🛒",
    },
    {
      title: "Consultation & Strategy",
      description: "Providing expert advice on development strategies, helping businesses reach their goals more efficiently.",
      icon: "📈",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center mb-62">
        <h1 className="text-3xl font-bold mb-4">My Services</h1>
        <p className="text-lg text-gray-600">
          I offer a wide range of services to help businesses grow and succeed online. Check out what I can do for you:
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-md"> 
      <h1>{sharedData} </h1>
      <button onClick={()=>setSharedData("Updated from Services Page")} className="mt-8 px-6 py-3 bg-green-600 text-white rounded hover:bg-blue-700 transition-colors">
        Click me to update context
      </button>
      </div>
    </div>
  );
};

export default Services;
