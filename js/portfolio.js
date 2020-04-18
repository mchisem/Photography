new fullpage ("#fullpage", {
    autoScrolling: true,
    navigation: true,
    onLeave: (origin, destination, directon) => {

        const tl = new TimelineMax({delay:05});

        if(destination.index === 1) {
            const image = document.querySelectorAll(".img");
    
            tl.fromTo(image, 0.5, {x: "0%"}, {x: "40%"});
        }
    }
   
})