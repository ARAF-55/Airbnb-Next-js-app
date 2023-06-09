import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import InfoCard from '../components/InfoCard';

function Search({ searchResults }) {
    const router = useRouter();

    const { location, startDate, endDate, noOfGuests } = router.query;
    const formattedStartDate = format(new Date(startDate), 'dd MMM yyyy');
    const formattedEndDate = format(new Date(endDate), 'dd MMM yyyy');
    const range = `${formattedStartDate} to ${formattedEndDate}`;

    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${noOfGuests}`} />

            <main className='flex'>
                <section className='flex-grow pt-14 px-6'>
                    <p className='text-xs'>300+ stays - {range} - for {noOfGuests} guests</p>

                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>

                    <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                        <p className='button'>Cancellation Flexibility</p>
                        <p className='button'>Type of place</p>
                        <p className='button'>Price</p>
                        <p className='button'>Rooms and Beds</p>
                        <p className='button'>More Filters</p>
                    </div>

                    <div className='flex flex-col'>
                        {
                            searchResults.map(({
                                img, description, title, location, star, price, total
                            }) => (
                                <InfoCard
                                    key={img}
                                    img={img}
                                    description={description}
                                    title={title}
                                    location={location}
                                    star={star}
                                    price={price}
                                    total={total}
                                />
                            ))
                        }

                    </div>

                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Search;

export const getServerSideProps = async () => {
    const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then((res) => res.json());
    return {
        props: {
            searchResults
        }
    };
};