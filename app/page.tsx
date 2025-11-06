// 'use client'

import Carousel from "./components/carousel";
import { Suspense } from 'react'
import styles from "@/app/ui/home.module.css"

import LoadingCarousel from "@/app/loading/loadingCarousel";

export default async function Home() {

	const getData = async () => {
		const res = await fetch(`${process.env.SERVER_BASE_URI}/api`, {
			next: { revalidate: 10 }
		})
		return res.json()
	}

	const data = await getData()
	const recommended = data.data,
		staffPicks = data.data,
		newReleases = data.data,
		upcomingReleases = data.data

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
