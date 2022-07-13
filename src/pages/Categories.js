import CategoryList from "../components/CategoryList/CategoryList";
import { getCategories } from "../data/categories";

function Categories() {
  return ( 
    <div>
   <CategoryList categories={getCategories()} />
    </div>
   );
}

export default Categories;