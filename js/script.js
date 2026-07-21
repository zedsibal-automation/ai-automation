
/* =========================================================
   AI AUTOMATION WEBSITE
   COMPLETE JAVASCRIPT
========================================================= */


/* =========================================================
   1. WAIT FOR PAGE TO LOAD
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       2. NAVBAR SCROLL EFFECT
    ====================================================== */

    const navbar = document.querySelector(".navbar");


    function updateNavbar() {

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }


    window.addEventListener(
        "scroll",
        updateNavbar
    );


    updateNavbar();


    /* =====================================================
       3. SMOOTH NAVIGATION
    ====================================================== */

    const navLinks =
        document.querySelectorAll(
            '.nav-link, .navbar-brand'
        );


    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");


                if (
                    targetId &&
                    targetId.startsWith("#")
                ) {

                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (target) {

                        event.preventDefault();


                        const navbarHeight =
                            navbar.offsetHeight;


                        const targetPosition =
                            target.offsetTop -
                            navbarHeight;


                        window.scrollTo({

                            top:
                                targetPosition,

                            behavior:
                                "smooth"

                        });


                        /* Close mobile menu */

                        const navbarCollapse =
                            document.querySelector(
                                ".navbar-collapse"
                            );


                        if (
                            navbarCollapse.classList.contains(
                                "show"
                            )
                        ) {

                            const bsCollapse =
                                bootstrap.Collapse
                                .getInstance(
                                    navbarCollapse
                                );


                            if (bsCollapse) {

                                bsCollapse.hide();

                            }

                        }

                    }

                }

            }
        );

    });


    /* =====================================================
       4. AI VISUAL MOUSE PARALLAX
    ====================================================== */

    const aiVisual =
        document.querySelector(
            "#aiVisual"
        );


    const platformCards =
        document.querySelectorAll(
            ".platform-card"
        );


    const aiCore =
        document.querySelector(
            ".ai-core-wrapper"
        );


    const aiLabels =
        document.querySelectorAll(
            ".ai-label"
        );


    if (aiVisual) {


        aiVisual.addEventListener(
            "mousemove",
            function (event) {


                const rect =
                    aiVisual.getBoundingClientRect();


                const mouseX =
                    event.clientX -
                    rect.left;


                const mouseY =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const moveX =
                    (mouseX - centerX) /
                    centerX;


                const moveY =
                    (mouseY - centerY) /
                    centerY;


                /* Move platform cards */

                platformCards.forEach(
                    function (card) {


                        const speed =
                            parseFloat(
                                card.dataset.speed
                            ) || 1;


                        const x =
                            moveX *
                            12 *
                            speed;


                        const y =
                            moveY *
                            12 *
                            speed;


                        card.style.transform =
                            `translate(${x}px, ${y}px)`;


                    }
                );


                /* Move AI core */

                if (aiCore) {

                    const coreX =
                        moveX * 8;


                    const coreY =
                        moveY * 8;


                    aiCore.style.transform =
                        `translate(calc(-50% + ${coreX}px), calc(-50% + ${coreY}px))`;

                }


                /* Move labels */

                aiLabels.forEach(
                    function (label, index) {


                        const direction =
                            index % 2 === 0
                            ? 1
                            : -1;


                        const labelX =
                            moveX *
                            8 *
                            direction;


                        const labelY =
                            moveY *
                            8 *
                            direction;


                        label.style.marginLeft =
                            `${labelX}px`;


                        label.style.marginTop =
                            `${labelY}px`;


                    }
                );


            }
        );


        /* =================================================
           RESET PARALLAX WHEN MOUSE LEAVES
        ================================================== */

        aiVisual.addEventListener(
            "mouseleave",
            function () {


                platformCards.forEach(
                    function (card) {

                        card.style.transform =
                            "";

                    }
                );


                if (aiCore) {

                    aiCore.style.transform =
                        "translate(-50%, -50%)";

                }


                aiLabels.forEach(
                    function (label) {

                        label.style.marginLeft =
                            "";

                        label.style.marginTop =
                            "";

                    }
                );


            }
        );

    }


    /* =====================================================
       5. PLATFORM CARD HOVER EFFECT
    ====================================================== */

    platformCards.forEach(
        function (card) {


            card.addEventListener(
                "mouseenter",
                function () {

                    this.style.zIndex =
                        "50";

                }
            );


            card.addEventListener(
                "mouseleave",
                function () {

                    this.style.zIndex =
                        "15";

                }
            );


        }
    );


    /* =====================================================
       6. ANIMATED CONNECTION LINES
    ====================================================== */

    const connectionLines =
        document.querySelectorAll(
            ".ai-connections line"
        );


    connectionLines.forEach(
        function (line, index) {


            /* Random animation speed */

            const duration =
                4 +
                (index % 4);


            line.style.animationDuration =
                `${duration}s`;


            /* Different animation delays */

            line.style.animationDelay =
                `${index * 0.3}s`;


        }
    );


    /* =====================================================
       7. SCROLL REVEAL ANIMATION
    ====================================================== */

    const revealElements =
        document.querySelectorAll(
            ".hero-content, .section-title"
        );


    const revealObserver =
        new IntersectionObserver(
            function (entries) {


                entries.forEach(
                    function (entry) {


                        if (
                            entry.isIntersecting
                        ) {


                            entry.target.classList.add(
                                "revealed"
                            );


                            revealObserver.unobserve(
                                entry.target
                            );


                        }


                    }
                );


            },
            {

                threshold:
                    0.15

            }
        );


    revealElements.forEach(
        function (element) {

            revealObserver.observe(
                element
            );

        }
    );


    /* =====================================================
       8. HERO PLATFORM ENTRANCE ANIMATION
    ====================================================== */

    platformCards.forEach(
        function (card, index) {


            card.style.opacity =
                "0";


            card.style.transform =
                "scale(0.7)";


            setTimeout(
                function () {


                    card.style.transition =
                        "opacity 0.7s ease, transform 0.7s ease";


                    card.style.opacity =
                        "1";


                    card.style.transform =
                        "";


                },
                400 +
                (index * 120)
            );


        }
    );


    /* =====================================================
       9. AI CORE ENTRANCE ANIMATION
    ====================================================== */

    if (aiCore) {


        aiCore.style.opacity =
            "0";


        aiCore.style.transform =
            "translate(-50%, -50%) scale(0.5)";


        setTimeout(
            function () {


                aiCore.style.transition =
                    "opacity 1s ease, transform 1s cubic-bezier(.17,.67,.3,1.3)";


                aiCore.style.opacity =
                    "1";


                aiCore.style.transform =
                    "translate(-50%, -50%) scale(1)";


            },
            500
        );

    }


    /* =====================================================
       10. COUNTER ANIMATION
    ====================================================== */

    const statNumbers =
        document.querySelectorAll(
            ".hero-stat h3"
        );


    function animateCounter(
        element
    ) {


        const text =
            element.textContent.trim();


        const number =
            parseInt(
                text.replace(
                    /\D/g,
                    ""
                )
            );


        if (
            isNaN(number)
        ) {

            return;

        }


        const suffix =
            text.replace(
                /[0-9]/g,
                ""
            );


        let current =
            0;


        const duration =
            1500;


        const startTime =
            performance.now();


        function updateCounter(
            currentTime
        ) {


            const elapsed =
                currentTime -
                startTime;


            const progress =
                Math.min(
                    elapsed /
                    duration,
                    1
                );


            /* Smooth easing */

            const eased =
                1 -
                Math.pow(
                    1 - progress,
                    3
                );


            current =
                Math.floor(
                    number *
                    eased
                );


            element.textContent =
                current +
                suffix;


            if (
                progress <
                1
            ) {


                requestAnimationFrame(
                    updateCounter
                );


            } else {


                element.textContent =
                    number +
                    suffix;


            }

        }


        requestAnimationFrame(
            updateCounter
        );

    }


    /* Counter observer */

    const statsSection =
        document.querySelector(
            ".hero-stats"
        );


    let countersStarted =
        false;


    if (statsSection) {


        const statsObserver =
            new IntersectionObserver(
                function (entries) {


                    if (
                        entries[0].isIntersecting &&
                        !countersStarted
                    ) {


                        countersStarted =
                            true;


                        statNumbers.forEach(
                            function (number) {


                                animateCounter(
                                    number
                                );


                            }
                        );


                        statsObserver.disconnect();

                    }


                },
                {

                    threshold:
                        0.5

                }
            );


        statsObserver.observe(
            statsSection
        );

    }


    /* =====================================================
       11. FLOATING PARTICLES
    ====================================================== */

    const particles =
        document.querySelectorAll(
            ".ai-particles span"
        );


    particles.forEach(
        function (particle, index) {


            const randomDelay =
                Math.random() *
                5;


            const randomDuration =
                5 +
                Math.random() *
                5;


            particle.style.animationDelay =
                `${randomDelay}s`;


            particle.style.animationDuration =
                `${randomDuration}s`;


        }
    );


    /* =====================================================
       12. TILT EFFECT ON AI VISUAL
    ====================================================== */

    if (aiVisual) {


        aiVisual.addEventListener(
            "mousemove",
            function (event) {


                const rect =
                    aiVisual.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const rotateY =
                    ((x / rect.width) -
                    0.5) *
                    4;


                const rotateX =
                    ((y / rect.height) -
                    0.5) *
                    -4;


                aiVisual.style.transform =
                    `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;


            }
        );


        aiVisual.addEventListener(
            "mouseleave",
            function () {


                aiVisual.style.transform =
                    "";


            }
        );

    }


    /* =====================================================
       13. BUTTON RIPPLE EFFECT
    ====================================================== */

    const buttons =
        document.querySelectorAll(
            ".btn-main, .btn-outline-custom"
        );


    buttons.forEach(
        function (button) {


            button.addEventListener(
                "click",
                function () {


                    this.classList.add(
                        "button-clicked"
                    );


                    setTimeout(
                        () => {

                            this.classList.remove(
                                "button-clicked"
                            );

                        },
                        300
                    );


                }
            );


        }
    );


    /* =====================================================
       14. ACTIVE NAVIGATION
    ====================================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    const navigationLinks =
        document.querySelectorAll(
            ".nav-link"
        );


    window.addEventListener(
        "scroll",
        function () {


            let currentSection =
                "";


            sections.forEach(
                function (section) {


                    const sectionTop =
                        section.offsetTop -
                        navbar.offsetHeight -
                        100;


                    const sectionHeight =
                        section.offsetHeight;


                    if (
                        window.scrollY >=
                        sectionTop
                    ) {


                        currentSection =
                            section.getAttribute(
                                "id"
                            );


                    }


                }
            );


            navigationLinks.forEach(
                function (link) {


                    link.classList.remove(
                        "active"
                    );


                    if (
                        link.getAttribute(
                            "href"
                        ) ===
                        "#" +
                        currentSection
                    ) {


                        link.classList.add(
                            "active"
                        );


                    }


                }
            );


        }
    );


    /* =====================================================
       15. CONSOLE MESSAGE
    ====================================================== */

    console.log(
        "%c AI Automation Website Loaded ",
        "background: #00bfff; color: #ffffff; padding: 8px 15px; border-radius: 5px; font-weight: bold;"
    );


});
