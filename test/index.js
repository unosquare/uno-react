const lib = require('../lib');

console.log(lib);

function search(searchText) {
    console.log(searchText);
}

const debounced = lib.debounce(search);

search(100);
debounced(100);
debounced(200);
debounced(300);
debounced(400);
debounced(500);