(function () {
    
    "use strict";
    
    //-------------VARIABLES---------------
    
    var masthead = document.querySelector(".mh-image");
    
    var slides = [
        '<figure>' +
            '<img src="./img/1.jpg" alt="solarpanel">' +
            '<figcaption>SOLAR POWER</figcaption>' +
            '</figure>',

        '<figure>' +
            '<img src="./img/2.jpg" alt="hybridcar">' +
            '<figcaption>HYBRID CARS</figcaption>' +
            '</figure>',

        '<figure>' +
            '<img src="./img/3.jpg" alt="moneysaving">' +
            '<figcaption>MONEY SAVING TIPS</figcaption>' +
            '</figure>',

        '<figure>' +
            '<img src="./img/4.jpg" alt="homeimprovement">' +
            '<figcaption>IMPROVING HOMES</figcaption>' +
            '</figure>'
    ];
    
    var buttons = document.querySelectorAll("main span");
    
    var contents = [
        '<figure class="clearfix">' +
            '<img src="./img/5.jpg" alt="">' +
            '<figcaption>Depending on construction, photovoltaic modules can produce electricity from a range of frequencies of light, but usually cannot cover the entire solar range (specifically, ultraviolet, infrared and low or diffused light). Hence, much of the incident sunlight energy is wasted by solar modules, and they can give far higher efficiencies if illuminated with monochromatic light.</figcaption>' +
            '</figure>',

        '<figure class="clearfix">' +
            '<img src="./img/6.jpg" alt="">' +
            '<figcaption>A hybrid vehicle uses two or more distinct types of power, such as internal combustion engine plus electric motor, e.g. in diesel-electric trains using diesel engines and electricity from overhead lines, and submarines that use diesels when surfaced and batteries when submerged. Other means to store energy include pressurized fluid in hydraulic hybrids.</figcaption>' +
            '</figure>',

        '<figure class="clearfix">' +
            '<img src="./img/7.jpg" alt="">' +
            '<figcaption>Sustainable energy is energy that is consumed at insignificant rates compared to its supply and with manageable collateral effects, especially environmental effects. Another common definition of sustainable energy is an energy system that serves the needs of the present without compromising the ability of future generations to meet their needs.</figcaption>' +
            '</figure>'
    ];
    
    var container = document.querySelector(".container");
    container.innerHTML = contents[0];
    
    var i, k;
    
    //-------------END OF VARIABLES---------------
    
    function fadeOut() {
        masthead.style.opacity = 0;
    }

    i = 0;

    function runSlides() {
        masthead.style.opacity = 1;

        if (i > 3) {
            i = 0;

        }

        masthead.innerHTML = slides[i];

        i++;

        window.setTimeout(fadeOut, 5000);

    }

    runSlides();

    window.setInterval(runSlides, 6000);
    
    
    function handleClick(ev) {
        ev.preventDefault();
        var target = ev.target;

        for (k = 0; k < buttons.length; k++) {
            if (buttons[k].hasAttribute("id")) {
                buttons[k].removeAttribute("id");
            }
        }

        if (ev.target.innerHTML === " ") {
            container.innerHTML = contents[0];
        } else if (ev.target.innerHTML === "  ") {
            container.innerHTML = contents[1];
        } else {
            container.innerHTML = contents[2];
        }

        ev.target.setAttribute("id", "active");
    }

    for (k = 0; k < buttons.length; k++) {
        buttons[k].addEventListener("click", handleClick);
    }
    
    
    
    
    
    
    
    
    
    
}());