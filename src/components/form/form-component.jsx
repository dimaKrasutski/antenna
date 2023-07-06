import React, { useState } from 'react';
import classNames from 'classnames';
import moment from 'moment';
import 'moment/locale/ru';
import axios from 'axios';

const basePhoneValue = ['+', '+3', '+37', '+375'];
const PUBLIC_HTML = `${window.location.href}politics.html`;

export const FormComponent = ({
  setRequestSet,
  url,
  product,
  // isSize,
  formId
}) => {
    const [phoneValue, setPhoneValue] = useState('');
    const [isNameError, setNameError] = useState(false);
    const [isPhoneError, setPhoneError] = useState(false);
  
    const handlePhoneValue = (e) => {
      const newPhoneVale = e.target.value;

     newPhoneVale.replace('+375', '');

      setPhoneValue(newPhoneVale);

      if(isPhoneError) {
        setPhoneError(false);
      }
    };

    const handlePhoneClick = () => {
      if(phoneValue === '') {
        setPhoneValue('+375');
      }

      if(isPhoneError) {
        setPhoneError(false);
      }
    };

    const handlePhoneBlur = () => {
      if(basePhoneValue.includes(phoneValue)) {
        setPhoneValue('');
      }
    }

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

        // const dateNow = moment().format('l LT');
        const dateNow = moment().format('LLL'); 

        // console.log(name, phone, dateNow);

       axios.post(url,
        { phone,
          name,
          date: dateNow,
          position: product,
        })
         .then(response => {
        // console.log(response);

        setRequestSet(true);
      })
    }

    return (
        <>
         <form method="post" onSubmit={handleSubmit} className="form" id={formId}>
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
                onChange={handlePhoneValue}
                onClick={handlePhoneClick}
                onBlur={handlePhoneBlur}
                value={phoneValue}
                />
             </div>
    
              <label className="form-checkbox mx-auto w-50">
                <input type="checkbox" name="agree" defaultChecked={true} className="me-1" />
                {/* onClick={handleCheck} value={isChecked}  */}
                <span className="ml-2">
                  Я согласен с &shy;
                 <a href={PUBLIC_HTML} target="_blank" rel="noopener noreferrer">
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
    </>
    )
}
