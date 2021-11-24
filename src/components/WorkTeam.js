import styles from "./WorkTeam.module.css"

function WorkTeam() {
    return ( 
        <div className={styles.work} >
          <div >
            <h2>Work Team</h2>
          </div>
            <div container height="300px">
  <div class="row row-cols-2 ">
    <div class="col ">
    <div class="card mb-3   max-width:50px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
       class="img-fluid rounded-start" alt="..." height="100%"/>
    </div>
    <div class="col-md-4 pt-0">
      <div class="card-body " style={{padding:"0px"}}>
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      
      </div>
    </div>
  </div>
</div>
    </div>
    <div class="col">
    <div class="card mb-3 h-30 max-width: 50px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="img-fluid rounded-start" alt="..." height="100vh"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text"></p>
      
      </div>
    </div>
  </div>
</div>
    </div>
    <div class="col">
    <div class="card mb-3 max-width: 50px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8 pt-0" >
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">.</p>
      
      </div>
    </div>
  </div>
</div>
    </div>
    <div class="col">
    <div class="card mb-3 max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
</div>
        </div>
     );
}

export default WorkTeam;
