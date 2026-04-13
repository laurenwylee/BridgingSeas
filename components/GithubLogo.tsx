import Image from "next/image"

export default function GithubLogo() {
  return (
    <Image
      src="/social/github-icon.png"
      alt="Github Icon"
      width={20}
      height={22}
      className="rounded-full"
    />
  )
}
