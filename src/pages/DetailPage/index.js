import styled from 'styled-components';


const StyledLayout = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e8d1b5;
    background-size: cover;
`;


function DetailPage(props) {


    if(!props.animal) {
        return <h1>...Loading</h1>
    }
    return (
        <div>
            <h1>
                Introducing...
            </h1>
                        <div>
                            <h2>{props.animal.name}</h2>
                            <p>Age: {props.animal.age}</p>
                            <p>Gender: {props.animal.gender}</p>
                            <p>Species: {props.animal.species}</p>
                            <p>Size: {props.animal.size}</p>
                            <p>Description: {props.animal.description}</p>
                            <p>{props.animal.contact.email}</p>
                        </div>
        </div>
    );
}



    // let {animal} = props.location.query.animal
    // return (
    //     <div>
    //         <h1>
    //             Introducing...
    //         </h1>
    //                     <section>
    //                         <h2>{props.location.query.animal.name}</h2>
    //                         <p>Age: {props.location.query.animal.age}</p>
    //                         <p>Gender: {props.location.query.animal.gender}</p>
    //                         <p>Species: {props.location.query.animal.species}</p>
    //                         <p>Breed: {props.location.query.animal.breeds.primary}, {props.location.query.animal.breeds.secondary}
    //                         </p>
    //                         <p>Size: {props.location.query.animal.size}</p>
    //                         <p>Description: {props.location.query.animal.description}</p>
    //                         <p>Email: {props.location.query.animal.contact.email}</p>
    //                     </section>
    //     </div>

    // );



export default DetailPage;