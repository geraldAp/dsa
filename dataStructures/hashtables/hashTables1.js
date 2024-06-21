let user = {
    age:54 ,
    name: 'Kylie',
    magic:true,
    scream:  function(){
        console.log('ahhhhhh!')
    }
}


user.age // O(1)
user.spell= 'Abra Kadabra' //O(1)
user.scream(); //O(1)

// Maps in js like obj es6 addition that alows you to set any data type as a key

const a = new Map()
// only stores key values 
const b = new Sets()