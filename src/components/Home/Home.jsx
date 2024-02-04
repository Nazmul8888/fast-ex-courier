import Accordion from "../Page/Accordion/Accordion";
import Banner from "../Page/Banner/Banner";
import Calculate from "../Page/Calculate/Calculate";
import Services from "../Page/Services/Services";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Accordion></Accordion>
          <Services></Services>
          <Calculate></Calculate>
        </div>
    );
};

export default Home;