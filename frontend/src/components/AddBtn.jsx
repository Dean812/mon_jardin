function AddBtn({ onClick }) {
    if(onClick) {
        console.log("click")
    }

  return (
    <button onClick={onClick}><i class="fa-solid fa-plus"></i> Ajouter</button>
  )
}

export default AddBtn