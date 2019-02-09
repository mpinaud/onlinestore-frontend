import Items from '../components/Items';

const Home = props => {
    // pass initial props from Next.js for router page with page 
    return (
        <div>
            <Items page={parseFloat(props.query.page) || 1} />
        </div>
    );
}


export default Home;