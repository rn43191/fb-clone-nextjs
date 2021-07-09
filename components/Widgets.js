import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";

const contacts = [
	{
		src:
			"https://images.unsplash.com/photo-1625535726342-e40cfc7a71d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
		name: "Beng Rinkiya",
	},
	{
		src:
			"https://images.unsplash.com/photo-1625293961325-170b642843dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
		name: "Deepak",
	},
	{
		src:
			"https://images.unsplash.com/photo-1608613520463-d6115b7feb06?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80s",
		name: "Patidar",
	},
	{
		src:
			"https://images.unsplash.com/photo-1625321239919-6c1395f28665?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
		name: "Sumesh Thakur",
	},
	{
		src:
			"https://images.unsplash.com/photo-1622495551393-9b3c4801ae14?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
		name: "Sohan LOL",
	},
	{
		src:
			"https://images.unsplash.com/photo-1625571751021-27e9e5cc3fe4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
		name: "Rishabh Yado",
	},
	{
		src:
			"https://images.unsplash.com/photo-1553272725-086100aecf5e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80",
		name: "Yashwant",
	},
];

function Widgets() {
	return (
		<div className="hidden lg:flex flex-col w-60 p-2 mt-5">
			<div className="flex justify-between items-center text-gray-500 mb-5">
				<h2 className="text-xl">Contacts</h2>
				<div className="flex space-x-2">
					<VideoCameraIcon className="h-6" />
					<SearchIcon className="h-6" />
					<DotsHorizontalIcon className="h-6" />
				</div>
			</div>

			{contacts.map((contact) => (
				<Contact key={contact.src} src={contact.src} name={contact.name} />
			))}
		</div>
	);
}

export default Widgets;
