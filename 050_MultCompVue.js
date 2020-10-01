Vue.component('competence', {
    props: ['titre','contenu'],
    data() {
        return {
            voirCompetence: true,
            montredetail: false,
        }
    },
    template: `
    <article class="message" v-show="voirCompetence">
        <div class="message-header">
        {{ titre }}
        <button type="button" @click="voirCompetence = false">x</button>
        </div>
        <div class="message-body">
        {{ contenu }}
        <button @click="montredetail=true">Voir détails </button>
        <div>
         <modal v-if="montredetail" @close="montredetail=false">
         <slot name="detail"></slot>
         </modal>
         </div>
         </div>
        </article>
    `
})

Vue.component('modal', {
    template: `
    <div class modal = "is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
        <div class ="box">
        <p>
        <slot></slot>
        </p>
        <button class="modal-close" @click="$emit('close')"></button>
        </div>
        </div>
        </div>
    `
})
var app = new Vue({
    el: '#root',
})
