import '../style/Search.css'

import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Loading } from "../components/Loading";
import { Navbar } from "../components/Navbar";
import { Searching } from "./Searching";
function Search() {
  const [popular, setPopular] = useState([]);
  const param = useParams();
  const [data, setData] = useState(false);
  const [load, setLoad] = useState("false");

  const getCusines = () => {
    setLoad(true)
    fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${param.type_name}`
    )
     
      .then((res) => res.json())
      .then((res) => {
        setPopular(res.meals);
        setLoad(false)
        console.log(popular);
      });
  };

  useEffect(() => {
    getCusines(param.type_name);
  }, [param.type_name]);

  return (
    <>
    <Navbar/>
    <Searching/>
   {load ? <Loading /> :
<div>
      {popular.map((e) => {
        return (
          <NavLink to={`/search/${e.strMeal}`}>
            <div className='searchconatiner'>
             
              <img src={e.strMealThumb} alt="" /> <br />
              <h3>{e.strMeal}</h3>
              <button
                style={{ padding: "5px 10px" }}
                onClick={() => setData(!data)}>
                ingridents
              </button>
             

              {data === true && (
                <p style={{ padding: "10px" }}>{e.strInstructions}</p>
              )}
            
                  
            </div>
          </NavLink>
        );
      })}
      </div>
    }
    </>
  );
}


export default Search;
