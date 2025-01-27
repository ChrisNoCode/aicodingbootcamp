import { Play } from 'lucide-react';
import { useState } from 'react';

interface VideoTestimonialProps {
  vimeoId: string;
  thumbnail: string;
  name: string;
  role: string;
  company: string;
}

export function VideoTestimonial({ vimeoId, thumbnail, name, role, company }: VideoTestimonialProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#9D4EDD] to-[#FF69B4] rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
      <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden">
        {!isPlaying ? (
          <div className="relative aspect-video cursor-pointer" onClick={handlePlay}>
            {/* Use loading="lazy" for images below the fold */}
            <img 
              loading="lazy"
              decoding="async"
              src={thumbnail} 
              alt={`${name}'s testimonial thumbnail`}
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-white fill-white" />
              </div>
            </div>
          </div>
        ) : (
          <div className="aspect-video">
            <iframe
              src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
          </div>
        )}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <p className="text-gray-400">
            {role} at {company}
          </p>
        </div>
      </div>
    </div>
  );
}