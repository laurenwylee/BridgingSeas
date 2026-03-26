import Image from "next/image";
import Logo from "@/components/Logo";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        {/* section one */}
          <Image
            src="/waves_banner.jpg"
            alt="Waves banner"
            width={1920}
            height={1080}
            className="w-full h-auto z-0"
          />
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <h2 className="text-5xl font-bold text-white">
              Bridging Seas
            </h2>
            
          </div>
          
      </div>
      {/* section 2 */}
      <div className="w-full px-25 py-15 text-[#fdf4e3]">
        <div className="text-5xl font-bold">
          Connect with your roots
        </div>
        <div className="py-5 text-lg">
          Bridging Seas is a youth-led global organization that aims to unify the Asian diaspora. Our goal is to connect high schoolers from around the world by creating a platform for them to learn about each other's cultures and unique experiences. We envision a more compassionate, understanding world where students embrace their roots and different lifestyles through direct communication with international friends.
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="relative flex-[2] aspect-[16/9] overflow-hidden rounded-xl bg-gray-400">
            <Image
              src="/group.jpg"
              alt="Group photo"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative flex-[1] aspect-[16/9] overflow-hidden rounded-xl bg-gray-400">
            <Image
              src="/sharonpenpals.jpg"
              alt="Malacca"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative flex-[1] aspect-[16/9] overflow-hidden rounded-xl bg-gray-400">
            <Image
              src="/conference.jpg"
              alt="Conference"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <Link href="/join">
            <button className="px-40 py-3 my-6 bg-[#ffcb77] text-[#fdf4e3] rounded-full">
              Our Story
            </button>
          </Link>
        </div>
      </div>
      {/* section 3 */}
      <div className="w-full px-25 py-20 pt-15 bg-[#c4b0ab] text-[#fdf4e3]">
        <div className="text-lg font-bold w-1/2">
          Over the years, Bridging Seas has achieved multiple milestones and have reach communities around the world
        </div>
        <div className="flex flex-col md:flex-row gap-30 mt-5">
          
          <div>
            <div className="font-bold text-9xl">
              350+
            </div >
            <div className="font-bold text-4xl">
              Penpals
            </div>
          </div>
          <div>
            <div className="font-bold text-9xl">
              16+
            </div >
            <div className="font-bold text-4xl">
              Cities
            </div>
          </div>
          <div>
            <div className="font-bold text-9xl">
              20+
            </div >
            <div className="font-bold text-4xl">
              Chapters
            </div>
          </div>
        </div>
      </div>

      {/* section 4 */}
      <div className="w-full px-25 py-15 bg-[#ffcb77]"> 
        <div className="font-bold text-5xl text-[#fdf4e3]">
          Our Pillars
        </div>
        <p className="font-bold text-[#fdf4e3] text-lg mt-3">
          Learn more about our values
        </p>
        <div className="flex flex-col rounded-xl rounded-tl-none md:flex-row gap-30 mt-5">
          <div className="bg-[#fdf4e3] aspect-[4/3] text-[#af7d61] p-10">
            <Image
            src="/culture.png"
            alt="Culture Icon"
            width={70}
            height={70}
            className="h-auto pb-10"
            />
            <div className="font-bold text-3xl my-3">
              Culture
            </div>
            <p>
              Bridging Seas recognizes that culture is the core of who we are and connects us with those who share the same culture. Tapping into the culture of our youth, we encourage students from around the world to embrace the diversity of their cultural roots through pen-palling.
            </p>
          </div>
          <div className="bg-[#fdf4e3] rounded-xl rounded-tl-none aspect-[4/3] text-[#af7d61] p-10">
            <Image
            src="/appreciation.png"
            alt="Appreciation Icon"
            width={70}
            height={70}
            className="h-auto pb-10"
            />
            <div className="font-bold text-3xl my-3">
              Appreciation
            </div>
            <p>
              As youth ourselves, the Bridging Seas team offers a safe platform for students to not only appreciate their culture through exchange with students who share the same roots, but also a place to discover how their culture is diverse, adaptable, and eternally changing.
            </p>
          </div>
          <div className="bg-[#fdf4e3] rounded-xl rounded-tl-none aspect-[4/3] text-[#af7d61] p-10">
            <Image
            src="/community.png"
            alt="Community Icon"
            width={70}
            height={70}
            className="h-auto pb-10"
            />
            <div className="font-bold text-3xl my-3">
              Community
            </div>
            <p>
              Bridging Sea’s foremost mission is to foster a community for our students to feel comfortable in sharing their culture. Through monthly meetings and community corners, we aim to make our students feel supported and heard in our community as they grow in their cultural exploration.
            </p>
          </div>
        </div>
      </div>
    </div>
        
  );
}
