import Link from "next/link";
import FacebookLogo from "./FacebookLogo";
import FooterNewsletterForm from "./FooterNewsletterForm";
import InstagramLogo from "./InstagramLogo";
import LinkedinLogo from "./LinkedinLogo";
import TiktokLogo from "./TiktokLogo";
import XLogo from "./XLogo";

export default function Footer() {
  const socials = [
    {
      name: "Instagram",
      handle: "@bridgingseas",
      icon: <InstagramLogo />,
      href: "https://instagram.com/bridgingseas",
    },
    {
      name: "Facebook",
      handle: "Bridging Seas",
      icon: <FacebookLogo />,
      href: "https://facebook.com/bridgingseas",
    },
    {
      name: "LinkedIn",
      handle: "@bridging-seas",
      icon: <LinkedinLogo />,
      href: "https://linkedin.com/company/bridging-seas",
    },
    {
      name: "X",
      handle: "@BridgingSeas",
      icon: <XLogo />,
      href: "https://x.com/BridgingSeas",
    },
    {
      name: "TikTok",
      handle: "@bridgingseas",
      icon: <TiktokLogo />,
      href: "https://tiktok.com/@bridgingseas",
    },
  ];

  return (
    <footer className="border-t border-foreground/10">
      <div className="grid w-full md:grid-cols-[1fr_1.3fr]">
        <div className="bg-muted px-8 py-9 sm:px-10">
          <h2 className="text-3xl font-bold tracking-tight text-background sm:text-4xl">Get Involved</h2>
          <p className="mt-3 max-w-sm text-sm leading-6 text-background/75">
            Follow our social media to stay close to our latest programs,
            community highlights, and recruitment updates.
          </p>
          <div className="mt-5 space-y-2 text-background">
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="flex w-fit items-center gap-3 text-sm underline-offset-3 text-background transition-colors duration-200 hover:text-foreground"
              >
                {social.icon}
                <span>{social.handle}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-primary px-8 py-9 sm:px-10">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Stay In Touch</h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-foreground/78">
            Subscribe to our newsletter for updates on events, new programs,
            and opportunities to participate in the Bridging Seas community.
          </p>
          <FooterNewsletterForm />
        </div>
      </div>
    </footer>
  );
}
