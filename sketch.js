var dog, happyDog, database, foodS, foodStock;
function preload() {
  image1 = loadImage('images/dogImg.png')
  image2 = loadImage('images/dogImg1.png')
}

function setup() {
database = firebase.database()
  foodStock = database.ref('Food')
  foodStock.on('value', readStock)

  createCanvas(1200, 1200);
  dog1 = createSprite(850, 250, 10, 10)
  dog1.addImage(image1)
  dog1.scale = 0.5
foodObject = new Food()


  var foodStockCount = database.ref('Food');
  foodStockCount.on("value", function(data){
    foodS = data.val();
      console.log(foodS)
  })
}


function draw() {
background('GREEN')

  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS)
    dog1.addImage(image2)
  }


  foodObject.display()

  drawSprites();
  fill('WHITE')
  text('Click the UP_ARROW to feed the dog', 100,100)
  
}


function readStock(data) {
  foodS = data.val()
}

function writeStock(x) {

  if (x <= 0) {
    x = 0
  }
  else {
    x = x - 1
  }

  database.ref('/').update({
    Food: x
  })
}
