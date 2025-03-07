import { Link } from "react-router-dom";
import Image from "../components/Image";
import PostMenuActions from "../components/PostMenuActions";
import Seach from "../components/Seach";
import Comments from "../components/Comments";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* details */}
      <div className="flex gap-8">
        <div className="flex flex-col gap-8 lg:w-3/5">
          <h1 className="text-xl font-semibold md:text-3xl lg:text-4xl 2xl:text-5xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Written By</span>
            <Link to="/test" className="text-blue-800">
              John Doe
            </Link>
            <span>on</span>
            <Link to="/test" className="text-blue-800">
              Web Design
            </Link>
            <span>2 days ago</span>
          </div>
          <p className="font-medium text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
            libero dolor rem, consequuntur aliquam quod quisquam numquam
            repudiandae omnis, cum, neque provident quibusdam! Error ratione
            dolores sit fugiat neque! Commodi!
          </p>
        </div>
        <div className="hidden w-2/5 lg:block">
          <Image src="postImg.jpeg" className="rounded-2xl" w="600"></Image>
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col gap-12 md:flex-row">
        {/* context */}
        <div className="flex flex-col gap-6 text-justify lg:text-lx">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem dolorum, repellendus voluptates et necessitatibus
            aliquam dicta voluptas excepturi? Minus fugiat cum nam neque
            commodi! Aut alias totam iusto omnis voluptates. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Perferendis rerum voluptatum
            optio numquam corrupti doloribus laborum, ipsam magnam harum rem
            repellendus consectetur! Itaque, aperiam vel maxime rerum culpa
            vitae provident.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
            vero incidunt, cumque eum architecto sapiente, recusandae tempora
            perspiciatis, repellendus explicabo quaerat consequuntur enim minima
            magnam possimus voluptas facere amet iste. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Fugit, optio nesciunt modi a
            perspiciatis consectetur libero porro, voluptas expedita aliquid
            impedit mollitia ipsa? Iure fugiat, id in laudantium quam
            repudiandae?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fugit,
            minima, fugiat impedit, soluta unde dolorem nobis quas fuga porro
            cumque magni accusantium? Nemo officiis aut quae ut, praesentium
            obcaecati. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Eveniet quod dolor veritatis eius quos voluptas autem at sequi!
            Iusto dolorum mollitia fuga dolores placeat tempore nostrum quidem,
            possimus quod exercitationem!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fugit,
            minima, fugiat impedit, soluta unde dolorem nobis quas fuga porro
            cumque magni accusantium? Nemo officiis aut quae ut, praesentium
            obcaecati. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Eveniet quod dolor veritatis eius quos voluptas autem at sequi!
            Iusto dolorum mollitia fuga dolores placeat tempore nostrum quidem,
            possimus quod exercitationem!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fugit,
            minima, fugiat impedit, soluta unde dolorem nobis quas fuga porro
            cumque magni accusantium? Nemo officiis aut quae ut, praesentium
            obcaecati. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Eveniet quod dolor veritatis eius quos voluptas autem at sequi!
            Iusto dolorum mollitia fuga dolores placeat tempore nostrum quidem,
            possimus quod exercitationem!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fugit,
            minima, fugiat impedit, soluta unde dolorem nobis quas fuga porro
            cumque magni accusantium? Nemo officiis aut quae ut, praesentium
            obcaecati. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Eveniet quod dolor veritatis eius quos voluptas autem at sequi!
            Iusto dolorum mollitia fuga dolores placeat tempore nostrum quidem,
            possimus quod exercitationem!
          </p>
        </div>
        {/* side bar menu */}
        <div className="sticky px-4 h-max top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8 ">
              <Image
                src="userImg.jpeg"
                className="object-cover w-12 h-12 rounded-full"
                w="48"
                h="48"
              ></Image>
              <Link className="text-blue-800">John Doe</Link>
            </div>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg"></Image>
              </Link>
              <Link>
                <Image src="instagram.svg"></Image>
              </Link>
            </div>
          </div>
          <PostMenuActions></PostMenuActions>
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">
              Web Design
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              Databases
            </Link>
            <Link className="underline" to="/">
              Search Engines
            </Link>
            <Link className="underline" to="/">
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Seach></Seach>
        </div>
      </div>
      <Comments></Comments>
    </div>
  );
};

export default SinglePostPage;
