export default function getTimeString(isoString: string) {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(isoString).toLocaleDateString("en-UK", options);
}
