import React, { useEffect, useRef } from 'react'
import c0 from './crowd/crowd0.png'
import c1 from './crowd/crowd1.png'
import c2 from './crowd/crowd2.png'
import c3 from './crowd/crowd3.png'
import c4 from './crowd/crowd4.png'
import c5 from './crowd/crowd5.png'
import c6 from './crowd/crowd6.png'
import c7 from './crowd/crowd7.png'
import c8 from './crowd/crowd8.png'
import c9 from './crowd/crowd9.png'
import c10 from './crowd/crowd10.png'
import c11 from './crowd/crowd11.png'

const crowd_imgs = [c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11]
const img_list:any[] = []
const img_num = crowd_imgs.length
const img_set = new Set()

const default_config = ({
    width: window.innerWidth,
    height: window.innerHeight,
    loop: true,
    pause: false,
    fixed: false,
    end: false,
    resize: false,
    opacity: 1,
    step: 2
})

let init = false;
const initImgList = () => {
    const canvas:HTMLCanvasElement | null = document.querySelector('#p5-loading-crowd');
    if(!canvas || init) {
        return;
    }
    init = true;
    const width = canvas.width;
    for (let i = 0; i < img_num * 2; i++) {
        const img = crowd_imgs[i % img_num]
        const temp_img = new Image()
        temp_img.src = img
        img_list.push({
            img: temp_img,
            step: Math.random() * 2 + 2,
            step_y: Math.random() * 0.2 + 0.2,
            x: width + i * 100,
            y: 20,
            flag_x: i < img_num ? true : false,
            flag_y: true,
            idx: i
        })
    }
}

const updateImgList = () => {
    const canvas:HTMLCanvasElement | null = document.querySelector('#p5-loading-crowd');
    if(!canvas) {
        return;
    }
    const width = canvas.width;

    img_set.clear()
    default_config.end = false
    img_list.forEach((item, idx) => {
        item.step = Math.random() * default_config.step + default_config.step
        item.step_y = Math.random() * 0.2 + 0.2
        item.x = width + idx * 100
    })
}

const render = () => {
    const canvas:HTMLCanvasElement | null = document.querySelector('#p5-loading-crowd');
    if(!canvas) {
        return;
    }
    const ctx = canvas.getContext("2d");
    if(!ctx) {
        return;
    }
    const width = (canvas).width;
    const height = (canvas).height;

    ctx.clearRect(0, 0, width, height)
    ctx.beginPath()
    ctx.fillStyle = 'rgb(0, 0, 0)'
    ctx.fillRect(0, 0, width, height)
    img_list.forEach((item) => {
        if (item.img.complete) {
            if (item.x >= -item.img.width) {
                item.x -= item.step
                if (item.flag_y) {
                    if (item.y - item.step_y >= 0)
                        item.y -= item.step_y
                    else
                        item.flag_y = false
                }
                else {
                    if (item.y + item.step_y <= 20)
                        item.y += item.step_y
                    else
                        item.flag_y = true
                }
                ctx.save()
                if (item.flag_x) {
                    ctx.scale(-1, 1)
                    ctx.translate(-width, 0)
                }
                ctx.drawImage(item.img, 0, 0, item.img.width, item.img.height,
                    item.x, item.y, height / 2, height)
                ctx.restore()
            }
            else {
                img_set.add(item.idx)
                if (img_set.size === img_num * 2) {
                    if (default_config.loop)
                        updateImgList()
                    else {
                        default_config.end = true
                    }
                }
                else if (img_set.size === img_num * 2 - 2 && !default_config.loop) {
                    default_config.opacity = 0
                }
            }
        }
    })
    ctx.save()
    ctx.shadowBlur = 100;
    ctx.fillStyle = "rgb(0,0,0,0.2)"
    ctx.shadowColor = "#8360c3"
    ctx.fillRect(0, 0, width, height)
    ctx.restore()
}

let animation_idx: any = null

const update = () => {
    render()
    animation_idx = requestAnimationFrame(update)
}

export default function Loading({
    width,
    height,
    className = ''
}: {
    width: number,
    height: number,
    className?: string
}) {
    const canvasRef = useRef(null);
    useEffect(() => {
        initImgList()
        update()
        return () => {
            if(animation_idx) {
                cancelAnimationFrame(animation_idx)
            }
        }
    }, [])
    
  return (
    <canvas ref={canvasRef} id="p5-loading-crowd" width={width} height={height} className={className}>index</canvas>
  )
}
