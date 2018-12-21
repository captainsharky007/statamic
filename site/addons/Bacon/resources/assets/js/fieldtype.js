Vue.component('bacon-fieldtype', {

    mixins: [Fieldtype],

    template: '<div class="radio-fieldtype-wrapper"><ul class="list-unstyled" v-for="item in config.option_tta"><li><input type="radio" :value="item.value" :id="item.text" :name="item.type"  v-model="data"><label :for=item.text>{{ item.text }} <img width="32px" :src="item.image" ></label></li></ul></div>',

    data: function() {
      console.log(this)
        return {
             show: false
        };
    },

    computed: {
       inputType: function() {
           return this.show ? 'radio' : 'password';
       }
   },

    ready: function() {
        //
    }

});


// template: '' +
//   '<div>' +
//     '<input :type="radio" v-model="data" />' +
//     '<input type="checkbox" :id="name" v-model="show" />' +
//     '<label :for="name">Show password</label>' +
//   '</div>' +
// '',

// template: '' +
//   '<div class="radio-fieldtype-wrapper"><ul class="list-unstyled"><li>' +
//     '<input type="radio" v-model="data" :id="name" value="tessst" /><label :for="name">Test</label>' +
//     //'<input type="checkbox" :id="name" v-model="show" />' +
//     //'<label :for="name">Show password</label>' +
//   '</li></ul></div>' +
// '',
