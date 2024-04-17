import React from 'react'
import './About.scss'

const About = () => {
  return (
    <section className="about">
       <div className="container">
       <div className="container-picture">
            <div className="picture">
                <div className="square-color"></div>
                <div className="square-picture"></div>
            </div>
        </div>

        <div className="text-about">
            <p>Avec trois ans d'expérience solide dans le développement web, je suis actuellement engagé dans une licence de concepteur web. Au fil de mon parcours professionnel, j'ai eu l'opportunité de travailler sur une multitude de projets variés, ce qui a renforcé ma passion pour le digital et m'a permis de cultiver un engagement profond dans ce domaine. De la conception à la réalisation, j'ai pris plaisir à explorer les différentes facettes du développement web, cherchant toujours à repousser les limites et à atteindre l'excellence dans chaque projet entrepris.</p>
            <p>Mon intérêt pour le digital ne se limite pas uniquement à l'aspect technique, mais s'étend également à l'aspect créatif et innovant. Je suis constamment à l'affût des dernières tendances et technologies émergentes, toujours avide de nouvelles connaissances et de défis stimulants. Cette curiosité insatiable m'a poussé à approfondir mes compétences dans un large éventail de langages et de frameworks, allant de HTML, CSS et JavaScript aux technologies plus avancées telles que React et Node.js</p>
        </div>
       </div>
    </section>
  )
}

export default About