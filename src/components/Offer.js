import { offers } from '../data/offers';

const Offer = () => {
  return (
    <section className='aboutUs' id='oferta'>
      <div className='container'>
        <h2 className='aboutUs-header'>Czym zajmuje się nasza firma?</h2>
        <section className='offerWrapper'>
          {offers.map((offer) => (
            <div className='offer'>
              <div>{offer.name}</div>
              {offer.isNew ? <div>Nowość</div> : null}
              {offer.isNew ? <div className='offer-new'></div> : null}
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default Offer;
