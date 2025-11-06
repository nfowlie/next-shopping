import styles from '@/app/ui/top-bar.module.css'
import SearchBox from './searchBox'
import { AudioLines } from "lucide-react";
import Link from 'next/link';

export default function TopBar(props: { id: string }) {
	const id = props.id
	return (
		<nav id={styles[id]}>
			<Link href="/">
				<AudioLines size="55" color="var(--brand-color)" />
			</Link>
			<SearchBox />
		</nav >
	)
}
