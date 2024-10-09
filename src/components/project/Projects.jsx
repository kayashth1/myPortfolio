import React from 'react'
import Project from './Project'
import cnfIMG from '../../images/cnf.png'
import lauIMG from '../../images/laundary.png'
import newsIMG from '../../images/news.png'
import imed from '../../images/imedtube.png'
import noteit from '../../images/noteit.png'
function Projects() {


    const data = [
        {
          "name": "Conference Website",
          "content": "Developed a comprehensive conference website for the International Conference on Petroleum, Hydrogen, and Decarbonization (ICPHD) 2024, enabling participants to access information and register for the event. The site includes a robust backend system for managing user registrations and event data, ensuring secure handling of participant information.",
          "profile": "Frontend Project (Team Project)",
          "no": 1,
          "image": cnfIMG,
          "GitHub": "https://github.com/SanyogDg/ICPHD-IIT-ISM.git",
          "demo": "https://conference-website-nine.vercel.app/",
          "gitname":"Live Demo"
        },
        // {
        //   "name": "iMedTube",
        //   "content": "a Rsponsive React-based web application that replicates the functionality of YouTube closely, by allowing users to search and watch any video or channel they like, at the same time allowing filtering of videos by category",
        //   "profile": "React and Rapid API project",
        //   "no": 2,
        //   "image": imed,
        //   "GitHub": "https://github.com/kayashth1/imedtube.git",
        //   "demo": "",
        //   "gitname":"Coming Soon"
        // },
        {
          "name": "noteIt",
          "content": "A Responsive CRUD-based web application that allows users to track daily tasks using note cards. It features a pin option to highlight important notes and includes secure login functionality with JWT authentication.",
          "profile":"MERN Based Project",
          "no": 2,
          "image": noteit,
          "GitHub": "https://github.com/kayashth1/noteit.git",
          "demo": "",
          "gitname":"Coming Soon"
        },
        {
          "name": "iLaundry",
          "content": "Developed a full-stack web application for laundry services, allowing users to schedule and manage laundry orders online. The application features secure user authentication and authorization for both registration and login, integrated a dummy payment gateway using Stripe API to simulate e-commerce transactions, and provides a user-friendly interface that enhances user experience similar to popular e-commerce platforms.",
          "profile": "Full Stack Project",
          "no": 3,
          "image": lauIMG,
          "GitHub": "https://github.com/kayashth1/iLaundry-.git",
          "demo": "k",
          "gitname":"Coming Soon"
        },
        {
          "name": "iNews",
          "content": "Created a responsive news website that offers category-wise news sorting and search functionality, providing users with tailored and up-to-date news. The site includes a dark mode feature and ensures compatibility across different devices and screen sizes.",
          "profile": "API Based Project",
          "no": 4,
          "image": newsIMG,
          "GitHub": "https://github.com/kayashth1/iNews.git",
          "demo": "l",
          "gitname":"Coming Soon"
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
                    gitname={project.gitname}
                />
            ))}
    </>
  )
}

export default Projects