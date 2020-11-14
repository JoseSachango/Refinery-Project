
var spacer = `<div class="container w-50 mb-5" > </div>`

var columnSection = 

            `<div class="container  w-50" >

                    <div class="row bg-success d-block mx-auto w-25 mt-0 border">
                    

                        
                        <div class="col-6 d-inline w-25">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 24l-8-9h6v-15h4v15h6z"/></svg>

                        </div>

                        <div class="col-6 d-inline float-right mr-0 w-25">
                            <svg class="float-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0l8 9h-6v15h-4v-15h-6z"/></svg>
                        </div>


                    </div>

            </div>`


var fullColumn = spacer+``

for(let i=0;i<20;i++){
    fullColumn = fullColumn+" "+columnSection
}

//columnSection = spacer+" "+columnSection +" "+columnSection


function appendColumnSection(){

}



$("body").html(fullColumn)