const Menu = () => {
  return (
    <nav className='navigation-wrapper'>
      <div className='container'>
        <div className='navigation'>
          <a className='link' href='#'>
            moja firma
          </a>

          <div className='links'>
            <a className='link' href='#onas'>
              o nas
            </a>
            <a className='link' href='#oferta'>
              oferta
            </a>
            <div className='link link-disabled'>kontakt</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
