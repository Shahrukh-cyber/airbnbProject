import { useRouter } from "next/router";
import { format } from 'date-fns'
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import Map from '../components/Map';

const Search = ({ searchResults }) => {
 console.log("searchResults", searchResults);
 const router = useRouter();
 const { location, startDate, endDate, noOfGuests } = router.query;
 const FormatedstartDate = format(new Date(startDate), "dd MMMM yy");
 const FormatedEndDate = format(new Date(endDate), "dd MMMM yy");

 const range = `${FormatedstartDate} - ${FormatedEndDate}`

 return (
  <div>
   <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />

   <main className="flex">
    <section className="flex-grow pt-14 px-6">
     <p>300+ Stays -{range}- for {noOfGuests} guests</p>
     <h1 className="text-3xl font-semibold mt-2 mb-6">Stay in {location}</h1>
     <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
      <p className="button">
       Cancellation Flexibility
      </p>

      <p className="button">
       Type of Place     </p>

      <p className="button">
       Price     </p>
      <p className="button">Rooms and Beds</p>
      <p className="button">More filters</p>

     </div>




     <div className="flex flex-col">

      {searchResults.map((item) => (
       <InfoCard key={item.img}
        img={item.img}
        location={item.location}
        title={item.title}
        description={item.description}
        price={item.price}
        total={item.total}
        star={item.star}
       />
      ))}
     </div>
    </section>
    {/* Map Section */}
    <section className="hidden xl:inline-flex xl:min-w-[600px]">
     <Map searchResults={searchResults} />

    </section>
   </main>
   <Footer />
  </div>
 )
}

export default Search

export async function getServerSideProps() {
 const searchResults = await fetch("https://links.papareact.com/isz").then(res => res.json())
 return {
  props: {
   searchResults
  }
 }

}

