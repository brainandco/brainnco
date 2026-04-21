/**
 * Build a Resend `from` value: quoted display (the person on the site) + verified mailbox in <>.
 * Resend only allows addresses on your verified domain inside the angle brackets.
 */
export function resendFromAsSubmitter(displayLabel: string, verifiedMailbox: string): string {
  const safe = displayLabel.replace(/"/g, "'").replace(/[\r\n]/g, " ").trim().slice(0, 250)
  return `"${safe}" <${verifiedMailbox}>`
}
