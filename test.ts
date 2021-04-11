// function TodoService() {
// 	this.todos = [];
// }

// TodoService.prototype.getAll = function () {
// 	return this.todos;
// };

class TodoService {
	static lastId: number = 0;
	constructor(private todos: Todo[]) {}

	getAll() {
		return this.todos;
	}
}
interface Todo {
	name: string;
	state: TodoState;
}

var service = new TodoService([{ name: 'Jo', state: 1 }]);

service.getAll();
