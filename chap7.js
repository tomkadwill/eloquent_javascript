function SmartPlantEater() {
  this.energy = 20;
  this.slept = false;
  this.hibernate = false;
}

SmartPlantEater.prototype.multiplePlants = function(context) {
  var directions = context.findAll("*");
  return directions.length > 1 ? true : false
}

SmartPlantEater.prototype.noPlants = function(context) {
  return context.find("*") == null;
}

SmartPlantEater.prototype.shouldEat = function(context) {
  return (this.multiplePlants(context) && (this.energy < 10 || this.slept == true));
}

SmartPlantEater.prototype.shouldHibernate = function(context) {
  return (this.noPlants(context) && this.energy < 15);
}

SmartPlantEater.prototype.act = function(context) {
  var space = context.find(" ");
  var plant = context.find("*");

  if(this.hibernate == true && this.shouldEat.bind(this)(context) == false) {
    return false;
  } else {
    this.hibernate = false;
  }

  if (this.shouldHibernate.bind(this)(context) == true) {
    this.hibernate = true;
  }

  if (this.energy > 60 && space) {
    return {type: "reproduce", direction: space};
  }

  if (plant) {
    if (this.shouldEat.bind(this)(context)) {
      this.slept = false;
      return {type: "eat", direction: plant};
    } else {
      this.slept = true;
    }
  }

  if (space) {
    return {type: "move", direction: space};
  }
};
