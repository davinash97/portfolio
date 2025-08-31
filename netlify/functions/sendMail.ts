import type { Handler } from "@netlify/functions";
import nodemailer from "nodemailer";

const handler: Handler = async (event) => {
	if (event.httpMethod !== "POST") {
		return {
			statusCode: 405,
			body: "Method Not Allowed",
			headers: { "Access-Control-Allow-Origin": "*" }, // CORS header
		};
	}

	const headers = {
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*", // allow any origin (for testing)
		"Access-Control-Allow-Methods": "POST, OPTIONS",
	};

	try {
		const data = JSON.parse(event.body || "{}");

		const transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: Number(process.env.SMTP_PORT),
			secure: true,
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASS,
			},
		});

		await transporter.sendMail({
			from: process.env.MY_EMAIL,
			to: process.env.MY_EMAIL,
			subject: `New message from ${data.name}`,
			text: data.message,
		});

		return {
			statusCode: 200,
			body: JSON.stringify({ message: "Email sent!" }),
			headers,
		};
	} catch (error: unknown) {
		let errorMessage = "Unknown error";

		if (error instanceof Error) {
			errorMessage = error.message;
		}

		return {
			statusCode: 500,
			body: JSON.stringify({ error: errorMessage }),
			headers,
		};
	}
};

export { handler };
