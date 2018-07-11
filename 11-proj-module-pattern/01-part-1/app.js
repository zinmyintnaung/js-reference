// Storage controller

// Item controller
const ItemCtrl = (function(){
    // Item constructor
    const Item = function(id, name, calories){
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    // Data structure/state
    const data = {
        items: [
            {id: 0, name: 'Steak Dinner', calories: 1200},
            {id: 0, name: 'Cookie', calories: 400},
            {id: 0, name: 'Eggs', calories: 300},
        ],
        currentItem: null,
        totalCalories: 0
    }
    
    // Public methods
    return {
        logData: function(){
            return data;
        },
        getItems: function(){
            return data.items;
        },
    }
})();

// UI Controller
const UICtrl = (function(){
    
    const UISelectors = {
        itemList: '#item-list'
    }
    
    // Public methods
    return{
        populateItemList: function(items){
            let html = '';
            items.forEach(function(item){
                html += `<li class="collection-item" id="item-${item.id}">
                            <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                            <a href="#" class="secondary-content">
                                <i class="edit-item fa fa-pencil"></i>
                            </a>
                        </li>`;
            });
            // Insert list item to <ul>
            document.querySelector(UISelectors.itemList).innerHTML = html;
        }
    }
})();

// App Controller, starting point of our application
const App = (function(ItemCtrl, UICtrl){
    //console.log(ItemCtrl.logData());
    
    // Public methods
    return {
        init: function(){
            //console.log('Initializing app...');
            const items = ItemCtrl.getItems();
            //console.log(items);
            UICtrl.populateItemList(items);
        }
    }
})(ItemCtrl, UICtrl);

App.init();