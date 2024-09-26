import Link from "next/link";
export default function Home() {
  console.log("Executing home page..");

  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to NextJS Framework built on React Library!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href="./about">About</Link>
      </p>
    </main>
  );
}
