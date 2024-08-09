import { useOutletContext, Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import star from '../../assets/icons/star.png';
import noStar from '../../assets/icons/nostar.png';
import styles from './Item.module.css';

function Item() {
  const { data, cart } = useOutletContext();
  const { item: id } = useParams();
  const [quantity, setQuantity] = useState('');
  const regex = new RegExp('([0-9]+)', 'i');

  const updateQuantity = (e) => {
    if (regex.test(e.target.value)) setQuantity(e.target.value);
  };
  const item = data.find((itm) => itm.id === +id);
  const reviews = item.reviews;
  const addToCart = () => {
    cart.addItem(item, quantity || '1');
  };

  const displayStars = (starsNumber) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (starsNumber > 0) {
        stars.push(star);
      } else {
        stars.push(noStar);
      }
      starsNumber -= 1;
    }
    return stars;
  };

  return (
    <main className={styles.main}>
      <div className={styles.item}>
        <img src={item.images[0]} alt="" />
        <div className={styles.itemInfos}>
          {cart.items.some((cartItem) => cartItem.item.id === item.id) ? (
            <div className={styles.addedToCart}>
              <div>This item has been added to your cart!</div>
              <Link to="/cart">
                <button>Check your cart</button>
              </Link>
            </div>
          ) : (
            <div className={styles.addToCart}>
              <button className={styles.addButton} onClick={addToCart}>
                Add to Cart
              </button>
              <label htmlFor="quantity">Quantity:</label>
              <input
                className={styles.quantityInput}
                id="quantity"
                type="number"
                placeholder="1"
                value={quantity}
                onChange={updateQuantity}
              />
            </div>
          )}
          <div className={styles.itemTitle}>{item.title}</div>
          <div className={styles.itemPrice}>{item.price}$</div>
          <div className={styles.itemDesc}>{item.description}</div>
          <div className={styles.reviewsTitle}>Reviews:</div>
          <div className={styles.reviews}>
            {reviews.map((review) => {
              return (
                <div
                  className={styles.review}
                  key={review.reviewerName + review.comment}
                >
                  <div>{review.reviewerName}</div>
                  <div
                    className={styles.stars}
                    aria-label={review.rating + ' out of 5'}
                  >
                    {displayStars(review.rating).map((star, index) => (
                      <img
                        key={star + index + review.reviewerName}
                        src={star}
                        alt="/"
                      ></img>
                    ))}
                  </div>
                  <div>"{review.comment}"</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.links}>
        <Link to="/">Homepage</Link>
        <Link to="/shop">Shop</Link>
      </div>
    </main>
  );
}

export default Item;
