var TodoState;
(function (TodoState) {
    TodoState[TodoState["New"] = 1] = "New";
    TodoState[TodoState["Active"] = 2] = "Active";
    TodoState[TodoState["Complete"] = 3] = "Complete";
    TodoState[TodoState["Deleted"] = 4] = "Deleted";
})(TodoState || (TodoState = {}));
function remove(todo) {
    if (todo.state != TodoState.Complete) {
        throw "Can't remove incomplete task!";
    }
}
var todo = {
    name: 'Pick up drycleaning',
    get state() {
        return this._state;
    },
    set state(value) {
        if (value == TodoState.Complete) {
            var canBeCompletd = this.state == TodoState.Active || this.state == TodoState.Deleted;
            if (!canBeCompletd) {
                throw 'Todo must be active or deleted in order to be marked completed';
            }
        }
        this._state = value;
    }
};
todo.state = TodoState.Complete;
todo.state;
