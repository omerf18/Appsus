export default {
    name: 'note-todos',
    template: `
    <section>
       <div class="note flex column">
            <input class="note-title" type="text" maxlength="18" v-model="title">
            <ul>
            <li v-for="todo in todos" class="btn" :key="todo.id">{{todo.txt}}</li>
            </ul>
            <div class="flex space-between">
                <div class="note-bgc"> </div>
                <div class="note-pin"> </div>
            </div>
        </div>
    </section>
 `,
    data() {
        return {
            type: 'todos',
            title: 'title',
            isPinned: true,
            todos: [
                {
                    id: 0,
                    txt: "Do that",
                    // doneAt: date,
                    isDone: true
                },
                {
                    id: 1,
                    txt: "Do this",
                    // doneAt: 187111111,
                    isDone: false
                },
            ],
            style: {
                backgroundColor: ''
            }
        }
    },
}