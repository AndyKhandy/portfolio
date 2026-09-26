import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="page-shell grid min-h-[70vh] place-items-center text-center">
      <div>
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-4xl font-bold">That page is underwater.</h1>
        <Link className="button-primary mt-7" to="/">
          Back home
        </Link>
      </div>
    </main>
  );
}
