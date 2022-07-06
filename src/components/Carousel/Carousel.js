import slides from "../../tempMedia/slides";

console.log(slides);

const Carousel = (props) => {
  const renderSlides = () => {
    return slides.map((cat) => {
      return (
        <div key={cat.id}>
          <h3>{cat.title}</h3>
          <img
            src={cat.img}
            alt=""
            style={{ height: "60px", width: "80px" }}
          ></img>
          <p>{cat.description}</p>
        </div>
      );
    });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "400px",
        gap: "10px",
      }}
    >
      <p>I'm gonna be a carousel when i grow up!</p>
      {renderSlides()}
    </div>
  );
};

export default Carousel;

// * array of objects
// *{image,title,id,description}
