import styles from './NavBar.module.css';
import Image from 'next/image';

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src="/logo.jpg" alt="Logo" width={40} height={40} />
      </div>
      <div className={styles.links}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}


