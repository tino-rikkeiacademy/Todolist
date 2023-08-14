/* eslint-disable react/prop-types */
// import DeleteIcon from "@mui/icons-material/Delete";
const CardItem = ({ item, onDelete }) => {
  return (
    <div>
      <div className="group relative  cursor-pointer" onClick={onDelete}>
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src={item.img}
            alt="Front of men's Basic Tee in black."
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <span aria-hidden="true" className="absolute inset-0" />
              {item.name}
            </h3>
            <p className="mt-1 text-sm text-gray-500">{item.color}</p>
          </div>
          <p className="text-sm font-medium text-gray-900 cursor-pointer">
            ${item.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
