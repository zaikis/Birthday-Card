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
          <div className="inside-text">
            <h3 className="happy">HAPPY</h3>
            <h2 className="bday">BIRTHDAY</h2>
            <h3 className="toyou">EVELINA!</h3>
          </div>
          <div className="wishes">
            <p>
              Σας Προσκαλώ στο παρτυ των γενεθλίων μου το Σάββατο 17 Δεκεμβρίου
              2023 και ώρα 6μ.μ απένατι από το σπιτι μου στην Pizza Πακέτο.
            </p>
            <p className="name">EVELINA</p>
          </div>
        </div>
      </div>
  );
}
export default Card;


