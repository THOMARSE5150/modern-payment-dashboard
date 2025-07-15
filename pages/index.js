import Navbar from "@/components/Navbar";
import PaymentForm from "@/components/PaymentForm";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className="flex flex-col items-center justify-center min-h-[80vh]">
        <h1 className="text-4xl font-bold text-accent mb-4 glass-bg">
          Pay Your Hosting Fees
        </h1>
        <p className="text-secondary mb-8 text-lg glass-bg">
          Secure payment portal for website hosting and services.
        </p>
        <PaymentForm />
      </section>
    </div>
  );
}