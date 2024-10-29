import Link from "next/link";
import Image from "next/image";
import image from "../asset/photo.png";
import page from "../page1/page";
import page2 from "../page2/page";
import page3 from "../page3/page";
import page4 from "../page4/page";
import web from "../asset/web.png";
import mouse from "../asset/mou.png";
import ai from "../asset/ai.png";

export default function Blogs() {
  return (
    <div className="parentContainer">
      <div className="childContainer bounce-in-right">
        <div className="imageContainer">
          <Image
            src={"/asset/photo.png"}
            alt="image"
            width={500}
            height={500}
          />
        </div>
        <b>
          <h1 className="title">Top 5 Laptop in The World</h1>
        </b>
        <h1 className="description">
          Deacription: <br />
        </h1>
        <h2>
          With: Price <br />
          With: Speciation <br />& all Detial Blog
        </h2>

        <button className="readMore">
          <Link href="/page1">Read More</Link>
        </button>
      </div>
      {/* box no 2 */}

      <div className="childContainer bounce-in-right">
        <div className="imageContainer">
          <Image src={"/asset/mou.png"} alt="image" width={500} height={500} />
        </div>
        <b>
          <h1 className="title">Top 5 Mouse in the World</h1>
        </b>
        <h1 className="description">Deacription:</h1>
        <h2>
          With: Price <br />
          With: Speciation <br />& all Detial Blog
        </h2>

        <button className="readMore">
          <Link href="/page2">Read More</Link>
        </button>
      </div>

      {/* box no 3 */}
      <div className="childContainer bounce-in-right">
        <div className="imageContainer">
          <Image src={"/asset/ai.png"} alt="image" width={500} height={500} />
        </div>
        <h1 className="title">
          {" "}
          <b>What is AI?</b>
        </h1>
        <p className="description">
          {" "}
          Description: <br />
          (AI) is the simulation of human intelligence processes by machines,
        </p>

        <button className="readMore">
          <Link href={"/page3"}>Read More</Link>
        </button>
      </div>

      {/* box no 4 */}

      <div className="childContainer bounce-in-right">
        <div className="imageContainer">
          <Image src={"/asset/web.png"} alt="image" width={500} height={500} />
        </div>
        <h1 className="title">
          <b>Top 10 Freelancing Websites</b>
        </h1>
        <p className="description">
          {" "}
          Description: <br />
          Top 10 Freelancing <br />
          Websites with <br /> Country Name
        </p>
        <button className="readMore">
          <Link href={"/page4"}>Read More</Link>
        </button>
      </div>
    </div>
  );
}
