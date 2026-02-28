function AddInfo({ title,text }) {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p>{text}</p>
        </div>
    )
}

export default AddInfo;