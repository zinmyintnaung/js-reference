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
            // {id: 0, name: 'Steak Dinner', calories: 1200},
            // {id: 1, name: 'Cookie', calories: 400},
            // {id: 2, name: 'Eggs', calories: 300},
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
        },
        getTotalCalories: function(){
            let total = 0;
            // Loop all items in our data structure
            data.items.forEach(function(item){
                total += item.calories;
            });
            // Set total calories in our data structure
            data.totalCalories = total;
            return data.totalCalories;
        }
    }
})();

// UI Controller
const UICtrl = (function(){
    
    const UISelectors = {
        itemList: '#item-list',
        addBtn: '.add-btn',
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calories',
        itemTotalCalories: '.total-calories',
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
        hideList: function(){
            document.querySelector(UISelectors.itemList).style.display = 'none';
        },
        getSelectors: function(){
            return UISelectors;
        },
        getItemInput: function(){
            return {
                name: document.querySelector(UISelectors.itemNameInput).value,
                calories: document.querySelector(UISelectors.itemCaloriesInput).value,
            }
        },
        addListItem: function(item){
            // Show the list, coz we hide it on init if no items
            document.querySelector(UISelectors.itemList).style.display = 'block';

            // Create <li> element
            const li = document.createElement('li');
            // Add a class
            li.className = 'collection-item';
            // Add Id
            li.id = `item-${item.id}`;
            // Add HTML
            li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                    <a href="#" class="secondary-content">
                        <i class="edit-item fa fa-pencil"></i>
                    </a>`;
            // Insert item
            document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
        },
        clearInput: function(){
            document.querySelector(UISelectors.itemNameInput).value = '';
            document.querySelector(UISelectors.itemCaloriesInput).value = '';
        },
        showTotalCalories: function(totalCalories){
            document.querySelector(UISelectors.itemTotalCalories).textContent = totalCalories;
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
            // Add item to UI list
            UICtrl.addListItem(newItem);

            // Get total calories
            const totalCalories = ItemCtrl.getTotalCalories();
            // Show total cal values in UI
            UICtrl.showTotalCalories(totalCalories);

            // Clear filled data on form
            UICtrl.clearInput();
        }
        e.preventDefault();
    }

    // Public methods
    return {
        init: function(){
            //console.log('Initializing app...');
            const items = ItemCtrl.getItems();
            
            // Check if any items to hide <ul> tag on form load
            if(items.length === 0){
                UICtrl.hideList();
                
            }else{
                // Populate list with items
                UICtrl.populateItemList(items);
            }

            // Get total calories
            const totalCalories = ItemCtrl.getTotalCalories();
            // Show total cal values in UI
            UICtrl.showTotalCalories(totalCalories);

            //console.log(items);

            // Load event listeners
            loadEventListeners();
        }
    }
})(ItemCtrl, UICtrl);

App.init();