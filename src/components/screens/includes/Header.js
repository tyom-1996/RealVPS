import React, { useState, useEffect, useRef } from 'react';
import '../../../assets/css/header_style.css';
import {Link} from "react-router-dom";
import telegram_icon from '../../../assets/svg/telegram_icon.svg'
import logo from '../../../assets/svg/logo.svg'
import logoutIcon from '../../../assets/svg/logout_icon.svg'



export default function Header(props) {
    const [headerScroll, setHeaderScroll] = useState(false);


    const [show_mobile_menu, setShowMobileMenu] = useState(false);


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

    const logout = () => {

        let token = localStorage.getItem('token');
        let AuthStr = 'Bearer '+ token;

        let myHeaders = new Headers();
        myHeaders.append("Authorization", AuthStr);

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://realvps.justcode.am/api/logout", requestOptions)
            .then(response => response.json())
            .then(result =>
                {
                    if (result?.status === true) {
                         if (result?.message == 'Logouted') {
                              localStorage.removeItem('token')
                         }
                    }
                    console.log(result)

                }

            )
            .catch(error => console.log('error', error));
    }


    return (
        <>

            <div  className='header'>
                <div className='header_wrapper'>
                    <a href='' className='header_logo_link'>
                        <img src={logo} alt=""/>
                    </a>
                    <div className='headers_navigation_links_wrapper'>
                        <Link to={'/'} className={pathName() === '/' ? 'active' : 'headers_navigation_link'}>
                            Главная
                        </Link>
                        <Link to={'/providers'}  className={pathName() === '/providers' ? 'active' : 'headers_navigation_link'}>
                            Провайдеры
                        </Link>
                        <Link to={'/faq'}  className={pathName() === '/faq' ? 'active' : 'headers_navigation_link'}>
                            FAQ
                        </Link>

                        <Link to={'/aboutProject'} className={pathName() === '/aboutProject' ? 'active' : 'headers_navigation_link'}>
                            О Проекте
                        </Link>
                    </div>
                    <div className='header_telegram_link_wrapper'>
                        <a href="" className='header_telegram_link'>
                            <span className='header_telegram_link_icon'>
                                <img src={telegram_icon} alt=""/>
                            </span>
                            <span className='header_telegram_link_title'>Телеграм канал</span>
                        </a>
                        <button
                            className='logout_btn'
                            onClick={() => {
                                logout()
                            }}
                        >
                            <img src={logoutIcon} alt=""/>
                        </button>
                        <button className="header_hamburger_menu"
                                onClick={() => {
                                    setShowMobileMenu(true)
                                    disableBodyScroll()
                                }}
                        >
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23 10L7 10" stroke="#528DFF" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M23 15L7 15" stroke="#528DFF" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M23 20L7 20" stroke="#528DFF" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>

                        </button>
                    </div>
                </div>
            </div>

            {show_mobile_menu &&
                <div className='mobile_menu_popup'>
                    <div className='mobile_menu_popup_wrapper'>
                        <button className='mobile_menu_close_btn'
                                onClick={() => {
                                    setShowMobileMenu(false)
                                    enableBodyScroll()
                                }}
                        >
                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.2988 24.1992L11.0995 10.9999" stroke="#528DFF" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M24.1992 11L10.9999 24.1993" stroke="#528DFF" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                        </button>
                        <div className='mobile_headers_navigation_links_wrapper'>
                            <Link to={'/'} className={pathName() === '/' ? 'active' : 'headers_navigation_link'}>
                                Главная
                            </Link>
                            <Link to={'/providers'}  className={pathName() === '/providers' ? 'active' : 'headers_navigation_link'}>
                                Провайдеры
                            </Link>
                            <Link to={'/faq'}  className={pathName() === '/faq' ? 'active' : 'headers_navigation_link'}>
                                FAQ
                            </Link>

                            <Link to={'/aboutProject'} className={pathName() === '/aboutProject' ? 'active' : 'headers_navigation_link'}>
                                О Проекте
                            </Link>
                        </div>
                        <div className='mobile_header_telegram_link_wrapper'>
                            <a href='' className='header_logo_link mobile_header_logo_link'>
                                <img src={logo} alt=""/>
                            </a>
                            <a href="" className='header_telegram_link'>
                            <span className='header_telegram_link_icon'>
                                <img src={telegram_icon} alt=""/>
                            </span>
                                <span className='header_telegram_link_title'>Телеграм канал</span>
                            </a>
                        </div>
                    </div>
                </div>
            }



        </>
    );
}
