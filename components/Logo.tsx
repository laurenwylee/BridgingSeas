import Image from "next/image"

export default function Logo() {
  return (
    <Image
      src="/graphics/Logo.png"
      alt="Bridging Seas Logo"
      width={50}
      height={50}
      className="rounded-full border-black"
    />
  )
}
