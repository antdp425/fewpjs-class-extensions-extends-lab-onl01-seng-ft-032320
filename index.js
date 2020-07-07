class Polygon {
   constructor (intArray){
   this.sides = intArray
   }

   get countSides(){
      return this.sides.length
   }

   get perimeter(){
      return this.sides.reduce((side, total) => {
         return total + side
      })
   }
}

class Triangle extends Polygon {
   get isValid(){
      let a = !!((this.sides[0] + this.sides[1]) > this.sides[2])
      let b = !!((this.sides[1] + this.sides[2]) > this.sides[0])
      let c = !!((this.sides[2] + this.sides[0]) > this.sides[1])
      return ((a)&&(b)&&(c))
   }
}

class Square extends Polygon {
   get isValid(){
      return this.sides.every(side => side == this.sides[0])
   }

   get area(){
      return this.sides[0]**2
   }
}