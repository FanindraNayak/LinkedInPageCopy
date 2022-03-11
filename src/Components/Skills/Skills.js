import React, { useState } from "react";
import "./Skills.css";
import EditButton from "./EditButton.svg";
import ShowMore from "./ShowMore.svg";
const Skills = () => {
	const data = [
		{
			id: 1,
			skillName: "C++",
			Endorsement: [
				{
					id: 1,
					name: "Kshitij Soni",
					Endorsements: "has given an endorsement for this skill",
				},
				{
					id: 2,
					name: "Kshitij Soni",
					Endorsements: "has given an endorsement for this skill",
				},
			],
		},
		{
			id: 2,
			skillName: "python",
			Endorsement: [
				{
					id: 1,
					name: "Kshitij Soni",
					Endorsements: "has given an endorsement for this skill",
				},
			],
		},
		{
			id: 3,
			skillName: "C",
			Endorsement: [
				{
					id: 1,
					name: "Kshitij Soni",
					Endorsements: "has given an endorsement for this skill",
				},
			],
		},
	];

	const [idToShow, setIdToShow] = useState(null);
	return (
		<main className="Skills">
			<div className="heading">
				<p className="title">Skills & endorsements</p>
				<div>
					<p className="editIcon">Add a new skill</p>
					<img src={EditButton} alt="edit" />
				</div>
			</div>
			<section className="skills">
				<button className="takeSkillQuiz">Take skill quiz</button>
				{data.map((value) => {
					return (
						<div key={value.id} className="">
							<div className="skillSection">
								<p className="skillName">{value.skillName}</p>
								{value.id === idToShow ? (
									<div
										className="skillNameButton"
										onClick={() => {
											setIdToShow(null);
										}}
									>
										-
									</div>
								) : (
									<div
										className="skillNameButton"
										onClick={() => {
											setIdToShow(value.id);
										}}
									>
										+
									</div>
								)}
							</div>

							<div
								className="personName"
								style={
									value.id === idToShow
										? { display: "block" }
										: { display: "none" }
								}
							>
								{value.Endorsement.map((values1) => {
									return (
										<div key={values1.id}>
											<p>
												<b>{values1.name}</b> {values1.Endorsements}
											</p>
										</div>
									);
								})}
							</div>

							<hr className="HR" />
						</div>
					);
				})}
				<div className="endButton">
					<button className="showMore">
						Show more <img src={ShowMore} alt="edit" />
					</button>
				</div>
			</section>
		</main>
	);
};

export default Skills;
