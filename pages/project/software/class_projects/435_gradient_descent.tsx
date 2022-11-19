import React from "react";
import { useRouter } from "next/router";
import Menu from "../../../../components/Menu";
import Link from "next/link";

function gradient_descent_435(props) {
	const router = useRouter();
	const rgbaColor = "rgba(76, 29, 149, .6)";
	const textColor = "text-purple-900";
	const buttonColor = "bg-purple-200";

	const imageDivStyle = "1rem 1rem 0.25rem " + rgbaColor;

	return (
		<div style={{ overflow: "auto" }} className="flex flex-col max-h-full">
			{router.pathname != "/projects" &&
				router.pathname != "/about" &&
				router.pathname != "/experience" && <Menu></Menu>}
			<div className="flex flex-col items-center max-w-full p-8">
				<a className={"text-3xl font-bold font-sans " + textColor}>
					Parallel Gradient Descent Implementations Using CUDA and MPI
				</a>
				{(router.pathname == "/projects" ||
					router.pathname == "/about" ||
					router.pathname == "/experience") && (
					<Link href="/project/software/class_projects/435_gradient_descent">
						<a
							target="_blank"
							className={
								"mt-4 text-lg font-semibold font-sans p-2 rounded-md " +
								buttonColor +
								" " +
								textColor
							}
						>
							Click to open project page in new tab
						</a>
					</Link>
				)}
				<div
					className="max-w-lg mt-4 mb-4 rounded-2xl "
					style={{ boxShadow: imageDivStyle }}
				>
					<img
						src="/assets/images/projects/software/class_projects/435_gradient_descent/LogisticRegressionMPI.jpg"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div>
				<Link href="https://github.com/yashas-salankimatt/435_gradient_descent">
					<a
						target="_blank"
						className={
							"mt-4 text-lg text-center font-semibold font-sans p-2 rounded-md " +
							buttonColor +
							" " +
							textColor
						}
					>
						GitHub Repo for this Project
					</a>
				</Link>
				<Link href="https://github.com/yashas-salankimatt/435_gradient_descent/blob/main/CSCE%20435%20Project%20Presentation.pdf">
					<a
						target="_blank"
						className={
							"mt-4 text-lg text-center font-semibold font-sans p-2 rounded-md " +
							buttonColor +
							" " +
							textColor
						}
					>
						Link to final presentation PDF for this project.
					</a>
				</Link>
				<div className="flex flex-col max-w-5xl mt-8">
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						This is the work done for my group final project for my parallel
						computing class at Texas A&M University. The project group was
						comprised of me, Bora Oztekin, Michael McKinsey, and Phi Thuan Au.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						For this final project, each team was tasked with creating parallel
						implementations of algorithms of their choice and comparing the
						algorithms to each other and to their sequential counterparts.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						Our team decided to go with one-layer logistic regression based
						gradient descent for this algorithm since we thought this was more
						interesting than simply trying to parallelize a sorting algorithm.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						We therefore implemented 3 different versions of this algorithm- one
						sequential implementation in python, one parallel implementation on
						the CPU using MPI, and one parallel implementation on the GPU using
						CUDA.
					</a>
					<a className={"text-xl font-normal font-sans mt-4 " + textColor}>
						I was responsible for the CUDA implementation of the algorithm
						primarily and I have attached some performance graphs below. It can
						be seen that the CUDA version does scale down the execution time
						with increases in the number of threads, but plateaus out very
						quickly. This is most likely due to the fact that using one-layer
						logistic regression mitigates the benefit from parallelism since
						there are not as many learnable parameters. When there are many
						threads too, the overhead of transferring information between the
						threads and the host after each batch starts to become too high to
						yield too much more gain compared to the computation time decrease.
						This could definitely be mitigated and managed in the future, but at
						this point, the requirements for the final project had been
						completed.
					</a>
				</div>
				<div
					className="max-w-lg mt-4 mb-4 rounded-2xl "
					style={{ boxShadow: imageDivStyle }}
				>
					<img
						src="/assets/images/projects/software/class_projects/435_gradient_descent/cuda_strong_scaling.png"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div>
				<div
					className="max-w-lg mt-4 mb-4 rounded-2xl "
					style={{ boxShadow: imageDivStyle }}
				>
					<img
						src="/assets/images/projects/software/class_projects/435_gradient_descent/MPI_SS_0.01LR_15Epoch.jpg"
						width="auto"
						height="auto"
						alt="main photo"
						className="rounded-2xl"
					></img>
				</div>
			</div>
		</div>
	);
}

export default gradient_descent_435;
