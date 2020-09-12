import React from 'react';
import Hotel1 from '../../assets/hotel-1.jpg';
import Hotel2 from '../../assets/hotel-2.jpg';
import Hotel3 from '../../assets/hotel-3.jpg';
import {ReactComponent as Star} from '../../assets/star.svg';
import {ReactComponent as Location} from '../../assets/location-pin.svg';
import User2 from '../../assets/user2.jpeg';
import User3 from '../../assets/user3.jpeg';
import User4 from '../../assets/user4.jpeg';
import User5 from '../../assets/user5.jpeg';
import User6 from '../../assets/user6.jpeg';
import User7 from '../../assets/user7.jpeg';





function MainContent() {
  return (
    <div className="hotel-view">
      <div className='gallery'>
        <figure className='galler__item'>
          <img src={Hotel1} alt="htel-photo1"  className='gallery__photo' />
        </figure>
        <figure className='galler__item'>
          <img src={Hotel2} alt="htel-photo2" className='gallery__photo' />
        </figure>
        <figure className='galler__item'>
          <img src={Hotel3} alt="htel-photo3" className='gallery__photo' />
        </figure>
      </div>

      <div className='overview'>
        <h1 className='overview__heading'>Hotel Africs Coast</h1>
        <div className='overview__stars'>
          <Star className='overview__icon-star' />
          <Star className='overview__icon-star' />
          <Star className='overview__icon-star' />
          <Star className='overview__icon-star' />
          <Star className='overview__icon-star' />
        </div>
        <div className='overview__location'>
          <Location className='overview__icon-location' />
          <button className='btn-inline'>Mombasa, Kenya</button>
        </div>

        <div className='overview__rating'>
          <div className='overview__rating-average'>8.6</div>
          <div className='overview__rating-count'>438 votes</div>
        </div>
      </div>

      <div className='detail'>
        <div className='description'>
          <p className='paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
          </p>
          <p className='paragraph'>
            Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
          </p>
          <ul className='list'>
            <li className='list__item'>Close to the beach</li>
            <li class="list__item">Breakfast included</li>
            <li class="list__item">Free airport shuttle</li>
            <li class="list__item">Free wifi in all rooms</li>
            <li class="list__item">Air conditioning and heating</li>
            <li class="list__item">Pets allowed</li>
            <li class="list__item">We speak all languages</li>
            <li class="list__item">Perfect for families</li>
          </ul>
          <div class="recommend">
            <p class="recommend__count">
                Lucy and 3 other friends recommend this hotel.
            </p>
            <div class="recommend__friends">
              <img src={User2} alt="Friend 1" class="recommend__photo" />
              <img src={User3} alt="Friend 2" class="recommend__photo" />
              <img src={User4} alt="Friend 3" class="recommend__photo" />
              <img src={User5} alt="Friend 4" class="recommend__photo" />
            </div>
          </div>
        </div>
        <div className='user-reviews'>
          <figure class="review">
              <blockquote class="review__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
              </blockquote>
              <figcaption class="review__user">
                  <img src={User6} alt="User 1" class="review__photo" />
                  <div class="review__user-box">
                      <p class="review__user-name">Nick Smith</p>
                      <p class="review__user-date">Feb 23rd, 2017</p>
                  </div>
                  <div class="review__rating">7.8</div>
              </figcaption>
          </figure>

          <figure class="review">
              <blockquote class="review__text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.
              </blockquote>
              <figcaption class="review__user">
                  <img src={User7} alt="User 1" class="review__photo" />
                  <div class="review__user-box">
                      <p class="review__user-name">Mary Thomas</p>
                      <p class="review__user-date">Sept 13th, 2017</p>
                  </div>
                  <div class="review__rating">9.3</div>
              </figcaption>
          </figure>

          <button class="btn-inline">Show all <span>&rarr;</span></button>
        </div>

      </div>
      
        <div class="cta">
          <h2 class="cta__book-now">
              Good news! We have 4 free rooms for your selected dates!
          </h2>
          <button class="btn">
              <span class="btn__visible">Book now</span>
              <span class="btn__invisible">Only 4 rooms left</span>
          </button>
        </div>
    </div>
  )
}

export default MainContent
