// import { UpComming } from "../pages/UpComming/UpComming";
// import { Link, Route, Routes } from "react-router-dom";
// import { useEffect, useState } from "react";


// export const UpCommingLink = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch(
//       `https://api.themoviedb.org/3/movie/upcoming?api_key=f30892eccefc07deb28509f0da56ccc0`
//     )
//       .then((res) => res.json())
//       .then((dataApi) => setData(dataApi.results))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div>
//       <ul className=" upocmming-list">
//         {data.length && data.map((e) => <UpComming item={e} />)}
//       </ul>

//     </div>
//   );
// };
