import styles from "@/app/ui/carousel.module.css"

export default function LoadingCarousel(props: { title: string }) {
	const title = props.title

	return <div className={styles.category}>
		<h2 className={styles.title}>{title}</h2>
		<div className={styles.slider}>
			<div className={styles.slides}>
				<div className={styles.slide}>
				</div>
				<div className={styles.slide}>
				</div>
				<div className={styles.slide}>
				</div>
				<div className={styles.slide}>
				</div>
			</div>
		</div>
	</div>
}
