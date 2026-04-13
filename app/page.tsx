import Image from "next/image";
import Link from "next/link";

const highlightCards = [
  {
    src: "/photos/group.jpg",
    alt: "Bridging Seas group members gathered together",
    className: "md:col-span-2",
  },
  {
    src: "/photos/conference.jpg",
    alt: "Students participating in a Bridging Seas event",
    className: "",
  },
  {
    src: "/photos/sharonpenpals.JPG",
    alt: "Students smiling during a penpal exchange",
    className: "",
  },
];

const stats = [
  { value: "400+", label: "Penpals" },
  { value: "12", label: "Countries" },
  // { value: "17", label: "Cities" },
  { value: "20+", label: "Chapters" },
];

const pillars = [
  {
    title: "Culture",
    icon: "/pillars/culture.png",
    body: "Bridging Seas recognizes that culture is the core of who we are and connects us with those who share the same culture. Tapping into the culture of our youth, we encourage students from around the world to embrace the diversity of their cultural roots through pen-palling.",
  },
  {
    title: "Appreciation",
    icon: "/pillars/appreciation.png",
    body: "As youth ourselves, the Bridging Seas team offers a safe platform for students to not only appreciate their culture through exchange with students who share the same roots, but also a place to discover how their culture is diverse, adaptable, and eternally changing.",
  },
  {
    title: "Community",
    icon: "/pillars/community.png",
    body: "Bridging Sea’s foremost mission is to foster a community for our students to feel comfortable in sharing their culture. Through monthly meetings and community corners, we aim to make our students feel supported and heard in our community as they grow in their cultural exploration.",
  },
];

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <section className="bg-primary">
        <div className="relative flex min-h-[360px] w-full items-end overflow-hidden px-6 py-16 sm:min-h-[520px] sm:px-10 lg:px-16">
          <Image
            src="/graphics/waves_banner.jpg"
            alt="Bridging Seas banner"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/20" />
          <div className="relative mx-auto w-full max-w-[1440px]">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground/70">
                Bridging Seas
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                Unifying the Asian Diaspora.
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[1440px] px-6 py-10 sm:px-10 sm:py-14 lg:px-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Connect with your roots
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-6 text-foreground/75 sm:text-base">
            Bridging Seas is a youth-led global organization that aims to unify the Asian diaspora. Our goal is to connect high schoolers from around the world by creating a platform for them to learn about each other&apos;s cultures and unique experiences. We envision a more compassionate, understanding world where students embrace their roots and different lifestyles through direct communication with international friends.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-4 md:grid-rows-1">
            {highlightCards.map((card) => (
              <div
                key={card.src}
                className={`relative min-h-[280px] overflow-hidden rounded-[10px] bg-foreground/20 sm:min-h-[340px] ${card.className}`}
              >
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  className="object-cover grayscale-[18%]"
                />
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <Link
              href="/about"
              
              className="rounded-2xl bg-primary px-12 py-3 text-center text-base ttransition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(44,62,64,0.18)] sm:min-w-[280px] sm:text-lg"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[1440px] px-6 py-10 sm:px-10 sm:py-14 lg:px-16">
          <p className="max-w-2xl text-sm font-semibold leading-6 sm:text-lg">
            Over the years Bridging Seas has achieved multiple milestones and
            earned recognition from students, educators, and community partners.
          </p>
          <div className="mt-10 grid gap-10 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-7xl font-bold tracking-tight sm:text-7xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-4xl sm:text-4xl">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[1440px] px-6 py-10 sm:px-10 sm:py-14 lg:px-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Our Pillars
          </h2>
          <p className="mt-3 text-sm text-muted sm:text-lg">
            The values that shape every program, connection, and bridge we
            build.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {/* instead of background, do box shadows */}
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className={`rounded-bl-[20px] rounded-br-[20px] rounded-tr-[20px] p-8 shadow-[0_1px_0_rgba(44,62,64,0.08)]
                  bg-accent/70`}
              >
                <Image
                  src={pillar.icon}
                  alt={`${pillar.title} icon`}
                  width={78}
                  height={78}
                  className="h-[78px] w-[78px]"
                />
                <h3 className="mt-6 text-3xl font-bold">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-6 text-foreground/75">
                  {pillar.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
