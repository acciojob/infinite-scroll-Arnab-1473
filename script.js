//your code here!
const list = document.querySelector('ol');

for(let i=0; i,10; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `List item ${i+1}`;
    list.appendChild(listItem);
}

window.addEventListener("scroll" () => {
    if(list.scrollTop + list.clientHeight >= list.scrollHeight) {
        const listItem1 = document.createElement('li');
        const listItem2 = document.createElement('li');
        listItem1.textContent = 'List item ${list.children.length + 1}';
        listItem2.textContent = 'List item ${list.children.length + 2}';
        list.appendChild(listItem1);
        list.appendChild(listItem2);
    }
});

