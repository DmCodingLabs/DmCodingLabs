import React from 'react'
import './Mission.scss'

const Mission = () => {
  return (
    <section className="missions">
        <div className="container">
        <div className="title-missions">
            <div className="top-title">
                <div className="line"></div>
                <span>ma mission</span>
            </div>
            <h3>Conception graphique et développement web</h3>
        </div>
        <div className="text-missions">
            <p>Mon engagement dans la conception graphique et le développement web est de créer des expériences uniques et fonctionnelles. Avec une approche créative et technique, je m'efforce de donner vie aux idées à travers des interfaces visuellement attrayantes et des fonctionnalités web fluides. Chaque projet est une occasion de fusionner l'art et la technologie, en offrant des solutions personnalisées qui répondent aux besoins spécifiques de mes clients. Mon objectif est de surpasser les attentes en créant des sites web et des designs graphiques qui captivent les utilisateurs et renforcent la présence en ligne de chaque marque</p>
            <div className="more">
                <div className="line"></div>
                <span>lire plus</span>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Mission