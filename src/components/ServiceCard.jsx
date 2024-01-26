const ServiceCard = ({ img, name, price, details }) => {
  return (
    <div className="card w-full text-center bg-base-100 ">
      <figure className="px-10 pt-10">
        <img src={img} alt={name} className="rounded-full w-16 h-16" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p className="pink ">${price}</p>
        <p>{details.slice(0, 80)} ....</p>
      </div>
    </div>
  );
};

export default ServiceCard;
