import { VideoTestimonial } from "./VideoTestimonial";

export default function VideoTestimonials() {
  return (
    <div className="bg-gray-950 py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Hear From Our Graduates
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Listen to the success stories of founders who've transformed their
            ideas into reality
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <VideoTestimonial
            vimeoId="865762097"
            thumbnail={`https://vumbnail.com/865762097.jpg`}
            name="Arteen Zahiri"
            role="Founder"
            company="Vibey"
          />
          <VideoTestimonial
            vimeoId="944464044"
            thumbnail={`https://vumbnail.com/944464044.jpg`}
            name="Paul Bird"
            role="Business Owner"
            company=" "
          />
          <VideoTestimonial
            vimeoId="943825985"
            thumbnail={`https://vumbnail.com/943825985.jpg`}
            name="Nathan Wright"
            role="Founder"
            company="Track Your Talent"
          />
        </div>
      </div>
    </div>
  );
}
