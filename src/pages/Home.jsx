import { useEffect, useState } from "react";
import Spinner from "../components/Spinnner";
import Product  from "../components/Product";
function Home() {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.error(error);
      console.log("Error while fetching data from api");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);
  return (
    <div className="flex items-center justify-center w-full">
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
       <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 max-w-6xl p-1 mx-auto space-y-10 gap-x-5">
        {
           posts.map((post) => {
         
            return <Product key={post.id} post={post} />;
            
          })
        }
       </div>
      ) : (
        <div className="flex justify-center items-center">
          <p> No Post Found</p>
        </div>
      )}
      {
        
      }
    </div>
  );
}
export default Home;
