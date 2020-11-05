export default {
    props: ['note'],    
    name: 'note-todos',
    template: `
    <section>
       <div class="note flex column">
           <input class="note-title" type="text" placeholder="My todos" :value="note.title" maxlength="20">
            <hr>
            <ul>
            <li v-for="todo in note.info.todos" class="btn" :key="todo.id">{{todo.txt}}</li>
            </ul>
            <div class="flex space-between">
                <div class="note-bgc"> </div>
                <div class="note-pin"> </div>
            </div>
        </div>
    </section>
 `,

}