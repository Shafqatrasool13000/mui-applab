import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Features from './components/Features';
import SmartJackpotFeatures from './components/SmartJackpotFeatures';
import WhyChooseFeatures from './components/WhyChooseFeatures';
import DesignAndBuilt from './components/DesignAndBuilt';
import DownloadApp from './components/DownloadApp';
import MeetClient from './components/MeetClient';
import RiderEmergency from './components/RiderEmergency';
import SmartJackpot from './components/SmartJackpot';
import Subscription from './components/Subscription';
import UnlimitedFeature from './components/UnlimitedFeature';
import WhyChoose from './components/WhyChoose';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import Container from '@mui/material/Container'
import Companies from './components/Companies';
import AwesomeFeatures from './components/AwesomeFeatures';


function App() {

  return (
    <>
      <NavBar   />
      <Container maxWidth="lg">
         <Header /> 
        <Companies />
        <Features />
        <SmartJackpot /> 
        <SmartJackpotFeatures />
        <DesignAndBuilt />
        <WhyChoose />
        <WhyChooseFeatures />
        <UnlimitedFeature /> 
        <AwesomeFeatures /> 
        <Subscription />
        <MeetClient />
        <FAQ />
        <RiderEmergency />
        <DownloadApp />
      </Container>
      <Footer /> 
    </>
  );
}
export default App;
