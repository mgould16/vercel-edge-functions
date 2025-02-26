export default function GeoTestPage() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Edge Function Geo-Redirect Test</h1>
      <p>If the Edge Function is working, you should be redirected based on your location.</p>
      <p>If not, you&apos;re seeing this page instead, which means the Edge Function is not running.</p>
    </div>
  );
}
