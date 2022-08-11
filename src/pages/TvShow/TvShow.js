import "./tvshow.css";
import { useEffect, useState } from "react";

export const TvShow = () => {
  const [dataApi, setDataApi] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=5a85e135dc7864482b9a3c9378e912b1`
    )
      .then((res) => res.json())
      .then((dataAPI) => setDataApi(dataAPI.results));
  }, []);


  return (
    <>
    <div>
    <ul className="container tvshow-list">
        {dataApi.length &&
          dataApi.map((e) => (
            <li key={e.title} className="tvshow-item">
              <img
              className="tvshow-img"
                src={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`}
                alt=""
              />
              <h3 className="tvshow-title">{e.title}</h3>
              <time className="tvshow-time">{e.release_date}</time>
            </li>
          ))}
      </ul>
      <marquee className="marquee-text" behavior="" direction="">
        1 Rossiya rubli, RUB, Sotib olish(145.00), Sotish(190.00). MB(177.49)
        *** 2 Yevro, EUR Sotib olish(10500.00), Sotish(11700.00), MB(11052.42)
        ***3 AQSh dollari, USD Sotib olish(10900.00), Sotish(10960.00),
        MB(10920.28) *** Mol go'shti 13 ming so'm, *** qo'y go'shti 14-15 ming
        so'mga yetgan, *** xorijiy o'simlik yog'ining bir litri 5000 so'mdan
        oshgan, *** Qozog'iston bug'doy unining bir kilogrammi 2000 so'mga
        sotilayapti. *** Gulistonda bir kilogramm guruch 2000-2500 so'mga
        yetgan, *** mahalliy paxta yog'ining bir litri 2800-3000 so'mdan
        sotilayapti.
      </marquee>
    </div>
    </>
  );
};
