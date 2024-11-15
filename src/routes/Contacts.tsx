import { ourShops } from "../contants";
import { YMaps, Map } from "@pbe/react-yandex-maps";
const Contacts = () => {
  return (
    <div className="mt-12 container ">
      <h2 className="text-5xl lg:text-[80px] font-bold ">Контакты</h2>
      <div className="flex flex-col md:flex-row items-stretch gap-7 h-[600px] min-h-[600px] md:h-[1080px] mt-10">
        {/* LEFT */}
        <div className="h-full overflow-y-auto scrollbar min-w-[300px] lg:min-w-[595px] grid gap-8">
          {ourShops.map((shop, index) => (
            <div
              className="grid gap-3 bg-grey-light pt-3 lg:pt-8 pb-3 lg:pb-7 px-4 lg:px-16"
              key={index}
            >
              <p className="text-grey">{shop.type}</p>
              <p className="font-bold">{shop.address}</p>
              <a
                className="text-pink hover:underline max-w-fit"
                href={shop.web}
              >
                {shop.web.split("https://")[1]}
              </a>
              <a
                className="text-pink hover:underline max-w-fit"
                href={`mailto:${shop.email}`}
              >
                {shop.email}
              </a>
              <a className="text-lg max-w-fit" href={`tel:${shop.phone}`}>
                {shop.phone}
              </a>
            </div>
          ))}
        </div>
        {/* RIGHT */}
        <div className="w-full h-full">
          <YMaps>
            <div className="w-full h-full">
              <Map
                defaultState={{ center: [56.833279, 60.599792], zoom: 15 }}
                width={"100%"}
                height={"100%"}
              />
            </div>
          </YMaps>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
