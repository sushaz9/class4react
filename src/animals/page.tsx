import Link from "next/link";

type petsSearchQuery = {
  sortBy: string;
};

type petsType = {
  name: string;
  id: number;
};

let pets: petsType[] = [
  {
    name: "Joni",
    id: 0,
  },
  {
    name: "Kam",
    id: 1,
  },
  {
    name: "Libby",
    id: 2,
  },
  {
    name: "Anastatia",
    id: 3,
  },
];

// this compares each object in pets array
// If object a is < object b, it will swap them in the array

function comparePets(a: petsType, b: petsType) {
  if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  } else {
    return 0;
  }
}

// next js 'exposes' search params to us (search params being the ?query-something in URL)
export default function Page({
  searchParams,
}: {
  searchParams: petsSearchQuery;
}) {
  let sortedPets = [...pets];

  if (searchParams.sortBy == "asc") {
    pets.sort(comparePets);
  } else if (searchParams.sortBy == "desc") {
    pets.sort(comparePets).reverse();
  }
  return (
    <div>
      <h4>This is a website about animals: here are many animals!</h4>
      <p>{searchParams.sortBy}</p>
      <br />
      <Link href="/animals">Remove the sort</Link>
      <br />
      <Link href="/animals?sortBy=asc">Sort by ascending</Link>
      <Link href="/animals?sortBy=dec">Sort by descending</Link>
      {pets.map((pet) => {
        return (
          <div key={pet.id}>
            <br />
            <Link href={`/animals/${pet.name.toLowerCase()}`}>{pet.name}</Link>
          </div>
        );
      })}
    </div>
  );
}
