import * as model from "@certitrade/ct2-model"
import { Connection } from "./Connection"
import { Resource } from "./Resource"

export class Collection<T> {
	constructor(private readonly connection: Connection, private readonly path: string) {
	}
	get(id: string) {
		return new Resource(this.connection, this.path + "/" + id)
	}
	async create(resource: Partial<T>): Promise<T | model.Error> {
		return (await this.connection.post(this.path, resource)) as T | model.Error
	}
	async retrieve(): Promise<T[] | model.Error> {
		return (await this.connection.get(this.path)) as T[] | model.Error
	}
}
