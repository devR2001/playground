<template>
    <div class="text-center">
        <h1 id="demo" class="header">JavaScript can change HTML content.</h1>
    </div>

    <div class="flex">
        <div class=" ms-5 mt-5 card w-96 bg-primary text-primary-content">
            <figure><img src="src\images\off.gif" class="mt-5" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title justify-center">What Can JavaScript Do?</h2>
                <div class="card-actions justify-center">
                    <button class="btn btn-success" type="button"
                        onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button>
                    <button class="btn btn-secondary" type="button"
                        onclick='document.getElementById("demo").innerHTML = "JavaScript can change HTML content."'>Zurücksetzen</button>
                </div>
            </div>
        </div>

        <div class=" ms-5 mt-5 card w-96 bg-primary text-primary-content">
            <figure> <img id="myImage" class="mt-5" src="src\images\light.gif" style="width:100px"></figure>
            <div class="card-body">
                <h2 class="card-title justify-center">What Can JavaScript Do?</h2>
                <div class="card-actions justify-center">
                    <button class="btn btn-warning"
                        onclick="document.getElementById('myImage').src='./src/images/off.gif'">Turn on the
                        light</button>
                    <button class="btn btn-error"
                        onclick="document.getElementById('myImage').src='./src/images/light.gif'">Turn off the
                        light</button>
                </div>
            </div>
        </div>

        <div class=" ms-5 mt-5 card w-96 bg-primary text-primary-content">
            <figure> <img id="myImage" class="mt-5" src="src\images\off.gif" style="width:100px"></figure>
            <div class="card-body">
                <h2 class="card-title justify-center">What Can JavaScript Do?</h2>
                <div class="card-actions justify-center">
                    <button type="button" class="btn btn-success"
                        onclick="document.getElementById('demo').style.fontSize='35px'">Bigger
                        Font (35px)</button>
                    <button type="button" class="btn btn-secondary"
                        onclick="document.getElementById('demo').style.fontSize='65px'">Huge
                        Font (65px)</button>
                </div>
            </div>
        </div>

        <div class=" ms-5 mt-5 card w-96 bg-primary text-primary-content">
            <figure> <img id="myImage" class="mt-5" src="src\images\off.gif" style="width:100px"></figure>
            <div class="card-body">
                <h2 class="card-title justify-center">What Can JavaScript Do?</h2>
                <div class="card-actions justify-center">
                    <button class="btn btn-accent" type="button"
                        onclick="document.getElementById('demo').style.display='none'">Hide Header</button>
                    <button class="btn btn-accent" type="button"
                        onclick="document.getElementById('demo').style.display='block'">
                        Show Header</button>
                </div>
            </div>
        </div>

        <div class=" ms-5 me-5 mt-5 card w-96 bg-primary text-primary-content">
            <figure> <img id="myImage" class="mt-5" src="src\images\off.gif" style="width:100px"></figure>
            <div class="card-body">
                <h2 class="card-title justify-center">What Can JavaScript Do?</h2>
                <div class="card-actions justify-center">
                    <button class="btn btn-accent" type="button"
                        onclick="document.getElementById('demo').style.display='none'">Hide Header</button>
                    <button class="btn btn-accent" type="button"
                        onclick="document.getElementById('demo').style.display='block'">
                        Show Header</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
function haas() {
    for (let i = 1; i <= 5; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += j + " ";
        }
        console.log(row);
    }
}

haas()
</script>

<style>
.header {
    font-weight: bold;
    font-size: 40px;
    margin-top: 15px;
}
</style>