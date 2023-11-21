import Link from "next/link";

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

type petParam = { params: { pets: string } };

export default function Page() {
  return (
    <div>
      <h4>This is a website about animals: here are many animals!</h4>
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
