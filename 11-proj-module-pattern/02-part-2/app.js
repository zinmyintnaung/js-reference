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
            {id: 1, name: 'Cookie', calories: 400},
            {id: 2, name: 'Eggs', calories: 300},
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
        addItem: function(name, calories){
            //console.log(name, calories);
            let ID;
            if(data.items.length > 0){
                ID = data.items[data.items.length - 1].id + 1;
            }else{
                ID = 0;
            }
            //Calories to Number
            calories = parseInt(calories);
            // Create new item
            newItem = new Item(ID, name, calories);
            data.items.push(newItem); //Added to itemarray
            return newItem;
        }
    }
})();

// UI Controller
const UICtrl = (function(){
    
    const UISelectors = {
        itemList: '#item-list',
        addBtn: '.add-btn',
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calories'
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
        },
        getSelectors: function(){
            return UISelectors;
        },
        getItemInput: function(){
            return {
                name: document.querySelector(UISelectors.itemNameInput).value,
                calories: document.querySelector(UISelectors.itemCaloriesInput).value,
            }
        }
    }
})();

// App Controller, starting point of our application
const App = (function(ItemCtrl, UICtrl){
    //console.log(ItemCtrl.logData());
    

    // Load event listeners
    const loadEventListeners = function(){
        // Get UI selectors 
        const UISelectors = UICtrl.getSelectors();
        // Add item event
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
    }

    // Add item submit
    const itemAddSubmit = function(e){
        // Get form input from UI Controller
        const input = UICtrl.getItemInput();
        // Check for name and calorie input, not to be empty
        if(input.name !== '' && input.calories !== ''){
            //console.log(input);
            // Add item
            const newItem = ItemCtrl.addItem(input.name, input.calories);
            //console.log(newItem);
        }
        e.preventDefault();
    }

    // Public methods
    return {
        init: function(){
            //console.log('Initializing app...');
            const items = ItemCtrl.getItems();
            //console.log(items);
            // Populate list with items
            UICtrl.populateItemList(items);

            // Load event listeners
            loadEventListeners();
        }
    }
})(ItemCtrl, UICtrl);

App.init();