import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function ResCarousel(props) {
  return (
    <Carousel autoPlay>
      <div>
        <img src="/images/gol-min.webp" alt='Game of Life'/>
        <p className="legend">Game of Life - <a href='https://gameoflife-e94.netlify.app/'>Deploy</a> | <a href='https://github.com/e94canales/game-of-life'>GitHub</a></p>
      </div>
      <div>
        <img src="/images/topcharts-min.webp" alt='Top Charts'/>
        <p className="legend">Top Charts - <a href='https://topcharts.netlify.app'>Deploy</a> | <a href='https://github.com/e94canales/streaming-js-audio-player'>GitHub</a></p>
      </div>
      <div>
        <img src="/images/chiclashes-min.webp" alt='Chic Lashes'/>
        <p className="legend">Chic Lashes - <a href='https://ah-ec.netlify.app'>Deploy</a> | <a href='https://github.com/e94canales/chic-lashes'>GitHub</a></p>
      </div>
      <div>
        <img src="/images/citrics-min.webp" alt='Citrics'/>
        <p className="legend">Citrics - <a href='https://citrics-fe-c.vercel.app'>Deploy</a> | <a href='https://github.com/e94canales/citrics-fe-c'>GitHub</a></p>
      </div>
    </Carousel>
  );
};