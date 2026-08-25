import Link from "next/link";

export default function Home() {
  return (
    <main className="sg-root">
      <h1>Silent Guardian</h1>
      <p>Public safety alerts and incident reporting.</p>
      <Link href="/dashboard" className="sg-button">Enter Guardian Dashboard</Link>
    </main>
  );
}
