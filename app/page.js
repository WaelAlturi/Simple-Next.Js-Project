import Link from "next/link";
export default async function Home() {
  const response = await fetch("https://thronesapi.com/api/v2/Characters", {
    cache: "force-cache",
  });
  const data = await response.json();
  const all = data.map((d) => {
    return (
      <Link className="allInfo" href={`/${d.id}`} key={d.id}>
        <h4>{d.fullName}</h4>
        <img src={d.imageUrl} alt={d.fullName} />
      </Link>
    );
  });

  return (
    <>
      <h1>Game OF Thrones API</h1>
      <section className="container">{all}</section>
    </>
  );
}
