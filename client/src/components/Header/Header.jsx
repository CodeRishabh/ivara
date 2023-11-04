import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import {BiMenu} from "react-icons/bi";
import "./Header.scss";
import Search from "./Search/Search";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";
import MobileNav from "../MobileNav/MobileNav";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [searchModal, setSearchModal] = useState(false);
    const [mobileNavbar, setMobileNavbar] = useState(false);
    const navigate = useNavigate();
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    const { cartCount, showCart, setShowCart } = useContext(Context);

    return (
        <>
            <header
                className={`main-header ${scrolled ? "sticky-header" : ""}`}
            >
                <div className="header-content">
                    <ul className="left">
                        <li onClick={() => navigate("/")}>Home</li>
                        <li onClick={() => navigate("/category/1")}>Men</li>
                        <li onClick={() => navigate("/category/2")}>Women</li>
                        <li onClick={() => navigate("/category/3")}>Samples</li>
                        <li onClick={() => navigate("/about")}>About Us</li>
                    </ul>
                    <div className="center" onClick={() => navigate("/")}>
                        <BiMenu className="mobile-nav" onClick={() => setMobileNavbar(true)}/>
                        IVARA
                    </div>
                    <div className="right">
                        <TbSearch onClick={() => setSearchModal(true)} />
                        <span
                            className="cart-icon"
                            onClick={() => setShowCart(true)}
                        >
                            <CgShoppingCart />
                            {!!cartCount && <span>{cartCount}</span>}
                        </span>
                    </div>
                </div>
            </header>
            {searchModal && <Search setSearchModal={setSearchModal} />}
            {showCart && <Cart />}
            {mobileNavbar && <MobileNav setMobileNavbar={setMobileNavbar}/>}
        </>
    );
};

export default Header;
