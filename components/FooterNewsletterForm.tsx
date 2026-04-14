"use client";

import { useState, useTransition } from "react";

const initialForm = {
  fullName: "",
  email: "",
  cityTown: "",
  country: "",
};

type FormData = typeof initialForm;
type FieldName = keyof FormData;
type FieldErrors = Partial<Record<FieldName, string>>;

export default function FooterNewsletterForm() {
  return <NewsletterForm align="left" />;
}

export function NewsletterForm({
  align = "left",
}: Readonly<{
  align?: "left" | "center";
}>) {
  const [formData, setFormData] = useState(initialForm);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setFieldErrors((current) => {
      if (!current[name as FieldName]) {
        return current;
      }

      const next = { ...current };
      delete next[name as FieldName];
      return next;
    });
  }

  function validateForm(values: FormData): FieldErrors {
    const nextErrors: FieldErrors = {};

    if (!values.fullName.trim()) {
      nextErrors.fullName = "Please enter your full name.";
    }

    if (!values.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!values.cityTown.trim()) {
      nextErrors.cityTown = "Please enter your city or town.";
    }

    if (!values.country.trim()) {
      nextErrors.country = "Please enter your country.";
    }

    return nextErrors;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(null);
    setError(null);

    const nextErrors = validateForm(formData);
    if (Object.keys(nextErrors).length > 0) {
      setFieldErrors(nextErrors);
      return;
    }

    setFieldErrors({});

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
  const fieldClassName = (field: FieldName) =>
    `h-11 w-full rounded-xl border-2 bg-background px-4 text-sm text-foreground outline-none transition placeholder:text-muted ${
      fieldErrors[field]
        ? "border-[#b4574b] focus:border-[#b4574b]"
        : "border-foreground/15 focus:border-foreground/35"
    }`;

  const errorSummary = Object.values(fieldErrors)[0] ?? null;

  return (
    <form
      className={`mt-6 max-w-sm space-y-2.5 ${isCentered ? "mx-auto" : ""}`}
      onSubmit={handleSubmit}
      noValidate
    >
      <input
        type="text"
        name="fullName"
        placeholder="Full name"
        value={formData.fullName}
        onChange={handleChange}
        className={fieldClassName("fullName")}
        disabled={isPending}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className={fieldClassName("email")}
        disabled={isPending}
      />
      <div className="grid gap-2.5 sm:grid-cols-2">
        <div>
          <input
            type="text"
            name="cityTown"
            placeholder="City / Town"
            value={formData.cityTown}
            onChange={handleChange}
            className={fieldClassName("cityTown")}
            disabled={isPending}
          />
        </div>
        <div>
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            className={fieldClassName("country")}
            disabled={isPending}
          />
        </div>
      </div>
      {errorSummary ? (
        <p className={`${isCentered ? "text-center" : "text-left"} text-xs text-[#9b584d]`}>
          {errorSummary}
        </p>
      ) : null}
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
