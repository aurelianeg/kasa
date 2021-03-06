import { useFetch } from '../../utils/hooks/useFetch'
import Banner from '../../components/Banner/Banner'
import Loader from '../../components/Loader/Loader'
import LocPreview from '../../components/LocPreview/LocPreview'
import './Home.css'

function Home() {
   const { data, isDataLoaded, isMultipleThree } = useFetch('data/data.json')

   return (
      <div className="page_container">
         <Banner
            img="assets/home_image.jpg"
            text="Chez vous, partout et ailleurs"
            mobilewide={false}
         />
         {isDataLoaded ? (
            <Loader />
         ) : (
            <section className="locations_container">
               {data.map((loc) => (
                  <LocPreview
                     key={loc.id}
                     id={loc.id}
                     cover={loc.cover}
                     title={loc.title}
                  />
               ))}
               {isMultipleThree ? '' : <div className="empty_div"></div>}
            </section>
         )}
      </div>
   )
}

export default Home
