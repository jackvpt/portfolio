import { useFetch } from "../../utils/useFetch"
import Masonry from "react-masonry-css"
import Creation from "../Creation/Creation"
import "./Creations.scss"

export default function Creations() {
  // const [filter, setFilter] = useState("all")

  // Fetch call returns 'data', 'isLoading' and 'error'
  const fetchResult = useFetch("/data/creations.json")

  if (!fetchResult.data) return

  // Get data from fetch
  const creations = fetchResult.data

   const breakpointColumnsObj = {
    default: 5,
    1440: 4,
    1024: 3,
    768: 2,
    600: 1,
  }

  return (
    <section className="div__creations">
      <h3>RÉALISATIONS</h3>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="div__projects"
        columnClassName="grid-column"
      >
        {creations.map((creation, index) => (
          <Creation
            key={index}
            creation={creation}
          />
        ))}
      </Masonry>
    </section>
  )
}
