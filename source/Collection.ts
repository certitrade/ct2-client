import { Connection } from "./Connection"
import { Error } from "./Error"

export class Collection<T> {

	constructor(private readonly connection: Connection, private readonly path: string) {
	}
	create(resource: Partial<T>): Promise<T | Error> {
		return this.connection.post(this.path, resource).then(result => result as T | Error)
	}
	retrieve(): Promise<T[] | Error>
	retrieve(id: string): Promise<T | Error>
	retrieve(id?: string): Promise<T | T[] | Error> {
		return id ? this.connection.get(this.path + "/" + id).then(result => result as T | Error) :
		this.connection.get(this.path).then(result => result as T[] | Error)
	}
	update(id: string, resource: Partial<T>): Promise<T | Error> {
		return this.connection.put(this.path + "/" + id, resource).then(result => result as T | Error)
	}
	delete(id: string): Promise<T | Error> {
		return this.connection.delete(this.path + "/" + id).then(result => result as T | Error)
	}
}
