import Image from "next/image"

export default function XLogo() {
  return (
    <Image
      src="/social/x_logo.png"
      alt="X Icon"
      width={20}
      height={18}
      className="rounded-full"
    />
  )
}
