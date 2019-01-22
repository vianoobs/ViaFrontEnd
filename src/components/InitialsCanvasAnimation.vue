<template>
    <div class="root">
        <canvas id="canvasM" class="canvas-letter"></canvas>
        <canvas id="canvasN" class="canvas-letter"></canvas>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";

    @Component({})
    export default class InitialsCanvasAnimation extends Vue {
        private mounted() {
            console.log("mounted");
            const size = 500;
            const canvasForM: HTMLCanvasElement = document.getElementById("canvasM") as HTMLCanvasElement;
            canvasForM.width = size;
            canvasForM.height = size;

            const canvasForN: HTMLCanvasElement = document.getElementById("canvasN") as HTMLCanvasElement;
            canvasForN.width = size;
            canvasForN.height = size;

            this.drawM(canvasForM);
            this.drawN(canvasForN);
        }

        private drawM(canvas: HTMLCanvasElement) {
            if (canvas)
                if (canvas.getContext) {
                    const ctx = canvas.getContext("2d");
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

                        const h_mid = H/2;
                        const h_M = H * 0.75;
                        const h_Mo = (W - h_M) / 2;
                        const h_max = h_M + h_Mo;
                        const h_t = h_Mo + (t * sqrt2 * gam);
                        const cent_bot = h_mid + ((t/2) * sqrt2);

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
                    const ctx = canvas.getContext("2d");
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

    }
</script>

<style>
    .root {
        position: relative;
        width: 500px;
        height: 500px;
    }
    #canvasN {
        position: absolute;
        top: 0;
        left: 0;
    }
    .canvas-letter {
        width: 100%;
        height: 100%;
    }
</style>
