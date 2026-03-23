import Navbar from "./Navbar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 pt-16">{children}</main>
    <footer className="border-t border-border">
      <div className="section-container py-8 md:py-8">
        <p className="text-sm text-muted-foreground">© 2024 Ava Thompson. Designed with intention.</p>
      </div>
    </footer>
  </div>
);

export default Layout;
