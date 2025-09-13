import { useState, useRef, useEffect } from "react";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  "data-testid"?: string;
  skeletonClassName?: string;
  ratio?: string;
  eager?: boolean;
  fetchPriority?: 'high' | 'low' | 'auto';
  onLoad?: () => void;
  onError?: () => void;
}

const LazyImage = ({ 
  src, 
  alt, 
  className = "", 
  "data-testid": testId,
  skeletonClassName = "",
  ratio = "4/3",
  eager = false,
  fetchPriority = "auto",
  onLoad,
  onError,
  ...rest 
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(eager);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (eager) return; // Skip intersection observer if eager loading

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [eager]);

  const handleImageLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleImageError = () => {
    setHasError(true);
    onError?.();
  };

  const baseClasses = className || "rounded-xl muted-color";
  const containerClasses = skeletonClassName || baseClasses;

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${containerClasses}`}
      style={{ aspectRatio: ratio }}
      data-testid={testId ? `${testId}-container` : undefined}
    >
      {/* Loading Skeleton */}
      {!isLoaded && !hasError && (
        <div 
          className="absolute inset-0 w-full h-full animate-pulse bg-gray-800 border border-gray-700 flex items-center justify-center"
          data-testid={testId ? `${testId}-skeleton` : undefined}
          aria-hidden="true"
        >
          <svg 
            className="w-12 h-12 text-gray-600 animate-pulse" 
            fill="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17l2.5-3.16L14.5 17H9zm0-12h6v6H9V5z"/>
          </svg>
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div 
          className="absolute inset-0 w-full h-full bg-gray-800 border border-red-400 flex items-center justify-center"
          data-testid={testId ? `${testId}-error` : undefined}
          aria-hidden="true"
        >
          <div className="text-center text-gray-400">
            <svg 
              className="w-12 h-12 mx-auto mb-2 text-red-400" 
              fill="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <p className="text-sm">Failed to load image</p>
          </div>
        </div>
      )}

      {/* Actual Image */}
      {isInView && !hasError && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={fetchPriority}
          onLoad={handleImageLoad}
          onError={handleImageError}
          data-testid={testId}
          {...rest}
        />
      )}
    </div>
  );
};

export default LazyImage;