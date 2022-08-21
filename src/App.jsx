import Intro from './components/Intro/Intro';
import Play from './components/Play/Play';

const App = () => {
	const [play, setPlay] = useState(false);

	return (
		play ? <Intro play={play} setPlay={setPlay} /> : <Play />
	)
}

export default App
