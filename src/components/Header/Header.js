import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Header({theme, toggleTheme}) {
  // Toggle Menu
  const [Toggle, showMenu] = useState(false);

  const headerSection = [
    { to: "#home", icon: "uil-estate", label: "Home" },
    { to: "#about", icon: "uil-user", label: "Tóm tắt" },
    { to: "#skills", icon: "uil-file-alt", label: "Kĩ năng" },
    { to: "#services", icon: "uil-briefcase-alt", label: "Dịch vụ" },
    { to: "#portfolio", icon: "uil-scenery", label: "Sản phẩm" },
    { to: "#contact", icon: "uil-message", label: "Liên hệ" },
  ]

  const [activeHash, setActiveHash] = useState("");

  // Lắng nghe sự thay đổi của hash trong URL
  useEffect(() => {
    const handleHashChange = () => setActiveHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);

    // Thiết lập hash ban đầu
    setActiveHash(window.location.hash);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <header className={cx("header")}>
      <nav className={cx("nav", "container")}>
        <NavLink to="#home" className={cx("nav__logo")}>
          Trần Ánh Dương
        </NavLink>
        <div className={cx('nav__container')}>
          <div className={cx('nav__theme')}
            onClick={() => toggleTheme()}
          >
            {theme ? (<i className={cx('uil', 'uil-sun')}></i>) :
            (
              <i className={cx('uil', 'uil-moon')}></i>
            )}
          </div>
          <div className={cx("nav__menu", {'show-menu': Toggle})}>
            <ul className={cx("grid", "nav__list")}>
              {headerSection.map((item, index) => (
                <li key={index} className={cx("nav__item")}>
                  <a
                    href={item.to}
                    className={cx("nav__link", {
                      active: activeHash === item.to,
                    })}
                  >
                    <i className={cx("uil", item.icon, "nav__icon")}></i>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <i onClick={()=> showMenu(!Toggle)} className={cx("uil", "uil-times", "nav__close")} />
          </div>
          <div onClick={() => showMenu(!Toggle)} className={cx("nav__toggle")}>
            <i className={cx("uil", "uil-apps")}></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
