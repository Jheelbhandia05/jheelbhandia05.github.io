tsParticles.load("tsparticles",{

    fullScreen:{
        enable:false
    },

    fpsLimit:60,

    background:{
        color:"transparent"
    },

    particles:{

        number:{
            value:130,
            density:{
                enable:true,
                area:900
            }
        },

        color:{
            value:[
                "#d8b4fe",
                "#c084fc",
                "#ffffff",
                "#8b5cf6"
            ]
        },

        links:{
            enable:true,
            distance:170,
            color:"#c084fc",
            opacity:.35,
            width:1
        },

        move:{
            enable:true,
            speed:1.2,
            direction:"none",
            outModes:{
                default:"bounce"
            }
        },

        opacity:{
            value:.8
        },

        size:{
            value:{
                min:2,
                max:4
            }
        }

    },

    interactivity:{

        events:{

            onHover:{
                enable:true,
                mode:"grab"
            },

            onClick:{
                enable:true,
                mode:"push"
            },

            resize:true

        },

        modes:{

            grab:{

                distance:220,

                links:{
                    opacity:.8
                }

            },

            push:{
                quantity:5
            }

        }

    },

    detectRetina:true

});