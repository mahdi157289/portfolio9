import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const isFirstSlide = prevIndex === 0;
      return isFirstSlide ? images.length - 1 : prevIndex - 1;
    });
  }, [images]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const isLastSlide = prevIndex === images.length - 1;
      return isLastSlide ? 0 : prevIndex + 1;
    });
  }, [images]);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [images, nextSlide]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 shadow-2xl group w-full h-[300px] sm:h-[400px] lg:h-[500px]">
      <div
        className="w-full h-full bg-center bg-cover bg-no-repeat duration-500"
        style={{ backgroundImage: `url('${images[currentIndex]}')` }}
      ></div>
      
      {/* Left Arrow */}
      {images.length > 1 && (
        <div className="opacity-0 group-hover:opacity-100 absolute top-[50%] -translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer hover:bg-black/80 transition-all border border-white/20">
          <ChevronLeft onClick={prevSlide} size={30} />
        </div>
      )}
      
      {/* Right Arrow */}
      {images.length > 1 && (
        <div className="opacity-0 group-hover:opacity-100 absolute top-[50%] -translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer hover:bg-black/80 transition-all border border-white/20">
          <ChevronRight onClick={nextSlide} size={30} />
        </div>
      )}
      
      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {images.map((img, slideIndex) => (
            <div
                key={slideIndex}
                onClick={() => setCurrentIndex(slideIndex)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all ${slideIndex === currentIndex ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/80'}`}
            ></div>
            ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
