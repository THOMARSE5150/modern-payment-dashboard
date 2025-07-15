import { useState } from "react";

export default function PaymentForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const { url } = await res.json();
    window.location = url;
  };

  return (
    <form
      className="glass-bg p-8 rounded-xl shadow-lg flex flex-col items-center gap-4 w-full max-w-md"
      onSubmit={handleSubmit}
    >
      <label className="w-full mb-2 text-accent font-semibold">Email</label>
      <input
        className="w-full px-4 py-2 rounded-lg bg-secondary text-primary focus:outline-accent"
        type="email"
        required
        placeholder="you@email.com"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button
        type="submit"
        className="mt-4 bg-accent text-white px-6 py-2 rounded-full font-bold hover:scale-105 transition"
        disabled={loading}
      >
        {loading ? "Redirecting..." : "Pay Hosting Fee"}
      </button>
    </form>
  );
}