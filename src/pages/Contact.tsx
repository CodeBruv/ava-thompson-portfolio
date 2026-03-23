import { useState } from "react";
import Layout from "@/components/Layout";
import FormInput from "@/components/FormInput";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="section-container max-w-[600px]">
        <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">Contact</p>
        <h1 className="font-heading text-4xl md:text-5xl leading-tight">Let's work together</h1>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Have a project in mind? I'd love to hear about it.
        </p>

        {submitted ? (
          <div className="mt-10 p-6 rounded-md bg-card border border-border text-center">
            <h3 className="font-heading text-xl">Thank you!</h3>
            <p className="mt-1 text-sm text-muted-foreground">I'll get back to you as soon as possible.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <FormInput label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
            <FormInput label="Email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
            <FormInput label="Message" name="message" value={form.message} onChange={handleChange} type="textarea" placeholder="Tell me about your project…" required />
            <button
              type="submit"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Send Message
            </button>
          </form>
        )}
      </section>
    </Layout>
  );
};

export default Contact;
