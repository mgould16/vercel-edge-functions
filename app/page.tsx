import Link from "next/link";

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to My Vercel Project</h1>
      <p>This is the homepage.</p>
      
      {/* ✅ Added a link to /geo-test */}
      <p>
        <Link href="/geo-test" style={{ color: "blue", textDecoration: "underline" }}>
          Click here to test the Edge Function Redirect
        </Link>
      </p>
    </div>
  );
}
