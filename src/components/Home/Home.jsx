import Accordion from "../Page/Accordion/Accordion";
import Banner from "../Page/Banner/Banner";
import CalculateCharge from "../Page/Calculate/CalculateCharge";
import Services from "../Page/Services/Services";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Accordion></Accordion>
          <Services></Services>
          <CalculateCharge></CalculateCharge>
        </div>
    );
};

export default Home;