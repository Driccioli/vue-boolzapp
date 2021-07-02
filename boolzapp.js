Vue.config.devtools= true;

var app= new Vue({
    el:"#app",
    data:{
        currentContact:0,
        userMessage:"",
        contactSearched:"",
        contacts:[
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                {
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent',
                    dropdown:false,
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent',
                    dropdown:false,
                },
                {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'recieved',
                    dropdown:false,
                },
                {
                    date: '10/01/2020 16:18:45',
                    text: 'Fatto? Bene!',
                    status: 'sent',
                    dropdown:false,
                }
            ],

            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: false,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        dropdown:false,
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'recieved',
                        dropdown:false,
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        dropdown:false,
                    }
                ],
            },
        
            {
                name: 'Samuele',
                avatar: '_3',
                visible: false,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'recieved',
                        dropdown:false,
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        dropdown:false,
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'recieved',
                        dropdown:false,
                    }
                ],

            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: false,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        dropdown:false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'recieved',
                        dropdown:false,
                    }
                ],
            },
        ],
        user:{
            name:"Davide",
            avatar:"_io",
        },
    },

    methods:{
        getAvatarPic(contact){
            console.log(`img/avatar${contact.avatar}.jpg`);
            return `img/avatar${contact.avatar}.jpg`;
        },
        select(key){
            this.currentContact = key;
            this.contacts.forEach(contact => {
                if(contact === this.contacts[this.currentContact]){
                    contact.visible=true;
                }   else{
                    contact.visible = false;
                }
            });
        },
        sendMessage(){
            const dateTimeNow= dayjs();
            const dateTimeString = dateTimeNow.format("DD/MM/YYYY HH:mm:ss");
            this.contacts[this.currentContact].messages.push({
                date:dateTimeString,
                text:this.userMessage,
                status:"sent",
                dropdown:false,
            });
            this.userMessage="";
            setTimeout(function(){
                const dateTimeNow= dayjs();
                const dateTimeString = dateTimeNow.format("DD/MM/YYYY HH:mm:ss");
                app.contacts[app.currentContact].messages.push({
                    date:dateTimeString,
                    text:"ok",
                    status:"recieved"
                });
            }, 1000);
        },
        contactFilter(contact){
            if(this.contactSearched != ""){
                    const nome = contact.name.toLowerCase();
                    const search = this.contactSearched.toLowerCase();
                    return nome.includes(search);     
            } else{
                return true;
            }
        },
        deleteMessage(messages, key){
            if(key=== messages.length-1){
                messages.pop(key);
            }   else{
            messages.splice(key,1);
            }
        },
        openMenu(message){
            if(!message.dropdown){
                message.dropdown = true;
            }   else{
                message.dropdown = false;
            }
        }
    }
})