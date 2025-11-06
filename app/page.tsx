import { Suspense } from 'react'
import styles from "@/app/ui/home.module.css"
import Carousel from "./components/carousel";

import LoadingCarousel from "@/app/loading/loadingCarousel";
import { getAllPicks } from "./lib/utils";

export default async function Home() {
	const data = await getAllPicks()

	const recommended = data.allPicks,
		staffPicks = data.allPicks,
		newReleases = data.allPicks,
		upcomingReleases = data.allPicks

	return (
		<main className={styles.main}>
			<Suspense fallback={<LoadingCarousel title="Recommended" />}>
				<Carousel title="Recommended" slideCount={10} slideData={recommended} />
			</Suspense>
			<Suspense fallback={<LoadingCarousel title="New" />}>
				<Carousel title="New" slideCount={10} slideData={newReleases} />
			</Suspense>
			<Suspense fallback={<LoadingCarousel title="Upcoming" />}>
				<Carousel title="Upcoming" slideCount={10} slideData={upcomingReleases} />
			</Suspense>
			<Suspense fallback={<LoadingCarousel title="Staff Picks" />}>
				<Carousel title="Staff Picks" slideCount={10} slideData={staffPicks} />
			</Suspense>
		</main >
	);
}
