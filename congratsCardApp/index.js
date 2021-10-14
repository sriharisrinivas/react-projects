const element = (
  <div className="congrats-container">
    <h1 className="heading">Congratulations</h1>
    <div className="inner-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="profile"
      />
      <h1 className="name">K.Rahul</h1>
      <p className="para">
        Vishnu Institute of Computer Education and Technology, Rajahmundry
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="profile"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
