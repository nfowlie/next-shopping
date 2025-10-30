import styles from '@/app/ui/footer.module.css'
import Link from 'next/link'

export default function Footer(props: { id: string }) {
	const footer = props.id
	return (
		<footer id={styles[footer]}>
			<div className={styles.footerCategory}>
				<h3 className={styles.categoryTitle}>Next Shopping</h3>
				<Link href="/about">About</Link>
				<Link href="/contact">Contact</Link>
			</div>
			<div className={styles.footerCategory}>
				<h3 className={styles.categoryTitle}>Support</h3>
				<Link href="/help">Help &#38; Support</Link>
			</div>
			<div className={styles.footerCategory}>
				<h3 className={styles.categoryTitle}>Socials</h3>
				<Link href="https://bsky.app/">Bsky</Link>
				<Link href="https://discord.com/">Discord</Link>
				<Link href="https://mastodon.social">Mastodon</Link>
				<Link href="https://pixelfed.org/">Pixelfed</Link>
			</div>
		</footer>
	)
}
