import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";

export default function Projects(){
    const initSlider = ()=>{
        const slideButtons = document.querySelectorAll('.slider-wrapper .slider-btn')
        const slideScrollBar = document.querySelector('.container .slider-scrollbar')
        const scrollBarThumb = slideScrollBar.querySelector('.scrollbar-thumb')

        const imageList = document.querySelector('.slider-wrapper .image-list')
        const maxScroll = imageList.scrollWidth - imageList.clientWidth
        slideButtons.forEach(button =>{
            button.addEventListener('click',()=>{
                const direction = button.id === 'prev-slide' ? -1 : 1
                const scrollAmount = imageList.clientWidth * direction
                imageList.scrollBy({left: scrollAmount, behavior:'smooth'})
            })
        })
        const handleButtons = () =>{
            slideButtons[0].style.display = imageList.scrollLeft <= 0 ? 'none' : 'block'
            slideButtons[1].style.display = imageList.scrollLeft >= maxScroll ? 'none' : 'block'
        }
        const updatedScrollThumb = ()=>{
            const scrollPosition = imageList.scrollLeft
            const thumbPosition =(scrollPosition / maxScroll)  * (slideScrollBar.clientWidth - scrollBarThumb.offsetWidth)
            scrollBarThumb.style.left = `${thumbPosition}px` 
        }
        imageList.addEventListener('scroll', () => {
            handleButtons()
            updatedScrollThumb()
        })
    }
    window.addEventListener('load',initSlider)

    return (
        <section className="projects-section" id="projects">
            <h1 className="title">Our Latest <span className="orange"></span></h1>
            <div className="container">
                <div className="slider-wrapper">
                    <CiCircleChevLeft id="prev-slide" className="prev-btn slider-btn"/>
                    <div className="image-list">
                        <img src="../images/img-1.jpg" alt="img-1" className="image-item" />
                        <img src="../images/img-2.jpg" alt="img-2" className="image-item" />
                        <img src="../images/img-3.jpg" alt="img-3" className="image-item" />
                        <img src="../images/img-4.jpg" alt="img-4" className="image-item" />
                        <img src="../images/img-5.jpg" alt="img-5" className="image-item" />
                        <img src="../images/img-6.jpg" alt="img-6" className="image-item" />
                        <img src="../images/img-7.jpg" alt="img-7" className="image-item" />
                        <img src="../images/img-8.jpg" alt="img-8" className="image-item" />
                        <img src="../images/img-9.jpg" alt="img-9" className="image-item" />
                        <img src="../images/img-10.jpg" alt="img-10" className="image-item" />
                    </div>
                    <CiCircleChevRight id="next-slide" className="next-btn slider-btn "/>
                </div>
                <div className="slider-scrollbar">
                    <div className="scrollbar-track">
                        <div className="scrollbar-thumb"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}