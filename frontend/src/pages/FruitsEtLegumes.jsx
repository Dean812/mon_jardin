import AddBtn from "../components/AddBtn";
import Titre from "../components/Titre";
import SuiviProduits from "../components/SuiviProduits";

export default function FruitsEtLegumes() {
  return (
    <div>
      <header>
        <Titre
            text="Fruits & Légumes"
            level={1}
            subtext="Gérez vos cultures et suivez vos récoltes"
            sublevel={2}
        />
        <AddBtn onClick={() => console.log("Test - Ajouter une culture")} />
      </header>
      <main>
        <div>
          <SuiviProduits product="Bétrave rouge" variety="Unknown" label="Légume" />
          <SuiviProduits product="Tomate" variety="Rouge" label="Fruit" />
        </div>
      </main>       
    </div>
  )
}
