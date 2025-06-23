import Banner from '../Components/Home/Banner';
import RoomsList from '../Components/RoomsList';
import FilterBox from '../Components/FilterBox';
import FilterForm from "../Components/FilterForm";

const Rooms = () => {
  return (
    <>
      <Banner SingleRoomClass="SingleRoom" title="Our Rooms" link="/" linkText="Return To Home" imgLink="https://react-beachresort-project.netlify.app/static/media/room-2.052c7681.jpeg" />

      <div className="text-animation">
        <div className="text-Blinking">
          <p className='textToBlink'>Luxury Rooms Starting From $299</p>
        </div>
      </div>

      <section className='featureRoom Rooms'>
        <FilterBox />
        <RoomsList />

        <FilterForm />
      </section>

    </>
  )
}

export default Rooms
