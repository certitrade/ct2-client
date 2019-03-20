import { Connection } from "./Connection"
import * as model from "@certitrade/ct2-model"

export class Collection<T> {
	constructor(private readonly connection: Connection, private readonly path: string) {
	}
	create(resource: Partial<T>): Promise<T | model.Error> {
		return this.connection.post(this.path, resource).then(result => result as T | model.Error)
	}
	retrieve(): Promise<T[] | model.Error>
	retrieve(id: string): Promise<T | model.Error>
	retrieve(id?: string): Promise<T | T[] | model.Error> {
		return id ? this.connection.get(this.path + "/" + id).then(result => result as T | model.Error) :
		this.connection.get(this.path).then(result => result as T[] | model.Error)
	}
	update(id: string, resource: Partial<T>): Promise<T | model.Error> {
		return this.connection.put(this.path + "/" + id, resource).then(result => result as T | model.Error)
	}
	delete(id: string): Promise<T | model.Error> {
		return this.connection.delete(this.path + "/" + id).then(result => result as T | model.Error)
	}
}
