module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "strapi-provider-email-resend",
      providerOptions: {
        apiKey: env("RESEND_API_KEY"),
      },
      settings: {
        defaultFrom: "Say hi <contact@aheader.ink>",
        defaultReplyTo: "sebastian.v.pavel@gmail.com",
      },
    },
  },
});
