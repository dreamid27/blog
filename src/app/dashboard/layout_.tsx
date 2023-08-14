export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      style={{
        height: '100vh',
      }}
    >
      <nav>
        <a href="/">dashboard</a>
        <br />
        <a href="/dashboard/settings">settings</a>
      </nav>

      {children}
    </section>
  );
}
