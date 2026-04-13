import Image from "next/image"

export default function InstagramLogo() {
  return (
    <Image
      src="/social/instagram_logo.png"
      alt="Instagram Icon"
      width={20}
      height={20}
      className="rounded-full"
    />
  )
}
