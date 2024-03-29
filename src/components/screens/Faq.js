import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/faq_style.css';
import Header from "./includes/Header";
import Footer from "./includes/Footer";
import faqOpenIcon from  '../../assets/svg/faq_open_icon.svg';
import faqCloseIcon from  '../../assets/svg/faq_close_icon.svg';



export default function Home (props) {
    const [headerScroll, setHeaderScroll] = useState(false);
    const [faq_list, setFaqList] =useState([
        {
            id: 1,
            open_key: false,
            title: 'Что такое виртуальный сервер?',
            info: 'Виртуальный сервер (VPS/VDS) подойдет тем, кому недостаточно возможностей виртуального хостинга, но не требуется мощность целого физического сервера. VPS/VDS - это услуга хостинга, подразумевающая предоставление пользователю части ресурсов одного или нескольких физических серверов. Управление виртуальным сервером производится так же, как и управление выделенным физическим сервером: пользователю дается полный root (для UNIX) или Administrator (для Windows) доступ с возможностью установки и изменения любого программного обеспечения, выделяется один или несколько IP-адресов. Как правило, на одном физическом сервере при помощи различных технологий виртуализации работает несколько независимых VPS/VDS. По сравнению с виртуальным хостингом VPS/VDS предоставляет гораздо большую свободу в плане прав доступа и настроек системы; количество создаваемых пользователей, сайтов, баз данных ограничивается только системными ресурсами. Стоимость аренды виртуального сервера чаще всего превышает стоимость виртуального хостинга, к тому же требуется наличие у пользователя навыков администрирования, хотя в настоящий момент большинство типовых задач может решаться с помощью панелей управления, предоставляющих web-интерфейс. В большинстве случаев хостеры готовы предоставить услуги администрирования бесплатно или за дополнительную оплату.'
        },
        {
            id: 2,
            open_key: false,
            title: 'Что такое виртуальный сервер?',
            info: 'Виртуальный сервер (VPS/VDS) подойдет тем, кому недостаточно возможностей виртуального хостинга, но не требуется мощность целого физического сервера. VPS/VDS - это услуга хостинга, подразумевающая предоставление пользователю части ресурсов одного или нескольких физических серверов. Управление виртуальным сервером производится так же, как и управление выделенным физическим сервером: пользователю дается полный root (для UNIX) или Administrator (для Windows) доступ с возможностью установки и изменения любого программного обеспечения, выделяется один или несколько IP-адресов. Как правило, на одном физическом сервере при помощи различных технологий виртуализации работает несколько независимых VPS/VDS. По сравнению с виртуальным хостингом VPS/VDS предоставляет гораздо большую свободу в плане прав доступа и настроек системы; количество создаваемых пользователей, сайтов, баз данных ограничивается только системными ресурсами. Стоимость аренды виртуального сервера чаще всего превышает стоимость виртуального хостинга, к тому же требуется наличие у пользователя навыков администрирования, хотя в настоящий момент большинство типовых задач может решаться с помощью панелей управления, предоставляющих web-интерфейс. В большинстве случаев хостеры готовы предоставить услуги администрирования бесплатно или за дополнительную оплату.'
        },
        {
            id: 3,
            open_key: false,
            title: 'Что такое виртуальный сервер?',
            info: 'Виртуальный сервер (VPS/VDS) подойдет тем, кому недостаточно возможностей виртуального хостинга, но не требуется мощность целого физического сервера. VPS/VDS - это услуга хостинга, подразумевающая предоставление пользователю части ресурсов одного или нескольких физических серверов. Управление виртуальным сервером производится так же, как и управление выделенным физическим сервером: пользователю дается полный root (для UNIX) или Administrator (для Windows) доступ с возможностью установки и изменения любого программного обеспечения, выделяется один или несколько IP-адресов. Как правило, на одном физическом сервере при помощи различных технологий виртуализации работает несколько независимых VPS/VDS. По сравнению с виртуальным хостингом VPS/VDS предоставляет гораздо большую свободу в плане прав доступа и настроек системы; количество создаваемых пользователей, сайтов, баз данных ограничивается только системными ресурсами. Стоимость аренды виртуального сервера чаще всего превышает стоимость виртуального хостинга, к тому же требуется наличие у пользователя навыков администрирования, хотя в настоящий момент большинство типовых задач может решаться с помощью панелей управления, предоставляющих web-интерфейс. В большинстве случаев хостеры готовы предоставить услуги администрирования бесплатно или за дополнительную оплату.'
        },
        {
            id: 4,
            open_key: false,
            title: 'Что такое виртуальный сервер?',
            info: 'Виртуальный сервер (VPS/VDS) подойдет тем, кому недостаточно возможностей виртуального хостинга, но не требуется мощность целого физического сервера. VPS/VDS - это услуга хостинга, подразумевающая предоставление пользователю части ресурсов одного или нескольких физических серверов. Управление виртуальным сервером производится так же, как и управление выделенным физическим сервером: пользователю дается полный root (для UNIX) или Administrator (для Windows) доступ с возможностью установки и изменения любого программного обеспечения, выделяется один или несколько IP-адресов. Как правило, на одном физическом сервере при помощи различных технологий виртуализации работает несколько независимых VPS/VDS. По сравнению с виртуальным хостингом VPS/VDS предоставляет гораздо большую свободу в плане прав доступа и настроек системы; количество создаваемых пользователей, сайтов, баз данных ограничивается только системными ресурсами. Стоимость аренды виртуального сервера чаще всего превышает стоимость виртуального хостинга, к тому же требуется наличие у пользователя навыков администрирования, хотя в настоящий момент большинство типовых задач может решаться с помощью панелей управления, предоставляющих web-интерфейс. В большинстве случаев хостеры готовы предоставить услуги администрирования бесплатно или за дополнительную оплату.'
        },
        {
            id: 5,
            open_key: false,
            title: 'Что такое виртуальный сервер?',
            info: 'Виртуальный сервер (VPS/VDS) подойдет тем, кому недостаточно возможностей виртуального хостинга, но не требуется мощность целого физического сервера. VPS/VDS - это услуга хостинга, подразумевающая предоставление пользователю части ресурсов одного или нескольких физических серверов. Управление виртуальным сервером производится так же, как и управление выделенным физическим сервером: пользователю дается полный root (для UNIX) или Administrator (для Windows) доступ с возможностью установки и изменения любого программного обеспечения, выделяется один или несколько IP-адресов. Как правило, на одном физическом сервере при помощи различных технологий виртуализации работает несколько независимых VPS/VDS. По сравнению с виртуальным хостингом VPS/VDS предоставляет гораздо большую свободу в плане прав доступа и настроек системы; количество создаваемых пользователей, сайтов, баз данных ограничивается только системными ресурсами. Стоимость аренды виртуального сервера чаще всего превышает стоимость виртуального хостинга, к тому же требуется наличие у пользователя навыков администрирования, хотя в настоящий момент большинство типовых задач может решаться с помощью панелей управления, предоставляющих web-интерфейс. В большинстве случаев хостеры готовы предоставить услуги администрирования бесплатно или за дополнительную оплату.'
        },
        {
            id: 6,
            open_key: false,
            title: 'Что такое виртуальный сервер?',
            info: 'Виртуальный сервер (VPS/VDS) подойдет тем, кому недостаточно возможностей виртуального хостинга, но не требуется мощность целого физического сервера. VPS/VDS - это услуга хостинга, подразумевающая предоставление пользователю части ресурсов одного или нескольких физических серверов. Управление виртуальным сервером производится так же, как и управление выделенным физическим сервером: пользователю дается полный root (для UNIX) или Administrator (для Windows) доступ с возможностью установки и изменения любого программного обеспечения, выделяется один или несколько IP-адресов. Как правило, на одном физическом сервере при помощи различных технологий виртуализации работает несколько независимых VPS/VDS. По сравнению с виртуальным хостингом VPS/VDS предоставляет гораздо большую свободу в плане прав доступа и настроек системы; количество создаваемых пользователей, сайтов, баз данных ограничивается только системными ресурсами. Стоимость аренды виртуального сервера чаще всего превышает стоимость виртуального хостинга, к тому же требуется наличие у пользователя навыков администрирования, хотя в настоящий момент большинство типовых задач может решаться с помощью панелей управления, предоставляющих web-интерфейс. В большинстве случаев хостеры готовы предоставить услуги администрирования бесплатно или за дополнительную оплату.'
        },
    ])
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

    const openFaqs = (id) => {
        const updatedFaqs = faq_list.map((obj) =>
            obj.id === id ? { ...obj, open_key: !obj.open_key } : obj
        );
        setFaqList(updatedFaqs);
    };

    return (
        <>


            <div className='main_wrapper' id='faq_page'>
                <Header/>
                <main className='main_section'>
                    <section className="faq">
                        <div className="faq_wrapper">
                            <h1 className='faq_title'>Часто задаваемые вопросы</h1>
                            <div className="faq_items_wrapper">
                                {faq_list.map((item, index) => {

                                    return (
                                        <div className='faq_item' key={index}>
                                            <div className='faq_item_title_icon_wrapper'>
                                                <p className='faq_item_title'>{item.title}</p>
                                                <button className='faq_item_btn'
                                                        onClick={() => {
                                                            openFaqs(item.id)
                                                        }}
                                                >
                                                    {item.open_key ?
                                                        <img src={faqOpenIcon}/>
                                                        :
                                                        <img src={faqCloseIcon}/>
                                                    }

                                                </button>
                                            </div>
                                            {item.open_key &&

                                            <div className='faq_item_hidden_info_box'>
                                                <p className='faq_item_hidden_info'>
                                                    {item.info}
                                                </p>
                                            </div>
                                            }

                                        </div>



                                    );
                                })}

                            </div>
                        </div>
                    </section>
                </main>
                <Footer/>
            </div>

        </>

    )


}



