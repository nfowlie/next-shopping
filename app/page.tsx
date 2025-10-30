import styles from "@/app/ui/home.module.css"
import Carousel from "./components/carousel";
import { use } from 'react'

export default function Home() {
	const products = use(
		fetch("https://dummyjson.com/products")
			.then((res) => {
				return res.json()
			})
			.then((data) => console.log(data)),
	)


	console.log(products)

	return (
		<main className={styles.main}>

			<Carousel title="Recommended" slideCount={10} />
		</main>
	);
}
