import { Resource } from "./Resource"

export interface Collection extends Resource {
	"max_page_size": string,
	"total_size": string
}
