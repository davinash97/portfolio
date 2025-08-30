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
			<div className="flex flex-row h-full w-full gap-4 justify-evenly items-center">
				<div className="flex flex-col gap-3 w-[150]">
					<ContactCard
						title="Email"
						image={""}
						content="this@mail.com"
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
				<form className="flex flex-col h-[300] justify-around items-center gap-4">
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
