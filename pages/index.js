import Link from "next/link";
import Image from "next/image";
import { Carousel } from "components/carousel";
import { get } from "utils/api";
import { useEffect, useState } from "react";
import { Dropdown } from "components/dropdown";
import curve from "public/static/curve.svg";
import { SimpleTimeline } from "components/timeline/simple";
import { Sidebar } from "components/sidebar/sidebar";
const mapNameToComponent = {
  "common.carousel": (props) => <Carousel {...props} />,
};

export default function Home({ d }) {
  return (
    <div className="dark dark:bg-gray-900">
      <div className="h-20">
        <nav className="fixed w-full z-10 p-5 flex justify-around dark:bg-gray-800 dark:text-white">
          <div>
            <h1>
              <Link href="/">
                <a>Food Ninja</a>
              </Link>
            </h1>
          </div>
          <ul className="gap-4 hidden md:flex">
            <li className="border-b-2 border-yellow-600 text-yellow-400 font-bold hover:border-green-600">
              <Link href="/">
                <a>
                  <span>HOME</span>
                </a>
              </Link>
            </li>
            <li>
              <Dropdown />
              {/* <Link href="#">
                <a>
                  <span>SAP CX</span>
                </a>
              </Link> */}
            </li>
            <li>
              <Link href="#">
                <a>
                  <span>OUR PIONEER SERVICES</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <span>TALENT SERVICES</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <span>EN</span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <main className="bg-gray-100">
        <div></div>
        {d && mapNameToComponent[d.__component]({ d: d.Images })}
        <div className="text-yellow-600 flex md:justify-end gap-2 justify-center">
          <Link href="#">
            <a>Log in</a>
          </Link>
          <Link href="#">
            <a>Sign Up</a>
          </Link>
        </div>

        <header>
          <h1>Recipes</h1>
          <h3>For Ninjas</h3>
        </header>

        <div>
          <h4>Latest Recipes</h4>
          <div>
            <div>
              <Image src={curve} alt="" width="400" height="300" />

              <Image
                src="https://raw.githubusercontent.com/iamshaunjp/tailwind-tutorial/lesson-2/public/img/curry.jpg"
                alt=""
                width="400"
                height="260"
              />
              <div>
                <span>5 Bean Chilli Stew</span>
                <span>Recipe by Mario</span>
              </div>
            </div>
          </div>

          <h4>Most Popular</h4>

          <div></div>

          <div>
            <div>Load more</div>
          </div>
        </div>
        <SimpleTimeline />
      </main>
      {/* <div className="fixed h-full w-60 z-10 top-20"><Sidebar /></div> */}
    </div>
  );
}
export async function getStaticProps() {
  const d = await get("homepage").then((dd) => dd.carousel[0]);

  return { props: { d } };
}
