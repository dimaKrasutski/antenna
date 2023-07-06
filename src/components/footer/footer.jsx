import React from 'react';
import classNames from 'classnames';
import './footer.css';

const PUBLIC_HTML = `${window.location.href}politics.html`;
const AGREEMENT_HTML = `${window.location.href}agreement.html`;
const DOGOVOR_VOZVRATA_HTML = `${window.location.href}dogovor_vozvrata.html`;

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
    
  <a className="text-xs-small" href={PUBLIC_HTML} target="_blank" rel="noopener noreferrer">
      Политика конфиденциальности
    </a>
   
    <p className="mb-0" />
    <a className="text-xs-small" href={AGREEMENT_HTML} target="_blank" rel="noopener noreferrer">
      Пользовательское соглашение
    </a>

    <p className="mb-0" />
    <a className="text-xs-small pb-2" href={DOGOVOR_VOZVRATA_HTML} target="_blank" rel="noopener noreferrer">
      Договор возврата товара и денежных средств
    </a>
    </footer>
)