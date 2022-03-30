import './App.css';
import starIcon from '../../images/icon-star.svg';
import buyerImage from '../../images/image-anne.jpg';

function App() {
  return (
    <div className='page'>
      <section className='social-proof'>
        <div className='social-proof__top-wrapper'>
          <div className='social-proof__text-container'>
            <h2 className='social-proof__header'>
              10,000+ of our users love our products.
            </h2>
            <p className='social-proof__text'>
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </div>
          <div className='social-proof__rating-container'>
            <ul className='social-proof__rating-list'>
              <li className='social-proof__rating-item'>
                <div className='social-proof__stars-container'>
                  <ul className='social-proof__stars'>
                    <li className='social-proof__star'>
                      <img
                        src={starIcon}
                        alt='star icon'
                        className='social-proof__rating-star-icon'
                      />
                    </li>
                    <li className='social-proof__star'>
                      <img
                        src={starIcon}
                        alt='star icon'
                        className='social-proof__rating-star-icon'
                      />
                    </li>
                    <li className='social-proof__star'>
                      <img
                        src={starIcon}
                        alt='star icon'
                        className='social-proof__rating-star-icon'
                      />
                    </li>
                    <li className='social-proof__star'>
                      <img
                        src={starIcon}
                        alt='star icon'
                        className='social-proof__rating-star-icon'
                      />
                    </li>
                    <li className='social-proof__star'>
                      <img
                        src={starIcon}
                        alt='star icon'
                        className='social-proof__rating-star-icon'
                      />
                    </li>
                  </ul>
                </div>
                <p className='social-proof__rating-item_text'>
                  Rated 5 Stars in Reviews
                </p>
              </li>
              <li className='social-proof__rating-item'>
                <div className='social-proof__stars-container'>
                  <ul className='social-proof__stars'>
                    <li className='social-proof__star'>
                      <img
                        src={starIcon}
                        alt='star icon'
                        className='social-proof__rating-star-icon'
                      />
                    </li>
                    <li className='social-proof__star'>
                      <img
                        src={starIcon}
                        alt='star icon'
                        className='social-proof__rating-star-icon'
                      />
                    </li>
                    <li className='social-proof__star'>
                      <img
                        src={starIcon}
                        alt='star icon'
                        className='social-proof__rating-star-icon'
                      />
                    </li>
                    <li className='social-proof__star'>
                      <img
                        src={starIcon}
                        alt='star icon'
                        className='social-proof__rating-star-icon'
                      />
                    </li>
                    <li className='social-proof__star'>
                      <img
                        src={starIcon}
                        alt='star icon'
                        className='social-proof__rating-star-icon'
                      />
                    </li>
                  </ul>
                </div>
                <p className='social-proof__rating-item_text'>
                  Rated 5 Stars in Reviews
                </p>
              </li>
              <li className='social-proof__rating-item'>
                <div className='social-proof__stars-container'>
                  <ul className='social-proof__stars'>
                    <li className='social-proof__star'>
                      <img
                        src={starIcon}
                        alt='star icon'
                        className='social-proof__rating-star-icon'
                      />
                    </li>
                    <li className='social-proof__star'>
                      <img
                        src={starIcon}
                        alt='star icon'
                        className='social-proof__rating-star-icon'
                      />
                    </li>
                    <li className='social-proof__star'>
                      <img
                        src={starIcon}
                        alt='star icon'
                        className='social-proof__rating-star-icon'
                      />
                    </li>
                    <li className='social-proof__star'>
                      <img
                        src={starIcon}
                        alt='star icon'
                        className='social-proof__rating-star-icon'
                      />
                    </li>
                    <li className='social-proof__star'>
                      <img
                        src={starIcon}
                        alt='star icon'
                        className='social-proof__rating-star-icon'
                      />
                    </li>
                  </ul>
                </div>
                <p className='social-proof__rating-item_text'>
                  Rated 5 Stars in Reviews
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className='social-proof__card-container'>
          <ul className='social-proof__cards'>
            <li>
              <aside className='social-proof__card'>
                <div className='social-proof__card_buyer-container'>
                  <img
                    src={buyerImage}
                    alt='buyer'
                    className='social-proof__buyer-image'
                  />
                  <p className='social-proof__buyer-name'>
                    Anne Wallace{' '}
                    <span className='social-proof__buyer-title'>
                      Verified Buyer
                    </span>
                  </p>
                </div>
                <p className='social-proof__card-text'>
                  “ Put an order with this company and can only praise them for
                  the very high standard. Will definitely use them again and
                  recommend them to everyone! ”
                </p>
              </aside>
            </li>
            <li>
              <aside className='social-proof__card'>
                <div className='social-proof__card_buyer-container'>
                  <img
                    src={buyerImage}
                    alt='buyer'
                    className='social-proof__buyer-image'
                  />
                  <p className='social-proof__buyer-name'>
                    Anne Wallace{' '}
                    <span className='social-proof__buyer-title'>
                      Verified Buyer
                    </span>
                  </p>
                </div>
                <p className='social-proof__card-text'>
                  “ Put an order with this company and can only praise them for
                  the very high standard. Will definitely use them again and
                  recommend them to everyone! ”
                </p>
              </aside>
            </li>
            <li>
              <aside className='social-proof__card'>
                <div className='social-proof__card_buyer-container'>
                  <img
                    src={buyerImage}
                    alt='buyer'
                    className='social-proof__buyer-image'
                  />
                  <p className='social-proof__buyer-name'>
                    Anne Wallace{' '}
                    <span className='social-proof__buyer-title'>
                      Verified Buyer
                    </span>
                  </p>
                </div>
                <p className='social-proof__card-text'>
                  “ Put an order with this company and can only praise them for
                  the very high standard. Will definitely use them again and
                  recommend them to everyone! ”
                </p>
              </aside>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
