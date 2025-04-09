import styles from "@/stylesheets/home.module.scss";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page() {
  // const carouselImages = [
  //   "/assets/img/Boat.jpg",
  //   "/assets/img/Carrousel1.png",
  // ];

  return (
    <div className={styles.home}>
      <Navbar />

      <div className={styles.content}>
        <div className={styles.vinylHeader}>
          <Image src="/assets/img/TopVinyl.svg" width={411} height={327} alt="" />
        </div>
        <div className={styles.redCircle}>        <div className={styles.top}></div>
          <div className={styles.mid}></div>
          <div className={styles.bot}></div></div>
        {/* Section 1 Component */}
        <section id="actualite" className={styles.actualite}>
          <div>
            <h2>Actualités</h2>
            <div>
              <p className={styles.newsletter}>Envie d&apos;être au courant de toutes les actualités ? <br /></p>
              <button className={styles.newsletterBut}>
                <p>&#129122;</p> S&apos;inscrire à la Newsletter
              </button>
            </div>
          </div>
          <div className={styles.containerCard}>
            <div className={styles.actuCard1}>
              <div className={styles.ribbon}>
                <Image src="/assets/img/bridesmaid.svg" alt="" width={584} height={91} />
                <Image src="/assets/img/bridesmaid.svg" alt="" width={584} height={91} />
                <Image src="/assets/img/bridesmaid.svg" alt="" width={584} height={91} />
              </div>
              <div>
                <p>offre de lancement</p>
                <p>50% de réduction</p>
                <p>sur l&apos;abonnement Premium</p>
              </div>
              <Image src="/assets/img/actualite1.svg" alt="Offre de lancement" width={300} height={200} className={styles.actualite1Img} />
              <button>
                <p>&#129122;</p>S&apos;Abonner
              </button>
            </div>
            <div className={styles.actuCard2}>
              <div className={styles.ribbon}>
                <Image src="/assets/img/bridesmaid.svg" alt="" width={584} height={91} />
                <Image src="/assets/img/bridesmaid.svg" alt="" width={584} height={91} />
                <Image src="/assets/img/bridesmaid.svg" alt="" width={584} height={91} />
              </div>
              <div>
                <Image src="/assets/img/actualite2.svg" alt="Nouveau jeu Karakaku" width={300} height={200} className={styles.actualite2Img} />
                <span>
                  <p>nouveau jeu</p>
                  <p>karakaku</p>
                  <p>Karakaku est un jeu qui met à l&apos;épreuve ta vitesse de frappe ! Tu dois retaper les paroles de chansons aussi vite qu&apos;elles sont chantées !</p>
                </span>
              </div>
              <button>
                <p>&#129122;</p> Jouer
              </button>
            </div>
            <div className={styles.actuCard3}>
              <div>
                <Image src="/assets/img/team.svg" alt="Équipe JBH" width={300} height={200} />
                <p>Découvre l&apos;équipe JBH</p>
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
        <section id="jeux" className={styles.jeux}>
          <h2>Jeux</h2>
          <div>
            <Image src="/assets/img/Vinyl.svg" alt="Vinyl" className={styles.vinyl} width={300} height={300} />
            <div>
              <div className={styles.karakakuDesc}>
                <h3>karakaku</h3>
                <p>Tu dois retaper les paroles de chansons aussi vite qu&apos;elles sont chantées !</p>
              </div>
              <Image src="/assets/img/Video.svg" alt="Vidéo Karakaku" className={styles.video} width={300} height={200} />
              <div className={styles.smallVinyl}>
                <Image src="/assets/img/Vinyl1.svg" alt="Vinyl 1" width={100} height={100} />
                <Image src="/assets/img/Vinyl2.svg" alt="Vinyl 2" width={100} height={100} />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className={styles.faq}>
          <h2>F.A.Q</h2>
          <div>
            <div>
              <p className={styles.question}>Comment puis-je m&apos;inscrire ?</p>
              <button className={styles.faqBut}>+</button>
            </div>
            <p className={styles.reponse} style={{ display: 'none' }}>Vous pouvez vous inscrire en cliquant sur le bouton &quot;S&apos;inscrire&quot; en haut de la page.</p>
            <hr />

            <div>
              <p className={styles.question}>Quels sont les modes de jeu disponibles ?</p>
              <button className={styles.faqBut}>+</button>
            </div>
            <p className={styles.reponse} style={{ display: 'none' }}>Nous proposons plusieurs modes de jeu incluant des défis journaliers et des jeux de rapidité.</p>
            <hr />

            <div>
              <p className={styles.question}>Puis-je ajouter ma propre musique ?</p>
              <button className={styles.faqBut}>+</button>
            </div>
            <p className={styles.reponse} style={{ display: 'none' }}>Oui, cette fonctionnalité est disponible avec l&apos;abonnement Premium.</p>
            <hr />
          </div>
        </section>

        {/* Section 3 Component */}
        <section id="tarifs" className={styles.tarifs}>
          <h2>Tarifs</h2>
          <span>
            <div className={styles.tarifCard}>
              <p className={styles.tarifTier}>gratuit</p>
              <p className={styles.tarifDesc}>Jouez aussi longtemps que vous le souhaitez.</p>
              <div className={styles.price}>
                <p>0€</p>
                <p>/mois</p>
              </div>
              <div className={styles.advantages}>
                <p>Inclus</p>
                <ul>
                  <li>Musiques libre de droits</li>
                  <li>3 jeux</li>
                  <li>1 défi journalier</li>
                  <li>Offre gratuite</li>
                </ul>
              </div>
              <button>
                <p>&#129122;</p> S&apos;inscrire
              </button>
            </div>
            <div className={styles.tarifCard}>
              <p className={styles.tarifTier}>premium</p>
              <p className={styles.tarifDesc}>Jouez aussi longtemps que vous le souhaitez.</p>
              <div className={styles.price}>
                <p>10€</p>
                <p>/mois</p>
              </div>
              <div className={styles.advantages}>
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
                <p>S&apos;abonner</p>
              </button>
            </div>
          </span>
        </section>
      </div>

      <Footer />
    </div>
  );
}
