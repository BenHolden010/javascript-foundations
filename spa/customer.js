function createCustomer(name, bill, bookings){
  var customer = {
    name: name,
    bill: bill,
    bookings: bookings || [],
  }
  return customer
}

function greeting(customer){
  if (customer.bill>0){
    return `${customer.name}! Welcome back to Happy Spa`
  }
  return `${customer.name}! Welcome to Happy Spa`
}

function createService(name, cost){
  service = {
   name: name,
   cost: cost
  }
  if (!name && !cost){
    return `Please provide service name and cost.`
  }
  return service
}

function bookServices(customer, service){
  customer.bookings.push(service.name)
  customer.bill += service.cost
  return customer
}

function applyGiftCard(allServices, price){
  services = []
  for (var i = 0; i < allServices.length; i++){
    if (allServices[i].price<=price){
      services.push(allServices[i].name)
    }
  }
  return services
}
module.exports = {
  createCustomer, 
  greeting, 
  bookServices, 
  createService,
  applyGiftCard
  }
