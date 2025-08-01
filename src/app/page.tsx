import '@/stylesheets/base.scss';
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

export default function Page() {

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
        {/* Section 1 Component */}
        <section id="actualite">
          <div>
            <h2>Actualités</h2>
            <div>
              <p className="newsletter">Envie d&apos;être au courant de toutes les actualités ? <br /></p>
              <Link href={"https://play.justbeathit.com/options/notifications"} className="newsletterBut">
                <p>                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.96722 0.925476C7.64992 1.24278 7.64992 1.75722 7.96722 2.07452L13.0802 7.1875H1.50008C1.05135 7.1875 0.687581 7.55127 0.687581 8C0.687581 8.44873 1.05135 8.8125 1.50008 8.8125H13.0802L7.96722 13.9255C7.64992 14.2428 7.64992 14.7572 7.96722 15.0745C8.28452 15.3918 8.79897 15.3918 9.11627 15.0745L15.6163 8.57452C15.9336 8.25722 15.9336 7.74278 15.6163 7.42548L9.11627 0.925476C8.79897 0.608175 8.28452 0.608175 7.96722 0.925476Z" fill="#FFF6F1" />
                </svg></p> S&apos;inscrire à la Newsletter
              </Link>
            </div>
          </div>
          <div className="containerCard">
            <div className="actuCard1">
              <div className="ribbon">
                <img src="/assets/img/bridesmaid.svg" />
                <img src="/assets/img/bridesmaid.svg" />
                <img src="/assets/img/bridesmaid.svg" />
              </div>
              <div>
                <p>offre de lancement</p>
                <p>50% de réduction</p>
                <p>sur l&apos;abonnement Premium</p>
              </div>
              <Image src="/assets/img/actualite1.svg" alt="Offre de lancement" width={300} height={200} className="actualite1Img" />
              <Link href="https://play.justbeathit.com/options/subscription" passHref>
                <button>
                  <p>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M7.96722 0.925476C7.64992 1.24278 7.64992 1.75722 7.96722 2.07452L13.0802 7.1875H1.50008C1.05135 7.1875 0.687581 7.55127 0.687581 8C0.687581 8.44873 1.05135 8.8125 1.50008 8.8125H13.0802L7.96722 13.9255C7.64992 14.2428 7.64992 14.7572 7.96722 15.0745C8.28452 15.3918 8.79897 15.3918 9.11627 15.0745L15.6163 8.57452C15.9336 8.25722 15.9336 7.74278 15.6163 7.42548L9.11627 0.925476C8.79897 0.608175 8.28452 0.608175 7.96722 0.925476Z" fill="#1D1D1D" />
                    </svg>
                  </p>S&apos;Abonner
                </button>
              </Link>
            </div>
            <div className="actuCard2">
              <div className="ribbon">
                <img src="/assets/img/bridesmaid.svg" />
                <img src="/assets/img/bridesmaid.svg" />
                <img src="/assets/img/bridesmaid.svg" />
              </div>
              <div>
                <Image src="/assets/img/actualite2.svg" alt="Nouveau jeu Karakaku" width={300} height={200} className="actualite2Img" />
                <span>
                  <p>nouveau jeu</p>
                  <p>karakaku</p>
                  <p>Karakaku est un jeu qui met à l&apos;épreuve ta vitesse de frappe ! Tu dois retaper les paroles de chansons aussi vite qu&apos;elles sont chantées !</p>
                </span>
              </div>
              <Link href="https://play.justbeathit.com/game/karakaku" passHref>
                <button>
                  <p>                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.96722 0.925476C7.64992 1.24278 7.64992 1.75722 7.96722 2.07452L13.0802 7.1875H1.50008C1.05135 7.1875 0.687581 7.55127 0.687581 8C0.687581 8.44873 1.05135 8.8125 1.50008 8.8125H13.0802L7.96722 13.9255C7.64992 14.2428 7.64992 14.7572 7.96722 15.0745C8.28452 15.3918 8.79897 15.3918 9.11627 15.0745L15.6163 8.57452C15.9336 8.25722 15.9336 7.74278 15.6163 7.42548L9.11627 0.925476C8.79897 0.608175 8.28452 0.608175 7.96722 0.925476Z" fill="#FFF6F1" />
                  </svg></p> Jouer
                </button>
              </Link>
            </div>
            <div className="actuCard3">
              <div>
                <Image src="/assets/img/team.svg" alt="Équipe JBH" width={300} height={200} />
                <p>Découvre l&apos;équipe JBH</p>
                <Link href="https://play.justbeathit.com" passHref>
                  <button>
                    <p>                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M7.96722 0.925476C7.64992 1.24278 7.64992 1.75722 7.96722 2.07452L13.0802 7.1875H1.50008C1.05135 7.1875 0.687581 7.55127 0.687581 8C0.687581 8.44873 1.05135 8.8125 1.50008 8.8125H13.0802L7.96722 13.9255C7.64992 14.2428 7.64992 14.7572 7.96722 15.0745C8.28452 15.3918 8.79897 15.3918 9.11627 15.0745L15.6163 8.57452C15.9336 8.25722 15.9336 7.74278 15.6163 7.42548L9.11627 0.925476C8.79897 0.608175 8.28452 0.608175 7.96722 0.925476Z" fill="#FFF6F1" />
                    </svg></p> En savoir plus
                  </button>
                </Link>
              </div>
              <div>
                <p>découvrez la roadmap</p>
                <Link href="https://play.justbeathit.com" passHref>
                  <button>
                    <p>                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M7.96722 0.925476C7.64992 1.24278 7.64992 1.75722 7.96722 2.07452L13.0802 7.1875H1.50008C1.05135 7.1875 0.687581 7.55127 0.687581 8C0.687581 8.44873 1.05135 8.8125 1.50008 8.8125H13.0802L7.96722 13.9255C7.64992 14.2428 7.64992 14.7572 7.96722 15.0745C8.28452 15.3918 8.79897 15.3918 9.11627 15.0745L15.6163 8.57452C15.9336 8.25722 15.9336 7.74278 15.6163 7.42548L9.11627 0.925476C8.79897 0.608175 8.28452 0.608175 7.96722 0.925476Z" fill="#FFF6F1" />
                    </svg></p> En savoir plus
                  </button>
                </Link>
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
                <p>Tu dois retaper les paroles de chansons aussi vite qu&apos;elles sont chantées !</p>
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
              <Link href={"https://play.justbeathit.com/options/subscription"}>
                <button>
                  <p>                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.96722 0.925476C7.64992 1.24278 7.64992 1.75722 7.96722 2.07452L13.0802 7.1875H1.50008C1.05135 7.1875 0.687581 7.55127 0.687581 8C0.687581 8.44873 1.05135 8.8125 1.50008 8.8125H13.0802L7.96722 13.9255C7.64992 14.2428 7.64992 14.7572 7.96722 15.0745C8.28452 15.3918 8.79897 15.3918 9.11627 15.0745L15.6163 8.57452C15.9336 8.25722 15.9336 7.74278 15.6163 7.42548L9.11627 0.925476C8.79897 0.608175 8.28452 0.608175 7.96722 0.925476Z" fill="#FFF6F1" />
                  </svg></p> S&apos;inscrire
                </button>
              </Link>
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
              <Link href={"https://play.justbeathit.com/options/subscription"}>
                <button>
                  <p>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="10%" stopColor="#872F74" />
                          <stop offset="60%" stopColor="#E23145" />
                          <stop offset="100%" stopColor="#FA9D4F" />
                        </linearGradient>
                      </defs>
                      <path fillRule="evenodd" clipRule="evenodd" d="M7.96722 0.925476C7.64992 1.24278 7.64992 1.75722 7.96722 2.07452L13.0802 7.1875H1.50008C1.05135 7.1875 0.687581 7.55127 0.687581 8C0.687581 8.44873 1.05135 8.8125 1.50008 8.8125H13.0802L7.96722 13.9255C7.64992 14.2428 7.64992 14.7572 7.96722 15.0745C8.28452 15.3918 8.79897 15.3918 9.11627 15.0745L15.6163 8.57452C15.9336 8.25722 15.9336 7.74278 15.6163 7.42548L9.11627 0.925476C8.79897 0.608175 8.28452 0.608175 7.96722 0.925476Z" fill="url(#arrowGradient)" />
                    </svg>
                  </p>
                  <p>S&apos;abonner</p>
                </button>
              </Link>
            </div>
          </span>
        </section>
      </div>

      <Footer />
    </div>
  );
}
