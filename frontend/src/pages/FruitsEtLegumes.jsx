import AddBtn from "../components/AddBtn";
import Titre from "../components/Titre";

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

      </main>       
    </div>
  )
}
