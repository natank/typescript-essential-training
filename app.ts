interface Todo {
	name: string;
	state: TodoState;
}

enum TodoState {
	New = 1,
	Active,
	Complete,
	Deleted,
}

function remove(todo: Todo) {
	if (todo.state != TodoState.Complete) {
		throw "Can't remove incomplete task!";
	}
}

var todo: Todo = {
	name: 'Pick up drycleaning',
	get state() {
		return this._state;
	},
	set state(value) {
		if (value == TodoState.Complete) {
			var canBeCompletd =
				this.state == TodoState.Active || this.state == TodoState.Deleted;
			if (!canBeCompletd) {
				throw 'Todo must be active or deleted in order to be marked completed';
			}
		}
		this._state = value;
	},
};

todo.state = TodoState.Complete;
todo.state;
