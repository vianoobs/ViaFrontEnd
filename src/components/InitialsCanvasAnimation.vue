<template>
    <div class="root">
        <canvas id="canvasM" class="canvas-letter"></canvas>
        <canvas id="canvasN" class="canvas-letter"></canvas>
        <canvas id="canvas" class="canvas-letter" width="500" height="500"></canvas>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import {fabric} from "fabric";
    import {IUtilAnimationOptions} from "fabric/fabric-impl";

    interface PolygonPoints {
        x: number;
        y: number;
    }
    @Component({})
    export default class InitialsCanvasAnimation extends Vue {
        h = 100;

        private animatePolygon(startPoints: PolygonPoints[], endPoints: PolygonPoints[]) {
            let canvas = new fabric.Canvas("canvas");

            let clonedStartPoints = startPoints.map(function (o) {
                return fabric.util.object.clone(o);
            });

            let polygon = new fabric.Polygon(clonedStartPoints, {
                left: 0,
                top: 0,
                fill: "purple",
                selectable: false,
                objectCaching: false,
            });
            canvas.add(polygon);

            function animatePoint(i, prop, endPoints) {
                let animateObj: IUtilAnimationOptions;
                if (polygon && polygon.points) {
                    animateObj = {
                        startValue: polygon.points[i][prop],
                        endValue: endPoints[i][prop],
                        duration: 1000,
                        onChange: function (value) {
                            polygon.points[i][prop] = value;
                            // only render once
                            if (i === startPoints.length - 1 && prop === "y") {
                                canvas.renderAll();
                            }
                        },
                        onComplete: function () {
                            polygon.setCoords();
                            // only start animation once
                            if (i === startPoints.length - 1 && prop === "y") {
                                even = !even;
                                animate();
                            }
                        }
                    } as IUtilAnimationOptions;
                    fabric.util.animate(animateObj);
                }
            }

            function animate() {
                for (let i = 0, len = startPoints.length; i < len; i++) {
                    animatePoint(i, "x", even ? endPoints : startPoints);
                    animatePoint(i, "y", even ? endPoints : startPoints);
                }
            }

            let even = true;
            setTimeout(animate, 1000);
        }

        private mounted() {
            let startPoints = [
                {x: 0, y: 42},
                {x: 155, y: 0},
                {x: 155, y: 243},
                {x: 0, y: 256}
            ];

            let endPoints = [
                {x: 185, y: 0},
                {x: 250, y: 100},
                {x: 385, y: 170},
                {x: 0, y: 245}
            ];
            this.animatePolygon(startPoints, endPoints);
            console.log("mounted");
            const size = this.h;
            const canvasForM: HTMLCanvasElement = document.getElementById("canvasM") as HTMLCanvasElement;
            canvasForM.width = size;
            canvasForM.height = size;

            const canvasForN: HTMLCanvasElement = document.getElementById("canvasN") as HTMLCanvasElement;
            canvasForN.width = size;
            canvasForN.height = size;

            const run = () => {
                for (this.h = 100; this.h <= 300; this.h += 1) {
                    this.drawM(canvasForM);
                    this.drawN(canvasForN);
                    console.log(this.h);
                }

                window.requestAnimationFrame(run);
            };


            //run();
        }

        private drawM(canvas: HTMLCanvasElement) {
            if (canvas)
                if (canvas.getContext) {
                    let ctx = canvas.getContext("2d");
                    ctx = this.contextStyling(ctx, canvas);
                    if (ctx) {
                        const W = canvas.width;
                        const H = canvas.height;

                        const t = W / 6;
                        const gam = 1;
                        const eps = 0.75;
                        const sqrt2 = 2 ** 0.5;

                        const w_mid = W / 2;
                        const w_M = W * 0.7;
                        const w_Mo = (W - w_M) / 2;
                        const w_max = w_M + w_Mo;
                        const w_nt = w_M + w_Mo - t;
                        const w_t = w_Mo + t;

                        const h_mid = H / 2;
                        const h_M = H * 0.75;
                        const h_Mo = (W - h_M) / 2;
                        const h_max = h_M + h_Mo;
                        const h_t = h_Mo + (t * sqrt2 * gam);
                        const cent_bot = h_mid + ((t / 2) * sqrt2);

                        ctx.beginPath();
                        ctx.moveTo(w_Mo, h_Mo); // A
                        ctx.lineTo(w_Mo, h_max); // B
                        ctx.lineTo(w_t, h_max); // C
                        ctx.lineTo(w_t, h_t); // D
                        ctx.lineTo(w_mid, cent_bot); // E
                        ctx.lineTo(w_nt, h_t); // F
                        ctx.lineTo(w_nt, h_max); // G
                        ctx.lineTo(w_max, h_max); // H
                        ctx.lineTo(w_max, h_Mo); // I
                        ctx.lineTo(w_nt, h_Mo); // J
                        ctx.lineTo(w_mid, cent_bot - (t * sqrt2)); // K
                        ctx.lineTo(w_t, h_Mo); // L
                        ctx.fill();
                    }
                }
        }

        private drawN(canvas: HTMLCanvasElement) {
            if (canvas)
                if (canvas.getContext) {
                    let ctx = canvas.getContext("2d");
                    ctx = this.contextStyling(ctx, canvas);
                    if (ctx) {
                        const W = canvas.width;
                        const H = canvas.height;

                        const t = W / 6;
                        const gam = 1;
                        const eps = 0.75;
                        const sqrt2 = 2 ** 0.5;

                        const w_mid = W / 2;
                        const w_M = W * 0.7;
                        const w_Mo = (W - w_M) / 2;
                        const w_max = w_M + w_Mo;
                        const w_nt = w_M + w_Mo - t;
                        const w_t = w_Mo + t;

                        const h_M = H * 0.75;
                        const h_Mo = (W - h_M) / 2;
                        const h_max = h_M + h_Mo;
                        const h_t = h_Mo + (t * sqrt2 * gam);
                        const h_t_max = h_max - (t * sqrt2 * gam);

                        ctx.beginPath();
                        ctx.moveTo(w_Mo, h_Mo); // A
                        ctx.lineTo(w_Mo, h_max); // B
                        ctx.lineTo(w_t, h_max); // C
                        ctx.lineTo(w_t, h_t); // D
                        ctx.lineTo(w_nt, h_max); // E
                        ctx.lineTo(w_max, h_max); // F
                        ctx.lineTo(w_max, h_Mo); // G
                        ctx.lineTo(w_nt, h_Mo); // H
                        ctx.lineTo(w_nt, h_t_max); // I
                        ctx.lineTo(w_t, h_Mo);  // J
                        ctx.fill();
                    }
                }
        }

        private contextStyling(ctx, canvas) {
            const gradient = ctx.createLinearGradient(100, 0, canvas.width - 100, 0);
            gradient.addColorStop(0, "#941b0b");
            gradient.addColorStop(1, "#5b0d0c");

            ctx.shadowOffsetY = 5;
            ctx.shadowBlur = 5;
            ctx.shadowColor = "rgba(0,0,0,0.5)";

            ctx.fillStyle = gradient;

            return ctx;
        }

    }
</script>

<style>
    .root {
        position: relative;
        width: 300px;
        height: 600px;
    }

    #canvasN {
        position: absolute;
        top: 300px;
        left: 0;
    }

    .canvas-letter {

    }
</style>
