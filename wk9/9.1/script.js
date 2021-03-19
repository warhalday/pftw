// instructions:
// add a computed object in the appropriate location in the Vue object
// and create computed prop called 'fullAddress'.
// Create the appropriate function in for the computed property to 
// concatenate and return the full address
// so that line 12 in the html can simply be:
// <p> {{fullAddress}}</p>
var vm = new Vue({
    el: "#app",
    data: {
      streetAddress: "2501 Stevens Ave",
      city: "Minneapolis",
      state: "Minnesota",
      postalCode: "55404"
    },
  
    computed: {
      fullAddress: function () {
        return this.streetAddress + ", " + this.city + ", " + this.state + ", " + this.postalCode
      }
    }
  });