"use client";

import { motion } from "framer-motion";
import ContactCard from "@/app/components/ContactCard";
import { Lato } from "next/font/google";
import "./Contact.css";
import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import AnimatedSection from "@/app/components/AnimatedSection";
import { PiTelegramLogo } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { BiLogoGmail } from "react-icons/bi";

const lato = Lato({ weight: "400", subsets: ["latin"] });

export default function Contact() {
	const title = "Get into Touch";
	const [loading, setLoading] = useState(false);
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		// Store reference BEFORE await!
		const form = e.currentTarget;

		const formData = new FormData(form);
		const data = Object.fromEntries(formData.entries());

		const res = await fetch("/.netlify/functions/sendMail", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		setLoading(false);

		if (res.ok) {
			alert("Email sent!");
			form.reset(); // Use the reference, not e.currentTarget!
		} else {
			alert("Something went wrong.");
		}
	};
	return (
		<section
			className="flex flex-col w-screen items-center justify-around px-6 py-12 gap-12"
			aria-labelledby="contact-heading">
			{/* Heading */}
			<AnimatedSection>
				<motion.h2
					id="contact-heading"
					initial={{ opacity: 0, y: -30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ amount: 0.3 }}
					transition={{ duration: 0.7, ease: "easeOut" }}>
					{Array.from(title, (char, index) => (
						<span key={index} className="heading">
							{char}
						</span>
					))}
				</motion.h2>
			</AnimatedSection>

			<AnimatedSection>
				<div className="flex flex-col lg:flex-row gap-10 w-full max-w-6xl justify-center items-start">
					{/* Contact cards */}
					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full order-2 lg:order-1"
						initial={{ opacity: 0, x: -60 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ amount: 0.3 }}
						transition={{ duration: 0.8, ease: "easeOut" }}>
						<a
							href="mailto:this@mail.com?subject=Contacting%20from%20portfolio"
							target="_blank"
							rel="noopener noreferrer">
							<ContactCard
								title="Email"
								image={BiLogoGmail}
								content="this@email"
							/>
						</a>
						<a
							href="https://linkedin.com/in/davinash97"
							target="_blank"
							rel="noopener noreferrer">
							<ContactCard
								title="LinkedIn"
								image={SlSocialLinkedin}
								content="davinash97"
							/>
						</a>
						<a
							href="http://t.me/davinash1997"
							target="_blank"
							rel="noopener noreferrer">
							<ContactCard
								title="Telegram"
								image={PiTelegramLogo}
								content="davinash1997"
							/>
						</a>
						<ContactCard
							title="Location"
							image={CiLocationOn}
							content={
								<span className="no-anim">
									Bangalore, KA, India
								</span>
							}
						/>
					</motion.div>
					<AnimatedSection>
						{/* Contact form */}
						<motion.form
							className="flex flex-col w-full gap-4 order-1 lg:order-2"
							onSubmit={handleSubmit}
							initial={{ opacity: 0, x: 60 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ amount: 0.3 }}
							transition={{
								duration: 0.8,
								ease: "easeOut",
								delay: 0.2,
							}}>
							<div className="flex flex-col md:flex-row gap-3">
								<input
									type="text"
									name="firstname"
									id="firstname"
									placeholder="Firstname"
									className={`${lato.className}`}
									required
								/>
								<input
									type="text"
									name="lastname"
									id="lastname"
									placeholder="Lastname"
									className={`${lato.className}`}
								/>
							</div>
							<input
								type="email"
								name="email"
								id="email"
								placeholder="Email"
								className={` ${lato.className}`}
								required
							/>
							<input
								type="text"
								name="subject"
								id="subject"
								placeholder="Subject"
								className={` ${lato.className}`}
							/>
							<textarea
								name="message"
								id="message"
								placeholder="Message"
								className={` h-32 p-2 ${lato.className}`}
								required
							/>
							<button
								type="submit"
								className="self-end px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
								disabled={loading}>
								{/* Send */}
								{loading ? "Sending..." : "Send"}
							</button>
						</motion.form>
					</AnimatedSection>
				</div>
			</AnimatedSection>
		</section>
	);
}
