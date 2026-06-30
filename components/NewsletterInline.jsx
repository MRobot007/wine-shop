"use client";
import { useToast } from "@/context/Toast";

export default function NewsletterInline() {
  const { showToast } = useToast();
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    showToast("Welcome to the Cellar Club — check your inbox.");
    form.reset();
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="email" name="email" placeholder="you@email.com" aria-label="Email address" required />
      <button className="btn btn-primary" type="submit">
        Join free
      </button>
    </form>
  );
}
