export type EntryProps = {
  id?: number;
  title: string;
  country: string;
  img?: {
    src: string;
    alt: string;
  };
  googleMapsLink: string;
  dates: string;
  text: string;
};

function Entry({
  title,
  country,
  img,
  googleMapsLink,
  dates,
  text,
}: EntryProps) {
  return (
    <article className="flex flex-col items-center py-4 md:flex-row md:max-w-3xl md:space-x-2">
      <img
        className="object-cover w-full rounded-t-lg h-72 md:w-56 md:rounded-lg"
        src={img?.src}
        alt={img?.alt}
      />
      <div className="flex flex-col justify-between px-2 mt-3 md:px-4 md:mt-0 leading-normal">
        <div className="flex items-center">
          <img className="size-6 mr-1" src="/src/assets/marker.svg" />
          <span className="text-lg text-gray-900 mr-4">
            {country.toUpperCase()}
          </span>
          <a
            href={googleMapsLink}
            className="text-gray-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Maps
          </a>
        </div>

        <h1 className="mt-4 mb-8 text-4xl font-bold tracking-tight text-gray-900">
          {title}
        </h1>
        <p className="mb-2 text-lg font-bold tracking-tight text-gray-900">
          {dates}
        </p>
        <p className="text-lg">{text}</p>
      </div>
    </article>
  );
}

export default Entry;
