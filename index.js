let myCollection = [
    {
      name: "School of Code mug",
      count: 1,
      whatILike: "It has my cute pixel character on it!"
    },
    {
      name: "School of Code hat",
      count: 2,
      whatILike: "An often overlooked fashion accessory"
    },
    {
      name: "School of Code pillow",
      count: 1,
      whatILike: "Eat. Sleep. Code. Repeat :)"
    }
  ];
 
  function describeItem(item){
    if (item.count === 1){
        console.log(`I have a ${item.name}. Here's what I like about it: ${item.whatILike}`);
    } else {
        console.log(`I have ${item.count} ${item.name}s. Here's what I like about them: ${item.whatILike}`);
    }
  }

//describeItem(myCollection[1]);

//   2d. Now make a function called describeCollection that takes in an array as a parameter. The function should loop through the array, and 
//   for each item, it should call the describeItem function so it displays a message according to how many you have in your collection.

  function describeCollection(array){
    return array.forEach(describeItem);  
}

describeCollection(myCollection);
