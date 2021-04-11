var baseURL = 'https://acnhapi.com/';
Vue.component('villager-list', {
    template: `<div class="villager"> 
                <h3>{{villager.name_USen}}</h3>
                <div><img v-bind:src="villager.icon_uri" alt=""></div>
                <div><img v-bind:src="villager.image_uri" alt=""></div>
                <p>{{villager.personality}}</p>
                <p>{{villager.birthday-string}}</p>
                <p>{{villager.species}}</p>
                <p>{{villager.hobby}}</p>
                <p>{{villager.catch-phrase}}</p>
                <p>{{villager.bubble-color}}</p>
                <p>{{villager.text-color}}</p>
            </div>`,

    props: ['villager'],
    
});

const vm = new Vue({
    el: "#villagerApp",
    data: {
        villagers: []
    },

    mounted: function () {
        axios
            .get(baseURL + 'v1/villagers')
            .then(response => {
                console.log('response', response);
                vm.villagers = response.data.data;
                console.log(vm.villagers);
                });
    }
})