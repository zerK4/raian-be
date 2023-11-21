module.exports = {
  async afterCreate(event) {
    const { result } = event;

    console.log(result, "the result of email");

    try {
      await strapi.plugins["email"].services.email.send({
        to: "sebastian.v.pavel@gmail.com",
        subject: `Hello dude, you have an email from ${result.name}.`,
        text: result.message,
      });
      await strapi.plugins["email"].services.email.send({
        to: result.email,
        subject: `Hello ${result.name},`,
        text: `We received your message and after analysing it we will get back to you!`,
      });
    } catch (err) {
      console.log(err.message, "Got an error here");
    }
  },
};
