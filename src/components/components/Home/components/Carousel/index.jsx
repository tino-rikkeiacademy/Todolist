const Carousel = () => {
  return (
    <div className="relative">
      <img
        className="w-full h-[500px]"
        src="https://www.shutterstock.com/image-photo/makeup-professional-cosmetics-on-pink-260nw-1398700589.jpg"
        alt="not found"
      />
      <div className="absolute top-[30%] left-[10%] w-[400px]">
        <p className=" text-5xl font-parisienne">Beauty Kit</p>
        <p className="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          provident nostrum animi id sunt quo nesciunt placeat officia,
          accusamus sit distinctio rem. Veritatis asperiores quasi minima enim
          perferendis ipsam sint!
        </p>
        <button className=" uppercase bg-black text-white w-40 h-8 mt-2 rounded-lg">Buy Now</button>
      </div>
    </div>
  );
};

export default Carousel;
