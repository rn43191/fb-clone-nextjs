import StoryCard from "./StoryCard";

const stories = [
	{
		name: "Sohan LOL",
		src:
			"https://images.unsplash.com/photo-1611843275167-a9bba9aa65dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
		profile:
			"https://images.unsplash.com/photo-1622495551393-9b3c4801ae14?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
	},
	{
		name: "Sumesh Thakur",
		src:
			"https://images.unsplash.com/photo-1625406753674-e0400d050811?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=313&q=80",
		profile:
			"https://images.unsplash.com/photo-1625321239919-6c1395f28665?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
	},
	{
		name: "Alok Garg",
		src:
			"https://images.unsplash.com/photo-1625168016696-ced65453028d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
		profile:
			"https://images.unsplash.com/photo-1625486064922-5a8dd69596d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
	},
	{
		name: "Rishabh Yado",
		src:
			"https://images.unsplash.com/photo-1625304664697-30a254733647?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
		profile:
			"https://images.unsplash.com/photo-1625571751021-27e9e5cc3fe4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
	},
	{
		name: "Yashwant",
		src:
			"https://images.unsplash.com/photo-1623107231128-d25350ab79a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1866&q=80",
		profile:
			"https://images.unsplash.com/photo-1553272725-086100aecf5e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80",
	},
];

function Stories() {
	return (
		<div className="flex justify-center space-x-3 mx-auto">
			{stories.map((story) => (
				<StoryCard
					key={story.src}
					name={story.name}
					src={story.src}
					profile={story.profile}
				/>
			))}
		</div>
	);
}

export default Stories;
