import React, { useState, useEffect } from 'react';
 import { Link } from 'react-router-dom';
 import '../../assets/css/home_style.css';
 import Header from "./includes/Header";
 import TopSlider from "./includes/Top_Slider";
 import Footer from "./includes/Footer";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";



 export default function Home (props) {
     const [headerScroll, setHeaderScroll] = useState(false);
     const [is_open_filters_list, setIsOpenFiltersList] = useState(false);
     const [select_country_filter_option, setSelectCountryFilterOption] = useState(null);
     const [img_path, setImgPath] = useState('https://realvps.justcode.am/uploads/');

     const [filter_options_country_list, setFilterOptionsCountryList] = useState([
         {
             id: 1,
             value: 'Россия',
             label: 'Россия',
         },
         {
             id: 2,
             value: 'Канада',
             label: 'Канада',
         },
         {
             id: 3,
             value: 'Китай',
             label: 'Китай'
         },
     ]);

     const [is_open_filters_list2, setIsOpenFiltersList2] = useState(false);
     const [select_city_filter_option, setSelectCityFilterOption] = useState(null);
     const [filter_cities_options_list, setFilterCitiesOptionsList] = useState([
         {
             id: 1,
             value: 'Москва',
             label: 'Москва',
         },
         {
             id: 2,
             value: 'Торонто',
             label: 'Торонто',
         },
         {
             id: 3,
             value: 'Пекин',
             label: 'Пекин'
         },
     ]);

     const [is_open_filters_list3, setIsOpenFiltersList3] = useState(false);
     const [select_filter_option3, setSelectSortOption3] = useState(null);
     const [filter_options_list3, setFilterOptionsList3] = useState([
         {
             id: 1,
             value: 'OpenVZ',
             label: 'OpenVZ',
         },
         {
             id: 2,
             value: 'XEN',
             label: 'XEN',
         },
         {
             id: 3,
             value: 'KVM',
             label: 'KVM',
         },
         {
            id: 4,
            value: 'VMware',
            label: 'VMware',
         },
         {
             id: 5,
             value: 'LXD/LXC',
             label: 'LXD/LXC',
         },
         {
             id: 6,
             value: 'Hyper-V',
             label: 'Hyper-V'
         },
         {
             id: 7,
             value: 'Virtuozzo',
             label: 'Virtuozzo',
         }
     ]);

     const [is_open_filters_list4, setIsOpenFiltersList4] = useState(false);
     const [select_filter_option4, setSelectSortOption4] = useState(null);
     const [filter_options_list4, setFilterOptionsList4] = useState([
         {
             id: 1,
             value: 'SATA',
             label: 'SATA',
         },
         {
             id: 2,
             value: 'SSD',
             label: 'SSD',
         },
         {
             id: 3,
             value: 'NVMe',
             label: 'NVMe',
         },
         {
             id: 4,
             value: 'SAS',
             label: 'SAS'
         }
     ]);

     const [rowClick, setRowClick] = useState(true);

     const [tariff_list, setTariffList] = useState([]);

     const [start_kalichistvo_procesorov, setStartKalichistvoProcesoeov] = useState('');
     const [end_kalichistvo_procesorov, setEndKalichistvoProcesoeov] = useState('');
     const [start_chistota, setStartChistota] = useState('');
     const [end_chistota, setEndChistota] = useState('');
     const [start_ram, setStartRam] = useState('');
     const [end_ram, setEndRam] = useState('');
     const [disk, setDisk] = useState('');
     const [start_price, setStartPrice] = useState('');
     const [end_price, setEndPrice] = useState('');
     const [start_polosa, setStartPolosa] = useState('');
     const [end_polosa, setEndPolosa] = useState('');



     const data_table_info = [
         {
             id: 1,
             memory: '60 gb',
             disk: '60 gb NVMe',
             processor: '2x2400 MHz',
             traffic: '45 TB 1000 Mbit/s',
             price: '489 руб.',
             virtualization: 'KVM',
             country: 'Россия',
             Ipv6: 'Да'

         },
         {
             id: 2,
             memory: '60 gb',
             disk: '60 gb NVMe',
             processor: '2x2400 MHz',
             traffic: '45 TB 1000 Mbit/s',
             price: '489 руб.',
             virtualization: 'KVM',
             country: 'Россия',
             Ipv6: 'Да'


         },
         {
             id: 3,
             memory: '60 gb',
             disk: '60 gb NVMe',
             processor: '2x2400 MHz',
             traffic: '45 TB 1000 Mbit/s',
             price: '489 руб.',
             virtualization: 'KVM',
             country: 'Россия',
             Ipv6: 'Да'


         },
         {
             id: 4,
             memory: '60 gb',
             disk: '60 gb NVMe',
             processor: '2x2400 MHz',
             traffic: '45 TB 1000 Mbit/s',
             price: '489 руб.',
             virtualization: 'KVM',
             country: 'Россия',
             Ipv6: 'Да'


         },
         {
             id: 5,
             memory: '60 gb',
             disk: '60 gb NVMe',
             processor: '2x2400 MHz',
             traffic: '45 TB 1000 Mbit/s',
             price: '489 руб.',
             virtualization: 'KVM',
             country: 'Россия',
             Ipv6: 'Да'


         },
         {
             id: 6,
             memory: '60 gb ',
             disk: '60 gb NVMe',
             processor: '2x2400 MHz',
             traffic: '45 TB 1000 Mbit/s',
             price: '489 руб.',
             virtualization: 'KVM',
             country: 'Россия',
             Ipv6: 'Да'


         },
         {
             id: 7,
             memory: '60 gb',
             disk: '60 gb NVMe',
             processor: '2x2400 MHz',
             traffic: '45 TB 1000 Mbit/s',
             price: '489 руб.',
             virtualization: 'KVM',
             country: 'Россия',
             Ipv6: 'Да'


         },
         {
             id: 8,
             memory: '60 gb',
             disk: '60 gb NVMe',
             processor: '2x2400 MHz',
             traffic: '45 TB 1000 Mbit/s',
             price: '489 руб.',
             virtualization: 'KVM',
             country: 'Россия',
             Ipv6: 'Да'


         },
         {
             id: 9,
             memory: '60 gb',
             disk: '60 gb NVMe',
             processor: '2x2400 MHz',
             traffic: '45 TB 1000 Mbit/s',
             price: '489 руб.',
             virtualization: 'KVM',
             country: 'Россия',
             Ipv6: 'Да'

         },
         {
             id: 10,
             memory: '60 gb',
             disk: '60 gb NVMe',
             processor: '2x2400 MHz',
             traffic: '45 TB 1000 Mbit/s',
             price: '489 руб.',
             virtualization: 'KVM',
             country: 'Россия',
             Ipv6: 'Да'


         },

     ]


     useEffect(() => {
        // localStorage.clear();
         getTariffs()
         getCountries();

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

     const imageBodyTemplate = () => {
         return (
             <div className='datatable_logo'>
                 <div style={{display: 'flex', width: '81px',height: '32px'  }}>
                     <img src={require('../../assets/img/table_img.png')} alt='' className='table_img'/>
                 </div>
                 <p className='datatable_logo_title'>NuxtCloud</p>
             </div>

         )
     };
     const getTariffs = (url = null) => {

         let requestOptions = {
             method: 'GET',
             redirect: 'follow'
         };

         let api_url = url ? url : 'https://realvps.justcode.am/api/get_tarif';

         fetch(api_url, requestOptions)
             .then(response => response.json())
             .then(result =>
                 {
                     console.log(result, 'result')
                     setTariffList(result.data)
                 }

             )
             .catch(error => console.log('error', error));
     }

     const handlePrevButtonClick = (index) => {
         let links = tariff_list?.links;
         let new_index = index;
         let preview_url = links[new_index].url;
         if (preview_url) {
             getTariffs(preview_url)
         }


     }


     const handleNextButtonClick = (index) => {
         let links = tariff_list?.links;
         let new_index = index;
         let next_url = links[new_index].url;
         if (next_url) {
             getTariffs(next_url)
         }

     }

     const getCountries = () => {
         let requestOptions = {
             method: 'GET',
             redirect: 'follow'
         };

         fetch("https://realvps.justcode.am/api/get_country", requestOptions)
             .then(response => response.json())
             .then(result =>
                 {
                     console.log(result, 'country list')
                     if (result?.status === true) {
                         setFilterOptionsCountryList(result?.data)
                     }
                 }
             )
             .catch(error => console.log('error', error));
     }
     const getCity = (id) => {
         let requestOptions = {
             method: 'GET',
             redirect: 'follow'
         };

         fetch(`https://realvps.justcode.am/api/get_city_for_country/country_id=${id}`, requestOptions)
             .then(response => response.json())
             .then(result =>
                 {
                     if (result?.status === true) {
                         setFilterCitiesOptionsList(result?.data)
                     }
                     console.log(result)
                 }

             )
             .catch(error => console.log('error', error));
     }
     const getFilter = () => {
         let api_url = `https://realvps.justcode.am/api/get_tarif?`;


         if (select_country_filter_option !== null) {
             api_url += `country_id=${select_country_filter_option.id}`;
         }
         if (select_city_filter_option !== null) {
             api_url += `&city_id=${select_city_filter_option.id}`;

         }

         if (select_filter_option3 !== null) {
             api_url += `&virtulizaciya=${select_filter_option3.label}`;

         }

         if (select_filter_option4 !== null) {
             api_url += `&tip_processora=${select_filter_option4.label}`;

         }

         if (start_kalichistvo_procesorov !== '') {
             api_url += `&start_kolichestvo_procesorov=${start_kalichistvo_procesorov}`;

         }

         if (end_kalichistvo_procesorov !== '') {
             api_url += `&end_kolichestvo_procesorov=${end_kalichistvo_procesorov}`;

         }

         if (start_chistota !== '') {
             api_url += `&start_chastatota_procesora=${start_chistota}`;

         }


         if (end_chistota !== '') {
             api_url += `&end_chastatota_procesora=${end_chistota}`;

         }

         if (start_ram !== '') {
             api_url += `&start_operativnaya_pamaty=${start_ram}`;

         }
         if (end_ram !== '') {
             api_url += `&end_operativnaya_pamaty=${end_ram}`;

         }

         if (start_price !== '') {
             api_url += `&start_price=${start_price}`;

         }
         if (end_price !== '') {
             api_url += `&end_price=${end_price}`;

         }
         if (start_polosa !== '') {
             api_url += `&start_polosa_propuskania=${start_polosa}`;

         }
         if (end_polosa !== '') {
             api_url += `&end_polosa_propuskania=${end_polosa}`;

         }

         console.log(api_url, 'url')
         let requestOptions = {
             method: 'GET',
             redirect: 'follow'
         };


         fetch(api_url, requestOptions)
             .then(response => response.json())
             .then(result =>
                 {
                     console.log(result, 'resultfiler')
                     setTariffList(result.data)
                 }

             )
             .catch(error => console.log('error', error));
     }


     useEffect(() => {
            getFilter()
     }, [select_country_filter_option,select_city_filter_option, select_filter_option3,
         select_filter_option4, start_kalichistvo_procesorov, end_kalichistvo_procesorov, start_chistota, end_chistota, start_ram,
         end_ram, start_price, end_price, start_polosa, end_polosa])


     return (
         <>


             <div className='main_wrapper' id='real_vps_general_page'>
                 <Header/>
                 <main className='main_section'>
                    <section className='top'>
                            <div className='top_wrapper'>
                                <TopSlider/>
                            </div>
                    </section>
                     <section className="real_vps_details_filter">
                         <div className="real_vps_details_filters_wrapper">
                                 <div className="real_vps_details_filter_input_title_wrapper">
                                     <p className="real_vps_details_filter_input_title">CPU</p>
                                     <div className="real_vps_details_filter_min_max_inputs_wrapper">
                                         <input type="number" minLength={1} maxLength={128}
                                                placeholder='от 1' className="real_vps_details_filter_input_field"
                                                value={start_kalichistvo_procesorov}
                                                onChange={(e) => {
                                                    setStartKalichistvoProcesoeov(e.target.value)
                                                }}
                                         />
                                         <div>-</div>
                                         <input type="number" minLength={1} maxLength={128}
                                                placeholder='до 128' className="real_vps_details_filter_input_field"
                                                value={end_kalichistvo_procesorov}
                                                onChange={(e) => {
                                                    setEndKalichistvoProcesoeov(e.target.value)
                                                }}
                                         />
                                     </div>
                                 </div>
                                 <div className="real_vps_details_filter_input_title_wrapper">
                                     <p className="real_vps_details_filter_input_title">Частота</p>
                                     <div className="real_vps_details_filter_min_max_inputs_wrapper">
                                         <input type="number" maxLength={6000} minLength={1900}
                                                placeholder='от 1900' className="real_vps_details_filter_input_field"
                                                value={start_chistota}
                                                onChange={(e) => {
                                                    setStartChistota(e.target.value)
                                                }}
                                         />
                                         <div>-</div>
                                         <input type="number" maxLength={6000} minLength={1900}
                                                placeholder='до 6000' className="real_vps_details_filter_input_field"
                                                value={end_chistota}
                                                onChange={(e) => {
                                                    setEndChistota(e.target.value)
                                                }}
                                         />
                                     </div>
                                 </div>
                                 <div className="real_vps_details_filter_input_title_wrapper">
                                     <p className="real_vps_details_filter_input_title">RAM</p>
                                     <div className="real_vps_details_filter_min_max_inputs_wrapper">
                                         <input type="number" minLength={1} maxLength={512}
                                                placeholder=' от 1'  className="real_vps_details_filter_input_field"
                                                value={start_ram}
                                                onChange={(e) => {
                                                    setStartRam(e.target.value)
                                                }}
                                         />
                                         <div>-</div>
                                         <input type="number" minLength={1} maxLength={512}
                                                placeholder='до 512' className="real_vps_details_filter_input_field"
                                                value={end_ram}
                                                onChange={(e) => {
                                                    setEndRam(e.target.value)
                                                }}
                                         />
                                     </div>
                                 </div>
                                 {/*<div className="real_vps_details_filter_input_title_wrapper">*/}
                                 {/*    <p className="real_vps_details_filter_input_title">Диск</p>*/}
                                 {/*    <div className="real_vps_details_filter_min_max_inputs_wrapper">*/}
                                 {/*        <input type="number" minLength={1} maxLength={500000}*/}
                                 {/*               placeholder='от 1'  className="real_vps_details_filter_input_field"*/}
                                 {/*               value={disk}*/}
                                 {/*               onChange={(e) => {*/}
                                 {/*                   setDisk(e.target.value)*/}
                                 {/*               }}*/}
                                 {/*        />*/}
                                 {/*        <div>-</div>*/}
                                 {/*        <input type="number" minLength={1} maxLength={500000}*/}
                                 {/*               placeholder='до 500000' className="real_vps_details_filter_input_field"*/}
                                 {/*               value={disk}*/}
                                 {/*               onChange={(e) => {*/}
                                 {/*                   setDisk(e.target.value)*/}
                                 {/*               }}*/}
                                 {/*        />*/}
                                 {/*    </div>*/}
                                 {/*</div>*/}
                                 <div className="real_vps_details_filter_input_title_wrapper">
                                     <p className="real_vps_details_filter_input_title">Цена</p>
                                     <div className="real_vps_details_filter_min_max_inputs_wrapper">
                                         <input type="number" minLength={10} maxLength={100000}
                                                placeholder='от 10' className="real_vps_details_filter_input_field"
                                                value={start_price}
                                                onChange={(e) => {
                                                    setStartPrice(e.target.value)

                                                }}
                                         />
                                         <div>-</div>
                                         <input type="number"  minLength={10} maxLength={100000}
                                                placeholder='до 100000' className="real_vps_details_filter_input_field"
                                                value={end_price}
                                                onChange={(e) => {
                                                    setEndPrice(e.target.value)

                                                }}
                                         />
                                     </div>
                                 </div>
                                <div className="real_vps_details_filters_dropdowns_title_wrapper">
                                     <p className="real_vps_details_filters_dropdowns_title">Страна</p>
                                     <div className="real_vps_details_filters_dropdown">
                                         <div
                                             className="real_vps_details_filters_dropdown_selected_option_icon_wrapper"
                                             onClick={() => setIsOpenFiltersList(!is_open_filters_list)}
                                         >
                                             <p
                                                 className='real_vps_details_filters_dropdown_selected_option'>
                                                 {select_country_filter_option ? select_country_filter_option.name : 'Страна'}
                                             </p>
                                             <span>
                                            {is_open_filters_list ?
                                                <svg style={{transform: 'rotate(-180deg)'}} xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                                    <path d="M15.7823 9.18894L10.9063 13.8479C10.8483 13.9032 10.7854 13.9423 10.7177 13.9652C10.65 13.9884 10.5774 14 10.5 14C10.4226 14 10.35 13.9884 10.2823 13.9652C10.2146 13.9423 10.1517 13.9032 10.0937 13.8479L5.20317 9.18894C5.06772 9.05991 5 8.89862 5 8.70507C5 8.51152 5.07256 8.34562 5.21768 8.20737C5.3628 8.06912 5.5321 8 5.72559 8C5.91909 8 6.08839 8.06912 6.23351 8.20737L10.5 12.2719L14.7665 8.20737C14.9019 8.07834 15.0687 8.01382 15.2669 8.01382C15.4654 8.01382 15.6372 8.08295 15.7823 8.2212C15.9274 8.35945 16 8.52074 16 8.70507C16 8.8894 15.9274 9.05069 15.7823 9.18894Z" fill="#333333"/>
                                                </svg>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                                    <path d="M15.7823 9.18894L10.9063 13.8479C10.8483 13.9032 10.7854 13.9423 10.7177 13.9652C10.65 13.9884 10.5774 14 10.5 14C10.4226 14 10.35 13.9884 10.2823 13.9652C10.2146 13.9423 10.1517 13.9032 10.0937 13.8479L5.20317 9.18894C5.06772 9.05991 5 8.89862 5 8.70507C5 8.51152 5.07256 8.34562 5.21768 8.20737C5.3628 8.06912 5.5321 8 5.72559 8C5.91909 8 6.08839 8.06912 6.23351 8.20737L10.5 12.2719L14.7665 8.20737C14.9019 8.07834 15.0687 8.01382 15.2669 8.01382C15.4654 8.01382 15.6372 8.08295 15.7823 8.2212C15.9274 8.35945 16 8.52074 16 8.70507C16 8.8894 15.9274 9.05069 15.7823 9.18894Z" fill="#333333"/>
                                                </svg>
                                            }
                                        </span>
                                         </div>
                                         {is_open_filters_list && (
                                             <div
                                                 className="real_vps_details_filters_dropdown_options_list_wrapper">
                                                 <div
                                                     className="real_vps_details_filters_dropdown_selected_option_icon_wrapper"
                                                     onClick={() =>
                                                         {
                                                             setIsOpenFiltersList(!is_open_filters_list)
                                                         }

                                                     }
                                                 >
                                                     <p
                                                         className='real_vps_details_filters_dropdown_selected_option'
                                                     >
                                                         {select_country_filter_option ? select_country_filter_option.name : 'Страна'}
                                                     </p>
                                                     <span>
                                            {is_open_filters_list ?
                                                <svg style={{transform: 'rotate(-180deg)'}} xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                                    <path d="M15.7823 9.18894L10.9063 13.8479C10.8483 13.9032 10.7854 13.9423 10.7177 13.9652C10.65 13.9884 10.5774 14 10.5 14C10.4226 14 10.35 13.9884 10.2823 13.9652C10.2146 13.9423 10.1517 13.9032 10.0937 13.8479L5.20317 9.18894C5.06772 9.05991 5 8.89862 5 8.70507C5 8.51152 5.07256 8.34562 5.21768 8.20737C5.3628 8.06912 5.5321 8 5.72559 8C5.91909 8 6.08839 8.06912 6.23351 8.20737L10.5 12.2719L14.7665 8.20737C14.9019 8.07834 15.0687 8.01382 15.2669 8.01382C15.4654 8.01382 15.6372 8.08295 15.7823 8.2212C15.9274 8.35945 16 8.52074 16 8.70507C16 8.8894 15.9274 9.05069 15.7823 9.18894Z" fill="#333333"/>
                                                </svg>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                                    <path d="M15.7823 9.18894L10.9063 13.8479C10.8483 13.9032 10.7854 13.9423 10.7177 13.9652C10.65 13.9884 10.5774 14 10.5 14C10.4226 14 10.35 13.9884 10.2823 13.9652C10.2146 13.9423 10.1517 13.9032 10.0937 13.8479L5.20317 9.18894C5.06772 9.05991 5 8.89862 5 8.70507C5 8.51152 5.07256 8.34562 5.21768 8.20737C5.3628 8.06912 5.5321 8 5.72559 8C5.91909 8 6.08839 8.06912 6.23351 8.20737L10.5 12.2719L14.7665 8.20737C14.9019 8.07834 15.0687 8.01382 15.2669 8.01382C15.4654 8.01382 15.6372 8.08295 15.7823 8.2212C15.9274 8.35945 16 8.52074 16 8.70507C16 8.8894 15.9274 9.05069 15.7823 9.18894Z" fill="#333333"/>
                                                </svg>
                                            }
                                        </span>
                                                 </div>
                                                 {filter_options_country_list?.map((option, index) => (
                                                     <p
                                                         key={index}
                                                         className="real_vps_details_filters_dropdown_options_list_option"
                                                         onClick={() =>
                                                             {
                                                                 setSelectCountryFilterOption(option)
                                                                 setIsOpenFiltersList(false)
                                                                 console.log(option, 'option')
                                                                 getCity(option.id)
                                                             }
                                                         }
                                                     >
                                                         {option.name}
                                                     </p>
                                                 ))}
                                             </div>
                                         )}
                                     </div>
                                 </div>
                                 <div className="real_vps_details_filters_dropdowns_title_wrapper">
                                     <p className="real_vps_details_filters_dropdowns_title">Город</p>
                                     <div className="real_vps_details_filters_dropdown">
                                         <div
                                             className="real_vps_details_filters_dropdown_selected_option_icon_wrapper"
                                             onClick={() => setIsOpenFiltersList2(!is_open_filters_list2)}
                                         >
                                             <p
                                                 className='real_vps_details_filters_dropdown_selected_option'>
                                                 {select_city_filter_option ? select_city_filter_option.name : 'Город'}
                                             </p>
                                             <span>
                                            {is_open_filters_list2 ?
                                                <svg style={{transform: 'rotate(-180deg)'}} xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                                    <path d="M15.7823 9.18894L10.9063 13.8479C10.8483 13.9032 10.7854 13.9423 10.7177 13.9652C10.65 13.9884 10.5774 14 10.5 14C10.4226 14 10.35 13.9884 10.2823 13.9652C10.2146 13.9423 10.1517 13.9032 10.0937 13.8479L5.20317 9.18894C5.06772 9.05991 5 8.89862 5 8.70507C5 8.51152 5.07256 8.34562 5.21768 8.20737C5.3628 8.06912 5.5321 8 5.72559 8C5.91909 8 6.08839 8.06912 6.23351 8.20737L10.5 12.2719L14.7665 8.20737C14.9019 8.07834 15.0687 8.01382 15.2669 8.01382C15.4654 8.01382 15.6372 8.08295 15.7823 8.2212C15.9274 8.35945 16 8.52074 16 8.70507C16 8.8894 15.9274 9.05069 15.7823 9.18894Z" fill="#333333"/>
                                                </svg>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                                    <path d="M15.7823 9.18894L10.9063 13.8479C10.8483 13.9032 10.7854 13.9423 10.7177 13.9652C10.65 13.9884 10.5774 14 10.5 14C10.4226 14 10.35 13.9884 10.2823 13.9652C10.2146 13.9423 10.1517 13.9032 10.0937 13.8479L5.20317 9.18894C5.06772 9.05991 5 8.89862 5 8.70507C5 8.51152 5.07256 8.34562 5.21768 8.20737C5.3628 8.06912 5.5321 8 5.72559 8C5.91909 8 6.08839 8.06912 6.23351 8.20737L10.5 12.2719L14.7665 8.20737C14.9019 8.07834 15.0687 8.01382 15.2669 8.01382C15.4654 8.01382 15.6372 8.08295 15.7823 8.2212C15.9274 8.35945 16 8.52074 16 8.70507C16 8.8894 15.9274 9.05069 15.7823 9.18894Z" fill="#333333"/>
                                                </svg>
                                            }
                                        </span>
                                         </div>
                                         {is_open_filters_list2 && (
                                             <div
                                                 className="real_vps_details_filters_dropdown_options_list_wrapper">
                                                 <div
                                                     className="real_vps_details_filters_dropdown_selected_option_icon_wrapper"
                                                     onClick={() => setIsOpenFiltersList2(!is_open_filters_list2)}
                                                 >
                                                     <p
                                                         className='real_vps_details_filters_dropdown_selected_option'
                                                     >
                                                         {select_city_filter_option ? select_city_filter_option.name : 'Город'}
                                                     </p>
                                                     <span>
                                            {is_open_filters_list2 ?
                                                <svg style={{transform: 'rotate(-180deg)'}} xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                                    <path d="M15.7823 9.18894L10.9063 13.8479C10.8483 13.9032 10.7854 13.9423 10.7177 13.9652C10.65 13.9884 10.5774 14 10.5 14C10.4226 14 10.35 13.9884 10.2823 13.9652C10.2146 13.9423 10.1517 13.9032 10.0937 13.8479L5.20317 9.18894C5.06772 9.05991 5 8.89862 5 8.70507C5 8.51152 5.07256 8.34562 5.21768 8.20737C5.3628 8.06912 5.5321 8 5.72559 8C5.91909 8 6.08839 8.06912 6.23351 8.20737L10.5 12.2719L14.7665 8.20737C14.9019 8.07834 15.0687 8.01382 15.2669 8.01382C15.4654 8.01382 15.6372 8.08295 15.7823 8.2212C15.9274 8.35945 16 8.52074 16 8.70507C16 8.8894 15.9274 9.05069 15.7823 9.18894Z" fill="#333333"/>
                                                </svg>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                                    <path d="M15.7823 9.18894L10.9063 13.8479C10.8483 13.9032 10.7854 13.9423 10.7177 13.9652C10.65 13.9884 10.5774 14 10.5 14C10.4226 14 10.35 13.9884 10.2823 13.9652C10.2146 13.9423 10.1517 13.9032 10.0937 13.8479L5.20317 9.18894C5.06772 9.05991 5 8.89862 5 8.70507C5 8.51152 5.07256 8.34562 5.21768 8.20737C5.3628 8.06912 5.5321 8 5.72559 8C5.91909 8 6.08839 8.06912 6.23351 8.20737L10.5 12.2719L14.7665 8.20737C14.9019 8.07834 15.0687 8.01382 15.2669 8.01382C15.4654 8.01382 15.6372 8.08295 15.7823 8.2212C15.9274 8.35945 16 8.52074 16 8.70507C16 8.8894 15.9274 9.05069 15.7823 9.18894Z" fill="#333333"/>
                                                </svg>
                                            }
                                        </span>
                                                 </div>
                                                 {filter_cities_options_list?.map((option, index) => (
                                                     <p
                                                         key={index}
                                                         className="real_vps_details_filters_dropdown_options_list_option"
                                                         onClick={() => {
                                                             {
                                                                setSelectCityFilterOption(option)
                                                                 setIsOpenFiltersList2(false)
                                                             }
                                                         }}
                                                     >
                                                         {option.name}
                                                     </p>
                                                 ))}
                                             </div>
                                         )}
                                     </div>

                                 </div>
                                 <div className="real_vps_details_filters_dropdowns_title_wrapper">
                                     <p className="real_vps_details_filters_dropdowns_title">Виртуализация</p>
                                     <div className="real_vps_details_filters_dropdown">
                                         <div
                                             className="real_vps_details_filters_dropdown_selected_option_icon_wrapper"
                                             onClick={() => setIsOpenFiltersList3(!is_open_filters_list3)}
                                         >
                                             <p
                                                 className='real_vps_details_filters_dropdown_selected_option'>
                                                 {select_filter_option3 ? select_filter_option3.label : 'Виртуализация'}
                                             </p>
                                             <span>
                                            {is_open_filters_list3 ?
                                                <svg style={{transform: 'rotate(-180deg)'}} xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                                    <path d="M15.7823 9.18894L10.9063 13.8479C10.8483 13.9032 10.7854 13.9423 10.7177 13.9652C10.65 13.9884 10.5774 14 10.5 14C10.4226 14 10.35 13.9884 10.2823 13.9652C10.2146 13.9423 10.1517 13.9032 10.0937 13.8479L5.20317 9.18894C5.06772 9.05991 5 8.89862 5 8.70507C5 8.51152 5.07256 8.34562 5.21768 8.20737C5.3628 8.06912 5.5321 8 5.72559 8C5.91909 8 6.08839 8.06912 6.23351 8.20737L10.5 12.2719L14.7665 8.20737C14.9019 8.07834 15.0687 8.01382 15.2669 8.01382C15.4654 8.01382 15.6372 8.08295 15.7823 8.2212C15.9274 8.35945 16 8.52074 16 8.70507C16 8.8894 15.9274 9.05069 15.7823 9.18894Z" fill="#333333"/>
                                                </svg>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                                    <path d="M15.7823 9.18894L10.9063 13.8479C10.8483 13.9032 10.7854 13.9423 10.7177 13.9652C10.65 13.9884 10.5774 14 10.5 14C10.4226 14 10.35 13.9884 10.2823 13.9652C10.2146 13.9423 10.1517 13.9032 10.0937 13.8479L5.20317 9.18894C5.06772 9.05991 5 8.89862 5 8.70507C5 8.51152 5.07256 8.34562 5.21768 8.20737C5.3628 8.06912 5.5321 8 5.72559 8C5.91909 8 6.08839 8.06912 6.23351 8.20737L10.5 12.2719L14.7665 8.20737C14.9019 8.07834 15.0687 8.01382 15.2669 8.01382C15.4654 8.01382 15.6372 8.08295 15.7823 8.2212C15.9274 8.35945 16 8.52074 16 8.70507C16 8.8894 15.9274 9.05069 15.7823 9.18894Z" fill="#333333"/>
                                                </svg>
                                            }
                                        </span>
                                         </div>
                                         {is_open_filters_list3 && (
                                             <div
                                                 className="real_vps_details_filters_dropdown_options_list_wrapper">
                                                 <div
                                                     className="real_vps_details_filters_dropdown_selected_option_icon_wrapper"
                                                     onClick={() => setIsOpenFiltersList3(!is_open_filters_list3)}
                                                 >
                                                     <p
                                                         className='real_vps_details_filters_dropdown_selected_option'
                                                     >
                                                         {select_filter_option3 ? select_filter_option3.label : 'Виртуализация'}
                                                     </p>
                                                     <span>
                                            {is_open_filters_list3 ?
                                                <svg style={{transform: 'rotate(-180deg)'}} xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                                    <path d="M15.7823 9.18894L10.9063 13.8479C10.8483 13.9032 10.7854 13.9423 10.7177 13.9652C10.65 13.9884 10.5774 14 10.5 14C10.4226 14 10.35 13.9884 10.2823 13.9652C10.2146 13.9423 10.1517 13.9032 10.0937 13.8479L5.20317 9.18894C5.06772 9.05991 5 8.89862 5 8.70507C5 8.51152 5.07256 8.34562 5.21768 8.20737C5.3628 8.06912 5.5321 8 5.72559 8C5.91909 8 6.08839 8.06912 6.23351 8.20737L10.5 12.2719L14.7665 8.20737C14.9019 8.07834 15.0687 8.01382 15.2669 8.01382C15.4654 8.01382 15.6372 8.08295 15.7823 8.2212C15.9274 8.35945 16 8.52074 16 8.70507C16 8.8894 15.9274 9.05069 15.7823 9.18894Z" fill="#333333"/>
                                                </svg>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                                    <path d="M15.7823 9.18894L10.9063 13.8479C10.8483 13.9032 10.7854 13.9423 10.7177 13.9652C10.65 13.9884 10.5774 14 10.5 14C10.4226 14 10.35 13.9884 10.2823 13.9652C10.2146 13.9423 10.1517 13.9032 10.0937 13.8479L5.20317 9.18894C5.06772 9.05991 5 8.89862 5 8.70507C5 8.51152 5.07256 8.34562 5.21768 8.20737C5.3628 8.06912 5.5321 8 5.72559 8C5.91909 8 6.08839 8.06912 6.23351 8.20737L10.5 12.2719L14.7665 8.20737C14.9019 8.07834 15.0687 8.01382 15.2669 8.01382C15.4654 8.01382 15.6372 8.08295 15.7823 8.2212C15.9274 8.35945 16 8.52074 16 8.70507C16 8.8894 15.9274 9.05069 15.7823 9.18894Z" fill="#333333"/>
                                                </svg>
                                            }
                                        </span>
                                                 </div>
                                                 {filter_options_list3.map((option) => (
                                                     <p
                                                         key={option.value}
                                                         className="real_vps_details_filters_dropdown_options_list_option"
                                                         onClick={() =>
                                                             {
                                                                 setSelectSortOption3(option)
                                                                 setIsOpenFiltersList3(false)

                                                             }
                                                         }
                                                     >
                                                         {option.label}
                                                     </p>
                                                 ))}
                                             </div>
                                         )}
                                     </div>

                                 </div>
                                 <div className="real_vps_details_filters_dropdowns_title_wrapper">
                                     <p className="real_vps_details_filters_dropdowns_title">Тип диска</p>
                                     <div className="real_vps_details_filters_dropdown">
                                         <div
                                             className="real_vps_details_filters_dropdown_selected_option_icon_wrapper"
                                             onClick={() => setIsOpenFiltersList4(!is_open_filters_list4)}
                                         >
                                             <p
                                                 className='real_vps_details_filters_dropdown_selected_option'>
                                                 {select_filter_option4 ? select_filter_option4.label : 'Тип диска'}
                                             </p>
                                             <span>
                                            {is_open_filters_list4 ?
                                                <svg style={{transform: 'rotate(-180deg)'}} xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                                    <path d="M15.7823 9.18894L10.9063 13.8479C10.8483 13.9032 10.7854 13.9423 10.7177 13.9652C10.65 13.9884 10.5774 14 10.5 14C10.4226 14 10.35 13.9884 10.2823 13.9652C10.2146 13.9423 10.1517 13.9032 10.0937 13.8479L5.20317 9.18894C5.06772 9.05991 5 8.89862 5 8.70507C5 8.51152 5.07256 8.34562 5.21768 8.20737C5.3628 8.06912 5.5321 8 5.72559 8C5.91909 8 6.08839 8.06912 6.23351 8.20737L10.5 12.2719L14.7665 8.20737C14.9019 8.07834 15.0687 8.01382 15.2669 8.01382C15.4654 8.01382 15.6372 8.08295 15.7823 8.2212C15.9274 8.35945 16 8.52074 16 8.70507C16 8.8894 15.9274 9.05069 15.7823 9.18894Z" fill="#333333"/>
                                                </svg>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                                    <path d="M15.7823 9.18894L10.9063 13.8479C10.8483 13.9032 10.7854 13.9423 10.7177 13.9652C10.65 13.9884 10.5774 14 10.5 14C10.4226 14 10.35 13.9884 10.2823 13.9652C10.2146 13.9423 10.1517 13.9032 10.0937 13.8479L5.20317 9.18894C5.06772 9.05991 5 8.89862 5 8.70507C5 8.51152 5.07256 8.34562 5.21768 8.20737C5.3628 8.06912 5.5321 8 5.72559 8C5.91909 8 6.08839 8.06912 6.23351 8.20737L10.5 12.2719L14.7665 8.20737C14.9019 8.07834 15.0687 8.01382 15.2669 8.01382C15.4654 8.01382 15.6372 8.08295 15.7823 8.2212C15.9274 8.35945 16 8.52074 16 8.70507C16 8.8894 15.9274 9.05069 15.7823 9.18894Z" fill="#333333"/>
                                                </svg>
                                            }
                                        </span>
                                         </div>
                                         {is_open_filters_list4 && (
                                             <div
                                                 className="real_vps_details_filters_dropdown_options_list_wrapper">
                                                 <div
                                                     className="real_vps_details_filters_dropdown_selected_option_icon_wrapper"
                                                     onClick={() => setIsOpenFiltersList4(!is_open_filters_list4)}
                                                 >
                                                     <p
                                                         className='real_vps_details_filters_dropdown_selected_option'
                                                     >
                                                         {select_filter_option4 ? select_filter_option4.label : 'Тип диска'}
                                                     </p>
                                                     <span>
                                            {is_open_filters_list4 ?
                                                <svg style={{transform: 'rotate(-180deg)'}} xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                                    <path d="M15.7823 9.18894L10.9063 13.8479C10.8483 13.9032 10.7854 13.9423 10.7177 13.9652C10.65 13.9884 10.5774 14 10.5 14C10.4226 14 10.35 13.9884 10.2823 13.9652C10.2146 13.9423 10.1517 13.9032 10.0937 13.8479L5.20317 9.18894C5.06772 9.05991 5 8.89862 5 8.70507C5 8.51152 5.07256 8.34562 5.21768 8.20737C5.3628 8.06912 5.5321 8 5.72559 8C5.91909 8 6.08839 8.06912 6.23351 8.20737L10.5 12.2719L14.7665 8.20737C14.9019 8.07834 15.0687 8.01382 15.2669 8.01382C15.4654 8.01382 15.6372 8.08295 15.7823 8.2212C15.9274 8.35945 16 8.52074 16 8.70507C16 8.8894 15.9274 9.05069 15.7823 9.18894Z" fill="#333333"/>
                                                </svg>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                                    <path d="M15.7823 9.18894L10.9063 13.8479C10.8483 13.9032 10.7854 13.9423 10.7177 13.9652C10.65 13.9884 10.5774 14 10.5 14C10.4226 14 10.35 13.9884 10.2823 13.9652C10.2146 13.9423 10.1517 13.9032 10.0937 13.8479L5.20317 9.18894C5.06772 9.05991 5 8.89862 5 8.70507C5 8.51152 5.07256 8.34562 5.21768 8.20737C5.3628 8.06912 5.5321 8 5.72559 8C5.91909 8 6.08839 8.06912 6.23351 8.20737L10.5 12.2719L14.7665 8.20737C14.9019 8.07834 15.0687 8.01382 15.2669 8.01382C15.4654 8.01382 15.6372 8.08295 15.7823 8.2212C15.9274 8.35945 16 8.52074 16 8.70507C16 8.8894 15.9274 9.05069 15.7823 9.18894Z" fill="#333333"/>
                                                </svg>
                                            }
                                        </span>
                                                 </div>
                                                 {filter_options_list4.map((option) => (
                                                     <p
                                                         key={option.value}
                                                         className="real_vps_details_filters_dropdown_options_list_option"
                                                         onClick={() =>
                                                             {
                                                                 setSelectSortOption4(option)
                                                                 setIsOpenFiltersList4(false)

                                                             }

                                                         }

                                                     >
                                                         {option.label}
                                                     </p>
                                                 ))}
                                             </div>
                                         )}
                                     </div>

                                 </div>
                                 <div className="real_vps_details_filter_input_title_wrapper">
                                     <p className="real_vps_details_filter_input_title">Полоса пропускания</p>
                                     <div className="real_vps_details_filter_min_max_inputs_wrapper">
                                         <input type="number" minLength={1} maxLength={10000}
                                                placeholder='от 1' className="real_vps_details_filter_input_field"
                                                value={start_polosa}
                                                onChange={(e) => {
                                                    setStartPolosa(e.target.value)

                                                }}
                                         />
                                         <div>-</div>
                                         <input type="number" minLength={1} maxLength={10000}
                                                placeholder='до 10000' className="real_vps_details_filter_input_field"
                                                value={end_polosa}
                                                onChange={(e) => {
                                                    setEndPolosa(e.target.value)
                                                }}
                                         />
                                     </div>
                                 </div>
                                 <div className="real_vps_details_filter_input_title_wrapper">
                                     <p className="real_vps_details_filter_input_title">Оценка баллов</p>
                                     <div className="real_vps_details_filter_min_max_inputs_wrapper">
                                         <input type="number" maxLength={1} minLength={100} placeholder='от 1' className="real_vps_details_filter_input_field"/>
                                         <div>-</div>
                                         <input type="number" maxLength={1} minLength={100} placeholder='до 100' className="real_vps_details_filter_input_field"/>
                                     </div>
                                 </div>
                         </div>
                     </section>
                     <section className="real_vps_details">
                         <div className="real_vps_details_wrapper">
                             <div className="real_vps_details_items_wrapper">
                                 <div className="real_vps_details_item">
                                     <p className="real_vps_details_item_title">16592</p>
                                     <p className="real_vps_details_item_info">Зарегистрированные компании</p>
                                 </div>
                                 <div className="real_vps_details_item">
                                     <p className="real_vps_details_item_title">2134121</p>
                                     <p className="real_vps_details_item_info">Проведённые тесты</p>
                                 </div>
                                 <div className="real_vps_details_item">
                                     <p className="real_vps_details_item_title">23721910</p>
                                     <p className="real_vps_details_item_info">Зарегистрированные тарифы</p>
                                 </div>
                             </div>
                         </div>
                     </section>
                     <section className='tariff_wrapper'>
                         {/*<div className='datatable_pagination_wrapper'>*/}
                         {/*    <DataTable value={data_table_info} className='datatable'  stripedRows paginator rows={11} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem'}}   dataKey="id" tableStyle={{ minWidth: '50rem' }}>*/}
                         {/*        <Column field="image"  header="Компания" headerStyle={{color: '#333', fontFamily: 'Raleway', fontSize: '18px', fontWeight: '600'}} body={imageBodyTemplate} ></Column>*/}
                         {/*        <Column field="disk"  header="Диск" headerStyle={{color: '#333', fontFamily: 'Raleway', fontSize: '18px', fontWeight: '600'}}  ></Column>*/}
                         {/*        <Column field="memory" header="Память" headerStyle={{color: '#333', fontFamily: 'Raleway', fontSize: '18px', fontWeight: '600'}}></Column>*/}
                         {/*        <Column field="processor" header="Процессор" headerStyle={{color: '#333', fontFamily: 'Raleway', fontSize: '18px', fontWeight: '600'}}></Column>*/}
                         {/*        <Column field="traffic" header="Трафик" headerStyle={{color: '#333', fontFamily: 'Raleway', fontSize: '18px', fontWeight: '600'}}></Column>*/}
                         {/*        <Column field="price" header="Цена" headerStyle={{color: '#333', fontFamily: 'Raleway', fontSize: '18px', fontWeight: '600'}}></Column>*/}
                         {/*        <Column field="virtualization" header="Виртуализация" headerStyle={{color: '#333', fontFamily: 'Raleway', fontSize: '18px', fontWeight: '600'}}></Column>*/}
                         {/*        <Column field="country" header="Страна" headerStyle={{color: '#333', fontFamily: 'Raleway', fontSize: '18px', fontWeight: '600'}}></Column>*/}
                         {/*        <Column field="Ipv6" header="Ipv6" headerStyle={{color: '#333', fontFamily: 'Raleway', fontSize: '18px', fontWeight: '600'}}></Column>*/}
                         {/*    </DataTable>*/}
                         {/*</div>*/}

                             <div className='tariff_titles_wrapper'>
                                 <p className="tariff_title">Компания</p>
                                 <p className="tariff_title">Диск</p>
                                 <p className="tariff_title">Память</p>
                                 <p className="tariff_title">Процессор</p>
                                 <p className="tariff_title">Трафик</p>
                                 <p className="tariff_title">Цена</p>
                                 <p className="tariff_title">Виртуализация</p>
                                 <p className="tariff_title">Страна</p>
                                 <p className="tariff_title">Ipv6</p>
                             </div>

                         <div className="tariff_items_wrapper">
                             {tariff_list?.data?.map((item, index) => {
                                 return (
                                     <div className="tariff_item" key={index}>
                                             <div className='tariff_item_img'>
                                                 {item?.provider &&
                                                     <div className='tariff_item_img_child'>
                                                         <img src={img_path + item?.provider?.photo} alt=""/>
                                                         <span className='tariff_item_img_info'>{item?.provider?.name}</span>
                                                     </div>

                                                 }
                                             </div>

                                         <p className='tariff_item_info'>{item?.obyom_diska ? item?.obyom_diska : ''} <br/> {item?.tip_diska ? item?.tip_diska : ''}</p>
                                         <p className='tariff_item_info'>{item?.operativnaya_pamaty ? item?.operativnaya_pamaty : ''}</p>
                                         <p className='tariff_item_info'>{item?.tip_processora ? item?.tip_processora : ''}</p>
                                         <p className='tariff_item_info'>{item?.tip_processora ? item?.tip_processora : ''}</p>
                                         <p className='tariff_item_info'>{item?.cena_za_mesyac ? item?.cena_za_mesyac : ''}</p>
                                         <p className='tariff_item_info'>{item?.virtulizaciya ? item?.virtulizaciya : ''}</p>
                                         <p className='tariff_item_info'>{item?.country?.name ? item?.country?.name : ''}</p>
                                         <p className='tariff_item_info'>{item?.nalichie_ip_6 ? item?.nalichie_ip_6 : ''}</p>
                                     </div>
                                 )
                             })}
                         </div>
                         <div className='providers_pagination_wrapper' >

                             {tariff_list?.links?.map((pagination, index) => {
                                 return (

                                     <div key={index}>
                                         {pagination.label == '&laquo; Previous'  &&
                                         <div>
                                             {pagination.url  ?
                                                 <button
                                                     className='providers_pagination_prev_btn'
                                                     onClick={() => {handlePrevButtonClick(index)}}>
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                         <path d="M15 18L9 12L15 6" stroke="#528DFF"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                     </svg>
                                                 </button>
                                                 :
                                                 <button className='providers_pagination_prev_btn' disabled={true}>
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                         <path d="M15 18L9 12L15 6" stroke="#528DFF" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                     </svg>
                                                 </button>

                                             }

                                         </div>
                                         }

                                         {pagination.label != 'Next &raquo;' && pagination.label != '&laquo; Previous'  &&
                                         <button
                                             key={index}
                                             className={pagination.active === true ? 'active_link' : 'providers_pagination_link' }
                                             onClick={() => {
                                                 getTariffs(pagination.url)
                                             }}
                                         >

                                             {pagination.label}


                                         </button>
                                         }

                                         {pagination.label == 'Next &raquo;' &&
                                         <div>
                                             {pagination.url ?
                                                 <button
                                                     className='providers_pagination_next_btn'
                                                     onClick={() =>{handleNextButtonClick(index)}}>

                                                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                         <path d="M9 18L15 12L9 6" stroke="#528DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                     </svg>

                                                 </button>
                                                 :
                                                 <button className='providers_pagination_next_btn' disabled={true}>
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                         <path d="M9 18L15 12L9 6" strokeOpacity="0.5" stroke="#528DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                     </svg>
                                                 </button>
                                             }



                                         </div>

                                         }

                                     </div>

                                 )
                             })}

                         </div>


                     </section>
                     <section className='real_vps_details2'>
                         <div className="real_vps_details2_wrapper">
                             <p className='real_vps_details2_info'>Идейные соображения высшего порядка, а также перспективное планирование способствует повышению качества вывода текущих активов. В своём стремлении улучшить пользовательский опыт мы упускаем, что некоторые особенности внутренней политики являются только методом политического участия и ограничены исключительно образом мышления.</p>
                             <p className='real_vps_details2_info'>
                                 Вот вам яркий пример современных тенденций — базовый вектор развития не оставляет шанса для первоочередных требований. Лишь активно развивающиеся страны третьего мира функционально разнесены на независимые элементы. В целом, конечно, сложившаяся структура организации позволяет выполнить важные задания по разработке новых принципов формирования материально-технической и кадровой базы. Есть над чем задуматься: интерактивные прототипы освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, призваны к ответу. Лишь явные признаки победы институционализации призывают нас к новым свершениям, которые, в свою очередь, должны быть описаны максимально подробно. Задача организации, в особенности же перспективное планирование не даёт нам иного выбора, кроме определения модели развития.
                             </p>
                             <p className='real_vps_details2_info'>
                                 С учётом сложившейся международной обстановки, существующая теория создаёт предпосылки для глубокомысленных рассуждений. Наше дело не так однозначно, как может показаться: синтетическое тестирование предполагает независимые способы реализации позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что экономическая повестка сегодняшнего дня выявляет срочную потребность приоретизации разума над эмоциями. Но интерактивные прототипы в равной степени предоставлены сами себе.
                             </p>
                         </div>
                     </section>
                 </main>
                 <Footer/>
             </div>

         </>

     )


 }



