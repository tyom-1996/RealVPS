import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/css/providers_style.css';
import Header from "./includes/Header";
import Footer from "./includes/Footer";
// import { createBrowserHistory } from 'history';



export default function Home (props) {
    const [headerScroll, setHeaderScroll] = useState(false);
    const [img_path, setImgPath] = useState('https://realvps.justcode.am/uploads/');
    const [providers_list, setProvidersList] = useState([
        // {
        //     id: 1,
        //     img: require('../../assets/img/provider_img1.png'),
        //     name: '1cloud',
        //     info: '1000Hz',
        //     img2: provider_icon
        // },
        // {
        //     id: 2,
        //     img: require('../../assets/img/provider_img2.png'),
        //     name: '1VPS',
        // },
        // {
        //     id: 3,
        //     img: require('../../assets/img/provider_img3.png'),
        //     name: '2cloud',
        //     info: '1000Hz',
        //     img2: provider_icon
        //
        // },
        // {
        //     id: 4,
        //     img: require('../../assets/img/provider_img4.png'),
        //     name: '62Yun',
        //
        // },
        // {
        //     id: 5,
        //     img: require('../../assets/img/provider_img3.png'),
        //     name: '2cloud',
        //     info: '1000Hz',
        //     img2: provider_icon
        //
        // },
        // {
        //     id: 6,
        //     img: require('../../assets/img/provider_img1.png'),
        //     name: '1cloud',
        //     info: '1000Hz',
        //     img2: provider_icon
        // },
        // {
        //     id: 7,
        //     img: require('../../assets/img/provider_img4.png'),
        //     name: '62Yun',
        //
        // },
        // {
        //     id: 8,
        //     img: require('../../assets/img/provider_img2.png'),
        //     name: '1VPS',
        // },
        //
        // {
        //     id: 9,
        //     img: require('../../assets/img/provider_img1.png'),
        //     name: '1cloud',
        //     info: '1000Hz',
        //     img2: provider_icon
        // },
        // {
        //     id: 10,
        //     img: require('../../assets/img/provider_img2.png'),
        //     name: '1VPS',
        // },
        // {
        //     id: 11,
        //     img: require('../../assets/img/provider_img3.png'),
        //     name: '2cloud',
        //     info: '1000Hz',
        //     img2: provider_icon
        //
        // },
        // {
        //     id: 12,
        //     img: require('../../assets/img/provider_img4.png'),
        //     name: '62Yun',
        //
        // },
        // {
        //     id: 13,
        //     img: require('../../assets/img/provider_img3.png'),
        //     name: '2cloud',
        //     info: '1000Hz',
        //     img2: provider_icon
        //
        // },
        // {
        //     id: 14,
        //     img: require('../../assets/img/provider_img1.png'),
        //     name: '1cloud',
        //     info: '1000Hz',
        //     img2: provider_icon
        // },
        // {
        //     id: 15,
        //     img: require('../../assets/img/provider_img4.png'),
        //     name: '62Yun',
        //
        // },
        // {
        //     id: 16,
        //     img: require('../../assets/img/provider_img2.png'),
        //     name: '1VPS',
        // },
        //
        // {
        //     id: 17,
        //     img: require('../../assets/img/provider_img1.png'),
        //     info: '1000Hz',
        //     img2: provider_icon
        // },
        // {
        //     id: 18,
        //     img: require('../../assets/img/provider_img2.png'),
        //     name: '1VPS',
        // },
        // {
        //     id: 19,
        //     img: require('../../assets/img/provider_img3.png'),
        //     name: '2cloud',
        //     info: '1000Hz',
        //     img2: provider_icon
        //
        // },
        // {
        //     id: 20,
        //     img: require('../../assets/img/provider_img4.png'),
        //     name: '62Yun',
        //
        // },
        // {
        //     id: 21,
        //     img: require('../../assets/img/provider_img3.png'),
        //     info: '1000Hz',
        //     img2: provider_icon
        //
        // },
        // {
        //     id: 22,
        //     img: require('../../assets/img/provider_img1.png'),
        //     name: '1cloud',
        //     info: '1000Hz',
        //     img2: provider_icon
        // },
        // {
        //     id: 23,
        //     img: require('../../assets/img/provider_img4.png'),
        //     name: '62Yun',
        //
        // },
        // {
        //     id: 24,
        //     img: require('../../assets/img/provider_img2.png'),
        //     name: '1VPS',
        // },
        //
        // {
        //     id: 25,
        //     img: require('../../assets/img/provider_img1.png'),
        //     name: '1cloud',
        //     info: '1000Hz',
        //     img2: provider_icon
        // },
        // {
        //     id: 26,
        //     img: require('../../assets/img/provider_img2.png'),
        //     name: '1VPS',
        // },
        // {
        //     id: 27,
        //     img: require('../../assets/img/provider_img3.png'),
        //     name: '2cloud',
        //     info: '1000Hz',
        //     img2: provider_icon
        //
        // },
        // {
        //     id: 28,
        //     img: require('../../assets/img/provider_img4.png'),
        //     name: '62Yun',
        //
        // },
        // {
        //     id: 29,
        //     img: require('../../assets/img/provider_img3.png'),
        //     name: '2cloud',
        //     info: '1000Hz',
        //     img2: provider_icon
        //
        // },
        // {
        //     id: 30,
        //     img: require('../../assets/img/provider_img1.png'),
        //     name: '1cloud',
        //     info: '1000Hz',
        //     img2: provider_icon
        // },
        // {
        //     id: 31,
        //     img: require('../../assets/img/provider_img4.png'),
        //     name: '62Yun',
        //
        // },
        // {
        //     id: 32,
        //     img: require('../../assets/img/provider_img2.png'),
        //     name: '1VPS',
        // },
        //
        // {
        //     id: 33,
        //     img: require('../../assets/img/provider_img1.png'),
        //     name: '1cloud',
        //     info: '1000Hz',
        //     img2: provider_icon
        // },
        // {
        //     id: 34,
        //     img: require('../../assets/img/provider_img2.png'),
        //     name: '1VPS',
        // },
        // {
        //     id: 35,
        //     img: require('../../assets/img/provider_img3.png'),
        //     name: '2cloud',
        //     info: '1000Hz',
        //     img2: provider_icon
        //
        // },
        // {
        //     id: 36,
        //     img: require('../../assets/img/provider_img4.png'),
        //     name: '62Yun',
        //
        // },
        // {
        //     id: 37,
        //     img: require('../../assets/img/provider_img3.png'),
        //     name: '2cloud',
        //     info: '1000Hz',
        //     img2: provider_icon
        //
        // },
        // {
        //     id: 38,
        //     img: require('../../assets/img/provider_img1.png'),
        //     name: '1cloud',
        //     info: '1000Hz',
        //     img2: provider_icon
        // },
        // {
        //     id: 39,
        //     img: require('../../assets/img/provider_img4.png'),
        //     name: '62Yun',
        //
        // },
        // {
        //     id: 40,
        //     img: require('../../assets/img/provider_img2.png'),
        //     name: '1VPS',
        // },
    ]);

    useEffect(() => {

        getProviders()
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


    const getProviders = (url = null) => {

        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        let api_url = url ? url : 'https://realvps.justcode.am/api/get_providers';

        fetch(api_url, requestOptions)
            .then(response => response.json())
            .then(result =>
                {
                    console.log(result, 'result')
                    setProvidersList(result.data)
                }

            )
            .catch(error => console.log('error', error));
    }
    // const getProvidersPage = (url) => {
    //
    //     console.log(url, 'url')
    //     let requestOptions = {
    //         method: 'GET',
    //         redirect: 'follow'
    //     };
    //
    //
    //     fetch(url, requestOptions)
    //         .then(response => response.json())
    //         .then(result =>
    //             {
    //                 console.log(result, 'result2')
    //                 // setProvidersList(result.data)
    //             }
    //
    //         )
    //         .catch(error => console.log('error', error));
    // }

    const handlePrevButtonClick = (index) => {
        let links = providers_list.links;
        let new_index = index;
       let preview_url = links[new_index].url;
       if (preview_url) {
           getProviders(preview_url)
       }


    }


    const handleNextButtonClick = (index) => {
        let links = providers_list.links;
        let new_index = index;
        let next_url = links[new_index].url;
        if (next_url) {
            getProviders(next_url)
        }


    }


    const navigate = useNavigate();

    const navigateToSinglePage = (id) => {
        console.log(id, 'id')
        navigate(`/card/${id}`);
    }


    return (
        <>

            <div className='main_wrapper' id='providers_page'>
                <Header/>
                <main className='main_section'>
                    <section className='providers'>
                        <div className="providers_wrapper">
                            <h1 className='providers_title'>Провайдеры</h1>
                            <div className='providers_list_items_wrapper'>
                                {providers_list?.data?.map((item, index) => {
                                    return (
                                        <button  className='providers_list_item' key={index}
                                                 onClick={() => {
                                                     navigateToSinglePage(item.id)
                                                 }}
                                        >
                                            <div className='providers_list_item_img'>
                                                <img src={img_path + item?.photo} alt=""/>
                                            </div>
                                            <div className="providers_list_item_title_info_wrapper">
                                                <p className='providers_list_item_title'>{item.name}</p>
                                                {/*{item.info &&*/}
                                                {/*    <div className='providers_list_item_info_box'>*/}
                                                {/*        <p className='providers_list_item_info'>{item.info}</p>*/}
                                                {/*        <img src={item.img2} className='providers_list_item_info_img' alt=""/>*/}
                                                {/*    </div>*/}
                                                {/*}*/}

                                            </div>
                                        </button>
                                    )
                                })}
                            </div>

                            <div className='providers_pagination_wrapper' >

                                {providers_list?.links?.map((pagination, index) => {
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
                                                        getProviders(pagination.url)
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
                        </div>
                    </section>
                </main>
                <Footer/>
            </div>

        </>

    )


}



