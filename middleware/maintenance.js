export default function ({ redirect }) {
  if (
    !process.env.NUXT_ENV_MAINTENANCE ||
    process.env.NUXT_ENV_MAINTENANCE === "true"
  ) {
    return redirect("/maintenance");
  }
}
