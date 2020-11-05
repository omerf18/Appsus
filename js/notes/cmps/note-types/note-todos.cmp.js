export default {
    props: ['note'],
    name: 'note-todos',
    template: `
    <section>
       <div class="note flex column">
           <input class="note-title" type="text" placeholder="My todos" v-model="note.title" maxlength="20">
            <hr>
            <ul>
            <li v-for="todo in note.info.todos" class="btn" :key="todo.id">{{todo.txt}}</li>
            </ul>
            <div class="flex space-between">
                <i class="fas fa-brush icon"></i>
                <i class="fas fa-trash-alt icon"></i>
                <i class="note-pin fas fa-thumbtack icon"></i>
            </div>
        </div>
    </section>
 `,
    methods: {
        edit() {
            this.$emit('editNote')
        }
    }
}