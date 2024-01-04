/* eslint-disable react/prop-types */
const PopularItem = ({ item }) => {
  return (
    <div className="card w-80 h-full shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={item.image}
          alt="Shoes"
          className="rounded-xl w-32 h-44 object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{item.title}</h2>
        <p className="py-2">{item.price}$</p>
        <div className="card-actions">
          <button className="btn text-white bg-red-500">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default PopularItem;
