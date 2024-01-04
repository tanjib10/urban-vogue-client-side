import { useEffect, useState } from "react";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import PopularItem from "./popularItem";

const PopularItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("popular.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div>
      <SectionTitle heading="Order Now"></SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-3 max-w-screen-lg mx-auto">
        {items.map((item) => (
          <PopularItem key={item.id} item={item}></PopularItem>
        ))}
      </div>
    </div>
  );
};

export default PopularItems;
