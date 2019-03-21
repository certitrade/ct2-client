import * as model from "@certitrade/ct2-model"
import { Connection } from "./Connection"

export class Collection<T> {
	constructor(protected readonly connection: Connection, protected readonly path: string) {
	}
	async create(resource: Partial<T>): Promise<T | model.Error> {
		return (await this.connection.post(this.path, resource)) as T | model.Error
	}
	async retrieve(): Promise<T[] | model.Error> {
		return (await this.connection.get(this.path)) as T[] | model.Error
	}
}
