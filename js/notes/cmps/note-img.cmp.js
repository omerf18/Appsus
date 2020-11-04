export default {
    name: 'note-img',
    template: `
    <section>
       <div class="note flex column">
            <input class="note-title" type="text" maxlength="22" v-model="title">
            <img class="note-img" :src="info">
            <div class="flex space-between">
                <div class="note-bgc"> </div>
                <div class="note-pin"> </div>
            </div>
        </div>
    </section>
 `,
    data() {
        return {
            type: 'img',
            title: 'title',
            isPinned: true,
            info: 'https://i.guim.co.uk/img/media/20098ae982d6b3ba4d70ede3ef9b8f79ab1205ce/0_0_969_581/master/969.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=a368f449b1cc1f37412c07a1bd901fb5',
            style: {
                backgroundColor: ''
            }
        }
    },
}