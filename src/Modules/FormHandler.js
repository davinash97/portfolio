import formData from "form-data";
import Mailgun from "mailgun.js";

const mailgun = new Mailgun(formData);

const mg = mailgun.client({ username: "api", key: API_KEY });

mg.messages
  .create(DOMAIN, {
    from: "Excited User <mailgun@sandbox123.mailgun.org>",
    to: ["davinash97.work@gmail.com"],
    subject: "Hello",
    text: "Testing some Mailgun awesomeness!",
    html: "<h1>Testing some Mailgun awesomeness!</h1>",
  })
  .then((msg) => console.log(msg)) // logs response data
  .catch((err) => console.log(err)); // logs any error
