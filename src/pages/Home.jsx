import Banner from '../Components/Home/Banner';
import Services from '../Components/Home/Services';
import FeatureRoom from '../Components/Home/FeatureRoom';

const Home = () => {
  return (
    <>
    <Banner title="Luxurious Rooms" des="Delux Rooms starting at $299" link="/rooms/" imgLink="https://img.iproperty.com.my/angel-legacy/1110x624-crop/static/2021/04/Mengenal-Resort-Karakteristik-Jenis-dan-5-Rekomendasi-Resort-Terbaik.png" linkText="Our Rooms" />
    <Services/>
    <FeatureRoom/>
    </>
  )
}

export default Home
