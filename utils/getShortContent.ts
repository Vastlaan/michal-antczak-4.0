export default function getShortContent(content: string) {
  return `${content.substring(0, 150)}...`;
}
