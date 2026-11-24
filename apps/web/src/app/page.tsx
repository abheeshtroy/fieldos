export default async function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";
  let health = "Not connected";
  try {
    const response = await fetch(`${apiUrl}/health`, { cache: "no-store" });
    if (response.ok) health = "Connected";
  } catch {
    // Backend might not be running yet.
  }

  return (
    <main>
      <span className="eyebrow">FDE WORKBENCH · EARLY SCAFFOLD</span>
      <h1>Build better customer integrations.</h1>
      <p>
        Our goal is to help forward-deployed engineers understand unfamiliar systems,
        uncover integration problems, and get to a first working integration faster.
      </p>
      <section>
        <strong>Backend</strong><span>{health}</span>
      </section>
      <small>No customer integration functionality is implemented yet.</small>
    </main>
  );
}
