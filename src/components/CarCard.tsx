export default function CarCard() {
  return (
    <section className="card-section">
      <img className="rounded-lg" src="https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1666008987698.jpg" alt="car" />
      <div className="card-body">
        <div className="title-n-model">
          <h2 className="font-bold text-xl">Modelo</h2>
          <h3 className="opacity-75">Marca</h3>
        </div>
        <div className="price-n-button">
          <div className="price">
            <h2 className="text-xl">R$ 10.000.000,00</h2>
          </div>
          <div className="button">
            <div className="submit-button">Ver Mais</div>
          </div>
        </div>
      </div>
    </section>
  );
}