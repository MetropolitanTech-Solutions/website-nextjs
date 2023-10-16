import Link from "next/link";

const routes = [
  {
    title: "Blog",
    imgroute: "/metro-video/Blog.gif",
    route: "/blog",
  },
  {
    title: "Main",
    imgroute: "/metro-logo/Metrotech1.png",
    route: "/"
  },
  {
    title: "Test",
    imgroute: "/metro-logo/Metrotech2.png",
    route: "quienes-somos"
  },
];

export default function Card() {
  return (
    <div className="pt-5">
      <div className="flex flex-row justify-center">
        {routes.map(({ title, imgroute,route }) => (
          <Link href={route}>
            <section className="flex flex-col rounded overflow-hidden shadow-lg bg-gray-900 border-2 border-gray-400 max-w-sm">
              <div className="flex justify-center">
                <img
                  className="pt-1 rounded-lg"
                  src={imgroute}
                  width={250}
                  height={250}
                  alt={title}
                />
              </div>
              <div className="flex flex-col justify-center px-6 py-4">
                <div className="flex justify-center font-bold text-xl mb-2">
                  Lorem
                </div>
                <p className="flex text-gray-400 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
                <div className="flex pt-4">
                  <span className="inline-block bg-gray-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-sky-300 hover:scale-105">
                    #photography
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-sky-300 hover:scale-105">
                    #photography
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-sky-300 hover:scale-105">
                    #photography
                  </span>
                </div>
              </div>
            </section>
          </Link>
        ))}
      </div>
    </div>
  );
}
