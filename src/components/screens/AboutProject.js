import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/about_project_style.css';
import Header from "./includes/Header";
import Footer from "./includes/Footer";




export default function AboutProject (props) {
    const [headerScroll, setHeaderScroll] = useState(false);
    const [select_feedback_checkbox, setSelectFeedbackCheckbox] = useState('');

    const [request_name, setRequestName] = useState('');
    const [request_name_error_text, setRequestNameErrorText] = useState('');
    const [request_name_error, setRequestNameError] = useState(false);

    const [request_email, setRequestEmail] = useState('');
    const [request_email_error_text, setRequestEmailErrorText] = useState('');
    const [request_email_error, setRequestEmailError] = useState(false);

    const [request_phone, setRequestPhone] = useState('');
    const [request_phone_error_text, setRequestPhoneErrorText] = useState('');
    const [request_phone_error, setRequestPhoneError] = useState(false);

    const [isValid, setIsValid] = useState(true);

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

    const handleOptionChange = () => {
        setSelectFeedbackCheckbox(!select_feedback_checkbox);

    };

    const sendRequest = () => {
        let name_error = false;
        let email_error = false;
        let phone_error = false;

        if (request_name.length == 0) {
            name_error = true
            setRequestNameError(true)
            setRequestNameErrorText('Поле является обязательным.')
        } else {
            setRequestNameError(false)
            setRequestNameErrorText('')
        }

        if (request_phone.length == 0) {
            phone_error = true
            setRequestPhoneError(true)
            setRequestPhoneErrorText('Поле является обязательным.')
        } else {
            setRequestPhoneError(false)
            setRequestPhoneErrorText('')
        }

        if (request_email.length == 0) {
            email_error = true
            setRequestEmailError(true)
            setRequestEmailErrorText('Поле является обязательным.')
        } else  {

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            let is_valid = emailRegex.test(request_email);

            if (is_valid === false) {
                email_error = true
                setRequestEmailError(true)
                setRequestEmailErrorText('Неправильный адрес электронной почты!')
            } else  {
                setRequestEmailError(false)
                setRequestEmailErrorText('')
            }
        }

        if (name_error || email_error || phone_error) {
             return false
        }

            // setRequestPhoneError(false)
            // setRequestPhoneErrorText('')
            // setRequestNameError(false)
            // setRequestNameErrorText('')
            // setRequestEmailError(false)
            // setRequestEmailErrorText('')

            let formdata = new FormData();
            formdata.append("name", request_name);
            formdata.append("phone", request_phone);
            formdata.append("email", request_email);

            let requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };

            fetch("https://realvps.justcode.am/api/send_request", requestOptions)
                .then(response => response.json())
                .then(result =>
                    {
                        console.log(result)
                        if (result?.status === true) {
                             setRequestName('')
                             setRequestPhone('')
                            setRequestEmail('')
                        }
                    }
                )
                .catch(error => console.log('error', error));
    }

    return (
        <>


            <div className='main_wrapper' id='about_project_page'>
                <Header/>
                <main className='main_section'>
                    <section className="about_project">
                        <div className="about_project_wrapper">
                            <div className='about_project_contacts_info_details_wrapper'>
                                <h1 className='about_project_contacts_title'>Контакты</h1>
                                <div className="about_project_contacts_info_detail">
                                    <p className='about_project_contacts_info_detail_title'>Телефон</p>
                                    <a href="tel: +7(773) 703-33-77" className='about_project_contacts_info_detail_link' >+7(773) 703-33-77</a>
                                </div>
                                <div className="about_project_contacts_info_detail">
                                    <p className='about_project_contacts_info_detail_title'>Эл. Почта</p>
                                    <a href="mailto: user@gmail.com" className='about_project_contacts_info_detail_link'>user@gmail.com</a>
                                </div>
                                <div className="about_project_contacts_info_detail">
                                    <p className='about_project_contacts_info_detail_title'>Телеграм канал</p>
                                    <a href="" className='about_project_contacts_info_detail_link'>@chanelname</a>
                                </div>
                            </div>
                            <div className='about_project_details_wrapper'>
                                <h1 className='about_project_details_title'>О Проекте</h1>
                                <p className='about_project_details_info'>
                                    Есть над чем задуматься: многие известные личности, превозмогая сложившуюся непростую экономическую ситуацию, заблокированы в рамках своих собственных рациональных ограничений. Безусловно, граница обучения кадров способствует повышению качества системы массового участия. В рамках спецификации современных стандартов, реплицированные с зарубежных источников, современные исследования, превозмогая сложившуюся непростую экономическую ситуацию, описаны максимально подробно. А ещё действия представителей оппозиции, инициированные исключительно синтетически, указаны как претенденты на роль ключевых факторов. Но явные признаки победы институционализации формируют глобальную экономическую сеть и при этом —  функционально разнесены на независимые элементы. Ясность нашей позиции очевидна: повышение уровня гражданского сознания не даёт нам иного выбора, кроме определения распределения внутренних резервов и ресурсов. Безусловно, сложившаяся структура организации требует анализа инновационных методов управления процессами. Также как базовый вектор развития играет определяющее значение для благоприятных перспектив. Внезапно, базовые сценарии поведения пользователей формируют глобальную экономическую сеть и при этом —  объявлены нарушающими общечеловеческие нормы этики и морали.
                                </p>
                                <p className="about_project_details_info">
                                    Сложность сети - это, по сути, показатель того, насколько сложно найти новый хэш ниже заданного уровня, или, проще говоря, сложность поиска нового блока. Она может колебаться и систематически корректируется. Это делается для того, чтобы блоки добывались со средней скоростью, особенно сейчас, когда появились ASIC-майнеры, специально разработанные для быстрого прогона большого количества хэшей.
                                </p>
                                <p className="about_project_details_info">
                                    Очень важно рассчитать свои доходы и тщательно спланировать майнинг до начала работы, так как инвестиции, которые вы будете делать, довольно большие и требуют тщательного рассмотрения. Кроме того, все переменные, участвующие в процессе, постоянно меняются, как, например, цена каждой отдельной монеты. Постоянные изменения цены монет, сложности сети и вознаграждения за блок, а также возможные колебания стоимости электроэнергии и других важных факторов - все это влияет на вашу прибыль. Давайте подробнее рассмотрим элементы, которые будут играть ключевую роль в расчете вашего дохода от майнинга, чтобы вы могли лучше понять, как работают калькуляторы для майнинга.
                                </p>
                                <p className="about_project_details_info">
                                    Картельные сговоры не допускают ситуации, при которой сторонники тоталитаризма в науке, вне зависимости от их уровня, должны быть обнародованы. В целом, конечно, социально-экономическое развитие создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса системы обучения кадров, соответствующей насущным потребностям. Современные технологии достигли такого уровня, что экономическая повестка сегодняшнего дня не оставляет шанса для направлений прогрессивного развития. Следует отметить, что убеждённость некоторых оппонентов предоставляет широкие возможности для форм воздействия!
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="feedback">
                        <div className="feedback_wrapper">
                            <form action="" className="feedback_form">
                                <h1 className="feedback_title">Обратная связь</h1>
                                <div className='feedback_input_title_main_wrapper'>
                                    <div className="feedback_input_title_wrapper">
                                        <p className="feedback_input_title">Ваше имя*</p>
                                        <input type="text" className='feedback_input_field' name='name' value={request_name}
                                               onChange={(e) => {
                                                   setRequestName(e.target.value)
                                               }}
                                        />
                                        {request_name_error &&
                                            <p className='error_text' style={{position: 'absolute'}}>{request_name_error_text}</p>
                                        }
                                    </div>
                                    <div className="feedback_input_title_wrapper">
                                        <p className="feedback_input_title">Ваше номер*</p>
                                        <input type="number" className='feedback_input_field' name='phone' value={request_phone}
                                               onChange={(e) => {
                                                   setRequestPhone(e.target.value)
                                               }}
                                        />
                                        {request_phone_error &&
                                         <p className='error_text' style={{position: 'absolute'}}>{request_phone_error_text}</p>
                                        }
                                    </div>
                                    <div className="feedback_input_title_wrapper">
                                        <p className="feedback_input_title">Ваша эл. почта</p>
                                        <input type="text" className='feedback_input_field' name='mail' value={request_email}
                                               onChange={(e) => {
                                                   setRequestEmail(e.target.value)
                                               }}
                                        />
                                        {request_email_error &&
                                            <p className='error_text' style={{position: 'absolute'}}>{request_email_error_text}</p>
                                        }
                                    </div>
                                </div>
                                <button className='send_feedback_btn' type='button' onClick={() => sendRequest()}>Оставить заявку</button>
                                <label className='feedback_checkbox_label'>
                                    <input
                                        type='checkbox'
                                        value={select_feedback_checkbox}
                                        checked={select_feedback_checkbox}
                                        onChange={handleOptionChange}
                                    />
                                    <span className='feedback_checkbox_mark'></span>
                                    <p className='feedback_checkbox_title'>
                                        Я даю согласие на обработку моих <span>персональных данных</span>
                                    </p>
                                </label>
                            </form>
                        </div>
                    </section>
                </main>
                <Footer/>
            </div>

        </>

    )


}



