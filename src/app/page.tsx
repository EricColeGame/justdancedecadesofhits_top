import Link from "next/link";

export default function RootPage() {
  return (
    <main>
      <meta httpEquiv="refresh" content="0;url=/en" />
      <p>
        Redirecting to <Link href="/en">Just Dance Decades of Hits Wiki</Link>…
      </p>
    </main>
  );
}
