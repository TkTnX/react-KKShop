import { Link } from "react-router-dom";
import { footerNavigation, socials } from "../contants";

const Footer = () => {
  return (
    <footer className="container mt-[77px] pb-6">
      {/* TOP */}
      <div className="grid grid-cols-1 text-center vsm:text-left vsm:grid-cols-2 sm:grid-cols-3 gap-4 lg:flex items-start justify-between">
        {/* SECTION 1 */}
        <div className="grid gap-4">
          <Link className="flex justify-center vsm:justify-start" to="/">
            <img src="/logo.png" alt="LOGO" />
          </Link>
          <a className="text-xl font-bold text-grey" href="tel:84952592500">
            8 495 259 25 00{" "}
          </a>
          <a
            className="text-xl font-bold text-grey"
            href="mailto:Sale@kkshop.ru"
          >
            Sale@kkshop.ru
          </a>
          <p className="text-grey">Москва, ул. Шаболовка, д. 34, стр. 7</p>
        </div>

        {/* SECTION 2, 3 */}
        {footerNavigation.map((item) => (
          <div>
            <h4 className="text-xl">{item.title}</h4>
            <ul className="flex flex-col gap-3 mt-3">
              {item.items.map((item) => {
                if (typeof item === "string") {
                  return (
                    <li
                      className="text-[#4e4e4e] text-sm hover:opacity-80"
                      key={item}
                    >
                      <Link to="/catalog">{item}</Link>
                    </li>
                  );
                } else {
                  return item.link ? (
                    <li key={item.link}>
                      <Link
                        className="text-[#4e4e4e] text-sm hover:opacity-80"
                        to={item.link}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ) : (
                    <li className="text-[#4e4e4e] text-sm hover:opacity-80">
                      {item.name}
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        ))}

        {/* SECTION 4 */}

        <div>
          <h4 className="text-xl">Мы в социальных сетях</h4>
          <ul className="flex gap-2 items-center mt-3">
            {socials.map((social) => (
              <li className="opacity-50 hover:opacity-100" key={social}>
                <a href="#!">
                  <img src={social} alt={social} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="text-grey flex lg:items-center justify-between mt-14 sm:text-sm flex-col items-start gap-2 lg:gap-0 lg:flex-row text-xs">
        <div>
          <p>ООО «Шармира»</p>
          <p>
            ОГРН <span className="text-black">1167746492704</span>
          </p>
          <p>KK Shop © Москва 2021 Все права защищены.</p>
        </div>
        <p className="max-w-[700px] ">
          Все торговые марки принадлежат их владельцам. Копирование составляющих
          частей сайта в какой бы то ни было форме без разрешения владельца
          авторских прав запрещено.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
