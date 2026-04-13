"use client";

import { useState, useTransition } from "react";

const initialForm = {
  fullName: "",
  email: "",
  cityTown: "",
  country: "",
};

export default function FooterNewsletterForm() {
  return <NewsletterForm align="left" />;
}

export function NewsletterForm({
  align = "left",
}: Readonly<{
  align?: "left" | "center";
}>) {
  const [formData, setFormData] = useState(initialForm);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(null);
    setError(null);

    startTransition(async () => {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setFormData(initialForm);
      setMessage("Thanks for signing up.");
    });
  }

  const isCentered = align === "center";

  return (
    <form
      className={`mt-6 max-w-sm space-y-2.5 ${isCentered ? "mx-auto" : ""}`}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="fullName"
        placeholder="Full name"
        value={formData.fullName}
        onChange={handleChange}
        className="h-11 w-full rounded-xl border-2 border-foreground/15 bg-background px-4 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-foreground/35"
        disabled={isPending}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="h-11 w-full rounded-xl border-2 border-foreground/15 bg-background px-4 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-foreground/35"
        disabled={isPending}
        required
      />
      <div className="grid gap-2.5 sm:grid-cols-2">
        <input
          type="text"
          name="cityTown"
          placeholder="City / Town"
          value={formData.cityTown}
          onChange={handleChange}
          className="h-11 w-full rounded-xl border-2 border-foreground/15 bg-background px-4 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-foreground/35"
          disabled={isPending}
          required
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
          className="h-11 w-full rounded-xl border-2 border-foreground/15 bg-background px-4 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-foreground/35"
          disabled={isPending}
          required
        />
      </div>
      <div className={`flex pt-1 ${isCentered ? "justify-center" : "justify-start"}`}>
        <button
          type="submit"
          className="inline-flex h-10 min-w-[132px] items-center justify-center rounded-xl bg-accent px-6 text-sm font-semibold text-foreground transition hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-60"
          disabled={isPending}
        >
          {isPending ? "Submitting..." : "Submit"}
        </button>
      </div>
      {message ? (
        <p className={`${isCentered ? "text-center" : "text-left"} text-sm text-foreground/80`}>
          {message}
        </p>
      ) : null}
      {error ? (
        <p className={`${isCentered ? "text-center" : "text-left"} text-sm text-red-800`}>
          {error}
        </p>
      ) : null}
    </form>
  );
}
