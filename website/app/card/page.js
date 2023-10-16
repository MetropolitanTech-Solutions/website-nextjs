import Image from "next/image";

export default function Card() {
  return (
    <div className="flex flex-col max-w-sm rounded overflow-hidden shadow-lg bg-gray-900 hover:scale-105">
      <div className="flex justify-center">
        <Image
          src="/metro-video/Blog.gif"
          width={250}
          height={250}
          alt="Metrotech"
        />
      </div>

      <div className="flex flex-col justify-center px-6 py-4">
        <div className="flex justify-center font-bold text-xl mb-2">Lorem</div>
        <p className="flex text-gray-400 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
        <div className="flex pt-4">
          <span className="inline-block bg-gray-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-sky-300">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-sky-300">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-sky-300">
            #photography
          </span>
        </div>
      </div>
    </div>
  );
}
