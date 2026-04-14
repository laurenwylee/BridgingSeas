import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn the story behind Bridging Seas, our mission, and how we build cultural understanding and community for students across the Asian diaspora.",
};

function SectionTitle({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="text-center">
      <h1
        className="text-5xl leading-none text-foreground sm:text-7xl md:text-8xl"
        style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
      >
        {children}
      </h1>
      <div className="mx-auto mt-3 h-10 w-px bg-foreground/80" />
    </div>
  );
}

export default function About() {
  return (
    <div className="bg-background px-6 py-8 text-foreground sm:px-10 lg:px-14">
      <div className="mx-auto max-w-[980px]">
        <section className="py-10">
          <SectionTitle>ABOUT US</SectionTitle>

          <div className="mt-10 border-[10px] border-muted bg-muted p-3 shadow-sm">
            <div className="relative aspect-[16/8] w-full overflow-hidden bg-primary/40">
              <Image
                src="/photos/group.jpg"
                alt="Bridging Seas group"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
            <div className=" px-6 py-8">
              <h2 className="text-3xl font-medium text-foreground sm:text-5xl">
                Who are we?
              </h2>
            </div>
            <div className="group relative overflow-hidden bg-muted px-6 py-8">
              <p className="text-sm leading-6 text-background/85 sm:text-base">
                Bridging Seas is a youth-led global organization uniting the Asian diaspora by helping students connect with their roots and with each other. Out student led program model fosters leadership development and cultural exchange through meaningful connection.

                <br></br><br></br>Our programs include Diaspora Exchange, connecting students of the same ethnicity across regions, and Open Seas, bringing together diverse Asian cultures. Through both virtual and in-person initiatives, we create spaces for students to explore identity, community, and global perspectives.
              </p>
              <div className="mt-6 flex justify-end">
                <Link
                  href="/team"
                  aria-label="Go to the team page"
                  className="relative z-10 inline-flex items-center justify-center text-3xl text-foreground transition-colors duration-200 hover:text-primary"
                >
                  <span aria-hidden="true" className="inline-block">
                    ↘
                  </span>
                </Link>
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 right-0 h-0 w-0 border-b-[56px] border-l-[56px] border-b-background/90 border-l-transparent transition-transform duration-300 [transform-origin:bottom_right] group-hover:[transform:perspective(700px)_rotateX(58deg)]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 right-0 h-7 w-7 bg-background/30 opacity-0 shadow-[-6px_-6px_10px_rgba(44,62,64,0.12)] transition-opacity duration-300 group-hover:opacity-100"
                style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }}
              />
            </div>
          </div>
        </section>

        <section className="py-10">
          <SectionTitle>A LETTER</SectionTitle>

          <div className="mt-10 grid gap-6 md:grid-cols-[1.15fr_0.85fr] md:items-start">
            <div className="px-4 md:px-0">
              <p
                className="text-lg italic text-muted sm:text-xl"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                To everyone finding their place between cultures,
              </p>

              <div className="mt-6 space-y-5">
                <p className="text-sm leading-7 text-foreground/85 sm:text-base">
                  This is a story of lifelong friendships. When we met in
                  elementary school, we had no idea our friendship would grow
                  far beyond our neighborhood in Brooklyn, New York. In the
                  midst of our own struggles with cultural dissonance in 2020,
                  we founded Bridging Seas as two high schoolers. In the
                  process, we learned to trust each other&apos;s vision of
                  accessible cultural exchange. By deepening our own
                  relationship, we have also helped nurture friendships between
                  pen pals that we hope will last a lifetime.
                </p>

                <p className="text-sm leading-7 text-foreground/85 sm:text-base">
                  We carry warm memories from our pilot program with Payfong
                  Middle School in Malacca, Malaysia. Our monthly meetings with
                  pen pals became impromptu video calls, slang exchanges, and
                  even physics tutoring sessions. What began as virtual
                  friendship slowly became long-awaited visits to one another&apos;s
                  hometowns, introductions to family, and the joy of sharing
                  food and stories in person.
                </p>

                <p className="text-sm leading-7 text-foreground/85 sm:text-base">
                  From not knowing each other&apos;s names to knowing each
                  other&apos;s worlds, we have truly bridged the seas between us.
                  That is the spirit we hope to create for every student who
                  joins this community. We want these relationships to be more
                  than temporary connections. We want them to endure.
                </p>

                <p className="text-sm leading-7 text-foreground/85 sm:text-base">
                  Above all, Bridging Seas has taught us that friendship grows
                  from cultural understanding, community, and appreciation.
                </p>
              </div>

              <div className="mt-8">
                <p
                  className="text-lg italic text-foreground sm:text-xl"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  With love,
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-muted">
                  Lauren Lee & Sharon Liu
                </p>
              </div>
            </div>

            <div className="justify-self-center border-[10px] border-primary bg-primary p-3 shadow-sm">
              <div className="relative aspect-square w-[240px] overflow-hidden bg-primary/40 sm:w-[320px] md:w-[360px]">
                <Image
                  src="/photos/laurensharon.png"
                  alt="Sharon and Lauren"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
