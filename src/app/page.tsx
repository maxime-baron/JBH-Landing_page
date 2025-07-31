'use client';

import '@/stylesheets/base.scss';
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { useState } from 'react';


export default function Page() {
  const carouselImages = [
    "/assets/img/Boat.jpg",
    "/assets/img/Carrousel1.png",
  ];

  return (
    <div className="home">
      <Navbar />
            <div className="heartborder">
                <img src="/assets/img/heartbeat.svg" alt="" />
            </div>
      <div className="content">
      <div className="vinylHeader">
                <img src="/assets/img/TopVinyl.svg" alt="" />
            </div>
        <div className="redCircle">        <div className="Circle top"></div>
        <div className="Circle mid"></div>
        <div className="Circle bot"></div></div>
        {/* Section 1 Component */}
        <section id="actualite">
          <div>
            <h2>Actualités</h2>
            <div>
              <p className="newsletter">Envie d’être au courant de toutes les actualités ? <br /></p>
              <button className="newsletterBut">
                <p>&#129122;</p> S'inscrire à la Newsletter
              </button>
            </div>
          </div>
          <div className="containerCard">
            <div className="actuCard1">
              <div className="ribbon">
                <img src="/assets/img/bridesmaid.svg"/>
                <img src="/assets/img/bridesmaid.svg"/>
                <img src="/assets/img/bridesmaid.svg"/>
              </div>
              <div>
                <p>offre de lancement</p>
                <p>50% de réduction</p>
                <p>sur l’abonnement Premium</p>
              </div>
              <Image src="/assets/img/actualite1.svg" alt="Offre de lancement" width={300} height={200} className="actualite1Img" />
                <Link href="https://play.justbeathit.com/options/subscription" passHref>
                <button>
                  <p>&#129122;</p>S'Abonner
                </button>
                </Link>
            </div>
            <div className="actuCard2">
            <div className="ribbon">
                <img src="/assets/img/bridesmaid.svg"/>
                <img src="/assets/img/bridesmaid.svg"/>
                <img src="/assets/img/bridesmaid.svg"/>
              </div>
              <div>
                <Image src="/assets/img/actualite2.svg" alt="Nouveau jeu Karakaku" width={300} height={200} className="actualite2Img" />
                <span>
                  <p>nouveau jeu</p>
                  <p>karakaku</p>
                  <p>Karakaku est un jeu qui met à l'épreuve ta vitesse de frappe ! Tu dois retaper les paroles de chansons aussi vite qu'elles sont chantées !</p>
                </span>
              </div>
                <Link href="https://play.justbeathit.com/game/karakaku" passHref>
                <button>
                  <p>&#129122;</p> Jouer
                </button>
                </Link>
            </div>
            <div className="actuCard3">
              <div>
                <Image src="/assets/img/team.svg" alt="Équipe JBH" width={300} height={200} />
                <p>Découvre l’équipe JBH</p>
                <button>
                  <p>&#129122;</p> En savoir plus
                </button>
              </div>
              <div>
                <p>découvrez la roadmap</p>
                <button>
                  <p>&#129122;</p> En savoir plus
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 Component */}
        <section id="jeux">
          <h2>Jeux</h2>
          <div>
            <Image src="/assets/img/Vinyl.svg" alt="Vinyl" className="vinyl" width={300} height={300} />
            <div>
              <div className="karakakuDesc">
                <h3>karakaku</h3>
                <p>Tu dois retaper les paroles de chansons aussi vite qu'elles sont chantées !</p>
              </div>
              <Image src="/assets/img/Video.svg" alt="Vidéo Karakaku" className="video" width={300} height={200} />
              <div className="smallVinyl">
                <Image src="/assets/img/Vinyl1.svg" alt="Vinyl 1" width={100} height={100} />
                <Image src="/assets/img/Vinyl2.svg" alt="Vinyl 2" width={100} height={100} />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />

        {/* Section 3 Component */}
        <section id="tarifs">
          <h2>Tarifs</h2>
          <span>
            <div className="tarifCard">
              <p className="tarifTier">gratuit</p>
              <p className="tarifDesc">Jouez aussi longtemps que vous le souhaitez.</p>
              <div className="price">
                <p>0</p>
                <p>/mois</p>
              </div>
              <div className="advantages">
                <p>Inclus</p>
                <ul>
                  <li>Musiques libre de droits</li>
                  <li>3 jeux</li>
                  <li>1 défi journalier</li>
                  <li>Offre gratuite</li>
                </ul>
              </div>
              <button>
                <p>&#129122;</p> S'inscrire
              </button>
            </div>
            <div className="tarifCard">
              <p className="tarifTier">premium</p>
              <p className="tarifDesc">Jouez aussi longtemps que vous le souhaitez.</p>
              <div className="price">
                <p>6</p>
                <p>/mois</p>
              </div>
              <div className="advantages">
                <p>Inclus</p>
                <ul>
                  <li>Toutes les musiques</li>
                  <li>Tous les modes et défis</li>
                  <li>Tous les défis journaliers</li>
                  <li>Ajout de fichiers audio personnalisés</li>
                </ul>
              </div>
              <button>
                <p>&#129122;</p>
                <p>S'abonner</p>
              </button>
            </div>
          </span>
        </section>
      </div>

      <Footer />
    </div>
  );
}
