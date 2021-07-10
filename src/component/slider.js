import React from 'react'

export default function Slider() {
    return (
        <div >
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" >
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://media.istockphoto.com/photos/hotel-room-suite-with-view-picture-id627892060?k=6&m=627892060&s=612x612&w=0&h=lVIi3QTDsZ1UDnMAjuy8ob9Zm6sBPCZ84x_e_OUl7Wk=" className="d-block w-100 " alt="..." height="450" />
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" className="d-block w-100 " alt="..." height="450"/>
    </div>
    <div className="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrwvWxvCJMqG65tM-83pV8ZZbhjFuf7m4gjnYWbeAwuTy5Xdj8pdtsZBxP4sIVJ90ITiinay7x9zc&usqp=CAU" className="d-block w-100 " alt="..." height="450" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}