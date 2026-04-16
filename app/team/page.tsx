import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { NewsletterForm } from "@/components/FooterNewsletterForm";
import GithubLogo from "@/components/GithubLogo";
import LinkedinLogo from "@/components/LinkedinLogo";
import GlobeLogo from "@/components/GlobeLogo";

type Person = {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  github?: string;
  website?: string;
};

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the student leaders and regional directors who make Bridging Seas possible around the world.",
};

const execDirectors = [
  {
    name: "Lauren Lee",
    role: "Executive Director & Co-Founder",
    image: "/people/lauren.jpg",
    linkedin: "https://www.linkedin.com/in/laurenwylee/",
    github: "https://github.com/laurenwylee",
    website: "https://github.com/laurenwylee",
  },
  {
    name: "Sharon Liu",
    role: "Executive Director & Co-Founder",
    image: "/people/sharon.png",
  },
] satisfies Person[];

const branches = [
  {
    title: "United States Region",
    members: [
      {
        name: "Mai Tran",
        role: "American Regional Lead & Vietnamese Outreach Director",
        image: "/people/mai.png",
      },
      {
        name: "Chloe Kan",
        role: "American Regional Lead",
        image: "/people/chloe.jpg",
      },
      { name: "Isha Mahesh", 
        role: "Indian Outreach Director", 
        image: "/people/isha.jpg" },
      {
        name: "Sarika Degtyarev",
        role: "Chapter Manager",
        image: "/people/sarika.jpg",
      },
      { name: "Eric Lam", 
        role: "Chinese Outreach Director & Western Hemisphere Lead", 
        image: "/people/eric.jpg" 
      },
      {
        name: "Lixin Zhang",
        role: "Graphic Design Director",
        image: "/people/lixin.jpg",
      },
      {
        name: "Ethan Phang",
        role: "Technology Director",
        image: "/people/ethan.jpeg",
        linkedin: "https://www.linkedin.com/in/urb6n/",
      },
      { name: "Catherine Cai", 
        role: "Chinese Outreach Director", 
        image: "/people/catherine.jpeg" 
      },
      { name: "Amy Li", 
        role: "Chinese Outreach Director", 
        image: "/people/amy.jpg" 
      },
    ],
  },
  {
    title: "Canada Region",
    members: [
      // {
      //   name: "Shweta Saju",
      //   role: "Canadian Regional Lead",
      //   image: "/photos/conference.jpg",
      // },
      // {
      //   name: "Shiza Khan",
      //   role: "Canadian Director of Graphic Design",
      //   image: "/people/shiza.jpg",
      // },
      { name: "Miriam Cherian", 
        role: "Marketing Director", 
        image: "/people/miriam.jpg" 
      },
      
    ],
  },
    {
    title: "Singapore Region",
    members: [
      {
        name: "Teia Lee En Ting",
        role: "Singaporean Regional Lead",
        image: "/people/teia.jpg",
      },
      {
        name: "Klarisse Ng",
        role: "Singaporean Regional Lead & Western Hemisphere Lead",
        image: "/people/klarisse.jpeg",
      },
      { name: "Kaitlyn", 
        role: "Singaporean Regional Lead", 
        image: "/people/kaitlyn.png", 
        linkedin: "https://www.linkedin.com/in/kaitlyn-tay-rui-yi",
      },
    ],
  },
      {
    title: "Indian Region",
    members: [
      {
        name: "Arya Nair",
        role: "Indian Regional Lead",
        image: "/people/arya.jpg",
      },
    ],
  },
      {
    title: "Korean Region",
    members: [
      {
        name: "Yeonjae Kim",
        role: "Korean Regional Lead",
        image: "/people/yeonjae.jpg",
      },
      {
        name: "Soobin Park",
        role: "Korean Outreach Director",
        image: "/people/sue.png",
      },
      { name: "Michelle S Lee", 
        role: "Graphic Design & Marketing Director", 
        image: "/people/michelle.jpeg" 
      },
    ],
  },
      {
    title: "Australian Region",
    members: [
      {
        name: "Ngan Nguyen",
        role: "Australian Regional Lead & Technology Directory",
        image: "/people/ngan.jpg",
      },
      { name: "Nicola Warouw ", 
        role: "Events Director", 
        image: "/people/nicola.jpg" 
      },
    ],
  },
  //     {
  //   title: "Western European Region",
  //   members: [
  //     {
  //       name: "Andrea Yeo",
  //       role: "European Regional Lead",
  //       image: "/photos/conference.jpg",
  //     },
  //   ],
  // },
];

function SocialRow({
  linkedin,
  github,
  website
}: Readonly<{
  linkedin?: string;
  github?: string;
  website?: string;
}>) {
  if (!linkedin && !github && !website) {
    return null;
  }

  return (
    <div className="mt-2 flex gap-2">
      {linkedin ? (
        <Link
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
          className="transition-transform duration-200 hover:-translate-y-0.5"
        >
          <LinkedinLogo />
        </Link>
      ) : null}
      {github ? (
        <Link
          href={github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
          className="transition-transform duration-200 hover:-translate-y-0.5"
        >
          <GithubLogo />
        </Link>
      ) : null}
      {website ? (
        <Link
          href={website}
          target="_blank"
          rel="noreferrer"
          aria-label="Personal Website"
          className="transition-transform duration-200 hover:-translate-y-0.5"
        >
          <GlobeLogo/>
        </Link>
      ) : null}
    </div>
  );
}

function TeamCard({
  person,
}: Readonly<{
  person: Person;
}>) {
  return (
    <article className="rounded-xl bg-background p-3 shadow-[0_6px_18px_rgba(44,62,64,0.08)]">
      <div className="relative aspect-square overflow-hidden rounded-md bg-primary/40">
        <Image src={person.image} alt={person.name} fill className="object-cover" />
      </div>
      <div className="pt-3">
        <h3 className="text-lg font-bold text-foreground">{person.name}</h3>
        <p className="text-sm text-muted">{person.role}</p>
        <SocialRow linkedin={person.linkedin} github={person.github} />
      </div>
    </article>
  );
}

export default function TeamPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="mx-auto max-w-[980px] px-6 py-12 sm:px-10 lg:px-14">
        <div className="rounded-[28px] bg-background px-2 py-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Meet Our Team
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-muted sm:text-base">
              Learn about the people who help make Bridging Seas possible.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-3xl font-bold tracking-tight">Exec Directors</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {execDirectors.map((member) => (
                <div
                  key={member.name}
                  className="rounded-2xl bg-primary/50 p-5 shadow-[0_8px_20px_rgba(44,62,64,0.08)] sm:p-6"
                >
                  <div className="grid gap-5 lg:grid-cols-[180px_1fr] lg:items-end">
                    <div className="relative aspect-square overflow-hidden rounded-md bg-background">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="pb-1">
                      <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
                        {member.name}
                      </h3>
                      <p className="mt-2 text-base text-muted">{member.role}</p>
                      <SocialRow
                        linkedin={member.linkedin}
                        github={member.github}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto max-w-[980px] px-6 py-10 sm:px-10 lg:px-14">
          <div className="text-background">
            <h2 className="text-4xl font-bold tracking-tight">Our Branches</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-background/80 sm:text-base">
              Our regional model ensures cultural nuance and sensitivity in everything we do, empowering students in each region to lead programming, outreach, and community building. Through this student-led approach, we foster leadership and create more meaningful, hands-on cultural connections.
            </p>
          </div>
        </div>
      </section>

      {branches.map((branch, index) => (
        <section
          key={branch.title}
          className={index % 2 === 0 ? "bg-background" : "bg-accent/20"}
        >
          <div className="mx-auto max-w-[980px] px-6 py-10 sm:px-10 lg:px-14">
            <h2 className="text-3xl font-bold tracking-tight">{branch.title}</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {branch.members.map((member) => (
                <TeamCard
                  key={`${branch.title}-${member.name}`}
                  person={member}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-foreground/90">
        <div className="mx-auto max-w-[980px] px-6 py-8 text-center sm:px-10 lg:px-14">
          <h2 className="text-3xl font-bold tracking-tight text-background sm:text-4xl">
            Join Our Newsletter
          </h2>
          <div className="mx-auto mt-5 max-w-[460px] rounded-[5px] bg-background px-5 py-5 shadow-[0_10px_26px_rgba(44,62,64,0.12)] sm:px-6">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Want to Learn More?
            </h3>
            <p className="mx-auto mt-2.5 max-w-sm text-sm leading-6 text-foreground/85 sm:text-base">
              Sign up for our newsletter to be the first to know about director applications, new pen pal programs, and local events.
            </p>
            <div className="mx-auto mt-4 max-w-xl">
              <NewsletterForm align="center" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
