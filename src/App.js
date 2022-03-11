import ProfileCard from "./Components/ProfileCard/ProfileCard";
import "./App.css";
import Skills from "./Components/Skills/Skills";
import Contribution from "./Components/Contribution/Contribution";

function App() {
	return (
		<div className="App">
			<ProfileCard />
			<Skills />
			<Contribution />
		</div>
	);
}

export default App;
