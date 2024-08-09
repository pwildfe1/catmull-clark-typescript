import './style.css'


export class Vec3 {

    x: number = 0
    y: number = 0
    z: number = 0

    constructor (X: number, Y: number, Z: number){
        this.x = X
        this.y = Y
        this.z = Z
    }

    magnitude() : number {
        return Math.pow(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2), 0.5)
    }

    add(vec : Vec3) : Vec3 {
        return new Vec3(this.x + vec.x, this.y + vec.y, this.z + vec.z)
    }

    subtract(vec : Vec3) : Vec3 {
        return new Vec3(this.x - vec.x, this.y - vec.y, this.z - vec.z)
    }

    dot(vec: Vec3) : number{
        return this.x*vec.x + this.y*vec.y + this.z*vec.z
    }

    cross(vec: Vec3): Vec3{
        let x = this.y * vec.z - this.z * vec.y
        let y = this.z * vec.z - this.x * vec.z
        let z = this.x * vec.y - this.y * vec.x
        return new Vec3(x, y, z)
    }

    scale(s: number): Vec3{
        return new Vec3(this.x*s, this.y*s, this.z*s)
    }

    distanceTo(p: Vec3): number{
        return this.subtract(p).magnitude()
    }

}