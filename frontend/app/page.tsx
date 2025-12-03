import qs from "qs"
import Table from "./components/Table";
import TabTimeline from "./components/TabTimeline";
import TabSimple from "./components/TabSimple";

const homePageQuery = qs.stringify(
{
    populate: {
      blocks: {
        on: {
          "layout.hero-section": {
            populate: "*"
          },
          "layout.features-section": {
            populate: {
             Features: {
                populate: "*"
              }
            }
          }
        }
      }
    }
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

    //Dividendi props and tab styles

  interface Dividendo {
    anno: number;
    utileCapogruppo: number;
    totaleAzioni: number;
    dividendi: number;
    dividendoPerAzione: number;
    dataStaccoDividendo: number;
    dataPagamentoDividendi: number;
    }

  const columns: { key: keyof Dividendo; label: string }[] = [
    { key: "anno", label: "Anno" },
    { key: "utileCapogruppo", label: "Utile Capogruppo (€'000)" },
    { key: "totaleAzioni", label: "Totale azioni a fine periodo" },
    { key: "dividendi", label: "Dividendi (€'000)" },
    { key: "dividendoPerAzione", label: "Dividendo € per azione" },
    { key: "dataStaccoDividendo", label: "Data stacco dividendo" },
    { key: "dataPagamentoDividendi", label: "Data pagamento dividendi" },
  ];

    const data: Dividendo[] = [
      { 
        anno: 1,
        utileCapogruppo: 14.129,
        totaleAzioni: 14.129,
        dividendi: 14.129,
        dividendoPerAzione: 11,
        dataStaccoDividendo: 11,
        dataPagamentoDividendi: 14
      },
      { 
        anno: 1,
        utileCapogruppo: 14.129,
        totaleAzioni: 14.129,
        dividendi: 14.129,
        dividendoPerAzione: 11,
        dataStaccoDividendo: 11,
        dataPagamentoDividendi: 14
      },
      { 
        anno: 1,
        utileCapogruppo: 14.129,
        totaleAzioni: 14.129,
        dividendi: 14.129,
        dividendoPerAzione: 11,
        dataStaccoDividendo: 11,
        dataPagamentoDividendi: 14
      },
      { 
        anno: 1,
        utileCapogruppo: 14.129,
        totaleAzioni: 14.129,
        dividendi: 14.129,
        dividendoPerAzione: 11,
        dataStaccoDividendo: 11,
        dataPagamentoDividendi: 14
      },
      { 
        anno: 1,
        utileCapogruppo: 14.129,
        totaleAzioni: 14.129,
        dividendi: 14.129,
        dividendoPerAzione: 11,
        dataStaccoDividendo: 11,
        dataPagamentoDividendi: 14
      },
      { 
        anno: 1,
        utileCapogruppo: 14.129,
        totaleAzioni: 14.129,
        dividendi: 14.129,
        dividendoPerAzione: 11,
        dataStaccoDividendo: 11,
        dataPagamentoDividendi: 14
      },
    ];
    
    const tabs = [
    { label: "2025", content: <Table columns={columns} data={data} lastUpdate="Ultimo Aggiornamento: 05/08/2025"/> },
    { label: "2024", content: <Table columns={columns} data={data} /> },
    { label: "2023", content: <Table columns={columns} data={data} /> },
    { label: "archivio", content: <Table columns={columns} data={data} /> },
  ];

  
  return (
    <main className="container">
      <section className="section">
        <h1>{title}</h1>
        <p>{description}</p>
        <TabTimeline tabs={tabs}/> 
        <TabSimple tabs={tabs}/>
      </section>
    </main>
  );
}