// generating snowflakes and stuff idk
function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
    snowflake.style.opacity = Math.random(35, 100);
    snowflake.style.width = `${Math.random() * 20 + 10}px`;
    snowflake.style.height = snowflake.style.width;
    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 6000); 
}

setInterval(createSnowflake, 50);
