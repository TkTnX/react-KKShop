import { Link, useLocation } from "react-router-dom";
import { useOrderStore } from "../store/useOrderStore";
import { useEffect, useState } from "react";
import { OrderType } from "../types";
import { useUserStore } from "../store/useUserStore";

const Order = () => {
  const [order, setOrder] = useState<OrderType | null>(null);
  const currentUser = useUserStore((state) => state.currentUser);
  const { fetchOneOrder, loading, error } = useOrderStore();
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchOrder = async () => {
      const order = await fetchOneOrder(id);
      setOrder(order);
    };
    fetchOrder();
  }, [id]);

  if (loading)
    return <p className="text-pink text-center text-lg">Загрузка...</p>;

  if (!order || !currentUser || (currentUser.id !== order.userId && !loading))
    return (
      <div className="container text-center mt-32">
        <p className="text-pink text-lg">
          Заказ не найден или у вас нет доступа к этому заказу
        </p>
        <Link to="/">Вернуться на главную</Link>
      </div>
    );


  return (
    <div className="container mt-10">
      <h2 className="text-5xl xl:text-9xl font-bold">Заказ #{order.id}</h2>
      <div className="flex gap-4 items-center max-w-[600px] overflow-x-auto scrollbar">
        {order.products.map((product) => (
          <div className="min-w-[300px] flex items-center gap-4">
            <img className="w-[100px] h-[100px] object-cover" src={product.img} alt={product.title} />
            <div>
              <p>{product.title}</p>
              <span className="text-pink">x {product.count}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
