import { useEffect, useState } from "react";
import './product.css';
import { motion } from "framer-motion"
import List from "./List";

function ProductList() {
  const [pro, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const getdata = () => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=f09fb963d3e394d1aed39bb062b0eaa2')
      .then(res => res.json())
      .then(data => {
        console.log("API Response:", data); 
        setProducts(data.results);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }

  useEffect(() => {
    getdata();
  }, []);

  const filteredProducts = pro.filter(product => 
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="ProductList">


      <div className="container">
        <div className="row">

        <input 
        type="text" 
        placeholder="Search by Name..." 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
     
      />

          {filteredProducts.map((product) => {
            return (
              <motion.div
                layout
                animate={{ transform: "scale(1)" }}
                initial={{ transform: "scale(0)" }}
                transition={{ type: "spring", damping: 8 }}
                className="col-3"
                key={product.id}
              >
                <List product={product} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
