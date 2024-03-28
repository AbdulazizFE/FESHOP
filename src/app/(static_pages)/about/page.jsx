import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Online from "/public/images/icons/online.png";
import Image from "next/image";
export default function About() {
  return (
    <>
        <div className="row">
      <Image src={Online} alt="Hexashop hreo" />
        </div>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
          excepturi dolorem mollitia consequatur sequi dolore vel, rem alias.
          Pariatur, deserunt vel. Pariatur, nesciunt nobis. Cumque asperiores
          ducimus consequuntur hic quae!10
        </div>
        <div className="col">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sint
          corporis dignissimos. Minus eius quae pariatur dolores officia, at
          blanditiis aperiam. Ducimus, quibusdam. Blanditiis consequatur
          veritatis saepe perspiciatis, omnis corrupti.
        </div>
      </div>
    </>
  );
}
