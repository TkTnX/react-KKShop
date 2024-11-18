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
      <h3 className="font-bold text-xl sm:text-3xl my-10">
        <span className="text-pink">Спасибо!</span>
        <br />
        Ваш заказ успешно оформлен!
      </h3>
      <div className="flex justify-between items-start gap-10 flex-col lg:flex-row">
        {/* LEFT */}
        <div className="flex gap-4 items-center mx-auto max-w-[250px] vsm:mx-0 vsm:max-w-[300px] md:max-w-[600px] overflow-x-auto scrollbar mt-4">
          {order.products.map((product) => (
            <div key={product.id} className="min-w-[150px] sm:min-w-[300px] flex flex-col sm:flex-row items-center gap-4">
              <img
                className="w-[100px] h-[100px] object-cover"
                src={product.img}
                alt={product.title}
              />
              <div>
                <p>{product.title}</p>
                <span className="text-pink">x {product.count}</span>
              </div>
            </div>
          ))}
        </div>
        {/* RIGHT */}
        <div className="w-full sm:w-auto">
          <h3 className="font-bold text-xl sm:text-3xl">Информация о заказе:</h3>
          <div className="mt-4 grid gap-2">
            <div className="flex items-center justify-between relative">
              <p>Имя:</p>
              <span className="text-pink">{currentUser.name}</span>
            </div>
            <div className="flex items-center justify-between relative">
              <p>Почта:</p>
              <span className="text-pink">{currentUser.email}</span>
            </div>
            <div className="flex items-center justify-between relative">
              <p>Телефон:</p>
              <span className="text-pink">{currentUser.phoneNumber}</span>
            </div>
            <div className="flex items-center justify-between relative">
              <p>Адрес:</p>
              <span className="text-pink">{order.address}</span>
            </div>
            <div className="flex items-center justify-between relative">
              <p>Способ доставки:</p>
              <span className="text-pink">{order.deliveryType}</span>
            </div>
            <div className="flex items-center justify-between relative">
              <p>Способ оплаты:</p>
              <span className="text-pink">{order.paymentType}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
