import styles from '@/app/ui/top-bar.module.css'
import SearchBox from './searchBox'

export default function TopBar(props: { id: string }) {
	const id = props.id
	return (
		<nav id={styles[id]}>
			<SearchBox />
		</nav>
	)
}
