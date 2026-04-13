import Image from "next/image"

export default function LinkedinLogo() {
  return (
    <Image
      src="/social/linkedin_logo.png"
      alt="LinkedIn Icon"
      width={20}
      height={20}
      className="rounded-full"
    />
  )
}
