export default function (link: string) {
  const formattedLink: string = link.replace(/\s+/g, '-').toLowerCase()
  return formattedLink
}
