import styles from "@/app/ui/product.module.css"


export const runtime = 'edge'

export default async function Product({ params, }: { params: Promise<{ slug: string }> }) {

	const { slug } = await params

	return <main className={styles.productListing}>
		<section className={styles.productImages}>jdslkfjs</section>
		<section className={styles.productInformation}>
			<h2 className={styles.title}>{slug}</h2>
			<div className={styles.price}>$32</div>
			<div className={styles.description}>The best</div>
		</section>
	</main>;
}
