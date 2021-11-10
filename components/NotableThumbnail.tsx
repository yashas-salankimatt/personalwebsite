import React from "react";
import Link from "next/link";

function NotableThumbnail({ imagePath, title, linkPath }) {
	return (
		<div>
			<Link href={linkPath}>
				<div className="rounded-2xl cursor-pointer min-w-75vw sm:min-w-0 sm:h-96 ml-2 mt-2 mr-6 mb-6">
					<div className="self-center justify-center items-center rounded-2xl">
						<div
							className="relative rounded-2xl overflow-hidden"
							style={{
								boxShadow: "1rem 1rem 0.25rem rgba(217, 119, 6, .4)",
								border: "1px solid rgba(217, 119, 6, .4)",
							}}
						>
							<img
								className=" rounded-2xl self-center justify-center sm:max-h-96"
								src={imagePath}
							></img>
							<div
								className="absolute top-0 left-0 w-full h-full flex flex-col items-center text-white hover:justify-center  
											 sm:hover:text-white hover:backdrop-blur-md hover:backdrop-brightness-50 ease-linear transition-all duration-100"
							>
								<p className="font-bold font-sans w-full text-center text-lg bg-black bg-opacity-50 p-2">
									{title}
								</p>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
}

export default NotableThumbnail;
