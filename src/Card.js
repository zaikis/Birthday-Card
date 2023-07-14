function Card() {
  return (
    <div className="birthdayCard">
      <div className="cardFront">
        <div className="cake"></div>
        <h3 className="happy">HAPPY BIRTHDAY EVELINA!</h3>
        <div>
          <h1 className="heart">
            <svg className="heart" viewBox="0 0 32 29.6">
              <path
                d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
                c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
              />
            </svg>
          </h1>
        </div>
      </div>

      <div className="cardInside">
        <h3 className="back">HAPPY BIRTHDAY EVELINA!</h3>
        <p>
          Σας Προσκαλώ στο παρτυ των γενεθλίων μου το Σάββατο 17 Δεκεμβρίου 2023
          και ώρα 6μ.μ απένατι από το σπιτι μου στην Pizza Πακέτο.
        </p>
        <p className="name">EVELINA</p>
      </div>
    </div>
  );
}

export default Card;
