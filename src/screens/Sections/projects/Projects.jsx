import React from 'react'
import './Projects.scss'

const Projects = () => {
  return (
    <section className="projects">
       <div className="project-container">
            <ul className="slider">
                <li className='card'>
                    <div className="image-layer"></div>
                    <div className="project-info">
                        <h3 className='h6'>Création d’un back office</h3>
                        <span className="h4">
                        NOT’ANNUAIR
                        </span>
                    </div>
                </li>
                <li className='card active'>
                    <div className="image-layer"></div>
                    <div className="project-info">
                        <h3 className='h6'>Mon premier portfolio</h3>
                        <span className="h4">
                            Dorian Marechal
                        </span>
                    </div>
                </li>
                <li className='card'>
                    <div className="image-layer"></div>
                    <div className="project-info">
                        <h3 className='h6'>Forum d'entraide pour les enseignants</h3>
                        <span className="h4">
                        Forum index-education
                        </span>
                    </div>
                </li>
                <li className='card'>
                    <div className="image-layer"></div>
                    <div className="project-info">
                        <h3 className='h6'>Forum d'entraide pour les enseignants</h3>
                        <span className="h4">
                        Forum index-education
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Projects