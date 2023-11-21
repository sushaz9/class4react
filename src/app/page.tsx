import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1> This is home page</h1>
      <Link href="/animals">Go to my animals</Link>
    </div>
  );
}
