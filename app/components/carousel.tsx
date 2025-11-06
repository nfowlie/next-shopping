import styles from "@/app/ui/carousel.module.css"
import Slide from "./slide"

interface iSlide {
	album: iAlbum[]
}

interface iAlbum {
	idAlbum: number,
	strAlbumThumb: string,
	strAlbum: string
}

export default function Carousel(props: { title: string; slideCount: number, slideData: iSlide[] }) {

	const slideData = props.slideData

	const title = props.title

	const slideItems = slideData?.map((slide) => {
		return <Slide key={slide.album[0].idAlbum} slideCount={slideData.length} slideData={slide}></Slide>
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
