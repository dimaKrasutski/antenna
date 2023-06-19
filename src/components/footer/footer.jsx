import React from 'react';
import classNames from 'classnames';
import './footer.css';

export const Footer = ({ className }) => (
    <footer className={classNames('footer text-center mb-2', className)}>
    <div>
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
      </div>
      <p className="mb-0 h6">Акция действует на всей территории Беларуси</p>

      <p className="mb-0">Телефон: +375 (29) 111-11-58</p>
      <p className="mb-0">Email: commercebel@bk.ru</p>
    
    <a className="text-xs-small" href="https://antenna-tv.netlify.app/politics.html" target="_blank" rel="noopener noreferrer">
      Политика конфиденциальности
    </a>
   
    <p className="mb-0" />
    <a className="text-xs-small" href="https://antenna-tv.netlify.app/agreement.html" target="_blank" rel="noopener noreferrer">
      Пользовательское соглашение
    </a>

    <p className="mb-0" />
    <a className="text-xs-small pb-2" href="https://antenna-tv.netlify.app/dogovor_vozvrata.html" target="_blank" rel="noopener noreferrer">
      Договор возврата товара и денежных средств
    </a>
    </footer>
)