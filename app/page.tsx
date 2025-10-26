import styles from "@/app/ui/home.module.css"
import Carousel from "./components/carousel";

export default function Home() {
	return (
		<main className={styles.main}>
			<Carousel title="Recommended" slideCount={10} />
		</main>
	);
}
