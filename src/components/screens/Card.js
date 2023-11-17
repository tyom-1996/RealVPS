import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/card_style.css';
import Header from "./includes/Header";
import Footer from "./includes/Footer";


export default function Card (props) {
    const [headerScroll, setHeaderScroll] = useState(false);
    const [show_login_popup, setShowLoginPopup] = useState(false);
    const [login_email, setLoginEmail] = useState('');
    const [login_email_error, setLoginEmailError] = useState(false);
    const [login_email_error_text, setLoginEmailErrorText] = useState('');

    const [login_password, setLoginPassword] = useState('');
    const [login_password_error, setLoginPasswordError] = useState(false);
    const [login_password_error_text, setLoginPasswordErrorText] = useState('');

    const [show_recovery_account_mail_popup, setShowRecoveryAccountMailPopup] = useState(false);
    const [recovery_account_mail, setRecoveryAccountMail] = useState('');
    const [recovery_account_mail_error, setRecoveryAccountMailError] = useState(false);
    const [recovery_account_mail_error_text, setRecoveryAccountMailErrorText] = useState('');

    const [show_recovery_account_code_popup, setShowRecoveryAccountCodePopup] = useState(false);
    const [recovery_account_code, setRecoveryAccountCode] = useState('');
    const [recovery_account_code_error, setRecoveryAccountCodeError] = useState(false);
    const [recovery_account_code_error_text, setRecoveryAccountCodeErrorText] = useState('');

    const [show_recovery_account_new_password_popup, setShowRecoveryAccountNewPasswordPopup] = useState(false)
    const [recovery_account_new_password, setRecoveryAccountNewPassword] = useState('');
    const [recovery_account_new_password_error, setRecoveryAccountNewPasswordError] = useState(false);
    const [recovery_account_new_password_error_text, setRecoveryAccountNewPasswordErrorText] = useState('');

    const [recovery_account_confirm_password, setRecoveryAccountConfirmPassword] = useState('');
    const [recovery_account_confirm_password_error, setRecoveryAccountConfirmPasswordError] = useState(false);
    const [recovery_account_confirm_password_error_text, setRecoveryAccountConfirmPasswordErrorText] = useState('');

    const [show_registration_popup, setRegistrationPopup] = useState(false);
    const [show_registration_confirmation_popup, setShowRegistrationConfirmationPopup] = useState(false);

    const [register_name, setRegisterName] = useState('');
    const [register_name_error, setRegisterNameError] = useState(false);
    const [register_name_error_text, setRegisterNameErrorText] = useState('');



    const [register_username, setRegisterUsername] = useState('');
    const [register_username_error, setRegisterUsernameError] = useState(false);
    const [register_username_error_text, setRegisterUsernameErrorText] = useState('');

    const [register_password, setRegisterPassword] = useState('');
    const [register_password_error, setRegisterPasswordError] = useState(false);
    const [register_password_error_text, setRegisterPasswordErrorText] = useState('');

    const [register_confirm_password, setRegisterConfirmPassword] = useState('');
    const [register_confirm_password_error, setRegisterConfirmPasswordError] = useState(false);
    const [register_confirm_password_error_text, setRegisterConfirmPasswordErrorText] = useState('');

    const [registration_confirmation_code, setRegistrationConfirmationCode] = useState('');
    const [registration_confirmation_code_error, setRegistrationConfirmationCodeError] = useState(false);
    const [registration_confirmation_code_error_text, setRegistrationConfirmationCodeErrorText] = useState('');

    const [register_email, setRegisterEmail] = useState('');
    const [register_email_error, setRegisterEmailError] = useState(false);
    const [register_email_error_text, setRegisterEmailErrorText] = useState('');


    const [rates_list, setRatesList] = useState([
        {
            id: 1,
            name: 'Название тарифа',
            info1: '60 gb',
            info2: 'NVMe',
            info3: '32 gb',
            country: 'Москва',
            city: 'Россия',
            number_of_processors: '12',
            cpu_frequency: '12',
            processor_type: 'AMD',
            traffic_amount: 'AMD',
            bandwidth: '100Mbps',
            virtualization: 'OpenVZ',
            ddos_protection: 'Нет',
            payment: 'Нет',
            availability_of_IPv6: 'Да',
            tariff_limitation: 'Нет',
            administration: 'Нет',
            available_OS: 'AMD',
            ISO_download_option: 'Нет',
            data_center: 'Нет',
            price: '450',

        },
        {
            id: 2,
            name: 'Название тарифа',
            info1: '60 gb',
            info2: 'NVMe',
            info3: '32 gb',
            country: 'Москва',
            city: 'Россия',
            number_of_processors: '12',
            cpu_frequency: '12',
            processor_type: 'AMD',
            traffic_amount: 'AMD',
            bandwidth: '100Mbps',
            virtualization: 'OpenVZ',
            ddos_protection: 'Нет',
            payment: 'Нет',
            availability_of_IPv6: 'Да',
            tariff_limitation: 'Нет',
            administration: 'Нет',
            available_OS: 'AMD',
            ISO_download_option: 'Нет',
            data_center: 'Нет',
            price: '450',

        },
        {
            id: 3,
            name: 'Название тарифа',
            info1: '60 gb',
            info2: 'NVMe',
            info3: '32 gb',
            country: 'Москва',
            city: 'Россия',
            number_of_processors: '12',
            cpu_frequency: '12',
            processor_type: 'AMD',
            traffic_amount: 'AMD',
            bandwidth: '100Mbps',
            virtualization: 'OpenVZ',
            ddos_protection: 'Нет',
            payment: 'Нет',
            availability_of_IPv6: 'Да',
            tariff_limitation: 'Нет',
            administration: 'Нет',
            available_OS: 'AMD',
            ISO_download_option: 'Нет',
            data_center: 'Нет',
            price: '450',

        },
        {
            id: 4,
            name: 'Название тарифа',
            info1: '60 gb',
            info2: 'NVMe',
            info3: '32 gb',
            country: 'Москва',
            city: 'Россия',
            number_of_processors: '12',
            cpu_frequency: '12',
            processor_type: 'AMD',
            traffic_amount: 'AMD',
            bandwidth: '100Mbps',
            virtualization: 'OpenVZ',
            ddos_protection: 'Нет',
            payment: 'Нет',
            availability_of_IPv6: 'Да',
            tariff_limitation: 'Нет',
            administration: 'Нет',
            available_OS: 'AMD',
            ISO_download_option: 'Нет',
            data_center: 'Нет',
            price: '450',

        },
        {
            id: 5,
            name: 'Название тарифа',
            info1: '60 gb',
            info2: 'NVMe',
            info3: '32 gb',
            country: 'Москва',
            city: 'Россия',
            number_of_processors: '12',
            cpu_frequency: '12',
            processor_type: 'AMD',
            traffic_amount: 'AMD',
            bandwidth: '100Mbps',
            virtualization: 'OpenVZ',
            ddos_protection: 'Нет',
            payment: 'Нет',
            availability_of_IPv6: 'Да',
            tariff_limitation: 'Нет',
            administration: 'Нет',
            available_OS: 'AMD',
            ISO_download_option: 'Нет',
            data_center: 'Нет',
            price: '450',

        },
        {
            id: 6,
            name: 'Название тарифа',
            info1: '60 gb',
            info2: 'NVMe',
            info3: '32 gb',
            country: 'Москва',
            city: 'Россия',
            number_of_processors: '12',
            cpu_frequency: '12',
            processor_type: 'AMD',
            traffic_amount: 'AMD',
            bandwidth: '100Mbps',
            virtualization: 'OpenVZ',
            ddos_protection: 'Нет',
            payment: 'Нет',
            availability_of_IPv6: 'Да',
            tariff_limitation: 'Нет',
            administration: 'Нет',
            available_OS: 'AMD',
            ISO_download_option: 'Нет',
            data_center: 'Нет',
            price: '450',

        }
    ]);


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



    const handleLoad = () => {
    };

    const handleScroll = (ev) => {
        let scrollTop = window.scrollY;

        if (scrollTop > 0) {
            setHeaderScroll(true);
        } else {
            setHeaderScroll(false);
        }
    };

    const register = () => {
        if (register_name.length == 0 || register_email.length == 0 || register_username.length == 0 || register_password.length == 0 || register_confirm_password.length == 0) {
                if (register_name.length == 0) {
                    setRegisterNameError(true)
                    setRegisterNameErrorText('Поле является обязательным.')
                } else {
                    setRegisterNameError(false)
                    setRegisterNameErrorText('')
                }
                if (register_email.length == 0) {
                    setRegisterEmailError(true)
                    setRegisterEmailErrorText('Поле является обязательным.')
                } else {
                    setRegisterEmailError(false)
                    setRegisterEmailErrorText('')
                }
            if (register_username.length == 0) {
                setRegisterUsernameError(true)
                setRegisterUsernameErrorText('Поле является обязательным.')
            } else {
                setRegisterUsernameError(false)
                setRegisterUsernameErrorText('')
            }
            if (register_password.length == 0) {
                setRegisterPasswordError(true)
                setRegisterPasswordErrorText('Поле является обязательным.')
            } else {
                setRegisterPasswordError(false)
                setRegisterPasswordErrorText('')
            }

            if (register_confirm_password.length == 0) {
                setRegisterConfirmPasswordError(true)
                setRegisterConfirmPasswordErrorText('Поле является обязательным.')
            } else {
                setRegisterConfirmPasswordError(false)
                setRegisterConfirmPasswordErrorText('')
            }

        } else {
            setRegisterNameError(false)
            setRegisterNameErrorText('')
            setRegisterEmailError(false)
            setRegisterEmailErrorText('')
            setRegisterUsernameError(false)
            setRegisterUsernameErrorText('')
            setRegisterPasswordError(false)
            setRegisterPasswordErrorText('')
            setRegisterConfirmPasswordError(false)
            setRegisterConfirmPasswordErrorText('')


            var formdata = new FormData();
            formdata.append("name", register_name);
            formdata.append("email", register_email);
            formdata.append("username", register_username);
            formdata.append("password", register_password);
            formdata.append("password_confirmation", register_confirm_password);

            var requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };

            fetch("https://realvps.justcode.am/api/register", requestOptions)
                .then(response => response.json())
                .then(result => {
                        console.log(result)
                        if (result?.status === true) {
                            if (result?.message == 'User created') {
                                setRegistrationPopup(false)
                                setShowRegistrationConfirmationPopup(true)

                            }
                        } else if (result?.status === false) {

                                if (result?.message?.username[0] == 'The username has already been taken.') {
                                    setRegisterUsernameError(true)
                                    setRegisterUsernameErrorText('Имя пользователя уже занято.')
                                }  else {
                                    setRegisterUsernameError(false)
                                    setRegisterUsernameErrorText('')
                                }


                            if (result?.message?.email == 'The email has already been taken.') {
                                setRegisterEmailError(true)
                                setRegisterEmailErrorText('Электронная почта уже занята.')
                            } else {
                                setRegisterEmailError(false)
                                setRegisterEmailErrorText('')
                            }
                            if (result?.message?.password[0] == 'The password field must be at least 6 characters.') {
                                 setRegisterPasswordError(true)
                                setRegisterPasswordErrorText('Пароль должен быть не менее 6 символов.')
                            } else {
                                setRegisterPasswordError(false)
                                setRegisterPasswordErrorText('')
                            }
                            if (result?.message?.password_confirmation[0] == 'The password confirmation field must match password.') {
                                setRegisterConfirmPasswordError(true)
                                setRegisterConfirmPasswordErrorText('Пароли не совпадают.')
                            } else {
                                setRegisterConfirmPasswordError(false)
                                setRegisterConfirmPasswordErrorText('')
                            }
                        }
                }


                )
                .catch(error => console.log('error', error));
        }




    }
    const confirmRegistration = () => {
        if (registration_confirmation_code.length == 0) {
             setRegistrationConfirmationCodeError(true)
            setRegistrationConfirmationCodeErrorText('Поле является обязательным.')
        } else  {
            setRegistrationConfirmationCodeError(false)
            setRegistrationConfirmationCodeErrorText('')
            let formdata = new FormData();
            formdata.append("email", register_email);
            formdata.append("code", registration_confirmation_code);

            let requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };

            fetch("https://realvps.justcode.am/api/confirm_register", requestOptions)
                .then(response => response.json())
                .then(response =>
                    {
                        if (response?.status === false) {
                             if (response?.message == 'wrong code') {
                                 setRegistrationConfirmationCodeError(true)
                                 setRegistrationConfirmationCodeErrorText('Код неправильный')
                             } else {
                                 setRegistrationConfirmationCodeError(false)
                                 setRegistrationConfirmationCodeErrorText('')
                             }
                        } else if (response?.status === true) {
                                if (response?.message == 'user verified') {
                                    localStorage.setItem('token', response.token)
                                    setShowRegistrationConfirmationPopup(false)
                                    window.location = '/'
                                }
                        }
                        console.log(response, 'confirm register')
                    }

                )
                .catch(error => console.log('error', error));
        }

    }
    const login = () => {
        if (login_email.length == 0 || login_password.length == 0) {
             if (login_email.length == 0) {
                    setLoginEmailError(true)
                    setLoginEmailErrorText('Поле является обязательным.')
             }  else {
                 setLoginEmailError(false)
                 setLoginEmailErrorText('')
             }
            if (login_password.length == 0) {
                setLoginPasswordError(true)
                setLoginPasswordErrorText('Поле является обязательным.')
            }  else {
                setLoginPasswordError(false)
                setLoginPasswordErrorText('')
            }
        } else {
            setLoginEmailError(false)
            setLoginEmailErrorText('')
            setLoginPasswordError(false)
            setLoginPasswordErrorText('')

            let formdata = new FormData();
            formdata.append("email", login_email);
            formdata.append("password", login_password);

            let requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };

            fetch("https://realvps.justcode.am/api/login", requestOptions)
                .then(response => response.json())
                .then(result =>
                    {
                        console.log(result)
                        if (result?.status === false) {
                             if (result?.message == 'wrong email or password') {
                                    setLoginEmailError(true)
                                    setLoginEmailErrorText('Неправильный адрес электронной почты или пароль')
                             } else {
                                 setLoginEmailError(false)
                                 setLoginEmailErrorText('')
                             }
                        } else {
                            localStorage.setItem('token', result.token)
                            setShowLoginPopup(false)
                            window.location('/')
                        }
                    }
                )
                .catch(error => console.log('error', error));
        }

    }

    const recoveryAccountSendCode = () => {
        if (recovery_account_mail.length == 0) {
            setRecoveryAccountMailError(true)
            setRecoveryAccountMailErrorText('Поле является обязательным.')
        } else {
            setRecoveryAccountMailError(false)
            setRecoveryAccountMailErrorText('')

            let formdata = new FormData();
            formdata.append("email", "hakobjanyan.200796@gmail.com");
            formdata.append("password", "123456");

            let requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };

            fetch("https://realvps.justcode.am/api/send_code_from_forgot_password", requestOptions)
                .then(response => response.json())
                .then(result =>
                    {
                        if (result?.status === true) {
                            if (result?.message == 'code sendet your email') {
                                setShowRecoveryAccountMailPopup(false)
                                setShowRecoveryAccountCodePopup(true)
                            }
                        }
                        console.log(result)

                    }
                )
                .catch(error => console.log('error', error));
        }

    }

    const recoveryAccountConfirmCode = () => {
        if (recovery_account_code.length == 0) {
            setRecoveryAccountCodeError(true)
            setRecoveryAccountCodeErrorText('Поле является обязательным.')
        } else {
            setRecoveryAccountCodeError(false)
            setRecoveryAccountCodeErrorText('')
            let formdata = new FormData();
            formdata.append("email", recovery_account_mail);
            formdata.append("code", recovery_account_code);

            let requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };

            fetch("https://realvps.justcode.am/api/validation_forgot_code", requestOptions)
                .then(response => response.json())
                .then(result =>
                    {
                        if (result?.status === false) {
                             if (result?.message == 'Wrong code') {
                                 setRecoveryAccountCodeError(true)
                                 setRecoveryAccountCodeErrorText('Код неправильный')
                             } else {
                                 setRecoveryAccountCodeError(false)
                                 setRecoveryAccountCodeErrorText('')
                             }
                        } else if(result?.status === true) {
                                if (result?.message == 'Valid Code') {
                                    setShowRecoveryAccountCodePopup(false)
                                    setShowRecoveryAccountNewPasswordPopup(true)

                                }
                        }
                        console.log(result)
                    }

                )
                .catch(error => console.log('error', error));
        }

    }
    const updatePassword = () => {
        if (recovery_account_new_password.length < 6 || recovery_account_confirm_password.length < 6) {
             if (recovery_account_new_password.length == 0 ) {
                  setRecoveryAccountNewPasswordError(true)
                 setRecoveryAccountNewPasswordErrorText('Пароль должен быть не менее 6 символов.')
             } else {
                 setRecoveryAccountNewPasswordError(false)
                 setRecoveryAccountNewPasswordErrorText('')
             }
            if (recovery_account_confirm_password.length < 6 ) {
                setRecoveryAccountConfirmPasswordError(true)
                setRecoveryAccountConfirmPasswordErrorText('Пароль должен быть не менее 6 символов.')
            } else {
                setRecoveryAccountConfirmPasswordError(false)
                setRecoveryAccountConfirmPasswordErrorText('')
            }
        } else {
            setRecoveryAccountNewPasswordError(false)
            setRecoveryAccountNewPasswordErrorText('')
            setRecoveryAccountConfirmPasswordError(false)
            setRecoveryAccountConfirmPasswordErrorText('')

            let formdata = new FormData();
            formdata.append("email", recovery_account_mail);
            formdata.append("password", recovery_account_new_password);
            formdata.append("password_confirmation", recovery_account_confirm_password);
            formdata.append("code", recovery_account_code);

            let requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };

            fetch("https://realvps.justcode.am/api/add_password_from_forgot", requestOptions)
                .then(response => response.json())
                .then(result =>
                    {
                        if (result?.status === false) {
                             if (result?.message.password_confirmation[0] == 'The password confirmation field must match password.') {
                                    setRecoveryAccountConfirmPasswordError(true)
                                    setRecoveryAccountConfirmPasswordErrorText('Пароли не совпадают.')
                             } else {
                                 setRecoveryAccountConfirmPasswordError(false)
                                 setRecoveryAccountConfirmPasswordErrorText('')
                             }
                        } else if (result?.status === true) {
                            setShowRecoveryAccountNewPasswordPopup(false)
                            setShowLoginPopup(true)
                        }
                        console.log(result)

                    }


                )
                .catch(error => console.log('error', error));
        }

    }

    return (
        <>

            <div className='main_wrapper' id='card_page'>
                <Header/>
                <main className='main_section'>
                    <section className="card">
                        <div className="card_wrapper">
                            <div className="card_provider_img_info_wrapper">
                                <div className="card_provider_img">
                                    <img src={require('../../assets/img/card_img.png')} alt=""/>
                                </div>
                                <div className="card_provider_info_wrapper">
                                    <p className='card_provider_info_title'>1Cloud</p>
                                    <div className="card_provider_info_detail_item">
                                        <p className='card_provider_info_detail_item_title'>Юридическое лицо РФ (ООО или ИП)</p>
                                        <p className='card_provider_info_detail_item_info card_provider_info_detail_item_info_blue'>EtHash</p>
                                    </div>
                                    <div className="card_provider_info_detail_item">
                                        <p className='card_provider_info_detail_item_title'>ИНН ОГРН</p>
                                        <p className='card_provider_info_detail_item_info card_provider_info_detail_item_info_blue'>Ethereum Classic (ETC) и др.</p>
                                    </div>
                                    <div className="card_provider_info_detail_item">
                                        <p className='card_provider_info_detail_item_title'>Дата регистрации домена</p>
                                        <p className='card_provider_info_detail_item_info'>2400 Mh/s</p>
                                    </div>
                                </div>
                            </div>
                            <div className="rates_wrapper">
                                <p className='rates_info'>Тарифы</p>
                                <div className="rates_items_wrapper">
                                    {rates_list.map((item, index) => {
                                        return (
                                            <div className="rates_item" key={index}>
                                                <div className="rates_item_title_info_wrapper">
                                                    <p className="rate_item_title">
                                                        {item.name}
                                                    </p>
                                                    <p className='rate_item_info'>{item.info1}</p>
                                                </div>
                                                <div className="rates_item_title_info_wrapper2">
                                                    <p className="rate_item_title2">
                                                        {item.info2}
                                                    </p>
                                                    <p className='rate_item_info2'>{item.info3}</p>
                                                </div>
                                                <div className="rates_item_country_city_info_wrapper">
                                                    <p className="rates_item_city_info">
                                                        {item.city}
                                                    </p>
                                                    <p className="rates_item_country_info">
                                                        {item.country}
                                                    </p>
                                                </div>
                                                <div className="rates_item_details_title_info_wrapper">
                                                    <p className="rates_item_details_title">Количество процессоров</p>
                                                    <p className="rates_item_details_info">{item.number_of_processors}</p>
                                                </div>
                                                <div className="rates_item_details_title_info_wrapper">
                                                    <p className="rates_item_details_title">Частота процессора</p>
                                                    <p className="rates_item_details_info">{item.cpu_frequency}</p>
                                                </div>
                                                <div className="rates_item_details_title_info_wrapper">
                                                    <p className="rates_item_details_title">Тип процессора</p>
                                                    <p className="rates_item_details_info">{item.processor_type}</p>
                                                </div>
                                                <div className="rates_item_details_title_info_wrapper">
                                                    <p className="rates_item_details_title">Количество траффика</p>
                                                    <p className="rates_item_details_info">{item.traffic_amount}</p>
                                                </div>
                                                <div className="rates_item_details_title_info_wrapper">
                                                    <p className="rates_item_details_title">Полоса пропускания</p>
                                                    <p className="rates_item_details_info">{item.bandwidth}</p>
                                                </div>
                                                <div className="rates_item_details_title_info_wrapper">
                                                    <p className="rates_item_details_title">Виртуализация</p>
                                                    <p className="rates_item_details_info">{item.virtualization}</p>
                                                </div>
                                                <div className="rates_item_details_title_info_wrapper">
                                                    <p className="rates_item_details_title">Защита от Ddos</p>
                                                    <p className="rates_item_details_info">{item.ddos_protection}</p>
                                                </div>
                                                <div className="rates_item_details_title_info_wrapper">
                                                    <p className="rates_item_details_title">Оплата почасово\посуточно</p>
                                                    <p className="rates_item_details_info">{item.payment}</p>
                                                </div>
                                                <div className="rates_item_details_title_info_wrapper">
                                                    <p className="rates_item_details_title">Наличие IPv6</p>
                                                    <p className="rates_item_details_info">{item.availability_of_IPv6}</p>
                                                </div>
                                                <div className="rates_item_details_title_info_wrapper">
                                                    <p className="rates_item_details_title">Ограничение на тарифе</p>
                                                    <p className="rates_item_details_info">{item.tariff_limitation}</p>
                                                </div>
                                                <div className="rates_item_details_title_info_wrapper">
                                                    <p className="rates_item_details_title">Администрирование</p>
                                                    <p className="rates_item_details_info">{item.administration}</p>
                                                </div>
                                                <div className="rates_item_details_title_info_wrapper">
                                                    <p className="rates_item_details_title">Доступные ОС</p>
                                                    <p className="rates_item_details_info">{item.available_OS}</p>
                                                </div>
                                                <div className="rates_item_details_title_info_wrapper">
                                                    <p className="rates_item_details_title">Возможность загрузки ISO</p>
                                                    <p className="rates_item_details_info">{item.ISO_download_option}</p>
                                                </div>
                                                <div className="rates_item_details_title_info_wrapper">
                                                    <p className="rates_item_details_title">Дата-центр</p>
                                                    <p className="rates_item_details_info">{item.data_center}</p>
                                                </div>
                                                <div className='rates_item_price_title_info_wrapper'>
                                                    <p className='rates_item_price_title'>Цена за месяц</p>
                                                    <p className='rates_item_price_info'>{item.price}/руб</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className='providers_pagination_wrapper'>
                                    <button className='providers_pagination_prev_btn'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M15 18L9 12L15 6" stroke="#528DFF" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                    <a href="" className='providers_pagination_link active_link'>1</a>
                                    <a href="" className='providers_pagination_link'>2</a>
                                    <a href="" className='providers_pagination_link'>3</a>
                                    <span className='providers_pagination_link_point'>...</span>
                                    <a href="" className='providers_pagination_link'>12</a>
                                    <button className='providers_pagination_next_btn'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M9 18L15 12L9 6" stroke="#528DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className='editors'>
                                <p className='editors_title'>Вердикт редакторов</p>
                                <p className='editors_info'>
                                    Сложно сказать, почему представители современных социальных резервов и по сей день остаются уделом либералов, которые жаждут быть смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. Не следует, однако, забывать, что современная методология разработки предоставляет широкие возможности для экономической целесообразности принимаемых решений. А также базовые сценарии поведения пользователей и по сей день остаются уделом либералов, которые жаждут быть обнародованы. И нет сомнений, что предприниматели в сети интернет, инициированные исключительно синтетически, рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок.
                                </p>
                                <div className='editors_img'>
                                    <img src={require('../../assets/img/card_img2.png')} alt=""/>
                                </div>
                                <p className='editors_info'>
                                    Но консультация с широким активом позволяет выполнить важные задания по разработке приоретизации разума над эмоциями. Но выбранный нами инновационный путь в значительной степени обусловливает важность распределения внутренних резервов и ресурсов. Банальные, но неопровержимые выводы, а также представители современных социальных резервов формируют глобальную экономическую сеть и при этом —  превращены в посмешище, хотя само их существование приносит несомненную пользу обществу. Не следует, однако, забывать, что разбавленное изрядной долей эмпатии, рациональное мышление является качественно новой ступенью благоприятных перспектив. Таким образом, сплочённость команды профессионалов предполагает независимые способы реализации кластеризации усилий. Каждый из нас понимает очевидную вещь: базовый вектор развития играет определяющее значение для новых предложений. Противоположная точка зрения подразумевает, что реплицированные с зарубежных источников, современные исследования превращены в посмешище, хотя само их существование приносит несомненную пользу обществу. С другой стороны, постоянное информационно-пропагандистское обеспечение нашей деятельности не оставляет шанса для анализа существующих паттернов поведения. Учитывая ключевые сценарии поведения, граница обучения кадров, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для своевременного выполнения сверхзадачи. Идейные соображения высшего порядка, а также новая модель организационной деятельности требует анализа прогресса профессионального сообщества. Однозначно, ключевые особенности структуры проекта формируют глобальную экономическую сеть и при этом —  объективно рассмотрены соответствующими инстанциями. Но стремящиеся вытеснить традиционное производство, нанотехнологии освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, обнародованы. В своём стремлении повысить качество жизни, они забывают, что начало повседневной работы по формированию позиции создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса приоретизации разума над эмоциями. Также как высокое качество позиционных исследований позволяет оценить значение своевременного выполнения сверхзадачи. Равным образом, высококачественный прототип будущего проекта позволяет оценить значение дальнейших направлений развития.
                                </p>
                                <p className='editors_info'>
                                    Также как существующая теория позволяет оценить значение системы обучения кадров, соответствующей насущным потребностям. Внезапно, сделанные на базе интернет-аналитики выводы освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, функционально разнесены на независимые элементы. Равным образом, внедрение современных методик обеспечивает широкому кругу (специалистов) участие в формировании распределения внутренних резервов и ресурсов.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="send_feedback">
                        <div className="send_feedback_wrapper">

                            {localStorage.getItem('token') ?
                                <div>
                                    <h1 className='send_feedback_title'>Оставить отзыв</h1>
                                    <form action="" className="send_feedback_form">
                                        <div className="send_feedback_form_inputs_wrapper">
                                            <div className='send_feedback_form_input_title_wrapper'>
                                                <p className="send_feedback_form_input_title">Ваш Ник*</p>
                                                <input type="text" placeholder='Example' name='username' className='send_feedback_form_input_field'/>
                                            </div>
                                            <div className='send_feedback_form_input_title_wrapper'>
                                                <p className="send_feedback_form_input_title">Адрес сайта*</p>
                                                <input type="text" placeholder='exampleuser.com' name='email' className='send_feedback_form_input_field'/>
                                            </div>
                                        </div>
                                        <div className='send_feedback_form_textarea_title_wrapper'>
                                            <p className='send_feedback_form_textarea_title'>Текст отзыва</p>
                                            <textarea placeholder='Текст' className='send_feedback_form_textarea_field'></textarea>
                                        </div>
                                        <button className='send_feedback_form_btn'>Оставить отзывы</button>
                                    </form>
                                </div>
                                :
                                <div className='login_buttons_text_wrapper'>
                                    <p className='login_buttons_text_title'>Чтобы оставить отзыв войти аккаунт</p>
                                    <button
                                        className='login_popup_btn2'
                                        onClick={() => {
                                            setShowLoginPopup(true)
                                        }}
                                    >Войти</button>
                                </div>
                            }

                        </div>
                    </section>
                </main>
                <Footer/>
            </div>

            {show_login_popup &&
            <div className='login_popup'>
                <div className="login_popup_wrapper">
                    <h1 className='login_popup_title'>Вход</h1>
                    <div className="login_popup_input_wrapper">
                        <input type="text"
                               className='login_popup_input_field'
                               placeholder='Эл. почта' name='mail'
                               value={login_email}
                               onChange={(e) => {
                                   setLoginEmail(e.target.value)
                               }}
                        />
                        {login_email_error &&
                            <p className='error_text'>{login_email_error_text}</p>
                        }
                    </div>
                    <div className="login_popup_input_wrapper">
                        <input type="password"
                               className='login_popup_input_field'
                               placeholder='Пароль' name='password'
                               value={login_password}
                               onChange={(e) => {
                                   setLoginPassword(e.target.value)
                               }}
                        />
                        {login_password_error &&
                        <p className='error_text'>{login_password_error_text}</p>
                        }
                    </div>
                    <div className='login_popup_forget_password_btn_parent'>
                        <button
                            className='login_popup_forget_password_btn'
                            onClick={() => {
                                setShowLoginPopup(false)
                                setShowRecoveryAccountMailPopup(true)
                            }}
                        >
                            Забыли пароль
                        </button>
                    </div>
                    <button
                        className='login_popup_btn'
                        onClick={() => {
                            login()
                        }}
                    >Войти</button>
                    <div className='login_popup_registration_btn_title_wrapper'>
                        <p className='login_popup_registration_btn_title'>Нет аккаунта ?</p>
                        <button
                            className='login_popup_registration_btn'
                            onClick={() => {
                                setShowLoginPopup(false)
                                setRegistrationPopup(true)
                            }}
                        >
                            Зарегистрироваться
                        </button>
                    </div>
                </div>
            </div>
            }

            {show_recovery_account_mail_popup &&
                 <div className='recovery_account_popup'>
                <div className="recovery_account_popup_wrapper">
                    <h1 className='recovery_account_popup_title'>Восстановление
                        аккаунта</h1>
                    <p className='recovery_account_popup_info'>
                        Мы отправим 4-х значный код на вашу эл.почту для подтверждения личности
                    </p>
                    <div className="recovery_account_popup_input_wrapper">
                        <input type="text"
                               className='recovery_account_popup_input_field'
                               placeholder='Эл. почта' name='mail'
                               value={recovery_account_mail}
                               onChange={(e) => {
                                   setRecoveryAccountMail(e.target.value)
                               }}
                        />
                        {recovery_account_mail_error &&
                            <p className='error_text'>{recovery_account_mail_error_text}</p>
                        }
                    </div>

                    <button
                        className='recovery_account_popup_send_code_btn'
                        onClick={() =>{
                            recoveryAccountSendCode()
                        }}
                    >
                        Отправить код
                    </button>

                </div>
            </div>
            }
            {show_recovery_account_code_popup &&
                <div className='recovery_account_popup'>
                <div className="recovery_account_popup_wrapper">
                    <h1 className='recovery_account_popup_title'>Восстановление
                        аккаунта</h1>
                    <p className='recovery_account_popup_info recovery_account_popup_info2'>
                        Введите код подтверждения
                    </p>
                    <div className="recovery_account_popup_input_wrapper">
                        <input type="number"
                               className='recovery_account_popup_input_field'
                               placeholder='Код подтверждения' name='code'
                               value={recovery_account_code}
                               onChange={(e) => {
                                   setRecoveryAccountCode(e.target.value)
                               }}
                        />
                        {recovery_account_code_error &&
                            <p className='error_text'>{recovery_account_code_error_text}</p>
                        }
                    </div>

                    <button
                        className='recovery_account_popup_send_code_btn'
                        onClick={() =>{
                           recoveryAccountConfirmCode()
                        }}
                    >
                        Подтвердить
                    </button>

                </div>
            </div>
            }


            {show_recovery_account_new_password_popup &&
            <div className='recovery_account_popup'>
                <div className="recovery_account_popup_wrapper">
                    <h1 className='recovery_account_popup_title'>Восстановление
                        аккаунта</h1>
                    <p className='recovery_account_popup_info'>
                        Придумайте сложный пароль,содержащий
                        строчные и прописные буквы,а так же цифры
                        и символы
                    </p>
                    <div className="recovery_account_popup_input_wrapper recovery_account_popup_input_wrapper2">
                        <input type="password"
                               className='recovery_account_popup_input_field'
                               placeholder='Новый пароль' name='new_password'
                               value={recovery_account_new_password}
                               onChange={(e) => {
                                   setRecoveryAccountNewPassword(e.target.value)
                               }}
                        />
                        {recovery_account_new_password_error &&
                            <p className='error_text'>{recovery_account_new_password_error_text}</p>
                        }
                    </div>
                    <div className="recovery_account_popup_input_wrapper recovery_account_popup_input_wrapper2">
                        <input type="password"
                               className='recovery_account_popup_input_field'
                               placeholder='Повтор пароля' name='confirm_password'
                               value={recovery_account_confirm_password}
                               onChange={(e) => {
                                   setRecoveryAccountConfirmPassword(e.target.value)
                               }}
                        />
                        {recovery_account_confirm_password_error &&
                            <p className='error_text'>{recovery_account_confirm_password_error_text}</p>
                        }
                    </div>
                    <button
                        className='recovery_account_popup_send_code_btn recovery_account_popup_send_code_btn2'
                        onClick={() =>{
                            updatePassword()
                        }}
                    >
                        Войти
                    </button>

                </div>
            </div>
            }

            {show_registration_popup &&
            <div className='registration_popup'>
                <div className="registration_popup_wrapper">
                    <h1 className='registration_popup_title'>Регистрация</h1>
                    <div className="registration_popup_input_wrapper">
                        <input type="text"
                               className='registration_popup_input_field'
                               placeholder='Имя' name='name'
                               value={register_name}
                               onChange={(e) => {
                                   setRegisterName(e.target.value)
                               }}
                        />
                        {register_name_error &&
                            <p className='error_text'>{register_name_error_text}</p>
                        }
                    </div>
                    <div className="registration_popup_input_wrapper">
                        <input type="text"
                               className='registration_popup_input_field'
                               placeholder='Юзернейм' name='username'
                               value={register_username}
                               onChange={(e) => {
                                   setRegisterUsername(e.target.value)
                               }}
                        />
                        {register_username_error &&
                            <p className='error_text'>{register_username_error_text}</p>
                        }
                    </div>
                    <div className="registration_popup_input_wrapper">
                        <input type="text"
                               className='registration_popup_input_field'
                               placeholder='Эл. почта' name='mail'
                               value={register_email}
                               onChange={(e) => {
                                   setRegisterEmail(e.target.value)
                               }}
                        />
                        {register_email_error &&
                            <p className='error_text'>{register_email_error_text}</p>
                        }
                    </div>
                    <div className="registration_popup_input_wrapper">
                        <input type="password"
                               className='registration_popup_input_field'
                               placeholder='Пароль' name='password'
                               value={register_password}
                               onChange={(e) => {
                                   setRegisterPassword(e.target.value)
                               }}
                        />
                        {register_password_error &&
                            <p className='error_text'>{register_password_error_text}</p>
                        }
                    </div>
                    <div className="registration_popup_input_wrapper registration_popup_input_wrapper2">
                        <input type="password"
                               className='registration_popup_input_field'
                               placeholder='Повтор пароля' name='confirm_password'
                               value={register_confirm_password}
                               onChange={(e) => {
                                   setRegisterConfirmPassword(e.target.value)
                               }}
                        />
                        {register_confirm_password_error &&
                             <p className='error_text'>{register_confirm_password_error_text}</p>
                        }
                    </div>

                    <button
                        className='registration_popup_btn'
                        onClick={() => {
                            register()
                        }}
                    >
                        Зарегистрироваться
                    </button>
                    <div className='registration_popup_enter_btn_title_wrapper'>
                        <p className='registration_popup_enter_btn_title'>Уже зарегистрировались?</p>
                        <button
                            className='registration_popup_enter_btn'
                            onClick={() => {
                                setRegistrationPopup(false)
                                setShowLoginPopup(true)
                            }}
                        >
                            Войти
                        </button>
                    </div>
                </div>
            </div>
            }

            {show_registration_confirmation_popup &&
                <div className='recovery_account_popup'>
                <div className="recovery_account_popup_wrapper">
                    <h1 className='recovery_account_popup_title'>
                        Подтверждения регистрации
                    </h1>
                    <p className='recovery_account_popup_info recovery_account_popup_info2'>
                        Введите код подтверждения
                    </p>
                    <div className="recovery_account_popup_input_wrapper">
                        <input type="number"
                               className='recovery_account_popup_input_field'
                               placeholder='Код подтверждения' name='code'
                               value={registration_confirmation_code}
                               onChange={(e) => {
                                   setRegistrationConfirmationCode(e.target.value)
                               }}
                        />
                        {registration_confirmation_code_error &&
                            <p className='error_text'>{registration_confirmation_code_error_text}</p>
                        }
                    </div>

                    <button
                        className='recovery_account_popup_send_code_btn'
                        onClick={() =>{
                            confirmRegistration()
                        }}
                    >
                        Подтвердить
                    </button>

                </div>
            </div>
            }

        </>

    )


}



