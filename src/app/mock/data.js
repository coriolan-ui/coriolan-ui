const data = [
  {
    name: 'releases',
    description: 'A taco (/ˈtækoʊ/ or /ˈtɑːkoʊ/) is a traditional Mexican dish composed of a corn or wheat tortilla folded or rolled around a filling. A taco can be made with a variety of fillings, including beef, pork, chicken, seafood, vegetables and cheese, allowing for great versatility and variety. A taco is generally eaten without utensils and is often accompanied by garnishes such as salsa, avocado or guacamole, cilantro (coriander), tomatoes, minced meat, onions and lettuce.',
    items: [
      { name: 'tentura-beyond-illusion', price: 7 },
      { name: 'psyfactor-retro-scientific', price: 6 },
      { name: 'cifroteca-roof-raiser-wild-storm', price: 6 }
    ]
  },
  {
    name: 'artists',
    description: 'A hamburger (also called a beef burger, hamburger sandwich, burger or hamburg) is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bun. Hamburgers are often served with lettuce, bacon, tomato, onion, pickles, cheese and condiments such as mustard, mayonnaise, ketchup, relish, and green chile.',
    items: [
      { name: 'irukanji', price: 8 },
      { name: 'tentura', price: 8 },
      { name: 'psyfactor', price: 6 }
    ]
  },
  {
    name: 'events',
    description: 'Drinks, or beverages, are liquids intended for human consumption. In addition to basic needs, beverages form part of the culture of human society. Although all beverages, including juice, soft drinks, and carbonated drinks, have some form of water in them, water itself is often not classified as a beverage, and the word beverage has been recurrently defined as not referring to water.',
    items: [
      { name: 'five-years', price: 3 },
      { name: 'home-space', price: 4 },
      { name: 'water-marks', price: 5 }
    ]
  }
]

const dataMap = data.reduce(function (map, category) {
  category.itemsMap = category.items.reduce(function (itemsMap, item) {
    itemsMap[item.name] = item
    return itemsMap
  }, {})
  map[category.name] = category
  return map
}, {})

exports.getAll = function () {
  return data
}

exports.lookupCategory = function (name) {
  return dataMap[name]
}

exports.lookupItem = function (category, item) {
  return dataMap[category].itemsMap[item]
}
