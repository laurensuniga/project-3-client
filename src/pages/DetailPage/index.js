function DetailPage(props) {
    let {animal} = props.location.query.animal
    return (
        <div>
            <h1>
                Detail Page
            </h1>
                        <div>
                            <h2>{props.location.query.animal.name}</h2>
                            <p>{props.location.query.animal.gender}</p>
                            {/* <p>{animal.species}</p>
                            <p>{animal.breeds}</p>
                            <p>{animal.size}</p>
                            <p>{animal.age}</p>
                            <p>{animal.description}</p>
                            <p>{animal.contact}</p> */}
                        </div>

        </div>

    );
}


export default DetailPage;