import { ChevronDown } from "lucide-react";
import { Button } from "../../ui/button";
import { useState } from "react";
import { cn } from "../../../lib/utils";

const OrderLeft = () => {
  const [openedAccordeons, setOpenedAccordeons] = useState<number[]>([]);

  const handleToggleAccordeon = (id: number) => {
    if (openedAccordeons.includes(id)) {
      setOpenedAccordeons(
        openedAccordeons.filter((accordeonId) => accordeonId !== id)
      );
    } else {
      setOpenedAccordeons([...openedAccordeons, id]);
    }
  };

  return (
    <div className="w-1/2 flex flex-col gap-14 ">
      {/* 1/3 */}
      <div>
        <div className=" flex items-start gap-10 group ">
          <p className="text-3xl text-grey group-hover:text-black duration-150">
            1/3
          </p>
          <button
            onClick={() => handleToggleAccordeon(1)}
            className="text-left w-full border-b border-b-grey-light pb-4"
          >
            <div>
              <div className="flex items-center justify-between w-full ">
                <h4 className="text-3xl font-medium text-grey group-hover:text-black duration-150">
                  Адрес и доставка
                </h4>{" "}
                <ChevronDown color="#585858" />
              </div>
              <p className="text-sm text-grey opacity-0 group-hover:opacity-100 duration-150">
                Выбрать способ доставки
              </p>
            </div>
          </button>
        </div>
        {/* 1/3 ACCORDEON */}
        <div
          className={cn("duration-300 mt-5", {
            "max-h-0 overflow-hidden opacity-0": !openedAccordeons.includes(1),
            "max-h-[1000px] overflow-visible opacity-100": openedAccordeons.includes(1),
          })}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi dolor
          excepturi aliquid modi quod facilis nemo iusto, vel corrupti possimus!
          Officia soluta ratione consectetur! Eveniet sunt quasi officia
          laboriosam. Consequatur beatae nisi illum cumque ullam eos expedita
          provident iusto quas sed quia doloremque nesciunt eligendi dignissimos
          sequi facilis? Maiores explicabo dolor nam dolorum sed accusantium
          facilis quaerat, porro ex repudiandae error officia. Similique optio
          non sunt maxime sed aliquam error ratione perspiciatis dolorum
          officiis explicabo sit doloremque beatae repellendus alias, omnis
          dignissimos doloribus voluptate rerum qui nesciunt velit quo. Minima
          est laborum aliquam nulla alias animi iure consequatur quas,
          perspiciatis autem sequi quibusdam sit corrupti soluta repellat minus
          quod odit eius eos qui eaque cum. Quam nesciunt ad ullam consectetur
          quas, ipsum debitis, cum sint qui deleniti veniam voluptatibus animi,
          tempora ab molestiae id expedita reiciendis repudiandae totam enim.
          Quisquam, ad fugit. Architecto inventore animi mollitia quaerat illum
          quae praesentium temporibus tenetur quisquam officiis corporis,
          aspernatur quo, rerum dicta nesciunt eaque fugiat vero reiciendis sed
          ea repudiandae dolorem alias nostrum asperiores? Totam doloremque
          atque quo fugit fugiat nulla reiciendis nobis delectus et temporibus
          eligendi deserunt, aut iure earum enim nihil itaque ea? Dolorum
          numquam, sit voluptates doloribus cumque eaque accusantium iste
          aspernatur id deleniti sequi eligendi ad assumenda nulla, vero nisi
          nemo error similique? Itaque eius explicabo quam, libero, pariatur in
          distinctio soluta necessitatibus porro quibusdam perferendis numquam
          quae. Nisi quas atque qui ratione enim quae corporis repellat, a, cum
          rem blanditiis. Blanditiis repellendus iste a labore cumque, sapiente
          beatae veniam nihil tenetur adipisci tempore, officiis animi eveniet
          dolores. Doloremque aspernatur cum eos pariatur? Obcaecati provident
          quo error placeat est quia doloribus, at consequuntur? Totam
          molestiae, doloremque fugiat eius assumenda ea ut nihil reiciendis
          expedita vel dicta nostrum commodi placeat cumque hic nulla explicabo
          sunt eveniet? Dolorum commodi ex odio? Doloribus, reprehenderit! Ipsam
          hic iusto ullam cumque quaerat? Enim animi aperiam ratione repellat
          doloremque reiciendis temporibus voluptate.
        </div>
      </div>
      {/* 2/3 */}
      <div>
        <div className=" flex items-start gap-10 group ">
          <p className="text-3xl text-grey group-hover:text-black duration-150">
            2/3
          </p>
          <button className="text-left w-full border-b border-b-grey-light pb-4">
            <div>
              <div className="flex items-center justify-between w-full ">
                <h4 className="text-3xl font-medium text-grey group-hover:text-black duration-150">
                  Получатель
                </h4>{" "}
                <ChevronDown color="#585858" />
              </div>
              <p className="text-sm text-grey opacity-0 group-hover:opacity-100 duration-150">
                Данные о получателе
              </p>
            </div>
          </button>
        </div>
      </div>
      {/* 3/3 */}
      <div>
        <div className=" flex items-start gap-10 group ">
          <p className="text-3xl text-grey group-hover:text-black duration-150">
            3/3
          </p>
          <button className="text-left w-full border-b border-b-grey-light pb-4">
            <div>
              <div className="flex items-center justify-between w-full ">
                <h4 className="text-3xl font-medium text-grey group-hover:text-black duration-150">
                  Оплата
                </h4>{" "}
                <ChevronDown color="#585858" />
              </div>
              <p className="text-sm text-grey opacity-0 group-hover:opacity-100 duration-150">
                Выбрать способ оплаты
              </p>
            </div>
          </button>
        </div>
      </div>

      <Button className="rounded-none text-lg tracking-[0.04em] max-w-[350px] ml-auto w-full">
        Оформить заказ
      </Button>
    </div>
  );
};

export default OrderLeft;
