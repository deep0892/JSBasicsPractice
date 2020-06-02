class ListBinding {
    constructor(element) {
        this.listElement = element;
        this.textList = [];
    }

    // Makes an li element with given text
    static createListItem(text) {
        const li = document.createElement('li');
        li.textContent = text;
        return li;
    }

    update() {
        // Remove all existing li elements
        while (this.listElement.firstChild) {
            this.listElement.removeChild(this.listElement.firstChild);
        }

        // Fill ul/ol tag with li elements
        for (let text of this.textList) {
            this.listElement.appendChild(ListBinding.createListItem(text));
        }
    }

    add(text) {
        this.textList.push(text);
        this.update();
    }

    remove(index) {
        this.textList.slice(index, 0);
        this.update();
    }
}