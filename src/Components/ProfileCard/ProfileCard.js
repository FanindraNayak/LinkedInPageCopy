import React, { useEffect } from "react";
import "./ProfileCard.css";
import s from "./ProfilePic.jpg";
import MSLogo from "./MSLogo.png";
import ISMLogo from "./ISMLogo.png";
import Camera from "./Camera.svg";
import EditButton from "./EditButton.svg";
const ProfileCard = () => {
	const ad = {
		javaScript: 0,
		python: 0,
		Html: 0,
		CSS: 0,
	};
	const GetLanguages = async (url) => {
		await fetch(url)
			.then((res) => res.json())
			.then((rep) => {
				if (rep.CSS !== undefined) {
					ad.CSS++;
				}
				if (rep.HTML !== undefined) {
					ad.Html++;
				}
				if (rep.JavaScript !== undefined) {
					ad.javaScript++;
				}
				if (rep.python !== undefined) ad.python++;
			});
	};
	const GetRepo = async () => {
		let url = `https://api.github.com/users/fanindranayak/repos?per_page=5&page=1`;
		await fetch(url)
			.then((res) => res.json())
			.then(async (rep) => {
				rep.map(async (value) => {
					await GetLanguages(value.languages_url);
				});
			});
	};
	useEffect(() => {
		GetRepo();
	}, []);
	return (
		<main className="a">
			<section className="ProfileCard">
				<div className="profileBackground">
					<div className="cameraImage">
						<img src={Camera} alt="Camera" />
					</div>
				</div>
				<img className="profilePic" src={s} alt="hi" />
				<section>
					<div className="editIcon">
						<img src={EditButton} alt="Edit Icon" />
					</div>
					<section className="profile">
						<div className="profileDetails">
							<h1 className="name">Himadri Nayak</h1>
							<p className="designation">Software Engineer at Microsoft</p>
							<div className="test">
								<p className="location">Dhanbad Jharkhand India </p>
								<p className="dot"></p>{" "}
								<a href="sam" className="contactLink">
									Contact info
								</a>
							</div>
							<p className="connection">500+ connections</p>
							<button className="openTo">Open To</button>
							<button>Add section</button>
							<button>More</button>
						</div>
						<div className="workDetails">
							<div>
								<img src={MSLogo} alt="Camera" className="Logo" />
								<p className="company">Microsoft</p>
							</div>
							<div>
								<img src={ISMLogo} alt="Camera" className="Logo" />
								<p className="company">
									Indian School of Technology (Indian school of Mines) Dhanbad.
								</p>
							</div>
						</div>
					</section>
				</section>
			</section>
		</main>
	);
};

export default ProfileCard;
