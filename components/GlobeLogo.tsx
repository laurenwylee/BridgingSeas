import Image from "next/image"

export default function GlobeLogo() {
  return (
    <Image
      src="/globe.svg"
      alt="Globe Icon"
      width={20}
      height={20}
      className="rounded-full"
    />
  )
}
