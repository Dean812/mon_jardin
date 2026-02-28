function AddBtn({ onClick }) {
    if(onClick) {
        console.log("click")
    }

  return (
    <button onClick={onClick}>Ajouter</button>
  )
}

export default AddBtn