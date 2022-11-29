export default function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.add = function (other) {
  return new Vector(this.x + other.x, this.y + other.y);
};

Vector.prototype.distance = function (other) {
  return Math.sqrt(
    Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2)
  );
};
