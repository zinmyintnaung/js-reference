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
        getItemById: function(id){
            let found = null;
            // Loop thru items
            data.items.forEach(function(item){
                if(item.id === id){
                    found = item;
                }
            });
            return found;
        },
        setCurrentItem: function(item){
            data.currentItem = item;
        },
        getCurrentItem: function(){
            return data.currentItem;
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
        updateBtn: '.update-btn',
        deleteBtn: '.delete-btn',
        backBtn: '.back-btn',
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
        addItemToForm: function(){
            document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
            document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
            UICtrl.showEditState();
        },
        showTotalCalories: function(totalCalories){
            document.querySelector(UISelectors.itemTotalCalories).textContent = totalCalories;
        },
        clearEditState: function(){
            UICtrl.clearInput();
            document.querySelector(UISelectors.deleteBtn).style.display = 'none';
            document.querySelector(UISelectors.updateBtn).style.display = 'none';
            document.querySelector(UISelectors.backBtn).style.display = 'none';
            document.querySelector(UISelectors.addBtn).style.display = 'inline';
        },
        showEditState: function(){
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
            document.querySelector(UISelectors.updateBtn).style.display = 'inline';
            document.querySelector(UISelectors.backBtn).style.display = 'inline';
            document.querySelector(UISelectors.addBtn).style.display = 'none';
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
        
        // Edit icon click event
        // Here we can't add event to edit icon coz it was create after DOM load
        // Thus, we need to target the parent element and look through inside of it
        document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);

        // Update item event, save POST data
        document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);
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

    // Click on edit item pencil icon
    const itemEditClick = function(e){
        //Now target the pencil icon to fire click event on it
        if(e.target.classList.contains('edit-item')){
            // Get list item id (item-0, item-1, etc.)
            const listId = e.target.parentNode.parentNode.id;
            //console.log(listId);
            
            // Break into an array
            const listIdArr = listId.split('-');
            //console.log(listIdArr);
            
            // Get the actual id
            const id = parseInt(listIdArr[1]);

            // Get item
            const itemToEdit = ItemCtrl.getItemById(id);
            //console.log(itemToEdit);

            // Set current item
            ItemCtrl.setCurrentItem(itemToEdit);

            // Add item to form
            UICtrl.addItemToForm();

        }
        e.preventDefault();
    }

    // Update item submit
    const itemUpdateSubmit = function(e){
        console.log('update');
        e.preventDefault();
    }

    // Public methods
    return {
        init: function(){
            
            //Clear edit state or set initial state
            UICtrl.clearEditState();
            
            
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