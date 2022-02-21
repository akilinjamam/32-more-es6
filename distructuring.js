const phone = { name: 'vivo y81i', catagory: 'phone', price: 22000, storage: '16 gb', camera: 'front : 5 px and back : 13px', ram: '2 gb' }

// console.log(phone);

// to show the specific properties under object.

const { price, camera, ram } = phone; // selected properties which you wanted to show as veriable 

console.log(price, camera, ram); //here you can indivudully decleare the selected object properties, 


// understanding object under object (nested object)


const company = {

    name: 'Mitsubishi',
    product: 'car',
    ceo: { name: 'akil injamam', id: 31, share: '70% share', position: 'owner' },
    work: {
        web: 'networking', security: 'casperisky', depertmenthead: 'abul bashar',
        development: { front: 'web designing', back: 'programmer' }
    },
}


const { name, share } = company.ceo;

console.log(name, share);