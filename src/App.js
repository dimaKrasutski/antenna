import React, { useState } from 'react';
import { FormComponent } from './components/form/form-component'; 
import { CustomCarousel } from './components/carousel/carousel';
import { PageRequestSent } from './components/page-request-sent/page-request-sent';
import './App.css';

// const Scr = () => <script src="//megatimer.ru/get/9f7b69e6a2125e5b35ca46f5e0c15b7f.js"></script>

function App() {
  const [isRequestSet, setRequestSet] = useState(false);

  return isRequestSet ? (
      <PageRequestSent setRequestSet={setRequestSet}  />
  ) : (
    <div className="App text-center">
       <div className="main-wrapper">
          <div className="block-1" />
          <div className="price-block">
            <div className="block-sale py-2 h4 mb-0 text-white">Скидка 50%</div>

            <div className="d-flex align-items-center justify-content-around">
            <div className="d-flex flex-column align-items-center price-old">
              <span>
                Обычная цена:
              </span>

              <span className="h4 mb-0">
                60 byn
              </span>
            </div>
            <div className="d-flex flex-column align-items-center">
              <span>
                Цена по акции:
              </span>
               <span className="h4 mb-0">
               29.99 byn
                </span> 
            </div>
            </div>
           
          </div>
          <FormComponent setRequestSet={setRequestSet} />
          <div className="block-4" /> 
          <div className="block-5" /> 
          <div className="block-6 carousel-wrapper py-2">
             <CustomCarousel order={1} />
             </div>
          <div className="block-7" /> 
          <div className="block-8" /> 
          <div className="block-9">
              <h3>Отзывы покупателей</h3>
             <CustomCarousel order={2} />
            </div> 
          <div className="block-10" />
          {/* <FormComponent /> */}

          <footer className="text-center">
          <span>
         <p className="mb-0">
         ООО "AМКонстал-Инжиниринг",
         </p> 
        <p className="mb-0">
          220138, г. Минск ул. Липковская, д. 9/5, пом. 53
        </p>
        <p className="mb-0">
            р/с BY26UNBS30121374800000001933 в ЗАО "БСБ Банк",  БИК UNBSBY2X г. Минск
        </p>

      
             
         
          <p className="mb-0">
         УНП 192958129,
          </p> 
            </span>
            <p className="mb-0 h6">Акция действует на всей территории Беларуси</p>

            <p className="mb-0">Телефон: +375 (29) 111-11-58</p>
            <p className="mb-0">Email: commercebel@bk.ru</p>
          
          <a className="text-xs-small" href="https://goldshop.by/politics.html" target="_blank" rel="noopener noreferrer">
            Политика конфиденциальности
          </a>
         
          <p className="mb-0" />
          <a className="text-xs-small" href="https://goldshop.by/agreement.html" target="_blank" rel="noopener noreferrer">
            Пользовательское соглашение
          </a>

          <p className="mb-0" />
          <a className="text-xs-small pb-2" href="https://goldshop.by/dogovor_vozvrata.html" target="_blank" rel="noopener noreferrer">
            Договор возврата товара и денежных средств
          </a>
          </footer>
       </div>
    </div>
  );
}

export default App;
