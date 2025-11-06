import styles from "@/app/ui/carousel.module.css"

import type { iSlide } from "@/app/types/slide"

export default function slide(props: { slideCount: number, slideData: iSlide }) {
	const slideData = props.slideData
	return (
		<div className={styles.slide}>
			<img src={slideData.album[0].strAlbumThumb} alt={slideData.album[0].strAlbum} />
			<div>
				{slideData?.album[0].strAlbum}
			</div>
		</div>
	)
}
