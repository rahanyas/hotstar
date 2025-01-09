// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation"; // Navigation module styles
// import "swiper/css/pagination"; // Pagination module styles
// import { Navigation, Pagination } from "swiper/modules";

// function VideoSlider() {
//   const [videos, setVideos] = useState([]);

//   const API_KEY = import.meta.env.VITE_API_KEY;
//   const POPULAR_MOVIES_URL = "https://api.themoviedb.org/3/movie/popular";
//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const { data } = await axios.get(POPULAR_MOVIES_URL, {
//           params: { api_key: API_KEY },
//         });

//         const movies = data.results;

//         const videoPromises = movies.map((movie) =>
//           axios
//             .get(`https://api.themoviedb.org/3/movie/${movie.id}/videos`, {
//               params: { api_key: API_KEY },
//             })
//             .then((response) => {
//               const video = response.data.results.find(
//                 (vid) => vid.site === "YouTube"
//               );
//               return video ? { id: movie.id, title: movie.title, key: video.key, posterPath: movie.poster_path } : null;
//             })
//         );

//         const fetchedVideos = await Promise.all(videoPromises);
//         setVideos(fetchedVideos.filter((video) => video !== null));
//       } catch (error) {
//         console.error("Error fetching videos:", error);
//       }
//     };

//     fetchVideos();
//   }, [API_KEY]);

//   return (
//     <div style={{ padding: "20px", maxWidth: "1200px", margin: "auto" }}>
//       {videos.length > 0 ? (
//         <Swiper
//           modules={[Navigation, Pagination]}
//           navigation
//           pagination={{ clickable: true }}
//           spaceBetween={10}
//           slidesPerView={1}
//           loop={true}
//           autoplay={{ delay: 3000 }}
//           style={{ margin: "auto" }}
//         >
//           {videos.map((video) => (
//             <SwiperSlide key={video.id}>
//               <div style={{ position: "relative", textAlign: "center" }}>
//                 <iframe
//                   src={`https://www.youtube.com/embed/${video.key}?autoplay=1`}
//                   title={video.title}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   style={{
//                     width: "100%",
//                     height: "500px",
//                     borderRadius: "8px",
//                     boxShadow: "0 0 10px rgba(0,0,0,0.3)",
//                   }}
//                 ></iframe>
//                 <h3
//                   style={{
//                     position: "absolute",
//                     top: "20px",
//                     left: "50%",
//                     transform: "translateX(-50%)",
//                     color: "#fff",
//                     fontSize: "24px",
//                     fontWeight: "bold",
//                     textShadow: "2px 2px 5px rgba(0,0,0,0.7)",
//                     margin: "0",
//                   }}
//                 >
//                   {video.title}
//                 </h3>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       ) : (
//         <p>Loading videos...</p>
//       )}
//     </div>
//   );
// }

// export default VideoSlider;


import { useEffect, useRef, useState } from "react";
import movieFetch from "./movieFetch";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);

  const screenWidth = window.innerWidth

  const getTrendingVideos = () => {
    movieFetch.getTrendingVideos
      .then((res) => {
        console.log(res.data.results)
           setMovieList(res.data.results)
      })
      .catch((error) => {
        console.error("Error fetching trending videos:", error);
      });
  };

  useEffect(() => {
    getTrendingVideos();
  }, []);

  const sliderRight = (ele) => {
    if (ele) {
      ele.scrollLeft += screenWidth - 100
    }
  };

  const sliderLeft = (ele) => {
    if (ele) {
      ele.scrollLeft -= screenWidth - 90
    }
  };

  return (
    <div>

<HiChevronLeft
  className="hidden md:block text-white text-[30px] absolute left-1/2 transform -translate-x-[120%] bottom-4 cursor-pointer"
  onClick={() => sliderLeft(elementRef.current)}
/>


<HiChevronRight
  className="hidden md:block text-white text-[30px] absolute left-1/2 transform translate-x-[120%] bottom-4 cursor-pointer"
  onClick={() => sliderRight(elementRef.current)}
/>

    <div className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth" ref={elementRef}>
      {movieList.map((item, index) => (
        <img src={IMAGE_BASE_URL+item.backdrop_path} alt="img backdrop" 
        className='min-w-full md:h-[310px] object-cover object-left-top mr-4 rounded-md'
        key={index}
        />
      ))}
    </div>
    
    </div>
  )
}

export default Slider;
