import qs from "qs"
import {HeroSection} from "./components/HeroSection";

const homePageQuery = qs.stringify(
  {
    populate: {
      blocks: {
        populate: "*"
      },
    },
  });


async function getStrapiData(path:string) {
  const url = new URL(path,process.env.BASE_URL)
  url.search = homePageQuery

  try {
      const rensponse = await fetch(url.href);
      const data = await rensponse.json();
      return data;
      } catch (error) {
        console.log(error);
      }
}

export default async function Home() {

  const strapiData = await getStrapiData("/api/home-page");
  const { title, description, blocks } = strapiData.data;

  return (
    <main className="container">
      <section className="section">
        <h1>{title}</h1>
        <p>{description}</p>
      </section>
      <HeroSection data={blocks[0]} />
    </main>
  );
}