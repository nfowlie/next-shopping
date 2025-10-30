import styles from "@/app/ui/carousel.module.css"
import Slide from "./slide"

export default function Carousel(props: { title: string; slideCount: number }) {


	const title = props.title
	const slides = []
	for (let i = 1; i <= props.slideCount; i++) {
		slides[i] = i
	}

	const slideItems = slides.map((slide) => {
		return <Slide key={slide} slideCount={slide}></Slide>
	})

	return (
		<div className={styles.category}>
			<h2 className={styles.title}>{title}</h2>
			<div className={styles.slider}>
				<div className={styles.slides}>
					{slideItems}
				</div>
			</div>
		</div>
	)
}
