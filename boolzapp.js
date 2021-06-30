Vue.config.devtools= true;

var contacts= new Vue({
    el:"#contacts",
    data:{
        contacts:[
            {
                name: 'Michele',
                avatar: '_1',
            },
            {
                name: 'Fabio',
                avatar: '_2',
            },
        
            {
                name: 'Samuele',
                avatar: '_3',
            },
            {
                name: 'Luisa',
                avatar: '_4',
            }
        ]
    },
    methods:{
        getAvatarPic(contact){
            console.log(`img/avatar${contact.avatar}.jpg`);
            return `img/avatar${contact.avatar}.jpg`;
        }
    }
})