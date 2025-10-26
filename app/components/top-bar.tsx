import styles from '@/app/ui/top-bar.module.css'
import SearchBox from './searchBox'

export default function TopBar() {
	return (
		<div id={styles.topBar}>
			<SearchBox />
		</div>
	)
}
