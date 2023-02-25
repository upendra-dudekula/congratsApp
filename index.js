const element = (
  <div className="bg-container">
    <h1 className="heading">Congratulations</h1>
    <div className="details-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="img-dims"
      />
      <h1 className="name">Kiran</h1>
      <p className="para">
        Vishnu Institute of Computer Education and Technology
      </p>
      <p className="para">Bhimavaram</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="img-dims"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
