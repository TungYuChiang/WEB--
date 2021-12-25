var money_item = [];

if (localStorage.getItem("money_item")) {
    money_item = JSON.parse(localStorage.getItem("money_item"));
}


function processFormData() {
            
    const form = document.forms['form'];
    const name = form.elements.cost_name.value; 
    const Classification = form.elements.Classification.value; 
    const Date_data = form.elements.Date_data.value;
    const Cost_value = form.elements.Cost_value.value;
    let newItem = {
        name:name,
        Classification:Classification,
        Date_data:Date_data,
        Cost_value:Cost_value
    };
    money_item.push(newItem);
    localStorage.setItem("money_item", JSON.stringify(money_item));
    
}
