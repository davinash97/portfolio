import ContactCard from "@/app/components/ContactCard";

export default function Contact() {
	return (
		<section className="flex flex-col w-screen text-center items-center justify-around p-10 gap-10">
			{/* Contact */}
			<h2 className="text-4xl">
				<span>G</span>
				<span>e</span>
				<span>t </span>
				<span>&nbsp;</span>
				<span>i</span>
				<span>n</span>
				<span>t</span>
				<span>o</span>
				<span>&nbsp;</span>
				<span>t</span>
				<span>o</span>
				<span>u</span>
				<span>c</span>
				<span>h</span>
			</h2>
			<div className="flex flex-col h-full w-full gap-6 justify-center items-center">
				<div className="grid grid-cols-2 md:grid-cols-2 gap-3 w-fit order-2">
					<ContactCard
						title="Email"
						image={""}
						content={
							<a
								href="mailto:this@mail.com"
								target="_black"
								rel="noopener noreferrer">
								this@email
							</a>
						}
					/>
					<ContactCard
						title="Linkedin"
						image={""}
						content={
							<a
								href="https://linkedin.com/in/davinash97"
								target="_blank"
								rel="noopener noreferrer"
								className="text-black hover:none">
								davinash97@linkedin
							</a>
						}
					/>
					<ContactCard
						title="Phone"
						image={""}
						content="+91987654321"
					/>
					<ContactCard
						title="Location"
						image={""}
						content="Bangalore, KA, India"
					/>
				</div>
				{/* <span className="line"></span> */}
				<form className="flex flex-col h-[300] justify-around items-center gap-4 order-1">
					<div className="flex flex-row gap-2">
						<input
							type="text"
							name="firstname"
							id="firstname"
							placeholder="Firstname"
						/>
						<input
							type="text"
							name="lastname"
							id="lastname"
							placeholder="Lastname"
						/>
					</div>
					<input
						type="email"
						name="email"
						id="email"
						className="w-full"
						placeholder="Email"
					/>
					<input
						type="text"
						name="subject"
						id="subject"
						className="w-full"
						placeholder="Subject"
					/>
					<textarea
						name="message"
						id="message"
						placeholder=" Message"
						className="h-full w-full"
					/>
				</form>
			</div>
		</section>
	);
}
