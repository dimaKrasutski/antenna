import './App.css';
import { FormComponent } from './components/form/form-component'; 
import { CustomCarousel } from './components/carousel/carousel';
// const Scr = () => <script src="//megatimer.ru/get/9f7b69e6a2125e5b35ca46f5e0c15b7f.js"></script>

function App() {
  return (
    <div className="App text-center">
       <div className="main-wrapper">
          <div className="block-1" />
          <FormComponent />
          <div className="block-4" /> 
          <div className="block-5" /> 
          <div className="block-6 carousel-wrapper py-2">
             <CustomCarousel order={1} />
             </div>
          <div className="block-7" /> 
          <div className="block-8" /> 
          <div className="block-9 mb-2">
              <h3>Отзывы покупателей</h3>
             <CustomCarousel order={2} />
            </div> 
          <div className="block-10" />
          <FormComponent />

          <footer className="text-center mx-2">
          <span>
         <p className="mb-0">
         ООО "рикстокмаркет",
          </p> 
          <p className="mb-0">
         УНП 193295196,
          </p> 
            </span>
            <p className="mb-0">
            г. Минск ул. Тихая 6а
            </p>

            <p className="mb-0 h6">Акция действует на всей территории Беларуси</p>

            <p className="mb-0">Телефон: +375 (29) 111-11-58</p>
          
          <a className="text-xs-small" href="https://goldshop.by/politics.html" target="_blank" rel="noopener noreferrer">
            Политика конфиденциальности
          </a>
         
          <p className="mb-0" />
          <a className="text-xs-small" href="https://goldshop.by/agreement.html" target="_blank" rel="noopener noreferrer">
            Пользовательское соглашение
          </a>

          <p className="mb-0" />
          <a className="text-xs-small pb-2" href="https://goldshop.by/dogovor_vozvrata.pdf" target="_blank" rel="noopener noreferrer">
            Договор возврата товара и денежных средств
          </a>
          </footer>
       </div>
    </div>
  );
}

export default App;
