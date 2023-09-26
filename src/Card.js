function Card() {
  return (
    <div className="birthdayCard">
      <div className="cardFront">
        <button className="button">&gt;</button>
        <button className="button">&lt;</button>
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
          <div className="flame">
            <div className="candle"></div>
            <div className="one">+</div>
            <div className="two">+</div>
            <div className="three">+</div>
          </div>
        </div>
      </div>

      <div className="cardInside">
        <p>
          Σας Προσκαλώ στο πάρτυ των γενεθλίων μου την Κυριακή 17 Δεκεμβρίου
          2023 και ώρα 17:30 στον παιδότοπο Πινόκιο 🎉.
        </p>
        <p className="name">EVELINA🩷️</p>
      </div>
    </div>
  );
}
export default Card;



