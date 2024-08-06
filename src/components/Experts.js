const Experts = () => {
  return (
    <section className='specjalists' id='onas'>
      <div className='container'>
        <h2 className='specjalist-header'>Nasi specjaliści</h2>
        <div className='specjalist-wrapper'>
          <div className='specjalist-item'>
            <img
              src='https://thebluegrasssituation.com/wp-content/uploads/2020/08/re-perez-branding-for-the-people-square-headshot.jpg'
              alt='Specjalist'
              class='specjalist-photo'
            />
            <div className='specjalist-info'>
              <p className='specjalist-tittle'>Imię i Nazwisko [dział]</p>
              <p className='specjalists-info'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam facere eos consectetur ipsam, cumque sint temporibus,
                ipsum nam labore explicabo iste corrupti? Veniam nemo modi
                laboriosam perspiciatis, iure quos voluptatum!
              </p>
            </div>
          </div>
          <div className='specjalist-item'>
            <img
              src='https://thebluegrasssituation.com/wp-content/uploads/2020/08/re-perez-branding-for-the-people-square-headshot.jpg'
              alt='Specjalist'
              className='specjalist-photo'
            />
            <div className='specjalist-info'>
              <p className='specjalist-tittle'>Imię i Nazwisko [dział]</p>
              <p className='specjalists-info'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam facere eos consectetur ipsam, cumque sint temporibus,
                ipsum nam labore explicabo iste corrupti? Veniam nemo modi
                laboriosam perspiciatis, iure quos voluptatum!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experts;
