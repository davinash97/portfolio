import fetch from "node-fetch";

const emailHandler = async function (event) {
  if (event.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify("Payload required"),
    };
  }

  const requestBody = JSON.parse(event.body);

  const url = process.env.URL;
  const secret = process.env.NETLIFY_EMAILS_SECRET;

  await fetch(`${url}/.netlify/functions/emails/subscribed`, {
    headers: {
      "netlify-emails-secret": secret,
    },
    method: "POST",
    body: JSON.stringify({
      from: requestBody.inviteeEmail,
      to: requestBody.subscriberEmail,
      subject: requestBody.subscribeSubject,
      message: requestBody.subscribeMessage,
      parameters: {
        name: requestBody.subscriberName,
        email: requestBody.subscriberEmail,
        subject: requestBody.subscribeSubject,
        message: requestBody.subscribeMessage,
      },
    }),
  });

  return {
    statusCode: 200,
    body: JSON.stringify("Subscribe email sent!"),
  };
};

export default emailHandler;
