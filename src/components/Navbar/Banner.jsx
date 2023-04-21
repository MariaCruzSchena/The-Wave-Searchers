const Banner = ({ greeting }) => {
  return (
    <div className="imgContainer">
      <div className="titleContainer">
        <h2 className="title">{greeting}</h2>
      </div>
    </div>
  );
};

export default Banner;
