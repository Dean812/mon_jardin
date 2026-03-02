function SuiviProduits({ product, variety, label }) {
  return (
    <div>
        <div>
            <article>
                <h2>{product}</h2>
                <h3>{variety}</h3>
            </article>
            <aside>
                <p>{label}</p>
            </aside>
            <p>Semis : <span>01/06/2026</span></p>
            <p>récolte : <span>04/06/2026</span></p>
            <p>journal : modifiable via bouton éditer. utile pour le suivi</p>
            <p>Culture associé: </p>
            <div>
                <button><i class="fa-solid fa-pen-to-square"></i> Éditer</button>
                <button><i class="fa-solid fa-box-archive"></i> Archiver</button>
                <button><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>        
    </div>
  )
}

export default SuiviProduits