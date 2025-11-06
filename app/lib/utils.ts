import { GET } from "@/app/api/route"

export async function getAllPicks() {
	const response = await GET()
	const data = await response.json()

	return data
}
