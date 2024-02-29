export default async function Home() {
  const response = await fetch("https://thronesapi.com/api/v2/Characters", {
    cache: "force-cache",
  });
  const data = await response.json();
  const all = data.map((d) => {
    return (
      <div className="allInfo" key={d.id}>
        <h4>{d.fullName}</h4>
        <img src={d.imageUrl} alt={d.fullName} />
      </div>
    );
  });

  return <section className="container">{all}</section>;
}
