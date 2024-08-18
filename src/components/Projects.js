import React from 'react'
import { projects } from '../Portfolio'

const Projects = () => {
  return (
    <>
      <div id='projects' className="relative flex flex-col bg-clip-border text-gray-700 rounded-t-[12px] rounded-b-[12px] shadow-[0_-2px_5px_rgba(0,0,0,0.1),0_2px_5px_rgba(0,0,0,0.1)]">
        <div className="container mx-auto px-4 pb-2">
          <div className="container px-5 pb-4 mx-auto">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 py-2 text-center">My Projects.</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <ul>
                    {project.technologies.map((tech, index) => (
                      <li
                        key={index}
                        className="inline-block bg-gray-200 text-gray-800 text-xs font-semibold mr-2 mb-2 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects