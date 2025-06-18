import React,{useContext} from 'react';
import { MyContext } from '../Context/MyContext';

const Career = () => {
  const {sharedData,setSharedData}=useContext(MyContext);
  const vacancies = [
    {
      title: "Frontend Developer",
      location: "Remote",
      description: "We're looking for a passionate Frontend Developer to join our growing team. You will be working with React and other modern web technologies.",
      requirements: [
        "Experience with React.js",
        "Familiar with Tailwind CSS",
        "Basic understanding of APIs (REST, GraphQL)",
        "Strong communication skills"
      ],
      applyLink: "#",
    },
    {
      title: "Backend Developer",
      location: "New York, NY",
      description: "As a Backend Developer, you'll work on building scalable server-side applications using Node.js and databases like MongoDB or PostgreSQL.",
      requirements: [
        "Strong knowledge of Node.js",
        "Experience with database management (MongoDB, PostgreSQL)",
        "Familiarity with cloud platforms like AWS",
        "Experience with REST APIs"
      ],
      applyLink: "#",
    },
    {
      title: "UI/UX Designer",
      location: "Remote",
      description: "We need a creative UI/UX designer who can help us build user-friendly and visually appealing digital products.",
      requirements: [
        "Proficiency in Figma, Sketch, or Adobe XD",
        "Understanding of user research and testing",
        "Experience in creating wireframes and prototypes",
        "Attention to detail and a passion for design"
      ],
      applyLink: "#",
    },
  ];

  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Join Our Team</h1>
        <p className="text-lg text-gray-600">
          We are always looking for passionate and talented individuals to join our team. Here are some of our current job openings:
        </p>
      </div>

      {/* Vacancies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {vacancies.map((job, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">{job.title}</h3>
            <p className="text-gray-600 mb-4">{job.location}</p>
            <p className="text-gray-700 mb-4">{job.description}</p>

            <h4 className="font-semibold mb-2">Requirements:</h4>
            <ul className="list-disc pl-5 mb-4">
              {job.requirements.map((req, idx) => (
                <li key={idx} className="text-gray-600">{req}</li>
              ))}
            </ul>

            <a
              href={job.applyLink}
              className="bg-blue-600 text-white py-3 px-6 rounded-full text-center inline-block mt-4 hover:bg-blue-700 transition duration-200"
            >
              Apply Now
            </a>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-md"> 
      <h1>{sharedData}</h1>
       
       <button onClick={()=>setSharedData("Updated from Career Page")} className="mt-8 px-6 py-3 bg-green-600 text-white rounded hover:bg-blue-700 transition-colors">
         Click me to update context
       </button>
      
      
      
      </div>
    </div>
  );
};

export default Career;
