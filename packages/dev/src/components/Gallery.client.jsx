import {
  useProduct,
  MediaFile,
  SelectedVariantImage,
} from '@shopify/hydrogen/client';

export default function Gallery() {
  const {media, selectedVariant} = useProduct();

  const featuredMedia = selectedVariant.image || media[0].image;
  const featuredMediaSrc = featuredMedia.url.split('?')[0];
  const galleryMedia = media.filter((med) => {
    if (med.mediaContentType === 'MODEL_3D') {
      return true;
    }

    return !med.image.url.includes(featuredMediaSrc);
  });

  if (!media.length) {
    return null;
  }

  return (
    <div
      className="gap-4 flex md:grid md:grid-cols-2 overflow-x-scroll no-scrollbar scroll-snap-x scroll-smooth h-[485px] md:h-auto place-content-start"
      tabIndex="-1"
    >
      <SelectedVariantImage className="w-[80vw] md:w-full h-full object-cover object-center flex-shrink-0 md:flex-shrink-none snap-start md:col-span-2 border-2 border-black" />
      {galleryMedia.map((med) => {
        return (
          <MediaFile
            tabIndex="0"
            key={med.id || med.image.id}
            className="w-[80vw] md:w-auto h-full md:h-auto object-cover object-center transition-all snap-start border-2 border-black flex-shrink-0"
            media={med}
            options={{
              height: '485',
              crop: 'center',
            }}
            interactionPromptThreshold="0"
          />
        );
      })}
    </div>
  );
}
