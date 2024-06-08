import React from 'react'
import Project from './Project'
import cnfIMG from '../../images/cnf.png'
import lauIMG from '../../images/laundary.png'
import newsIMG from '../../images/news.png'
function Projects() {


    const data = [
        {
          "name": "Conference Website",
          "content": "Developed a comprehensive conference website for the International Conference on Petroleum, Hydrogen, and Decarbonization (ICPHD) 2024, enabling participants to access information and register for the event. The site includes a robust backend system for managing user registrations and event data, ensuring secure handling of participant information.",
          "profile": "Frontend Project",
          "no": 1,
          "image": cnfIMG,
          "GitHub": "",
          "demo": "j"
        },
        {
          "name": "iLaundry",
          "content": "Developed a full-stack web application for laundry services, allowing users to schedule and manage laundry orders online. The application features secure user authentication and authorization for both registration and login, integrated a dummy payment gateway using Stripe API to simulate e-commerce transactions, and provides a user-friendly interface that enhances user experience similar to popular e-commerce platforms.",
          "profile": "Full Stack Project",
          "no": 2,
          "image": lauIMG,
          "GitHub": "iLaundry-.git",
          "demo": "k"
        },
        {
          "name": "iNews",
          "content": "Created a responsive news website that offers category-wise news sorting and search functionality, providing users with tailored and up-to-date news. The site includes a dark mode feature and ensures compatibility across different devices and screen sizes.",
          "profile": "API Based Project",
          "no": 3,
          "image": newsIMG,
          "GitHub": "iNews.git",
          "demo": "l"
        }
      ]
      
  return (
    <>
   {data.map((project, index) => (
                <Project 
                    key={index}
                    name={project.name}
                    content={project.content}
                    profile={project.profile}
                    no={project.no}
                    image={project.image}
                    GitHub={project.GitHub}
                    demo={project.demo}
                />
            ))}
    </>
  )
}

export default Projects