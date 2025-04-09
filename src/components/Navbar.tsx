import Link from 'next/link';
import Image from "next/image";
import styles from "@/stylesheets/navbar.module.scss";

export default async function Navbar() {
    const websiteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL || "https://justbeathit.com";

    return (
        <div className={styles.landingHead}>
            <div className={styles.topbar}>
                <Image className={styles.headerMusicBar} width={188} height={100} src="/assets/img/musicBar.svg" alt="" />
                <Link href="/">
                    <Image
                        priority
                        className={styles.topLogo}
                        src="/assets/img/logo-jbh.svg"
                        alt="Logo"
                        width={100}
                        height={50}
                    />
                </Link>
                <div>
                    {
                        /* {data ? (
                            <>
                                <Link href={`/profile/${data.username}`}>
                                    <span>
                                        <p>&#129122;</p> {data.username}
                                    </span>
                                </Link>
                            </>
                        ) : ( */
                        <>
                            <Link href={`${websiteUrl}/auth/login`}>
                                <span className='loginButton'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.96722 0.925476C7.64992 1.24278 7.64992 1.75722 7.96722 2.07452L13.0802 7.1875H1.50008C1.05135 7.1875 0.687581 7.55127 0.687581 8C0.687581 8.44873 1.05135 8.8125 1.50008 8.8125H13.0802L7.96722 13.9255C7.64992 14.2428 7.64992 14.7572 7.96722 15.0745C8.28452 15.3918 8.79897 15.3918 9.11627 15.0745L15.6163 8.57452C15.9336 8.25722 15.9336 7.74278 15.6163 7.42548L9.11627 0.925476C8.79897 0.608175 8.28452 0.608175 7.96722 0.925476Z" fill="#FFF6F1" />
                                    </svg>
                                    se connecter
                                </span>
                            </Link>
                            <Link href={`${websiteUrl}/auth/register`}>
                                <span className='registerButton'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.96722 0.925476C7.64992 1.24278 7.64992 1.75722 7.96722 2.07452L13.0802 7.1875H1.50008C1.05135 7.1875 0.687581 7.55127 0.687581 8C0.687581 8.44873 1.05135 8.8125 1.50008 8.8125H13.0802L7.96722 13.9255C7.64992 14.2428 7.64992 14.7572 7.96722 15.0745C8.28452 15.3918 8.79897 15.3918 9.11627 15.0745L15.6163 8.57452C15.9336 8.25722 15.9336 7.74278 15.6163 7.42548L9.11627 0.925476C8.79897 0.608175 8.28452 0.608175 7.96722 0.925476Z" fill="#FFF6F1" />
                                    </svg>s&apos;inscrire
                                </span>
                            </Link>
                        </>
                        // )
                    }
                </div>
            </div>
            <div className={styles.whiteCircle + styles.circleTop}></div>
            <div className={styles.whiteCircle + styles.circleBottom}></div>
            <div className={styles.sticks}>
                <Image src="/assets/img/sticks.svg" alt="" width={88} height={85} />
            </div>
            <nav className={styles.headerNav}>
                <Link href="/">just beat it</Link>
                <Link href="#actualite">Actualités</Link>
                <Link href="#jeux">Jeux</Link>
                <Link href="#faq">F.A.Q</Link>
                <Link href="#tarifs">Tarifs</Link>
            </nav>

            <div className={styles.headerContent}>
                <div>
                    <div>
                        <h1>
                            <p>Défie tes amis</p>
                            <p>sur des minis-jeux</p>
                            <p>musicaux</p>
                        </h1>

                    </div>
                    <Link href={`${websiteUrl}/game/karakaku`}>
                        <button className={styles.playButton}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.96722 0.925476C7.64992 1.24278 7.64992 1.75722 7.96722 2.07452L13.0802 7.1875H1.50008C1.05135 7.1875 0.687581 7.55127 0.687581 8C0.687581 8.44873 1.05135 8.8125 1.50008 8.8125H13.0802L7.96722 13.9255C7.64992 14.2428 7.64992 14.7572 7.96722 15.0745C8.28452 15.3918 8.79897 15.3918 9.11627 15.0745L15.6163 8.57452C15.9336 8.25722 15.9336 7.74278 15.6163 7.42548L9.11627 0.925476C8.79897 0.608175 8.28452 0.608175 7.96722 0.925476Z" fill="#FFF6F1" />
                            </svg>

                            Jouer
                        </button>
                    </Link>
                </div>
            </div>
            <div className={styles.heartborder}>
                <Image src="/assets/img/heartbeat.svg" alt="" width={1920} height={185} />
            </div>
        </div>
    );
}
