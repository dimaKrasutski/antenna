import React, { useState } from 'react';
import classNames from 'classnames';
import axios from 'axios';

export const FormComponent = ({
  setRequestSet,
  url,
  product,
  isSize,
  formId
}) => {
    const [size, setSize] = useState('s-m');
    const [isNameError, setNameError] = useState(false);
    const [isPhoneError, setPhoneError] = useState(false);
    
    const handleSize = ({ target : { id }}) => setSize(id);
    
    const handleSubmit = e => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const userInfo = Object.fromEntries(formData.entries());
        const { name, phone } = userInfo;

        if(!name || !phone) {
          if(!name) {
            setNameError(true);
          }

          if(!phone) {
            setPhoneError(true);
          }

          return;
        }

        const dateNow = new Date();

        // console.log(name, phone, dateNow);

       axios.post(url,
        { phone,
          name,
          date: dateNow,
          position: product,
          size: isSize ? size : null
        })
         .then(response => {
        // console.log(response);

        setRequestSet(true);
      })
    }

    return (
        <>

       
         {isSize && (
            <h4>
          Выберите размер
        </h4>
         )} 

         <form method="post" onSubmit={handleSubmit} className="form" id={formId}>
           {isSize && (
            <div className="radio-block-top d-flex justify-content-around w-50 mx-auto mb-3">
               <label className="label position-relative">
                 <input id="s-m" type="radio" name="myRadio" className="radio-input" value="s-m" onClick={handleSize} defaultChecked={true} />
    
                 <span className={classNames('size-button d-inline-flex', {'size-active bg-warning': size === "s-m"})}>S-M</span> 
               </label>
             
              <label className="label position-relative">
              <input id="l-xl" type="radio" name="myRadio" className="radio-input" value="l-xl" onClick={handleSize} />
    
              <span className={classNames('size-button d-inline-flex', {'size-active bg-warning': size === "l-xl"})}>L-XL</span> 
                </label>
            </div>
           )} 
    
            <div className="d-flex flex-column">
              <div className="div-input mb-3">
              <input
                type="text"
                name="name"
                placeholder="Введите ваше имя"
                minLength="2"
                className={classNames('form-input', {'form-input-error': isNameError })}
                onChange={() => setNameError(false)}
              />
              </div>
           
              <div className="div-input mb-3">
               <input
                type="text"
                name="phone"
                placeholder="Телефон"
                minLength="7"
                className={classNames('form-input', {'form-input-error': isPhoneError })}
                onChange={() => setPhoneError(false)}
                />
             </div>
    
              <label className="form-checkbox mx-auto w-75">
                <input type="checkbox" name="agree" defaultChecked={true} className="me-1" />
                {/* onClick={handleCheck} value={isChecked}  */}
                <span className="ml-2">
                  Я согласен с &shy;
                 <a href="https://antenna-tv.netlify.app/politics.html" target="_blank" rel="noopener noreferrer">
                      политикой конфиденциальности &shy;
                  </a>
                  и пользовательским соглашением
                </span>
              </label>
    
              <div className="mt-3">
                <button type="submit" className="btn-submit bg-warning border-0 text-uppercase">
                  Оформить заказ
                </button>
              </div>
            </div>
    
         </form>
    
    {/* <div id="block-3" className="block-3">
    <div>
      <p className="sale-text text-right pr-5 pt-2">Aкция действует с 25 по 28 мая</p>             
    
    </div>
    </div> */}
    </>
    )
}
