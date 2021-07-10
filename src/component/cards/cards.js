import react from 'react';





const Card=() =>{
    return(
        <div>
             <div className='container' >
                <div className='row'>
                    <div className='col-md-4'>

                        <div class="card mt-5" style={{ width: 250, height: 350 }}>
                            <img className='h-card' src="https://cache.marriott.com/marriottassets/marriott/KHIPK/khipk-guestroom-0051-hor-clsc.jpg?interpolation=progressive-bilinear&downsize=*:256px" className="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Hotel 1</h5>
                                <p class="card-text">Luxury Room</p>
                                <a href="#" class="btn btn-primary">Go Somewhere</a>
              
                            </div>
                        </div>

                    </div>

                    <div className='col-md-4'>

                        <div class="card mt-5" style={{ width: 250, height: 350 }}>
                            <img className='h-card' src="https://media.timbu.com/img/h1408187/400/280/b1/hotel-%22%22sport-time%22%22-1408187-1.jpg" className="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Hotel 2</h5>
                                <p class="card-text">Deluxe Hotel</p>
                                <a href="#" class="btn btn-primary">Go Somewhere</a>
                            </div>
                        </div>

                    </div>

                    <div className='col-md-4'>

                        <div class="card mt-5" style={{ width: 250, height: 350 }}>
                            <img className='h-card' src="https://cache.marriott.com/marriottassets/marriott/KHIPK/khipk-car-1779-hor-clsc.jpg?interpolation=progressive-bilinear&downsize=*:256px" className="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Hotel 3</h5>
                                <p class="card-text">Royal Room</p>
                                <a href="#" class="btn btn-primary">Go Somewhere</a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


           </div>
       
       
    
    );
  


    
    
}

export default Card;