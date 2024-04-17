import React from 'react'
import { MdDesignServices } from "react-icons/md";
import { FaCode, FaWordpressSimple } from "react-icons/fa6";
import './Services.scss'

const Services = () => {
  return (
    <section className="service">
        <div className="container">
            <ul className="service-card-list">
            <li className="card">
                <div className="icon">
                    <MdDesignServices />
                </div>
                <div className="title">
                    <h3>Design</h3>
                </div>
                <ul className="service-list">
                    <li className="list-item">
                        
                        <span>Charte graphique à partir d’une maquette pré définie ou personnalisé</span>
                    </li>
                    <li className="list-item">
                        
                        <span>Choix d’une palette de couleur</span>
                    </li>
                    <li className="list-item">
                        
                        <span>Création d’un logo ou choix d’un logo pré définie</span>
                    </li>
                    <li className="list-item">
                        
                        <span>Création de la maquette et du prototype </span>
                    </li>
                </ul>
            </li>
            <li className="card">
                <div className="icon">
                    <FaCode />
                </div>
                <div className="title">
                    <h3>Développement Personnalisé</h3>
                </div>
                <ul className="service-list">
                    <li className="list-item">
                        
                        <span>Site vitrine</span>
                    </li>
                    <li className="list-item">
                        
                        <span>Site multis pages</span>
                    </li>
                    <li className="list-item">
                        
                        <span>Refonte complète ou partielle de votre site actuelle</span>
                    </li>
                    <li className="list-item">
                        
                        <span>Maintenance</span>
                    </li>
                    <li className="list-item">
                        
                        <span>Référencement naturel</span>
                    </li>
                </ul>
            </li>
            <li className="card">
                <div className="icon">
                    <FaWordpressSimple />
                </div>
                <div className="title">
                    <h3>Développement Wordpress</h3>
                </div>
                <ul className="service-list">
                    <li className="list-item">
                        
                        <span>Création de site e-commerce</span>
                    </li>
                    <li className="list-item">
                        
                        <span>Création de blog</span>
                    </li>
                    <li className="list-item">
                        
                        <span>Création d’interface administrateur</span>
                    </li>
                    <li className="list-item">
                        
                        <span>Création de plugin</span>
                    </li>
                    <li className="list-item">
                        
                        <span>Amélioration des performance</span>
                    </li>
                </ul>
            </li>
            </ul>
        </div>
    </section>
  )
}

export default Services