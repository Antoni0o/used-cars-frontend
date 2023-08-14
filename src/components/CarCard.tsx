import { Car } from "@/types/Car";

export default function CarCard({ photoUrl, model, brand, price }: Car) {
  return (
    <section className="card-section">
      <img className="rounded-lg" src={photoUrl} alt="car" />
      <div className="card-body">
        <div className="title-n-model">
          <h2 className="font-bold text-xl">{model}</h2>
          <h3 className="opacity-75">{brand}</h3>
        </div>
        <div className="price-n-button">
          <div className="price">
            <h2 className="text-xl">{price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL"
            })}</h2>
          </div>
          <div className="button">
            <div className="submit-button">Ver Mais</div>
          </div>
        </div>
      </div>
    </section>
  );
}