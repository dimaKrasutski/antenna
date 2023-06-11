import React, { useState } from 'react';
import { Footer } from '../../footer/footer'; 
import antennaVideo from '../../../img/antenna/antenna-video.webp';
import antennaCharImg from '../../../img/antenna/antenna-char.png';
import { PageRequestSent } from '../../page-request-sent/page-request-sent';
import { Form } from './form.jsx';

import './antenna.css';

export const Antenna = () => {
    const [isRequestSet, setRequestSet] = useState(false);

    console.log(isRequestSet);

  return isRequestSet ? (
       <PageRequestSent setRequestSet={setRequestSet} />
    ) : (
        <>
        <div>
        <div className="antenna-header text-white text-uppercase">
         <h1 className="mb-0">
         До 100 каналов
          <br />
            Без помех и Ряби
         </h1>
         <p className="bg-black antenna-header-secondary py-2 mb-0">
             ДАЖЕ В МЕСТНОСТИ СО СЛАБЫМ СИГНАЛОМ
         </p>
         </div> 
 
         <div className="main-1" />
         <div className="price" />
 
         <h5 className="mb-4">Акция действует с 9 июня по 13 июня 2023 года</h5>
 
         <Form setRequestSet={setRequestSet} />
     
         <h2 className="font-weight-bold mb-3">
             FULL HD в каждом доме
         </h2>
 
         <div className="hd-wrapper mb-5">
            <div>
            <div className="hd-wrapper-img hd-wrapper-img-1 mx-auto mb-2" />
              <span>
                 Качественный сигнал и HD качество картинки
              </span>
            </div>
 
            <div>
            <div className="hd-wrapper-img hd-wrapper-img-2 mx-auto mb-2" />
              <span>
                 Позволяет транслировать до 100 каналов
              </span>
            </div>
 
 
            <div>
            <div className="hd-wrapper-img hd-wrapper-img-3 mx-auto mb-2" />
              <span>
                 Стабильно работает в местности со слабым сигналом
              </span>
            </div>
 
            <div>
            <div className="hd-wrapper-img hd-wrapper-img-4 mx-auto mb-2" />
              <span>
                 Простая установка и подключение
              </span>
            </div>
         </div>
 
         <h2 className="font-weight-bold mb-3 text-uppercase">
             До 100 каналов без помех и ряби
         </h2>
 
         <div>
             <img alt="" src={antennaVideo} />
 
             <p className="text-md mb-3">
                 За компактными размерами и простым внешним видом скрывается современная начинка, благодря которой теперь телевидение в цифровом качестве будет доступно всегда и везде.
             </p>
         </div>
 
         <div className="antenna-char">
             <h2 className="mb-3 pt-3">Характеристики товара</h2>
 
            <img alt="" src={antennaCharImg} className="mb-4" />
 
            <p className="pb-2">Tип товара:
               <span className="ml-2 font-weight-bold">
                 Комнатная антенна
               </span>
             </p> 
            
 
             <p className="pb-2 bg-white">Частотный диапазон:
               <span className="ml-2 font-weight-bold">
               VHF (174..240mhz) \ UHF (470..862mhz)
               </span>
             </p>
 
 
             <p className="pb-2">Дальность приема:
               <span className="ml-2 font-weight-bold">
               50км
               </span>
             </p>
 
             <p className="pb-2 bg-white">Количество каналов:
               <span className="ml-2 font-weight-bold">
                до 100 каналов в зависимости от вашего ТВ оператора
               </span>
             </p>
             </div>
 
            <div className="how-to-order-bg mb-4" />
 
 
     </div>

     <Footer />
     </>
    )
}