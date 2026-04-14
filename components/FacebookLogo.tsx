import Image from "next/image"

export default function FacebookLogo() {
  return (
    <Image
      src="/social/facebook_logo.png"
      alt="Facebook Icon"
      width={20}
      height={20}
      className="rounded-full"
    />
  )
}
