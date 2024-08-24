const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key:
    process.env.MAILGUN_API_KEY ||
    "ef4e9be96b73c3d99a929f847d6fc60b-2b91eb47-cf3d21f4",
});

mg.messages
  .create("sandbox-123.mailgun.org", {
    from: "mailgun@atlaslibrary.tech",
    to: ["wiilfern1910@outlook.com"],
    subject: "Hello",
    text: "Testing some Mailgun awesomeness!",
    html: "<h1>Testing some Mailgun awesomeness!</h1>",
  })
  .then((msg) => console.log(msg)) // logs response data
  .catch((err) => console.log(err)); // logs any error
