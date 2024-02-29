import Link from "next/link";

export default async function Character({ params }) {
  const id = params.characterid;
  const response = await fetch(
    `https://thronesapi.com/api/v2/Characters/${id}`
  );
  const data = await response.json();
  return (
    <section className="info">
      <h1>{data.family}</h1>
      <h2>
        {data.fullName}({data.title})
      </h2>
      <img src={data.imageUrl} />
      <Link href="/">Back</Link>
    </section>
  );
}
