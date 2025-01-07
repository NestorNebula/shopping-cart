import styles from './Footer.module.css';

function Footer() {
  return (
    <footer>
      <div className={styles.credits}>
        <a
          href="https://www.flaticon.com/free-icons/shopping-bag"
          title="shopping-bag icons"
        >
          Shopping-bag icons created by iconixar - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/shopping-cart"
          title="shopping cart icons"
        >
          Shopping cart icons created by Freepik - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/homepage"
          title="homepage icons"
        >
          Homepage icons created by Smashicons - Flaticon
        </a>
        <a href="https://www.flaticon.com/free-icons/star" title="star icons">
          Star icons created by Pixel perfect - Flaticon
        </a>
        <a href="https://pictogrammers.com/library/mdi/">
          Cart icon from Material Design Icons - Google
        </a>
      </div>
    </footer>
  );
}

export default Footer;
