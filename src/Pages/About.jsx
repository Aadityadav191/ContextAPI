import React,{useContext} from 'react'
import { MyContext } from '../Context/MyContext'

export default function About() {
  const { sharedData ,setSharedData} = useContext(MyContext);
  return (
    <>
      <div className="min-h-screen bg-gray-100 text-gray-800 px-6 py-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
        <p className="text-lg md:text-xl text-gray-600">
          I'm a passionate developer with a love for creating beautiful and functional web applications.
        </p>
      </section>

      {/* Detailed About Section */}
      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
        <p className="text-gray-700 leading-relaxed">
          I’m a full-stack developer with a strong background in building performant and scalable web applications. With experience in React, Node.js, and Tailwind CSS, I focus on writing clean, maintainable code and creating delightful user experiences.
        </p>
      </section>

      {/* Skills Section */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Skills & Technologies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {['React', 'Tailwind CSS', 'JavaScript', 'Node.js', 'Next.js', 'Git'].map((tech) => (
            <span
              key={tech}
              className="bg-white border rounded shadow p-3 text-center font-medium text-gray-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      
      <div className="max-w-3xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-md">
        <h1> {sharedData} </h1>
      <button onClick={()=> setSharedData("Update from About ")} className="mt-8 px-6 py-3 bg-green-600 text-white rounded hover:bg-blue-700 transition-colors">
        Click Me 
      </button>
      </div>

    </div>
    </>
  )
}
