export default {
    name: 'note-txt',
    template: `
    <section>
       <div class="note flex column">
            <input class="note-title" type="text" maxlength="18" v-model="title">
            <textarea class="note-txt" rows="12" cols="6" v-model="info"></textarea>
            <div class="flex space-between">
                <div class="note-bgc"> </div>
                <div class="note-pin"> </div>
            </div>
        </div>
    </section>
 `,
    data() {
        return {
            type: 'txt',
            title: 'title',
            isPinned: true,
            info: 'text',
            style: {
                backgroundColor: ''
            }
        }
    },
}