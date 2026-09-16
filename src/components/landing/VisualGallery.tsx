import { useState } from 'react';
import { Image as ImageIcon, Maximize2, X, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface GalleryItem {
  id: string;
  title: string;
  location: string;
  image: string;
  description: string;
}

export default function VisualGallery() {
  const { t } = useLanguage();
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = t.gallery.items || [];

  return (
    <section id="galerie" className="py-24 bg-[#0a0812] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300 text-xs font-semibold">
            <ImageIcon className="w-3.5 h-3.5" />
            {t.gallery.badge}
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-amber-100">
            {t.gallery.title}
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group relative rounded-2xl bg-[#14111f] border border-amber-500/20 overflow-hidden cursor-pointer shadow-lg hover:border-amber-400/60 transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14111f] via-transparent to-transparent opacity-80" />
                
                {/* Hover overlay icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/60 backdrop-blur-md border border-amber-400/40 flex items-center justify-center text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              <div className="p-4 space-y-1">
                <span className="text-[10px] uppercase font-mono tracking-wider text-amber-400 font-bold block">
                  {item.location}
                </span>
                <h3 className="font-cinzel font-bold text-base text-amber-100 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-400 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div 
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full rounded-2xl bg-[#14111e] border-2 border-amber-500/40 overflow-hidden shadow-2xl"
          >
            <div className="relative aspect-video max-h-[70vh] bg-black">
              <img
                src={activeImage.image}
                alt={activeImage.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-black/70 hover:bg-stone-800 text-stone-200 cursor-pointer border border-stone-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 bg-[#0f0d18] border-t border-amber-500/20">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
                {activeImage.location}
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-amber-100 mt-0.5">
                {activeImage.title}
              </h3>
              <p className="text-sm text-stone-300 mt-2 font-sans">
                {activeImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
