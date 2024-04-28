import React from "react";

const Tracks = () => {
  return (
    <div className="font-tac grid justify-center gap-8 mt-4 mx-auto max-w-[1200px] ">
      <h1 className="glass px-8 text-gray-300 text-3xl h-16 items-center justify-center flex">
        SENCILLOS DE ENTROPÍA
      </h1>

      <div className="grid gap-4 md:grid-cols-3 grid-cols-1">
        <iframe
          // style="border-radius:12px"
          src="https://open.spotify.com/embed/track/17bQRk2N1s5tCRn9JuVztm?utm_source=generator&theme=0"
          width="100%"
          height="352"
          // frameBorder="0"
          // allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>

        <iframe
          // style="border-radius:12px"
          src="https://open.spotify.com/embed/track/4D2ClxY43a8eBJ5ThEvVh4?utm_source=generator&theme=0"
          width="100%"
          height="352"
          // frameBorder="0"
          // allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>

        <iframe
          // style="border-radius:12px"
          src="https://open.spotify.com/embed/track/0CyzM5MfnWGBKhHIY0pcZT?utm_source=generator&theme=0"
          width="100%"
          height="352"
          // frameBorder="0"
          // allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>

      <h1 className="glass px-8 text-gray-300 text-3xl h-16 items-center justify-center flex">
        PRIMER EP
      </h1>
      <iframe
        // style="border-radius:12px"
        src="https://open.spotify.com/embed/album/4ZwXcRSOWo9GLrzrIasEFh?utm_source=generator&theme=0"
        width="100%"
        height="522"
        // frameBorder="0"
        // allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Tracks;
