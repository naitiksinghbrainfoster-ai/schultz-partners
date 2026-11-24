export function buildMailtoDraft(
  formData: FormData,
  subject: string,
  recipient = "hamburg@schultz-partners.de",
) {
  const body = Array.from(formData.entries())
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
