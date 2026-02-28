import { Link } from "react-router-dom";
import Titre from "../components/Titre";
import AddInfo from "../components/AddInfo";
import AddDashboard from "../components/AddDashboard";

export default function Homepage() {
  return (
    <div>
      <main>
        <Titre text="Tableau de Bord"/>
          <div>
            <article>
              <div>
                <p>gougoute</p>
                <p>Météo actuelle</p>
                <p>Paris</p>
              </div>
              <div>
                <p>18° C</p>
                <p>Ensoleillé</p>
              </div>
              <p>-------------</p>
              <div>
                <article>
                  <p>Humidité</p>
                  <p>65%</p>
                </article>
                <article>       
                  <p>Vent</p>
                  <p>12 km/h</p>
                </article>
                <article>
                  <p>Pluie(3h)</p>
                  <p>0mm</p>
                </article>
              </div>
            </article>
            <aside>
              <div>
                <h2>Actions rapides</h2>
                <button><Link to="/fruits-et-legumes">Ajouter une culture</Link></button>
                <button><Link to="/planning">Nouvelle tâche</Link></button>
              </div>
              <div>
                <AddInfo title="Récoltes à venir" text="Aucune récolte prévue prochainement." />
              </div>
            </aside>
          </div>
          <div>
            <AddDashboard icon="leaf" title="2" text="Cultures" />
            <AddDashboard icon="wrench" title="3 Kg" text="Récoltés" />
            <AddDashboard icon="cart-shopping" title="0 €" text="Dépenses" />
          </div>
          <div>
            <AddInfo title="Prochaines tâches" text="Aucune tâche programmée." />
          </div>
      </main>
    </div>
  )
}