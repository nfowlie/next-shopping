import { Search } from "lucide-react";
import styles from "@/app/ui/searchbox.module.css"

export default function SearchBox() {
	return (
		<form className={styles.searchBox}>
			<input type="search" placeholder="search" />
			<button type="submit"><Search size={24} color="white" /></button>
		</form>
	)
}
