import Image from "next/image";
import earthquake from "../../public/earthquake.png";
import magnitude from "../../public/magnitude.png";

async function getEarthquake() {
  const res = await fetch("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json")
  const data = await res.json()

  return data.Infogempa.gempa
}
export default async function Home() {
  const data = await getEarthquake();

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-slate-100 ">
      <div className="flex flex-col items-center bg-slate-600 py-8 px-20 rounded-2xl shadow-2xl shadow-slate-500">
        <h1 className="text-xl py-2 font-bold">Informasi Gempa Terbaru Indonesia</h1>
        <h1 className="text-sm pb-2">Sumber BMKG</h1>
        <div className="flex flex-row">
          <Image className="rounded-xl shadow-lg" src={`https://static.bmkg.go.id/${data.Shakemap}`} alt="football" width={300} height={300} />
          <div className="flex flex-col ml-4">
            <p>Tanggal : </p>
            <span className="bg-slate-100 rounded-md text-slate-600 p-1 font-bold w-max">{data.Tanggal}</span>
            <p>Jam : </p>
            <span className="bg-slate-100 rounded-md text-slate-600 p-1 font-bold w-max">{data.Jam}</span>
            <p>Wilayah : </p>
            <div className="flex flex-row">
              <Image src={earthquake} alt="Earthquake" width={30} height={30} />
              <span className="">{data.Wilayah}</span>
            </div>
            <div className="flex flex-row">
              <Image src={magnitude} alt="Magnitude" width={30} height={30} />
              <span className="">{data.Magnitude}</span>
            </div>
            <p>Kedalaman : {data.Kedalaman}</p>
            <p>Koordinat : {data.Coordinates}</p>
            <p>Lintang : {data.Lintang}</p>
            <p>Bujur : {data.Bujur}</p>
            <p>Potensi : </p>
            <span className="bg-slate-100 rounded-md text-slate-600 p-1 font-bold w-max">{data.Potensi}</span>
          </div>
        </div>
      </div>
    </main>
  )
}
