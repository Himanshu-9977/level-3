function homePageAnimation(){
    gsap.set('.mar-slides',{
        scale: 5
    })
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.home',
            start: 'top top',
            scrub: 1,
            end: 'bottom bottom',
        }
    })
    
    tl
    .to('.vdo',{
        '--clip': '0%',
        ease: Power2
    },'a')
    .to('.mar-slides',{
        scale: 1,
        ease: Power2
    },'a')
    .to('.lft',{
        xPercent: -30,
        stagger: .02,
        ease: Power4
    },'b')
    .to('.rgt',{
        xPercent: 30,
        stagger: .02,
        ease: Power4
    },'b')
    
    
}

function realAnimation(){
    gsap.to('.slide', {
        scrollTrigger: {
            trigger: '.real',
            start: 'top top',
            end: 'bottom bottom',
            scrub:1,
        },
        xPercent: -200,
        ease: Power4
    })
}

function teamAnimation(){
    document.querySelectorAll('.listelem')
    .forEach(function(el){
        el.addEventListener('mousemove', function(dets){
            const pic = this.querySelector('.picture')
            const bluelayer = this.querySelector('.bluelayer')
            gsap.to(pic, {
                opacity: 1,
                ease: Power4,
                duration: .5,
                x: gsap.utils.mapRange(0,window.innerWidth, -200, 200, dets.clientX)
            })
            gsap.to(bluelayer, {
                height: '100%',
                duration: .5,
                ease: Power4
            })
        })
        el.addEventListener('mouseleave', function(dets){
            const pic = this.querySelector('.picture')
            const bluelayer = this.querySelector('.bluelayer')
            gsap.to(pic, {
                opacity: 0,
                ease: Power4,
                duration: .5,
            })
            gsap.to(bluelayer, {
                height: '0%',
                duration: .5,
                ease: Power4
            })
        })
    })
}

function paraAnimation(){
    let clutter = ''
    const textPara = document.querySelector('.text-para h3')

    textPara.textContent.split('')
    .forEach(function(letter){
        if(letter === ' ') clutter+= `<span>&nbsp;</span>`
        clutter += `<span>${letter}</span>`
    })

    textPara.innerHTML = clutter

    gsap.set('.text-para span', {
        opacity: .1
    })

    gsap.to('.text-para span', {
        scrollTrigger: {
            trigger: '.para',
            start: 'top 40%',
            end: 'bottom 100%',
            scrub: .1,
        },
        opacity: 1,
        stagger: .03,
        ease:Power4
})

}

function loco(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

function capsulesAnimation(){
    gsap.to('.sec-cap', {
        scrollTrigger: {
            trigger: '.capsuless',
            start: 'top 70%',
            end: 'bottom bottom',
            scrub: 1,
        },
        yPercent: -30,
        ease: Power4
    })
}

function changeBackColor(){
    document.querySelectorAll('.section')
    .forEach(function(e){
        ScrollTrigger.create({
            trigger: e,
            start: 'top 50%',
            end: 'bottom 50%',
            onEnter: function(){
                document.body.setAttribute('theme',e.dataset.color)
            },
            onEnterBack: function(){
                document.body.setAttribute('theme',e.dataset.color)
            }
        })
    })

}

loco()
paraAnimation()
teamAnimation()
realAnimation()
homePageAnimation()
capsulesAnimation()
changeBackColor()