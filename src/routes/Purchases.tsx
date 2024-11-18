import { useEffect, useState } from "react";
import { useUserStore } from "../store/useUserStore";
import { useOrderStore } from "../store/useOrderStore";
import { OrderType } from "../types";
import { Link } from "react-router-dom";

const Purchases = () => {
  const currentUser = useUserStore((state) => state.currentUser);
  const [orders, setOrders] = useState<OrderType[]>([]);
  const { fetchUserOrders, loading, error } = useOrderStore();

  useEffect(() => {
    if (!currentUser.id) return setOrders([]);
    const fetchOrders = async () => {
      const orders = await fetchUserOrders(currentUser.id || 0);
      setOrders(orders);
    };

    fetchOrders();
  }, [currentUser]);

  if (loading) return <p className="text-pink">Загрузка...</p>;
  if (error) return <p className="text-pink">Что-то пошло не так</p>;
  return (
    <>
      <h2 className="text-5xl md:text-8xl 5xl:text-9xl font-bold ">
        Мои покупки
      </h2>
      {orders.length === 0 && !loading && (
        <p className="text-2xl mt-10">Нет заказов</p>
      )}
      <div className="grid gap-3 mt-4 w-full">
        {orders.map((order) => (
          <Link
            className="border border-grey rounded-sm flex items-center justify-between p-2"
            to={`/order/${order.id}`}
            key={order.id}
          >
            <div>
              <p className="font-bold text-2xl">#{order.id}</p>
              <p>{order.time}</p>
              <p>{order.address}</p>
            </div>
            <div className="max-w-20">
              <img src={order.products[0].img} alt={order.products[0].title} />
              {order.products.length - 1 > 0 && (
                <p className="text-xs text-pink">
                  {order.products.length - 1} ещё
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Purchases;
