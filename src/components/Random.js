

const Random = ({max}) => {
    return (
        <div id='random'>
            <p>Random value between 0 and {max}</p>
            {String(Math.round(Math.random() * max))}
        </div>
    )
}

export default Random