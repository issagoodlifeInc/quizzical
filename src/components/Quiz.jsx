export default function Quiz({ start }) {
  return (
    !start && (
      <section className="container ">
        <div className="question">
          <h3>How would one say goodbye in Spanish?</h3>
          <button className="btn__quiz">Adiós</button>
          <button className="btn__quiz">Hola</button>
          <button className="btn__quiz">Au Revoir</button>
          <button className="btn__quiz">Salir</button>
        </div>
        <div className="question">
          <h3>
            Which best selling toy of 1983 caused hysteria, resulting in riots
            breaking in stores?
          </h3>
          <button className="btn__quiz">Cabbage Patch Kids</button>
          <button className="btn__quiz">Transformers</button>
          <button className="btn__quiz">Au Revoir</button>
          <button className="btn__quiz">Care Bears</button>
        </div>
        <div className="question">
          <h3>How would one say goodbye in Spanish?</h3>
          <button className="btn__quiz">Adiós</button>
          <button className="btn__quiz">Hola</button>
          <button className="btn__quiz">Au Revoir</button>
          <button className="btn__quiz">Salir</button>
        </div>
        <div className="question">
          <h3>How would one say goodbye in Spanish?</h3>
          <button className="btn__quiz">Adiós</button>
          <button className="btn__quiz">Hola</button>
          <button className="btn__quiz">Au Revoir</button>
          <button className="btn__quiz">Salir</button>
        </div>
        <div className="question">
          <h3>How would one say goodbye in Spanish?</h3>
          <button className="btn__quiz">Adiós</button>
          <button className="btn__quiz">Hola</button>
          <button className="btn__quiz">Au Revoir</button>
          <button className="btn__quiz">Salir</button>
        </div>

        {/* Answers */}

        <button className="btn__check">Check Answers</button>
      </section>
    )
  );
}
