import { AppRoute } from "./AppRoute"

function replaceYouTubeLinksWithNewLink(input: string): string {
  const parser = new DOMParser()
  const doc = parser.parseFromString(input, "text/html")
  const links = doc.getElementsByTagName("a")

  for (let i = 0; i < links.length; i++) {
    const link = links[i]
    const href = link.getAttribute("href")

    if (href && href.includes("youtube.com") && href.includes("&t=")) {
      const youtubeRegex = /v=([^&\n]+)&t=(\d+)/
      const match = href.match(youtubeRegex)

      if (match) {
        const time = match[2]
        const newLinkWithTime = generateNewLinkWithTime(time)
        link.setAttribute("href", newLinkWithTime)
      }
    }
  }

  return doc.documentElement.innerHTML
}

function generateNewLinkWithTime(time: string): string {
  return `${AppRoute.getCurrentSpaUrl()}?t=${time}`
}

export { replaceYouTubeLinksWithNewLink, generateNewLinkWithTime }
