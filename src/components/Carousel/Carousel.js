import slides from "../../tempMedia/slides";

const Carousel = (props) => {
  const renderSlides = () => {
    return slides.map((cat) => {
      return (
        <div key={cat.id}>
          <h3>{cat.title}</h3>
          <img
            src={cat.img}
            alt=""
            style={{ height: "240px", width: "320px" }}
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
      {renderSlides()}
    </div>
  );
};

export default Carousel;

// * array of objects
// *{image,title,id,description}
