import { useSelector } from "react-redux"
import RoomsContainer from '../RoomsContainer';
import { CircularProgress, Box } from '@mui/material';

const FeatureRoom = () => {
    const { featureRooms, loading, error } = useSelector((state) => state.rooms);

    return (
        <section className='featureRoom'>
            <h1 className='font-bold'>Featured Rooms</h1>
            <div className="underline"></div>
            {loading && (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
                    <CircularProgress size={48} thickness={4} />
                </Box>
            )}
            {!loading && error && <p className='text-xl mt-20'>{error}</p>}
            {!loading && !error &&
                <div className="section-data">
                    {
                        featureRooms.map((ele) => {
                            const { id, images, name, price, slug } = ele;
                            const imgSource = images[0];
                            return (
                                <RoomsContainer key={id} imgSource={imgSource} slug={slug} name={name} price={price} />
                            )
                        })
                    }
                </div>
            }
        </section>
    )
}

export default FeatureRoom;
