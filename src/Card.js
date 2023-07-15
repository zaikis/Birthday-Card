function Card() {
  return (
    <div className="birthdayCard">
      <div className="cardFront">
        <div className="front-text">
          <h3 className="happy">HAPPY</h3>
          <h2 className="bday">BIRTHDAY</h2>
          <h3 className="toyou">EVELINA!</h3>
        </div>
        <div className="wrap-deco">
          <div className="decorations"></div>
          <div className="decorationsTwo"></div>
        </div>
        <div className="wrap-decoTwo">
          <div className="decorations"></div>
          <div className="decorationsThree"></div>
        </div>
        <div className="plate">
          <div className="cake"></div>
          <div className="flame"></div>
          <div className="flam"></div>
        </div>
      </div>

      <div className="cardInside">
        {/* <div className="inside-text">
          <h3 className="happy">HAPPY</h3>
          <h2 className="bday">BIRTHDAY</h2>
          <h3 className="toyou">EVELINA!</h3>
        </div>
        <div className="wishes"> */}

        <p>
          Σας Προσκαλώ στο παρτυ των γενεθλίων μου το Σάββατο 17 Δεκεμβρίου 2023
          και ώρα 6μ.μ απένατι από το σπιτι μου στην Pizza Πακέτο.
        </p>
        <p className="name">EVELINA</p>
        <svg class="heart" viewBox="0 0 32 29.6">
          <path
            d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
          />
        </svg>
      </div>
    </div>
    // </div>
  );
}
export default Card;


