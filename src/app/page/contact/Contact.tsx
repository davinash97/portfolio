import ContactCard from "@/app/components/ContactCard";

export default function Contact() {
	return (
		<section className="flex flex-col w-screen text-center items-center p-10 gap-10">
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
			<div className="flex flex-col gap-3 w-[150]">
				<ContactCard title="Email" image={""} content="this@mail.com" />
				<ContactCard title="Phone" image={""} content="+91987654321" />
				<ContactCard
					title="Location"
					image={""}
					content="Bangalore, KA, India"
				/>
			</div>
		</section>
	);
}
