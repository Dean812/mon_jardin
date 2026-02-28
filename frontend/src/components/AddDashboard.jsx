function Dashboard({ icon, title, text }) {
    return (
        <div>
            <i className={`fa-solid fa-${icon}`}></i>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default Dashboard;