import CategoryList from "../components/CategoryList/CategoryList";
import Jobs from "../components/Jobs/Jobs";
import { getCategories } from "../data/categories";

function Feeelans() {
  return ( 
    <div className="wrapper_header">
      <h1>Freelans</h1>
      
      <Jobs />
      <CategoryList categories={getCategories()} />
    </div>
   );
}

export default Feeelans;