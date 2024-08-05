import './style.css'
import * as THREE from 'three'
import { GeometryQuads } from "./GeometryQuads"
import {Vec3} from "./Vec3"

function arange(start: number, end: number, step: number = 1): number[] {
    const result: number[] = [];
    for (let i = start; i < end; i += step) {
        result.push(i);
    }
    return result;
}

export class ThreadedRing {

    Radius: number = 8.75
    Thickness: number = 5
    MidSectionFactor: number = 1
    Width: number = 10
    Segments: number = 37
    Geometry: GeometryQuads

    Interval: number = 2
    WaveCount: number = 0
    BottomSeparation: boolean = false
    

    constructor (segment_count: number){
        this.Segments = segment_count
        this.FormBase()
    }

    FormBase(): GeometryQuads {

        let bot_grid = []
        let top_grid = []
        let vertices = []
        let faces = []
        let ring_separation = 6

        let thread_gap = .25
        let thread = 1

        let section_amplitude = 2
        let separations = []
        let bottom_y = 0

        for (let i = 0; i < this.Segments; i++){

            let angle = 2 * Math.PI * i/(this.Segments - 1)
            let inner = this.Radius

            let separation = Math.abs(section_amplitude * Math.sin(i/(this.Segments - 1) * this.WaveCount * 2 * Math.PI)) + ring_separation
            separations.push(separation)

            if (this.BottomSeparation){
                bottom_y = -separations[i] + ring_separation
            }
            
            let pt01 = new Vec3(inner * Math.cos(angle), bottom_y, inner * Math.sin(angle))
            let pt02 = new Vec3((inner + thread) * Math.cos(angle), bottom_y, (inner + thread) * Math.sin(angle))

            let pt03 = new Vec3((inner + thread + thread_gap) * Math.cos(angle), bottom_y, (inner + thread + thread_gap) * Math.sin(angle))
            let pt04 = new Vec3((inner + thread*2 + thread_gap) * Math.cos(angle), bottom_y, (inner + thread*2 + thread_gap) * Math.sin(angle))

            let bottom = [pt01, pt02, pt03, pt04]
            let points : Array<Vec3> = []

            bottom.forEach(p => { points.push(p) })
            bottom.reverse()
            bottom.forEach(p => { points.push(p.add(new Vec3(0, 2, 0))) })
            
            bot_grid.push(points)
            vertices.push(...points)

        }

        for (let i = 0; i < bot_grid.length; i++){
            let curr = bot_grid[i].length*i
            let next = bot_grid[i].length*((i + 1)%bot_grid.length)
            for (let j = 0; j < bot_grid[i].length; j++){
                let face = [curr + j, next + j, next + (j+1)%bot_grid[i].length, curr + (j+1)%bot_grid[i].length]
                // faces.push(face)
                if (i%2 == 0){
                    if(j != 6){
                        faces.push(face)
                    }
                } else if (i != 0) {
                    if (j != 4){
                        faces.push(face)
                    }
                }
            }
        }
        
        let offset = (bot_grid.length - 1) * bot_grid[0].length

        for (let i = 0; i < this.Segments; i++){

            let angle = 2 * Math.PI * i/(this.Segments - 1)
            let inner = this.Radius
            
            let pt01 = new Vec3(inner * Math.cos(angle), separations[i], inner * Math.sin(angle))
            let pt02 = new Vec3((inner + 1) * Math.cos(angle), separations[i], (inner + 1) * Math.sin(angle))

            let pt03 = new Vec3((inner + 1.25) * Math.cos(angle), separations[i], (inner + 1.25) * Math.sin(angle))
            let pt04 = new Vec3((inner + 2.25) * Math.cos(angle), separations[i], (inner + 2.25) * Math.sin(angle))

            let bottom = [pt01, pt02, pt03, pt04]
            let points : Array<Vec3> = []

            bottom.forEach(p => { points.push(p) })
            bottom.reverse()
            bottom.forEach(p => { points.push(p.add(new Vec3(0, 2, 0))) })
            
            top_grid.push(points)
            vertices.push(...points)

        }

        for (let i = 0; i < top_grid.length; i++){
            if (i > 0){
                let curr = top_grid[i].length*i + offset
                let next = top_grid[i].length*((i + 1)%top_grid.length) + offset
                if (i == top_grid.length - 1){
                    next = offset + top_grid[i].length
                }
                for (let j = 0; j < top_grid[i].length; j++){
                    let face = [curr + j, next + j, next + (j+1)%top_grid[i].length, curr + (j+1)%top_grid[i].length]
                    if (i%2 != 0){
                        if(j != 2){
                            faces.push(face)
                        }
                    } else {
                        if (j != 0){
                            faces.push(face)
                        }
                    }
                }
            }
        }

        for (let i = 0; i < bot_grid.length - 1; i++){

            let curr_bot = bot_grid[i].length*i
            let next_bot = bot_grid[i].length*(i+1)
            let curr_top = top_grid[i].length*i + offset + top_grid[i].length
            let next_top = top_grid[i].length*(i+1) + offset + top_grid[i].length
            if (i == bot_grid.length - 2){
                next_top = offset + top_grid[i].length
            }

            let section_factor = Math.pow((1 - (separations[i]/(ring_separation + section_amplitude)* .25)),3) * this.MidSectionFactor

            let bot_center = new Vec3(0, 0, 0)
            let top_center = new Vec3(0, 0, 0)

            let bot_indices = [curr_bot + 7, curr_bot + 6, next_bot + 6, next_bot + 7]
            let top_indices = [curr_top + 2, curr_top + 3, next_top + 3, next_top + 2]


            if (i%2 == 0){

                for(let j = 0; j < bot_indices.length; j++){
                    bot_center = bot_center.add(vertices[bot_indices[j]])
                    top_center = top_center.add(vertices[top_indices[j]])
                }

                bot_center = bot_center.scale(1/4)
                top_center = top_center.scale(1/4)

            } else {

                bot_indices = [curr_bot + 5, curr_bot + 4, next_bot + 4, next_bot + 5]
                top_indices = [curr_top, curr_top + 1, next_top + 1, next_top]

                for(let j = 0; j < bot_indices.length; j++){
                    bot_center = bot_center.add(vertices[bot_indices[j]])
                    top_center = top_center.add(vertices[top_indices[j]])
                }

                bot_center = bot_center.scale(1/4)
                top_center = top_center.scale(1/4)

            }


            let vec = top_center.subtract(bot_center).scale(1/2)

            let pts : Array<Vec3> = []
            bot_indices.forEach(index => {
                let rel_pos = vertices[index].subtract(bot_center).scale(section_factor)
                pts.push(bot_center.add(vec).add(rel_pos))
            })

            let mid_indices = [vertices.length, vertices.length + 1, vertices.length + 2, vertices.length + 3]
            vertices.push(...pts)

            for(let j = 0; j < bot_indices.length; j++){
                faces.push([bot_indices[j], mid_indices[j], mid_indices[(j+1)%bot_indices.length], bot_indices[(j+1)%bot_indices.length]])
                faces.push([mid_indices[j], top_indices[j], top_indices[(j+1)%bot_indices.length], mid_indices[(j+1)%bot_indices.length]])
            }
            
        }

        faces.push([7, this.Segments*8 - 1, this.Segments*8 - 2, 6])
        

        this.Geometry = new GeometryQuads(vertices, faces)

        return this.Geometry

    }

}