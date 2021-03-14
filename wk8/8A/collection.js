const vm = new Vue({
    el: "#myCollectionApp",
    data: {
        newShoeObj: {
            rider: '', 
            brand: '',
            model: '',
            releaseYear: null,
            image: '',
            owned: '',
            collected: false
        },
        shoes: [
        {   
            rider: 'Adrian Lopez', 
            brand: 'Circa Footwear',
            model: 'AL50',
            releaseYear: '2001',
            image: 'https://ak1.ostkcdn.com/images/products/1/301/P11683227.jpg?impolicy=medium',
            owned: 'YES',
            collected: true
        }, {
            rider: 'Kerry Getz',
            brand: 'DVS',
            model: 'Getz',
            releaseYear: '2001',
            image: 'https://i.pinimg.com/originals/8c/16/6b/8c166b367a367cad2670dee93e2d4aed.jpg',
            owned: 'NO',
            collected: false
        }, { 
            rider: 'Matt Hensely',
            brand: 'DuFFs',
            model: 'Gambler',
            releaseYear: '2004',
            image: 'https://ak1.ostkcdn.com/images/products/P11587921.jpg?impolicy=medium',
            owned: 'YES',
            collected: true
        }, {
            rider: 'Patrick Melcher',
            brand: 'Dekline', 
            model: 'Paxton',
            releaseYear: '2006', 
            image: 'https://d33ed57c7e0f3b86ac80-b35ff4a49c968f25a25459ccd042504f.ssl.cf1.rackcdn.com/164439024_dekline-bodega-mid-melcher-blackblood-stone-athletic.jpg',
            owned: 'YES',
            collected: true
        }, { 
            rider: 'Marc Johnson',
            brand: 'Emerica',
            model: 'MJ01',
            releaseYear: '1998',
            image: 'http://1.bp.blogspot.com/_FnKhZ9UbdMM/SacRtl5dmJI/AAAAAAAAASo/4nbxS26jnVY/s280/Photo+9.jpg',
            owned: 'NO',
            collected: false
        }, { 
            rider: 'Kenny Anderson',
            brand: 'Adio Footwear',
            model: 'Anderson',
            releaseYear: '2001',
            image: 'http://www.zappos.com/images/124/124320/9755-544265-d.jpg',
            owned: 'NO',
            collected: false
            }
                   
            ]
        },
    methods: {
        submitHandler: () => {
            console.log('submitted');
            vm.shoes = vm.shoes.concat(vm.newShoeObj);
            vm.resetForm();
        },
        resetForm: () => {
            vm.newShoeObj = {
                rider: '', 
                brand: '',
                model: '',
                releaseYear: null,
                image: '',
                owned: '',
                collected: false
            };
        },
        deleteItem: item => {
            vm.shoes = vm.shoes.filter(box => {
                return box !== item;
            });
        }
    }
  });