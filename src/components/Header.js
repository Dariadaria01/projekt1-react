const Header = () => {
  return (
    <div className='header'>
      <div className='header-shadow'>
        <div className='container header-wrapper'>
          <h1 className='header-title'>
            Nasza firma oferuje najwyższej jakości produkty.
          </h1>
          <p className='header-info'>Nie wierz nam na słowo - sprawdź</p>
          <a className='header-link' href='#oferta'>
            oferta
          </a>
          <div className='header-text'></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
