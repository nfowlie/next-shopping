import styles from "@/app/ui/carousel.module.css"

export default function slide(props) {
	const slideNumber = props.slideCount
	return (
		<div className={styles.slide}>
			{slideNumber}
		</div>
	)
}
