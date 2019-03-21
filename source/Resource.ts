import { Connection } from "./Connection"
import * as model from "@certitrade/ct2-model"

export class Resource<T> {
	constructor(protected readonly connection: Connection, protected readonly path: string) {
	}
	async retrieve(): Promise<T | model.Error> {
		return (await this.connection.get(this.path)) as T | model.Error
	}
	async update(resource: Partial<T>): Promise<T | model.Error> {
		return (await this.connection.put(this.path, resource)) as T | model.Error
	}
	async delete(id: string): Promise<T | model.Error> {
		return (await this.connection.delete(this.path)) as T | model.Error
	}
}
