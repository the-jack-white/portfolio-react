const particlesParams = {
    particles: {
        number: {
            value: 50
        },
        color: {
            value:"#fff"
        },
        shape: {
            type: "polygon",
            stroke: {
                width: 1,
                color: "#ccc"
            }
        },
        opacity: {
            value:0.5,
            random: true,
            anim: {
                enable: false,
                speed: 1
            }
        },
        size: {
            value: 2,
            random: false,
            anim: {
                enable: false,
                speed: 30
            }
        },
        line_linked: {
            enable: true,
            distance: 300,
            color: "#a70244",
            opacity: 0.4,
            width: 2
        },
        move: {
            enable: true,
            direction: "bottom",
            speed: 1
        }
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: true,
                mode: "push"
            }
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            }
        }
    }
}

export default particlesParams;