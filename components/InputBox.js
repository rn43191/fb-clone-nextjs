import { useSession } from "next-auth/client";
import { useRef, useState } from "react";
import Image from "next/image";

import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";

import { db, storage } from "../firebase";
import firebase from "firebase";

function InputBox() {
	const [session] = useSession();
	const inputRef = useRef(null);
	const imageRef = useRef(null);

	const [image, setImage] = useState(null);

	const sendPost = (e) => {
		e.preventDefault();

		if (!inputRef.current.value) return;

		db.collection("posts")
			.add({
				message: inputRef.current.value,
				name: session.user.name,
				email: session.user.email,
				image: session.user.image,
				timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			})
			.then((doc) => {
				if (image) {
					//image upload
					const uploadTask = storage.ref(`posts/${doc.id}`).putString(image, "data_url");

					removeImageFromPost();

					uploadTask.on(
						"state_change",
						null,
						(err) => console.error(err),
						() => {
							//When upload completes
							storage
								.ref("posts")
								.child(doc.id)
								.getDownloadURL()
								.then((url) => {
									db.collection("posts").doc(doc.id).set(
										{
											postImage: url,
										},
										{ merge: true }
									);
								});
						}
					);
				}
			});

		inputRef.current.value = "";
	};

	const addImageToPost = (e) => {
		const reader = new FileReader();
		if (e.target.files[0]) {
			reader.readAsDataURL(e.target.files[0]);
		}

		reader.onload = (readerEvent) => {
			setImage(readerEvent.target.result);
		};
	};

	const removeImageFromPost = () => {
		setImage(null);
	};

	return (
		<div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
			<div className="flex space-x-4 p-4 items-center">
				<Image
					className="rounded-full"
					src={session.user.image}
					width={40}
					height={40}
					layout="fixed"
				/>
				<form className="flex flex-1">
					<input
						className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
						type="text"
						ref={inputRef}
						placeholder={`What's on your mind, ${session.user.name}?`}
						id=""
					/>
					<button hidden type="submit" onClick={sendPost}>
						Submit
					</button>
				</form>

				{image && (
					<div
						onClick={removeImageFromPost}
						className="flex flex-col filter
					hover:brightness-110 transition duration-150 transform hover:scale-105
					cursor-pointer"
					>
						<img className="h-10 object-contain" src={image} alt="" />
						<p className="text-xs text-red-500 text-center">Remove</p>
					</div>
				)}
			</div>
			<div className="flex justify-evenly p-3 border-t">
				<div className="input-icon">
					<VideoCameraIcon className="h-7 text-red-500" />
					<p className="text-xs sm:text-sm xl:text-base">Live Video</p>
				</div>

				<div onClick={() => imageRef.current.click()} className="input-icon">
					<CameraIcon className="h-7 text-green-400" />
					<p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
					<input ref={imageRef} onChange={addImageToPost} type="file" hidden />
				</div>

				<div className="input-icon">
					<EmojiHappyIcon className="h-7 text-yellow-300" />
					<p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
				</div>
			</div>
		</div>
	);
}

export default InputBox;