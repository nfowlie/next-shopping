import { NextResponse } from "next/server"
import staffPicks from "@/app/data/staffPicks.json"

export const runtime = 'edge'

export async function GET() {
	const audioDBURI = process.env.AUDIO_DB_URI,
		audioDBAuth = process.env.AUDIO_DB_KEY

	try {
		const allPicks = await Promise.all(staffPicks.map(async (sp) => {
			return await fetch(`${audioDBURI}/${audioDBAuth}/searchalbum.php?s=${sp.artist}&a=${sp.album}`)
				.then(res => res.json())
				.then(data => data)
		}))

		return NextResponse.json({
			allPicks
		})
	} catch (err) {
		console.error(err)
		return NextResponse.json({
			err
		})
	}
}
