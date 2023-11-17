import React, { useState, useEffect, useRef } from 'react';
import '../../../assets/css/footer_style.css';
import {Link} from "react-router-dom";
import telegram_icon from '../../../assets/svg/telegram_footer_icon.svg'
import logo from '../../../assets/svg/logo.svg'



export default function Footer (props) {
    const [headerScroll, setHeaderScroll] = useState(false);
    const [show_mobile_menu, setShowMobileMenu] = useState(false);
    const [show_header_menu, setShowHeaderMenu] = useState(false);

    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }


        window.addEventListener('load', handleLoad);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('load', handleLoad);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLoad = () => {};

    const handleScroll = (ev) => {
        const scrollTop = window.scrollY;

        if (scrollTop > 0) {
            setHeaderScroll(true);
        } else {
            setHeaderScroll(false);
        }
    };
    const disableBodyScroll = () => {
        document.body.style.overflow = "hidden";
    };

    const enableBodyScroll = () => {
        document.body.style.overflow = "auto";
    };

    const  pathName = () => {
        let name = window.location.pathname;
        console.log(name, 'nameee')
        return name
    }



    return (
        <>

            <div  className='footer'>
                <div className='footer_wrapper'>
                    <div className='footer_first_item'>
                            <a href='' className='footer_logo_link'>
                                <img src={logo} alt=""/>
                            </a>
                            <div className='footer_navigation_links_wrapper'>
                                <Link to={'/'} className="footer_navigation_link">
                                    О нас
                                </Link>
                                <Link to={'/'} className="footer_navigation_link">
                                    Контакты
                                </Link>
                        </div>

                    </div>
                    <div className='footer_second_item'>
                       <div className='footer_telegram_link_info_wrapper'>
                           <span className='footer_telegram_link_info'>2023 RealVPS.ru </span>
                           <a href="" className='footer_telegram_link'>
                               <img src={telegram_icon} alt=""/>
                           </a>
                       </div>
                        <div className='footer_terms_of_use_privacy_policy_links_wrapper'>
                            <a href="" className='footer_terms_of_use_link'>Пользовательское соглашение</a>
                            <a href="" className='footer_privacy_policy_link'>Политика конфиденциальности</a>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}
