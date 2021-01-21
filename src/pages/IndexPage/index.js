import AnimalCard from '../../components/AnimalCard';

function IndexPage(props) {

    let animals = props
    console.log(animals)

    return (
        <div>
            
            <h1>
                Index? Page
            </h1>
            <AnimalCard />
        </div>


    );
}



export default IndexPage;