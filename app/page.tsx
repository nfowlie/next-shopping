import styles from "@/app/ui/home.module.css"
import Carousel from "./components/carousel";
import { Suspense } from 'react'

import LoadingCarousel from "@/app/loading/loadingCarousel";

import { lazy } from "react";

// const NeverResolve = lazy(() => new Promise(() => { }))

export default function Home() {
	return (
		<main className={styles.main}>
			<Suspense fallback={<LoadingCarousel title="Recommended" />}>
				{/*<NeverResolve />*/}
				<Carousel title="Recommended" slideCount={10} />
			</Suspense>
			<Suspense fallback={<LoadingCarousel title="New" />}>
				{/*<NeverResolve />*/}
				<Carousel title="New" slideCount={10} />
			</Suspense>
			<Suspense fallback={<LoadingCarousel title="Upcoming" />}>
				{/*<NeverResolve />*/}
				<Carousel title="Upcoming" slideCount={10} />
			</Suspense>
			<Suspense fallback={<LoadingCarousel title="Staff Picks" />}>
				{/*<NeverResolve />*/}
				<Carousel title="Staff Picks" slideCount={10} />
			</Suspense>
		</main >
	);
}
