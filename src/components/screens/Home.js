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
     const [select_filter_option, setSelectSortOption] = useState(null);
     const [filter_options_list, setFilterOptionsList] = useState([
         {
             id: 1,
             value: 'По возрастанию цены',
             label: 'По возрастанию цены',
         },
         {
             id: 2,
             value: 'По убыванию цены',
             label: 'По убыванию цены',
         },
         {
             id: 3,
             value: 'Новинки',
             label: 'Новинки'
         },
     ]);

     const [is_open_filters_list2, setIsOpenFiltersList2] = useState(false);
     const [select_filter_option2, setSelectSortOption2] = useState(null);
     const [filter_options_list2, setFilterOptionsList2] = useState([
         {
             id: 1,
             value: 'По возрастанию цены',
             label: 'По возрастанию цены',
         },
         {
             id: 2,
             value: 'По убыванию цены',
             label: 'По убыванию цены',
         },
         {
             id: 3,
             value: 'Новинки',
             label: 'Новинки'
         },
     ]);

     const [is_open_filters_list3, setIsOpenFiltersList3] = useState(false);
     const [select_filter_option3, setSelectSortOption3] = useState(null);
     const [filter_options_list3, setFilterOptionsList3] = useState([
         {
             id: 1,
             value: 'По возрастанию цены',
             label: 'По возрастанию цены',
         },
         {
             id: 2,
             value: 'По убыванию цены',
             label: 'По убыванию цены',
         },
         {
             id: 3,
             value: 'Новинки',
             label: 'Новинки'
         },
     ]);

     const [is_open_filters_list4, setIsOpenFiltersList4] = useState(false);
     const [select_filter_option4, setSelectSortOption4] = useState(null);
     const [filter_options_list4, setFilterOptionsList4] = useState([
         {
             id: 1,
             value: 'По возрастанию цены',
             label: 'По возрастанию цены',
         },
         {
             id: 2,
             value: 'По убыванию цены',
             label: 'По убыванию цены',
         },
         {
             id: 3,
             value: 'Новинки',
             label: 'Новинки'
         },
     ]);

     const [is_open_filters_list5, setIsOpenFiltersList5] = useState(false);
     const [select_filter_option5, setSelectSortOption5] = useState(null);
     const [filter_options_list5, setFilterOptionsList5] = useState([
         {
             id: 1,
             value: 'По возрастанию цены',
             label: 'По возрастанию цены',
         },
         {
             id: 2,
             value: 'По убыванию цены',
             label: 'По убыванию цены',
         },
         {
             id: 3,
             value: 'Новинки',
             label: 'Новинки'
         },
     ]);

     const [is_open_filters_list6, setIsOpenFiltersList6] = useState(false);
     const [select_filter_option6, setSelectSortOption6] = useState(null);
     const [filter_options_list6, setFilterOptionsList6] = useState([
         {
             id: 1,
             value: 'По возрастанию цены',
             label: 'По возрастанию цены',
         },
         {
             id: 2,
             value: 'По убыванию цены',
             label: 'По убыванию цены',
         },
         {
             id: 3,
             value: 'Новинки',
             label: 'Новинки'
         },
     ]);

     const [is_open_filters_list7, setIsOpenFiltersList7] = useState(false);
     const [select_filter_option7, setSelectSortOption7] = useState(null);
     const [filter_options_list7, setFilterOptionsList7] = useState([
         {
             id: 1,
             value: 'По возрастанию цены',
             label: 'По возрастанию цены',
         },
         {
             id: 2,
             value: 'По убыванию цены',
             label: 'По убыванию цены',
         },
         {
             id: 3,
             value: 'Новинки',
             label: 'Новинки'
         },
     ]);

     const [is_open_filters_list8, setIsOpenFiltersList8] = useState(false);
     const [select_filter_option8, setSelectSortOption8] = useState(null);
     const [filter_options_list8, setFilterOptionsList8] = useState([
         {
             id: 1,
             value: 'По возрастанию цены',
             label: 'По возрастанию цены',
         },
         {
             id: 2,
             value: 'По убыванию цены',
             label: 'По убыванию цены',
         },
         {
             id: 3,
             value: 'Новинки',
             label: 'Новинки'
         },
     ]);

     const [is_open_filters_list9, setIsOpenFiltersList9] = useState(false);
     const [select_filter_option9, setSelectSortOption9] = useState(null);
     const [filter_options_list9, setFilterOptionsList9] = useState([
         {
             id: 1,
             value: 'По возрастанию цены',
             label: 'По возрастанию цены',
         },
         {
             id: 2,
             value: 'По убыванию цены',
             label: 'По убыванию цены',
         },
         {
             id: 3,
             value: 'Новинки',
             label: 'Новинки'
         },
     ]);

     const [is_open_filters_list10, setIsOpenFiltersList10] = useState(false);
     const [select_filter_option10, setSelectSortOption10] = useState(null);
     const [filter_options_list10, setFilterOptionsList10] = useState([
         {
             id: 1,
             value: 'По возрастанию цены',
             label: 'По возрастанию цены',
         },
         {
             id: 2,
             value: 'По убыванию цены',
             label: 'По убыванию цены',
         },
         {
             id: 3,
             value: 'Новинки',
             label: 'Новинки'
         },
     ]);
     const [rowClick, setRowClick] = useState(true);

     // const [data_table_info, setDataTableInfo] = useState([]);

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
                             <div className="real_vps_details_filter_inputs_main_wrapper">
                                 <div className="real_vps_details_filter_input_title_wrapper">
                                     <p className="real_vps_details_filter_input_title">Фильтр</p>
                                     <div className="real_vps_details_filter_min_max_inputs_wrapper">
                                         <input type="number" placeholder='0' className="real_vps_details_filter_input_field"/>
                                         <div>-</div>
                                         <input type="number" placeholder='0' className="real_vps_details_filter_input_field"/>
                                     </div>
                                 </div>
                                 <div className="real_vps_details_filter_input_title_wrapper">
                                     <p className="real_vps_details_filter_input_title">Фильтр</p>
                                     <div className="real_vps_details_filter_min_max_inputs_wrapper">
                                         <input type="number" placeholder='0' className="real_vps_details_filter_input_field"/>
                                         <div>-</div>
                                         <input type="number" placeholder='0' className="real_vps_details_filter_input_field"/>
                                     </div>
                                 </div>
                                 <div className="real_vps_details_filter_input_title_wrapper">
                                     <p className="real_vps_details_filter_input_title">Фильтр</p>
                                     <div className="real_vps_details_filter_min_max_inputs_wrapper">
                                         <input type="number" placeholder='0' className="real_vps_details_filter_input_field"/>
                                         <div>-</div>
                                         <input type="number" placeholder='0' className="real_vps_details_filter_input_field"/>
                                     </div>
                                 </div>
                                 <div className="real_vps_details_filter_input_title_wrapper">
                                     <p className="real_vps_details_filter_input_title">Фильтр</p>
                                     <div className="real_vps_details_filter_min_max_inputs_wrapper">
                                         <input type="number" placeholder='0' className="real_vps_details_filter_input_field"/>
                                         <div>-</div>
                                         <input type="number" placeholder='0' className="real_vps_details_filter_input_field"/>
                                     </div>
                                 </div>
                                 <div className="real_vps_details_filter_input_title_wrapper">
                                     <p className="real_vps_details_filter_input_title">Фильтр</p>
                                     <div className="real_vps_details_filter_min_max_inputs_wrapper">
                                         <input type="number" placeholder='0' className="real_vps_details_filter_input_field"/>
                                         <div>-</div>
                                         <input type="number" placeholder='0' className="real_vps_details_filter_input_field"/>
                                     </div>
                                 </div>
                             </div>
                             <div className="real_vps_details_filters_dropdowns_wrapper">
                                 <div className="real_vps_details_filters_dropdowns_title_wrapper">
                                     <p className="real_vps_details_filters_dropdowns_title">Фильтр</p>
                                     <div className="real_vps_details_filters_dropdown">
                                         <div
                                             className="real_vps_details_filters_dropdown_selected_option_icon_wrapper"
                                             onClick={() => setIsOpenFiltersList(!is_open_filters_list)}
                                         >
                                             <p
                                                 className='real_vps_details_filters_dropdown_selected_option'>
                                                 {select_filter_option ? select_filter_option.label : 'Фильтр'}
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
                                                     onClick={() => setIsOpenFiltersList(!is_open_filters_list)}
                                                 >
                                                     <p
                                                         className='real_vps_details_filters_dropdown_selected_option'
                                                     >
                                                         {select_filter_option ? select_filter_option.label : 'Фильтр'}
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
                                                 {filter_options_list.map((option) => (
                                                     <p
                                                         key={option.value}
                                                         className="real_vps_details_filters_dropdown_options_list_option"
                                                         onClick={() => setSelectSortOption(option)}
                                                     >
                                                         {option.label}
                                                     </p>
                                                 ))}
                                             </div>
                                         )}
                                     </div>
                                 </div>
                                 <div className="real_vps_details_filters_dropdowns_title_wrapper">
                                     <p className="real_vps_details_filters_dropdowns_title">Фильтр</p>
                                     <div className="real_vps_details_filters_dropdown">
                                         <div
                                             className="real_vps_details_filters_dropdown_selected_option_icon_wrapper"
                                             onClick={() => setIsOpenFiltersList2(!is_open_filters_list2)}
                                         >
                                             <p
                                                 className='real_vps_details_filters_dropdown_selected_option'>
                                                 {select_filter_option2 ? select_filter_option2.label : 'Фильтр'}
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
                                                         {select_filter_option2 ? select_filter_option2.label : 'Фильтр'}
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
                                                 {filter_options_list2.map((option) => (
                                                     <p
                                                         key={option.value}
                                                         className="real_vps_details_filters_dropdown_options_list_option"
                                                         onClick={() => setSelectSortOption2(option)}
                                                     >
                                                         {option.label}
                                                     </p>
                                                 ))}
                                             </div>
                                         )}
                                     </div>

                                 </div>
                                 <div className="real_vps_details_filters_dropdowns_title_wrapper">
                                     <p className="real_vps_details_filters_dropdowns_title">Фильтр</p>
                                     <div className="real_vps_details_filters_dropdown">
                                         <div
                                             className="real_vps_details_filters_dropdown_selected_option_icon_wrapper"
                                             onClick={() => setIsOpenFiltersList3(!is_open_filters_list3)}
                                         >
                                             <p
                                                 className='real_vps_details_filters_dropdown_selected_option'>
                                                 {select_filter_option3 ? select_filter_option3.label : 'Фильтр'}
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
                                                         {select_filter_option3 ? select_filter_option3.label : 'Фильтр'}
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
                                                         onClick={() => setSelectSortOption3(option)}
                                                     >
                                                         {option.label}
                                                     </p>
                                                 ))}
                                             </div>
                                         )}
                                     </div>

                                 </div>
                                 <div className="real_vps_details_filters_dropdowns_title_wrapper">
                                     <p className="real_vps_details_filters_dropdowns_title">Фильтр</p>
                                     <div className="real_vps_details_filters_dropdown">
                                         <div
                                             className="real_vps_details_filters_dropdown_selected_option_icon_wrapper"
                                             onClick={() => setIsOpenFiltersList4(!is_open_filters_list4)}
                                         >
                                             <p
                                                 className='real_vps_details_filters_dropdown_selected_option'>
                                                 {select_filter_option4 ? select_filter_option4.label : 'Фильтр'}
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
                                                         {select_filter_option4 ? select_filter_option4.label : 'Фильтр'}
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
                                                         onClick={() => setSelectSortOption4(option)}
                                                     >
                                                         {option.label}
                                                     </p>
                                                 ))}
                                             </div>
                                         )}
                                     </div>

                                 </div>
                                 <div className="real_vps_details_filters_dropdowns_title_wrapper">
                                     <p className="real_vps_details_filters_dropdowns_title">Фильтр</p>
                                     <div className="real_vps_details_filters_dropdown">
                                         <div
                                             className="real_vps_details_filters_dropdown_selected_option_icon_wrapper"
                                             onClick={() => setIsOpenFiltersList5(!is_open_filters_list5)}
                                         >
                                             <p
                                                 className='real_vps_details_filters_dropdown_selected_option'>
                                                 {select_filter_option5 ? select_filter_option5.label : 'Фильтр'}
                                             </p>
                                             <span>
                                            {is_open_filters_list5 ?
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
                                         {is_open_filters_list5 && (
                                             <div
                                                 className="real_vps_details_filters_dropdown_options_list_wrapper">
                                                 <div
                                                     className="real_vps_details_filters_dropdown_selected_option_icon_wrapper"
                                                     onClick={() => setIsOpenFiltersList5(!is_open_filters_list5)}
                                                 >
                                                     <p
                                                         className='real_vps_details_filters_dropdown_selected_option'
                                                     >
                                                         {select_filter_option5 ? select_filter_option5.label : 'Фильтр'}
                                                     </p>
                                                     <span>
                                            {is_open_filters_list5 ?
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
                                                 {filter_options_list5.map((option) => (
                                                     <p
                                                         key={option.value}
                                                         className="real_vps_details_filters_dropdown_options_list_option"
                                                         onClick={() => setSelectSortOption5(option)}
                                                     >
                                                         {option.label}
                                                     </p>
                                                 ))}
                                             </div>
                                         )}
                                     </div>

                                 </div>
                                 <div className="real_vps_details_filters_dropdowns_title_wrapper">
                                     <p className="real_vps_details_filters_dropdowns_title">Фильтр</p>
                                     <div className="real_vps_details_filters_dropdown">
                                         <div
                                             className="real_vps_details_filters_dropdown_selected_option_icon_wrapper"
                                             onClick={() => setIsOpenFiltersList6(!is_open_filters_list6)}
                                         >
                                             <p
                                                 className='real_vps_details_filters_dropdown_selected_option'>
                                                 {select_filter_option6 ? select_filter_option6.label : 'Фильтр'}
                                             </p>
                                             <span>
                                            {is_open_filters_list6 ?
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
                                         {is_open_filters_list6 && (
                                             <div
                                                 className="real_vps_details_filters_dropdown_options_list_wrapper">
                                                 <div
                                                     className="real_vps_details_filters_dropdown_selected_option_icon_wrapper"
                                                     onClick={() => setIsOpenFiltersList6(!is_open_filters_list6)}
                                                 >
                                                     <p
                                                         className='real_vps_details_filters_dropdown_selected_option'
                                                     >
                                                         {select_filter_option6 ? select_filter_option6.label : 'Фильтр'}
                                                     </p>
                                                     <span>
                                            {is_open_filters_list6 ?
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
                                                 {filter_options_list6.map((option) => (
                                                     <p
                                                         key={option.value}
                                                         className="real_vps_details_filters_dropdown_options_list_option"
                                                         onClick={() => setSelectSortOption6(option)}
                                                     >
                                                         {option.label}
                                                     </p>
                                                 ))}
                                             </div>
                                         )}
                                     </div>

                                 </div>
                                 <div className="real_vps_details_filters_dropdowns_title_wrapper">
                                     <p className="real_vps_details_filters_dropdowns_title">Фильтр</p>
                                     <div className="real_vps_details_filters_dropdown">
                                         <div
                                             className="real_vps_details_filters_dropdown_selected_option_icon_wrapper"
                                             onClick={() => setIsOpenFiltersList7(!is_open_filters_list7)}
                                         >
                                             <p
                                                 className='real_vps_details_filters_dropdown_selected_option'>
                                                 {select_filter_option7 ? select_filter_option7.label : 'Фильтр'}
                                             </p>
                                             <span>
                                            {is_open_filters_list7 ?
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
                                         {is_open_filters_list7 && (
                                             <div
                                                 className="real_vps_details_filters_dropdown_options_list_wrapper">
                                                 <div
                                                     className="real_vps_details_filters_dropdown_selected_option_icon_wrapper"
                                                     onClick={() => setIsOpenFiltersList7(!is_open_filters_list7)}
                                                 >
                                                     <p
                                                         className='real_vps_details_filters_dropdown_selected_option'
                                                     >
                                                         {select_filter_option7 ? select_filter_option7.label : 'Фильтр'}
                                                     </p>
                                                     <span>
                                            {is_open_filters_list7 ?
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
                                                 {filter_options_list7.map((option) => (
                                                     <p
                                                         key={option.value}
                                                         className="real_vps_details_filters_dropdown_options_list_option"
                                                         onClick={() => setSelectSortOption7(option)}
                                                     >
                                                         {option.label}
                                                     </p>
                                                 ))}
                                             </div>
                                         )}
                                     </div>

                                 </div>
                                 <div className="real_vps_details_filters_dropdowns_title_wrapper">
                                     <p className="real_vps_details_filters_dropdowns_title">Фильтр</p>
                                     <div className="real_vps_details_filters_dropdown">
                                         <div
                                             className="real_vps_details_filters_dropdown_selected_option_icon_wrapper"
                                             onClick={() => setIsOpenFiltersList8(!is_open_filters_list8)}
                                         >
                                             <p
                                                 className='real_vps_details_filters_dropdown_selected_option'>
                                                 {select_filter_option8 ? select_filter_option8.label : 'Фильтр'}
                                             </p>
                                             <span>
                                            {is_open_filters_list8 ?
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
                                         {is_open_filters_list8 && (
                                             <div
                                                 className="real_vps_details_filters_dropdown_options_list_wrapper">
                                                 <div
                                                     className="real_vps_details_filters_dropdown_selected_option_icon_wrapper"
                                                     onClick={() => setIsOpenFiltersList8(!is_open_filters_list8)}
                                                 >
                                                     <p
                                                         className='real_vps_details_filters_dropdown_selected_option'
                                                     >
                                                         {select_filter_option8 ? select_filter_option8.label : 'Фильтр'}
                                                     </p>
                                                     <span>
                                            {is_open_filters_list8 ?
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
                                                 {filter_options_list8.map((option) => (
                                                     <p
                                                         key={option.value}
                                                         className="real_vps_details_filters_dropdown_options_list_option"
                                                         onClick={() => setSelectSortOption8(option)}
                                                     >
                                                         {option.label}
                                                     </p>
                                                 ))}
                                             </div>
                                         )}
                                     </div>

                                 </div>
                                 <div className="real_vps_details_filters_dropdowns_title_wrapper">
                                     <p className="real_vps_details_filters_dropdowns_title">Фильтр</p>
                                     <div className="real_vps_details_filters_dropdown">
                                         <div
                                             className="real_vps_details_filters_dropdown_selected_option_icon_wrapper"
                                             onClick={() => setIsOpenFiltersList9(!is_open_filters_list9)}
                                         >
                                             <p
                                                 className='real_vps_details_filters_dropdown_selected_option'>
                                                 {select_filter_option9 ? select_filter_option9.label : 'Фильтр'}
                                             </p>
                                             <span>
                                            {is_open_filters_list9 ?
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
                                         {is_open_filters_list9 && (
                                             <div
                                                 className="real_vps_details_filters_dropdown_options_list_wrapper">
                                                 <div
                                                     className="real_vps_details_filters_dropdown_selected_option_icon_wrapper"
                                                     onClick={() => setIsOpenFiltersList9(!is_open_filters_list9)}
                                                 >
                                                     <p
                                                         className='real_vps_details_filters_dropdown_selected_option'
                                                     >
                                                         {select_filter_option9 ? select_filter_option9.label : 'Фильтр'}
                                                     </p>
                                                     <span>
                                            {is_open_filters_list9 ?
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
                                                 {filter_options_list9.map((option) => (
                                                     <p
                                                         key={option.value}
                                                         className="real_vps_details_filters_dropdown_options_list_option"
                                                         onClick={() => setSelectSortOption9(option)}
                                                     >
                                                         {option.label}
                                                     </p>
                                                 ))}
                                             </div>
                                         )}
                                     </div>

                                 </div>
                                 <div className="real_vps_details_filters_dropdowns_title_wrapper">
                                     <p className="real_vps_details_filters_dropdowns_title">Фильтр</p>
                                     <div className="real_vps_details_filters_dropdown">
                                         <div
                                             className="real_vps_details_filters_dropdown_selected_option_icon_wrapper"
                                             onClick={() => setIsOpenFiltersList10(!is_open_filters_list10)}
                                         >
                                             <p
                                                 className='real_vps_details_filters_dropdown_selected_option'>
                                                 {select_filter_option10 ? select_filter_option10.label : 'Фильтр'}
                                             </p>
                                             <span>
                                            {is_open_filters_list10 ?
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
                                         {is_open_filters_list10 && (
                                             <div
                                                 className="real_vps_details_filters_dropdown_options_list_wrapper">
                                                 <div
                                                     className="real_vps_details_filters_dropdown_selected_option_icon_wrapper"
                                                     onClick={() => setIsOpenFiltersList10(!is_open_filters_list10)}
                                                 >
                                                     <p
                                                         className='real_vps_details_filters_dropdown_selected_option'
                                                     >
                                                         {select_filter_option10 ? select_filter_option10.label : 'Фильтр'}
                                                     </p>
                                                     <span>
                                            {is_open_filters_list10 ?
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
                                                 {filter_options_list10.map((option) => (
                                                     <p
                                                         key={option.value}
                                                         className="real_vps_details_filters_dropdown_options_list_option"
                                                         onClick={() => setSelectSortOption10(option)}
                                                     >
                                                         {option.label}
                                                     </p>
                                                 ))}
                                             </div>
                                         )}
                                     </div>

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
                     <section className='datatable_pagination'>
                         <div className='datatable_pagination_wrapper'>
                             <DataTable value={data_table_info} className='datatable'  stripedRows paginator rows={11} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem'}}   dataKey="id" tableStyle={{ minWidth: '50rem' }}>
                                 <Column field="image"  header="Компания" headerStyle={{color: '#333', fontFamily: 'Raleway', fontSize: '18px', fontWeight: '600'}} body={imageBodyTemplate} ></Column>
                                 <Column field="disk"  header="Диск" headerStyle={{color: '#333', fontFamily: 'Raleway', fontSize: '18px', fontWeight: '600'}}  ></Column>
                                 <Column field="memory" header="Память" headerStyle={{color: '#333', fontFamily: 'Raleway', fontSize: '18px', fontWeight: '600'}}></Column>
                                 <Column field="processor" header="Процессор" headerStyle={{color: '#333', fontFamily: 'Raleway', fontSize: '18px', fontWeight: '600'}}></Column>
                                 <Column field="traffic" header="Трафик" headerStyle={{color: '#333', fontFamily: 'Raleway', fontSize: '18px', fontWeight: '600'}}></Column>
                                 <Column field="price" header="Цена" headerStyle={{color: '#333', fontFamily: 'Raleway', fontSize: '18px', fontWeight: '600'}}></Column>
                                 <Column field="virtualization" header="Виртуализация" headerStyle={{color: '#333', fontFamily: 'Raleway', fontSize: '18px', fontWeight: '600'}}></Column>
                                 <Column field="country" header="Страна" headerStyle={{color: '#333', fontFamily: 'Raleway', fontSize: '18px', fontWeight: '600'}}></Column>
                                 <Column field="Ipv6" header="Ipv6" headerStyle={{color: '#333', fontFamily: 'Raleway', fontSize: '18px', fontWeight: '600'}}></Column>
                             </DataTable>
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



