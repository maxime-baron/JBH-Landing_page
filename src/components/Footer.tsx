import Link from 'next/link';
import styles from '@/stylesheets/footer.module.scss';
import Image from "next/image";

export default async function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.leftSide}>
                <div className={styles.container}>
                    <div className={styles.footerSection}>
                        <h2>JUST BEAT HIT</h2>
                        <nav className={styles.footerNav}>
                            <Link href=".landingHead">just beat it</Link>
                            <Link href="#actualite">Actualités</Link>
                            <Link href="#jeux">Jeux</Link>
                            <Link href="#faq">F.A.Q</Link>
                            <Link href="#tarifs">Tarifs</Link>
                        </nav>
                        <div className={styles.socialIcons}>
                            <a href="#"><i className={styles.fab + styles.faFacebook}></i></a>
                            <a href="#"><i className={styles.fab + styles.faTwitter}></i></a>
                            <a href="#"><i className={styles.fab + styles.faInstagram}></i></a>
                            <a href="#"><i className={styles.fab + styles.faLinkedin}></i></a>
                            <a href="#"><i className={styles.fab + styles.faYoutube}></i></a>
                        </div>
                    </div>
                    <div className={styles.footerSection}>
                        <h2>Contactez nous</h2>
                        <p><i className={styles.fas + styles.faEnvelope}></i> just.beat.hit@gmail.com</p>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <p>Just Beat Hit © 2025</p>
                    <p>Tout droits réservés</p>
                </div>
            </div>
            <div className={styles.rightSide}>
                <div className={styles.footerLogoSection}>
                    <Image
                        className={styles.footerLogo}
                        src="/assets/img/logo-jbh.svg"
                        alt="Just Beat Hit Logo"
                        width={150}
                        height={150}
                    />
                </div>
            </div>
        </footer>
    );
}