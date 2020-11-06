export default {
    props: ['note'],
    name: 'note-todos',
    template: `
            <ul>
            <li v-for="(todo,index) in note.info" class="btn flex space-between" :class="{done:todo.isDone}" @click="doneTodo(note.id,todo.id)" :key="todo.id"> <span class="todo">{{todo.txt}}</span> <span class="done-todo">{{todo.doneAt}}</span></li>
            </ul>
 `,
    methods: {
        doneTodo(noteId, todoId) {
            this.$emit('updateTodo', noteId, todoId);
        }
    }
}