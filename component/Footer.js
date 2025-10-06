import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Made with ❤️ by Aditi Soni</p>
    </footer>
  );
}


