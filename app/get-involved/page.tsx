import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Explore ways to get involved with Bridging Seas, from joining a pen pal program to starting a local chapter, partnering with us, or applying to the team.",
};

type Opportunity = {
  title: string;
  description: string;
  href: string;
  cta: string;
  disabled?: boolean;
};

const opportunities = [
  {
    title: "Join the Penpal Program",
    description:
      "We open new pen pal programs throughout the year. Learn about what programs are available from Diaspora Exchange to Open Seas.",
    href: "https://bridgingseas.carrd.co/#penpalprograms",
    cta: "See Available Programs",
    disabled: false,
  },
  {
    title: "Start a Local Chapter",
    description:
      "Bring Bridging Seas to your own community by applying to launch a chapter and bring cultural exchange to your local community.",
    href: "https://docs.google.com/forms/d/e/1FAIpQLScYGC_HbJl_rvI5TwyztBftRs1AcR9noqD0riVIt_xsPUxqlg/viewform?usp=dialog",
    cta: "Chapter Application",
    disabled: false,
  },
  {
    title: "Become a Director",
    description:
      "Join our core team as a director and be involved in outreach, program management, graphic design, technology, and more. Applications are open for individuals ages 14+ with no upper age restriction. Sign up for our newsletter to see when applications open",
    href: "https://forms.google.com",
    cta: "Applications Closed",
    disabled: true,
  },
  {
    title: "Partner With Us",
    description:
      "Schools, youth organizations, and community groups can collaborate with Bridging Seas on conference events, workshops, podcasts, and more.",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfz_5po8NzCi3TbSj9hWBs0uQ3LoxdGTDdd9r05htUIpmF2xw/viewform?usp=header",
    cta: "Partnership Interest",
    disabled: false,
  },
  {
    title: "Join the Team",
    description:
      "Interested in helping shape programs, outreach, design, technology, or community building? Learn more about director openings and how to get involved with the Bridging Seas team.",
    href: "https://x3vswh56e67.typeform.com/to/OqTPK0Nw?typeform-source=bridgingseas.carrd.co",
    cta: "Team Application",
    disabled: false,
  },
  {
    title: "Newsletter Sign-Up",
    description:
      "If you are not ready to apply yet, you can still stay close to new programs, future openings, and community updates by joining our newsletter.",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfgJpTG-DgpC9I2YSPHuOBlqhhQok3-LaH0NpV7_ZxQ4uAPlg/viewform?usp=header",
    cta: "Sign Up",
    disabled: false,
  },
] satisfies Opportunity[];

const cardThemes = [
  {
    panel: "bg-muted",
    content: "bg-background",
    title: "text-background",
    body: "text-foreground/80",
    button: "bg-primary text-foreground",
  },
  {
    panel: "bg-primary/45",
    // content: "bg-accent/35",
    title: "text-foreground",
    body: "text-foreground/80",
    button: "bg-foreground text-background",
  },
];

function PageHeading({
  title,
  subtitle,
}: Readonly<{
  title: string;
  subtitle: string;
}>) {
  return (
    <div className="max-w-4xl">
      <div className="flex items-center gap-4">
        <span className="h-px w-14 bg-accent" />
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
          Bridging Seas
        </span>
      </div>
      <h1
        className="mt-5 text-5xl leading-[0.92] text-foreground sm:text-7xl md:text-[5.5rem]"
        style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
      >
        {title}
      </h1>
      <div className="mt-4 h-2 w-24 bg-primary/70" />
      <p className="mt-6 max-w-3xl text-sm leading-7 text-foreground/80 sm:text-base">
        {subtitle}
      </p>
    </div>
  );
}

export default function GetInvolvedPage() {
  return (
    <div className="bg-background px-6 py-8 text-foreground sm:px-10 lg:px-14">
      <div className="mx-auto max-w-[980px]">
        <section className="py-10">
          <PageHeading
            title="GET INVOLVED"
            subtitle="There are many ways to become part of Bridging Seas, from joining a program to helping build the community behind it."
          />
        </section>

        <section className="py-6">
          <div className="space-y-6">
            {opportunities.map((item, index) => {
              const theme = cardThemes[index % cardThemes.length];

              return (
                <article
                  key={item.title}
                  className={`grid gap-4 md:grid-cols-[0.9fr_1.1fr] ${
                    index % 2 === 0 ? "" : "md:grid-cols-[1.1fr_0.9fr]"
                  }`}
                >
                  <div className={`${theme.panel} px-6 py-8`}>
                    <h2
                      className={`text-3xl leading-tight sm:text-5xl ${theme.title}`}
                      style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                    >
                      {item.title}
                    </h2>
                  </div>
                  <div className={`${theme.content} px-6 py-8`}>
                    <p className={`text-sm leading-6 sm:text-base ${theme.body}`}>
                      {item.description}
                    </p>
                    <div className="mt-6">
                      {item.disabled ? (
                        <span
                          aria-disabled="true"
                          className="inline-flex cursor-not-allowed items-center rounded-full bg-foreground/15 px-6 py-3 text-sm font-semibold text-foreground/45"
                        >
                          {item.cta}
                        </span>
                      ) : (
                        <Link
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                          className={`inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(44,62,64,0.18)] ${theme.button}`}
                        >
                          {item.cta}
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* <section className="py-10">
          <div className="border-[10px] border-primary bg-primary p-3 shadow-sm">
            <div className="bg-background px-6 py-10 text-center sm:px-10">
              <h2
                className="text-4xl leading-none text-foreground sm:text-6xl"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Stay Connected
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-foreground/80 sm:text-base">
                If you are not ready to apply yet, you can still stay close to
                new programs, future openings, and community updates by joining
                our newsletter.
              </p>
              <div className="mt-6">
                <Link
                  href="https://forms.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-accent px-8 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(44,62,64,0.18)]"
                >
                  Join the Newsletter
                </Link>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
}
