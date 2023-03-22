export default function getTimeString(isoString: string) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(isoString).toLocaleDateString("en-UK", options);
}
