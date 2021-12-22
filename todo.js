const todoApp = () => ({
  todos: [],
  addTodo(event) {
    // supress the submit so the the page does not refersh
    event.preventDefault();

    // retrieve data directly from DOM with magic property root
    var item = this.$root.querySelector(".user_input_task").value;
    // if the value is not null
    if (item) {
      const id = this.todos.length;
      this.todos = [
        ...this.todos,
        {
          id,
          item: item,
          completed: false,
          editing: false,
        },
      ];
      // reset the input field
      this.$root.querySelector(".user_input_task").value = "";
    }
  },
  remove(event, id) {
    // so supress the submit so the the page does not refersh
    event.preventDefault();

    // filter function to remove todos based on id
    this.todos = this.todos.filter((todo) => todo.id !== id);
  },
});
