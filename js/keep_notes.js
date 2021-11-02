window.addEventListener('DOMContentLoaded', function(){ 
    // config ={
    //     enableTime: true,
    //     dateFormat: "Y-m-d H:i",
    // }
    // $(".form-control").on(config);

    // $(document).ready(function(){
    //     $('input.timepicker').timepicker({});
    // });
    const urlSearchParams = new URLSearchParams(window.location.search);
   const takenote1 = document.getElementById("i1")
   const  takenote2 = document.getElementById("i2")
   const closebutton = document.getElementById("button")

   const title = document.getElementById("title2");
   const note = document.getElementById("title-notes")
   const archive = document.getElementById("archive")
   const Thrash = document.getElementById("Thrash1")
   const Reminder = document.getElementById("rr1")
   const reminder_1 = document.querySelector("#reminder_1")

   const NotesContainer = document.getElementById("flex-container")
   const Note = document.getElementsByClassName("note")
   const icon = document.getElementById("ico")

   const AddColors = document.getElementById("color-popup")
   const popup = document.getElementById("myPopup")
   const colors = [ "#fff","#f28b82", "#fbbc04", "#fff475", "#ccff90", "#a7ffeb", "#cbf0f8", "#aecbfa", "#d7aefb", "#fdcfe8", "#e6c9a8", "#e8eaed"]

   const Thrash2 = document.getElementById("thrash2")
   const ARCHIVE = document.getElementById("arch1")
   const bulb = document.getElementById("bulb")
//    const Bulb = document.querySelector('#bulb') 

   const colabrator = document.getElementById("collab")    
   const cancel = document.getElementById("button4")
   const save = document.getElementById("button5")
   const emails = document.getElementById("o1")
   const colabrator_enter = document.getElementById("title3")
   const colabrator_email = document.getElementById("boxx")
   const collabratorArray = [];
   const addname = document.querySelector("#cc7")
   const collabaddOWner = document.getElementById("otherowners")
   const collabowneremails = document.getElementById("o2")

   const title112 = document.querySelector("#title33")
   const desc1 = document.querySelector("#ii3")
   const closeModal = document.querySelector(".b2")
   let notess = [];

   const saveReminder = document.getElementById("button6");
   const cancelReminder = document.getElementById("button9");
   const  datepicker = document.querySelector("#date1");
   const  timepicker = document.querySelector("#time1");

//    const title009 = 'Empty Note';
//            let qw= `${title009 ? `<h2>${title009}</h2>` : '<h2>nothing 1</h2>'}`
//            let abq = qw
//            document.querySelector('.two12').innerHTML = abq;


   
   function ajaxGet(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === xhr.DONE && xhr.status === 200) {
                // console.log(xhr.response, xhr.responseXML);
                resolve(xhr.response)
            }
        };
        xhr.open('GET', url, true);
        xhr.setRequestHeader("Authorization", localStorage.getItem("token"));
        xhr.setRequestHeader("Content-type", "application/json");

        xhr.onerror = reject;

        xhr.send();

    });
}
           

ajaxGet(`http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList`)
    .then(function (result) {
        console.log("hello")
        let Result = JSON.parse(result);
        let Response = Result.data.data;
//            console.log(Response);
        
        let arr = Response.filter( data => data.isArchived == false && data.isDeleted == false)
           notess = arr
           console.log(notess);
           console.log(arr);
           NotesContainer.innerHTML = arr.map((note)=>
           `<div class = "note" id=${note.id} style="background-color: ${note.color}";>
        
           <div class="pop" id=${note.id}>
            </div>

           <div class="one" id=${note.id}>

           

           <div class="two" id=${note.id}>
           <div class="two12">${note.title}</div>
           </div>
       
          <div class="three" id=${note.id}>
          <div>${note.description}</div>
          </div>
    

          <div class="ownerListing">${note.collaborators.map(user => `
          <i class="large material-icons">account_circle</i>`)}
          </div>
          
          <div class="ownerList">${note.reminder.map(user => `
          ${note.reminder}`)}
          </div>
          


          <div class="four" id="ico">
              <div id="icon1"><i class="material-icons" id="id0">notifications</i></div>
              <div id="icon1"><i class="material-icons" id="id1">group_add</i></div>
              
              <div class="icon4" id=${note.id}><i class="material-icons" id="id2">color_lens</i></div>
              <div id="icon1"><i class="material-icons" id="id3">image</i></div>
              <div class="icon2" id=${note.id}><i class="material-icons" id="id4">archive</i></div>
              <div class="icon3" id=${note.id}><i class="material-icons" id="id5">delete</i></div>
              <div id="icon1"><i class="material-icons" id="id6">more_vert</i></div>
          </div>
           </div>
       
           
            
       
           </div>`


        
        ).join('');


    })
    .catch(function(error) {
        console.log(error)
      // An error occurred
    });

    // Code depending on result
  

//    requirejs(['../data/Dataservice.js'], (methods)=>{
//        methods.getNotes().then(function(getResponse){
//            let Response = getResponse.data.data.data;
//            console.log(Response);
//            let arr = Response.filter( data => data.isArchived == false && data.isDeleted == false)
//            notess = arr
//            console.log(notess);
//            console.log(arr);
//            NotesContainer.innerHTML = arr.map((note)=>
//            `<div class = "note" id=${note.id} style="background-color: ${note.color}";>
        
//            <div class="pop" id=${note.id}>
//             </div>

//            <div class="one" id=${note.id}>
//            <div class="two" id=${note.id}>
//            <div>${note.title}</div>
//            </div>
       
//           <div class="three" id=${note.id}>
//           <div>${note.description}</div>
//           </div>
    

//           <div class="ownerListing">${note.collaborators.map(user => `
//           <i class="large material-icons">account_circle</i>`)}
//           </div>
          
//           <div class="ownerList">${note.reminder.map(user => `<div class ="cc0">
//           ${note.reminder}</div>`)
//           }
//           </div>
          


//           <div class="four" id="ico">
//               <div id="icon1"><i class="material-icons" id="id0">notifications</i></div>
//               <div id="icon1"><i class="material-icons" id="id1">group_add</i></div>
              
//               <div class="icon4" id=${note.id}><i class="material-icons" id="id2">color_lens</i></div>
//               <div id="icon1"><i class="material-icons" id="id3">image</i></div>
//               <div class="icon2" id=${note.id}><i class="material-icons" id="id4">archive</i></div>
//               <div class="icon3" id=${note.id}><i class="material-icons" id="id5">delete</i></div>
//               <div id="icon1"><i class="material-icons" id="id6">more_vert</i></div>
//           </div>
//            </div>
       
           
            
       
//            </div>`
//            ).join('');
//        })
//    })

//    AddColors.addEventListener('click', function(){
//        popup.classList.toggle("show");
//        document.querySelector(".show").innerHTML = colors.map(function(color){
//            return `<div id= ${color} style="background-color: ${color}; width:30px; height:30px;"></div>`
//        }).join('');
//    })
   
// var modal_1 = document.getElementById("modal-container1");

// let k=document.querySelector('.hello')

// k.innerHTML =  arr.map((note)=>`<div><div class="sd" id=${note.title}>${note.title}</div>
// <div class="sd" id=${note.description}>${note.description}</div>
// </div>`).join('')

// $(document).on('click','.sd', function(event){
//   const title = document.querySelector('#title3')
//   const desc = document.querySelector('#ii3')
//   console.log(event.currentTarget.id)
//   let obj = arr.find(note =>note.title==event.currentTarget.id)
//   console.log(obj)
//   modal_1.style.display="block";
//   title.value=obj.title
//   desc.value=obj.description
// })



$(document).on('click','.test',function(event){
//    console.log('test', event.target.id)
  Color=event.target.id
  document.getElementById('i2').style.backgroundColor=Color;
})

AddColors.addEventListener('click', function(){
    popup.classList.toggle("show");
    // console.log(document.querySelector(".show"))
    if(document.querySelector(".show")!=null){
        // console.log(document.querySelector(".show"))
        document.querySelector(".show").innerHTML = colors.map(function(color){
            return `<div class="test"  id=${color} style="background-color: ${color}; width:30px;border:1px solid black; height:25px; border-radius: 50%;
            margin: 2px 2px 2px 2px;"></div>`    
        }).join('');
    } 
})

// $(document).on('click','.test1',function(event){
//     //console.log('test', event.target.id)
//    Color=event.target.id
//    document.getElementById('i2').style.backgroundColor=Color;
//  })
 
//  addColors.addEventListener('click', function(){
//      popup1.classList.toggle("show1");
//      // console.log(document.querySelector(".show"))
//          document.querySelector(".show1").innerHTML = colors.map(function(color){
//              return `<div class="test1"  id=${color} style="background-color: ${color}; width:30px; height:25px; boder-radius:50%; margin: 1px 1px 1px 1px;"></div>`    
//          }).join('');
     
//  })
// Note.addEventListener('mouseover', function(){
//     icon.style.display="block";
// })
    
$(document).on('click', '.icon2' , function(e){
    console.log("hello"+e.currentTarget.id)
    isArchive=!isArchive;
    console.log(isArchive)

    let noteData = 
    { "noteIdList": [e.currentTarget.id], 
        "isArchived": isArchive

    }
    console.log(noteData)

           
    requirejs(['../data/Dataservice.js'], (methods)=>{
            
        console.log(methods)
         methods.archiveNotes(noteData).then(function(Response){
            console.log(location.reload());
           console.log(Response)
         //   localStorage.setItem('token', response.data.id)
         })

         methods.archiveNotes(noteData).then(function(Response){
             console.log(Response.data.data.data);
         }) 

         

     });

})

$(document).on('click', '.icon3' , function(e){
    console.log("hello"+e.currentTarget.id)
    isDeleted=!isDeleted;
    console.log('hiiii')
    console.log(isDeleted)
    let noteData1 = 
    { "noteIdList": [e.currentTarget.id],
         "isDeleted": isDeleted, 
    };

    console.log(noteData1)
        let deleteData = JSON.stringify(noteData1);

        function aPost(url) {
            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
                        console.log(xhr.response, xhr.responseXML);
                        resolve(xhr.response)
                    }
                };
                xhr.open('POST', url, true);
                xhr.setRequestHeader("Authorization", localStorage.getItem("token"));
                xhr.setRequestHeader("Content-type", "application/json");

                xhr.onerror = reject;

                xhr.send(deleteData)

            });
        }

        function aGet(url) {
            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
                        // console.log(xhr.response, xhr.responseXML);
                        resolve(xhr.response)
                    }
                };
                xhr.open('GET', url, true);
                xhr.setRequestHeader("Authorization", localStorage.getItem("token"));
                xhr.setRequestHeader("Content-type", "application/json");

                xhr.onerror = reject;

                xhr.send()

            });
        }
        aPost(`http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes`)
            .then(function(result) {
                console.log("hii")
              console.log(result); 
              
              aGet(`http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList`)
              .then(function(result) {
                // console.log(result + "hello");
                
                let abc =JSON.parse(result) // Code depending on result
                let Res3 = abc.data.data;
                console.log(Res3)

                let arr11 = Res3.filter( data => data.isArchived == false && data.isDeleted == true)
                console.log(arr11);
                NotesContainer.innerHTML = arr11.map((note)=>
                  `<div class = "note" id="s1" style="background-color: ${note.color}";>
     
                  <div class="one">
                  <div class="two">
                  <div>${note.title}</div>
                  </div>
     
                 <div class="three">
                 <div>${note.description}</div>
                 </div>

                
     
                 <div class="four" id="ico">
                 <div class="icon2" id=${note.id}><i class="material-icons" id="id4">archive</i></div>
                 <div class="icon3" id=${note.id}><i class="material-icons" id="id5">delete</i></div>
                 </div>
                  </div>
     
                   <div class="modal-container">
                      <div class="modal">
                         <p class="z1">pin your important notes to the top</p>
                         <div class="take-note2" id="ii2">
                             <input type="text" name="title" class="sub-note2" id="title3"  placeholder="Title"> 
                              <p><textarea class="content" id="ii3" placeholder="Note"></textarea></p>
                             <div class="class2">
                             
                                 <div><i class="material-icons" >notifications</i></div>
                                 <div><i class="material-icons" >group_add</i></div>
                                 <div><i class="material-icons" >color_lens</i></div>
                                 <div><i class="material-icons" >image</i></div>
                                 <div><i class="material-icons" id="archive">archive</i></div>
                                 <div><i class="material-icons">delete</i></div>
                                 <div><i class="material-icons" >more_vert</i></div>
                             
                                 <button class="b2" id="button">Close</button> 
                             </div>
                         </div>
                      </div>  
                  </div>
     
                  </div> `
                
                ).join('');
                
              })
              .catch(function(error) {
                  console.log(error)
                // An error occurred
              });
            })
    // requirejs(['../data/Dataservice.js'], (methods)=>{
            
    //     console.log(methods)
    //      methods.trashNotes(noteData1).then(function(Response1){
    //         console.log(location.reload());
    //        console.log(Response1)
    //      //   localStorage.setItem('token', response.data.id)
    //      })

    //      methods.trashNotes(noteData1).then(function(Response1){
    //          console.log(Response1.data.data.data);
    //      }) 

         

    //  });

})

$(document).on('click', '.ownerList', function(event){
    let df = event.currentTarget.id;
    if (df == null) {
        return '';
      } else{
          return df;
      }

})


$(document).on('click', '.icon4', function(event){
    let a = "#"+event.currentTarget.id+".pop"
    $(a).css("display","flex")

    let NoteId = event.currentTarget.id
    console.log(NoteId)


    

    $(a).html(colors.map(function(color){
        return  `<div class="pick" id=${color} style="background-color: ${color}; width:25px; height:20px; border:1px solid black;border-radius: 50%;
            margin: 2px 2px 2px 2px;"></div>`;
    }))

    $(document).on('click', '.pick', function(event){
        console.log(event.currentTarget.id)
        updateColor = event.currentTarget.id

        let noteData2 = {
            noteIdList: [NoteId],
                            color: event.currentTarget.id,

                        }; 

                        console.log(noteData2)
                        requirejs(['../data/Dataservice.js'], (methods)=>{
            
                            console.log(methods)
                             methods.changeColor(noteData2).then(function(Response2){
                                 console.log(location.reload());
                               console.log(Response2)
                             //   localStorage.setItem('token', response.data.id)
                             })
                    
                             methods.changeColor(noteData2).then(function(Response2){
                                 console.log(Response2.data.data.data);
                             }) 
                    
                             
                    
                         });
    })

})


// $(document).on('click', '.popup1' , function(e){
//     console.log("hello"+e.currentTarget.id)
//     popup.classList.toggle("show");
//     // console.log(document.querySelector(".show"))
//     if(document.querySelector(".show")!=null){
//         //  console.log(document.querySelector(".show"))
//         document.querySelector(".show").innerHTML = colors.map(function(color){
//             return `<div class="test1"  id=${color} style="background-color: ${color}; width:30px; height:25px; border-radius: 50%;
//             margin: 2px 2px 2px 2px;"></div>`    
//         }).join('');

//         $(document).on('click','test1', function(e){
//             let noteData2 = {
//                 noteIdList: [e.currentTarget.id],
//                 "color": Color
//             };
            
//             console.log(noteData2)
//             console.log(e.currentTarget.id)
//             requirejs(['../data/Dataservice.js'], (methods)=>{
            
//                 console.log(methods)
//                  methods.changeColor(noteData2).then(function(Response2){
//                    console.log(Response2)
//                  //   localStorage.setItem('token', response.data.id)
//                  })
        
//                  methods.changeColor(noteData2).then(function(Response2){
//                      console.log(Response2.data.data.data);
//                  }) 
        
                 
        
//              });
//         })
        
//     } 
    

// })

 
// $(document).on("click",'.popup1', function(event) {
//     console.log(event.target.id)
//     // popup1.classList.toggle("show1");
    
//     $(document).on('.popuptext1',function(){
//         console.log('hello')
//      });
           
// })
// timepicker.addEventListener('change', function(){
//     a1= timepicker.value;
    
// })

$(document).ready(function(event){
    $('#time1').timepicker({});
    //  a1 = event.target.id;
    
});
datepicker.addEventListener('change', function(){
    b1 = datepicker.value;


})



    let Title;
    let Notes;
    let isArchive = false;
    let Color="";
    let isDeleted = false;
    let searchWord=''
    let ab;
    let cd;
    let a1;
    let b1; 
    let c1; //time nd date


    

    Thrash.addEventListener('click', function(){
        isDeleted =!isDeleted;
    })

    archive.addEventListener('click', function(){
        isArchive = !isArchive;
        
    })

    console.log('Archive')


    title.addEventListener('change', function() {
        Title = title.value; 
    })

    note.addEventListener('change', function() {
        Notes = note.value;
    })
//   title112.addEventListener('change',function(e){
//      ab = e.target.value;
//      console.log(ab)
//  })
//   desc1.addEventListener('change',function(){
//     ba = desc1.value;
// })

    

    // $(document).on('click', '#bulb', function(){
    //     console.log("bulb")
    //     requirejs(['../js/mapping.js'],(mapArray)=>{
    //         mapArray.mapNotes('bulb')
    //     })
    // })

    bulb.addEventListener('click', function(){
        console.log("bulb")
        requirejs(['../js/mapping.js'],(mapArray)=>{
            mapArray.mapNotes('bulb')
        })
    })

    Thrash2.addEventListener('click', function(){
        requirejs(['../js/mapping.js'],(mapArray)=>{
            mapArray.mapNotes('trash')
        })
        // console.log("hiii")
        // function get(url) {
        //     return new Promise(function (resolve, reject) {
        //         var xhr = new XMLHttpRequest();
        //         xhr.onreadystatechange = function () {
        //             if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        //                 // console.log(xhr.response, xhr.responseXML);
        //                 resolve(xhr.response)
        //             }
        //         };
        //         xhr.open('GET', url, true);
        //         xhr.setRequestHeader("Authorization", localStorage.getItem("token"));
        //         xhr.setRequestHeader("Content-type", "application/json");

        //         xhr.onerror = reject;

        //         xhr.send()

        //     });
        // }
        // get(`http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList`)
        // .then(function (result1) {
        //     console.log("hello")
        //         // console.log(result1)
        //         let Res = JSON.parse(result1);
        //         let getResponse = Res.data.data;
        //         console.log(getResponse)

        //         let arr = getResponse.filter( data => data.isArchived == false && data.isDeleted == true)
        //         console.log(arr);
        //         NotesContainer.innerHTML = arr.map((note)=>
        //           `<div class = "note" id="s1" style="background-color: ${note.color}";>
     
        //           <div class="one">
        //           <div class="two">
        //           <div>${note.title}</div>
        //           </div>
     
        //          <div class="three">
        //          <div>${note.description}</div>
        //          </div>
     
     
        //          <div class="four" id="ico">
        //              <div class="icon2" id=${note.id}><i class="material-icons" >archive</i></div>
        //              <div class="icon3" id=${note.id}><i class="material-icons">delete</i></div>
        //          </div>
        //           </div>
     
        //            <div class="modal-container">
        //               <div class="modal">
        //                  <p class="z1">pin your important notes to the top</p>
        //                  <div class="take-note2" id="ii2">
        //                      <input type="text" name="title" class="sub-note2" id="title3"  placeholder="Title"> 
        //                       <p><textarea class="content" id="ii3" placeholder="Note"></textarea></p>
        //                      <div class="class2">
                             
        //                          <div><i class="material-icons" >notifications</i></div>
        //                          <div><i class="material-icons" >group_add</i></div>
        //                          <div><i class="material-icons" >color_lens</i></div>
        //                          <div><i class="material-icons" >image</i></div>
        //                          <div><i class="material-icons" id="archive">archive</i></div>
        //                          <div><i class="material-icons">delete</i></div>
        //                          <div><i class="material-icons" >more_vert</i></div>
                             
        //                          <button class="b2" id="button">Close</button> 
        //                      </div>
        //                  </div>
        //               </div>  
        //           </div>
     
        //           </div> `

        //         ).join('');
        // requirejs(['../data/Dataservice.js'], (methods)=>{
        //     methods.getNotes().then(function(getResponse){
        //         let Response = getResponse.data.data.data;
        //         console.log(Response);
        //         let arr = Response.filter( data => data.isArchived == false && data.isDeleted == true)
        //         console.log(arr);
        //         NotesContainer.innerHTML = arr.map((note)=>
        //           `<div class = "note" id="s1" style="background-color: ${note.color}";>
     
        //           <div class="one">
        //           <div class="two">
        //           <div>${note.title}</div>
        //           </div>
     
        //          <div class="three">
        //          <div>${note.description}</div>
        //          </div>
     
     
        //          <div class="four" id="ico">
        //              <div class="icon2" id=${note.id}><i class="material-icons" >archive</i></div>
        //              <div class="icon3" id=${note.id}><i class="material-icons">delete</i></div>
        //          </div>
        //           </div>
     
        //            <div class="modal-container">
        //               <div class="modal">
        //                  <p class="z1">pin your important notes to the top</p>
        //                  <div class="take-note2" id="ii2">
        //                      <input type="text" name="title" class="sub-note2" id="title3"  placeholder="Title"> 
        //                       <p><textarea class="content" id="ii3" placeholder="Note"></textarea></p>
        //                      <div class="class2">
                             
        //                          <div><i class="material-icons" >notifications</i></div>
        //                          <div><i class="material-icons" >group_add</i></div>
        //                          <div><i class="material-icons" >color_lens</i></div>
        //                          <div><i class="material-icons" >image</i></div>
        //                          <div><i class="material-icons" id="archive">archive</i></div>
        //                          <div><i class="material-icons">delete</i></div>
        //                          <div><i class="material-icons" >more_vert</i></div>
                             
        //                          <button class="b2" id="button">Close</button> 
        //                      </div>
        //                  </div>
        //               </div>  
        //           </div>
     
        //           </div> `

        //         ).join('');
        //     })
        // })
    })
 
    ARCHIVE.addEventListener('click',function(){
        requirejs(['../js/mapping.js'],(mapArray)=>{
            mapArray.mapNotes('archieve')
        })
        // requirejs(['../data/Dataservice.js'], (methods)=>{
        //     methods.getNotes().then(function(getResponse){
        //         let Response = getResponse.data.data.data;
        //         console.log(Response);
        //         let arr = Response.filter( data => data.isArchived == true && data.isDeleted == false)
        //         console.log(arr);
        //         NotesContainer.innerHTML = arr.map((note)=>
        //           `<div class = "note" id="s1" style="background-color: ${note.color}";>
     
        //           <div class="one">
        //           <div class="two">
        //           <div>${note.title}</div>
        //           </div>
     
        //          <div class="three">
        //          <div>${note.description}</div>
        //          </div>
     
     
        //          <div class="four" id="ico">
        //              <div id="icon1"><i class="material-icons" >notifications</i></div>
        //              <div id="icon1"><i class="material-icons" >group_add</i></div>
        //              <div id="icon1"><i class="material-icons" >color_lens</i></div>
        //              <div id="icon1"><i class="material-icons" >image</i></div>
        //              <div class="icon2" id=${note.id}><i class="material-icons" >archive</i></div>
        //              <div class="icon3" id=${note.id}><i class="material-icons">delete</i></div>
        //              <div id="icon1"><i class="material-icons" >more_vert</i></div>
        //          </div>
        //           </div>
     
        //            <div class="modal-container">
        //               <div class="modal">
        //                  <p class="z1">pin your important notes to the top</p>
        //                  <div class="take-note2" id="ii2">
        //                      <input type="text" name="title" class="sub-note2" id="title3"  placeholder="Title"> 
        //                       <p><textarea class="content" id="ii3" placeholder="Note"></textarea></p>
        //                      <div class="class2">
                             
        //                          <div><i class="material-icons" >notifications</i></div>
        //                          <div><i class="material-icons" >group_add</i></div>
        //                          <div><i class="material-icons" >color_lens</i></div>
        //                          <div><i class="material-icons" >image</i></div>
        //                          <div><i class="material-icons" id="archive">archive</i></div>
        //                          <div><i class="material-icons">delete</i></div>
        //                          <div><i class="material-icons" >more_vert</i></div>
                             
        //                          <button class="b2" id="button">Close</button> 
        //                      </div>
        //                  </div>
        //               </div>  
        //           </div>
     
        //           </div> `
        //         ).join('');
        //     })
        // })

    })

    Reminder.addEventListener('click',function(){
        reminder_1.style.display="block";
        takenote2.style.display = "block";
    })

    saveReminder.addEventListener('click',function(){
        reminder_1.style.display="none";
        takenote2.style.display = "block";
        c1 = a1 + ' ' + b1;

        // console.log(typeof c1);
        // if (c1 !=undefined ) {
        //     console.log(b1);
        // c1 = b1;
        // return b1;
        //       } 
        // if (c1 ===undefined) {
        // console.log(c1);
        // return '';
        //   } else{
        // console.log(c1);
        // return c1;
        //   }

    })

    cancelReminder.addEventListener('click',function(){
        reminder_1.style.display="none";
    })
       
    addname.addEventListener('click', function(){
        console.log('abc')
        colabrator.style.display="block";
        takenote2.style.display = "none";
        // colabrator_email.style.display="block"
       })
    
       cancel.addEventListener('click', function(){
        takenote2.style.display = "block";
        colabrator.style.display="none";
        colabrator_email.style.display="none"
       })

       save.addEventListener('click',function(){
        takenote2.style.display = "block";
        colabrator.style.display="none";
        colabrator_email.style.display="none"
        // collabaddOWner.style.display = "block";

        // let colArray =collabratorArray.map(function(){
        //     return `<div class="owner">
        //     <div class="collab">
        //     <i class="large material-icons">account_circle</i>
         
        //     </div>
        //     </div>`
        // }).join('')
        emails.innerHTML = collabratorArray.map(function(){
            return `<div class="on"><i class="large material-icons">account_circle</i></div>`
        })
        // collabowneremails.innerHTML =collabratorArray.map(function(abc){
        //     return `<div class="owner1">
        //     <div class="collab10">
        //     <i class="large material-icons">account_circle</i>
        //     <div class="emailselected" id="${abc.email}">${abc.email}</div>
        //     </div>
        //     </div>`
        // }).join('') 
       })
    
       colabrator_enter.addEventListener('change',function(){
           colabrator_email.style.display="block"
           searchWord=colabrator_enter.value
           let noteData3 = { 
               "searchWord": searchWord
            }
            console.log(noteData3)
            requirejs(['../data/Dataservice.js'], (methods)=>{
                console.log(methods)
                 methods.searchUserList(noteData3).then(function(Response3){
                   console.log(Response3)
                   response_1 = Response3.data.data.details;
                   console.log(response_1)


                   let resultArray = response_1.map(function(element){
                       return `<div class="test">
                       <div class="collabDiv" id=${element.email}>
                       <div class="collabList" id=${element.email}>${element.email}</div>
                       </div>
                       </div>`
                   }).join('');
                   console.log(resultArray);
                   colabrator_email.innerHTML=resultArray;
                   console.log(colabrator_email);
                   
                //    $(document).on('click','.test',function(event){
                //        let noteData4 = response_1.find(user => user.email == event.target.id)
                //     // let noteData4 = response_1.map(function(an) {
                //     //     return an.email
                //     // })
                //        console.log(noteData4)
                //        collabratorArray.push(noteData4);
                //        console.log(collabratorArray);

                //        collabowneremails.innerHTML =collabratorArray.map(function(emailmap){
                //         return `<div class="owner1">
                //         <div class="collab10">
                //         <i class="large material-icons">account_circle</i>
                //         <div class="emailselected" id="${emailmap.email}">${emailmap.email}</div>
                //         </div>
                //         </div>`
                //     }).join('') 
                //    })
                //    console.log(collabratorArray);
                // <div class="emailselected" id="${emailmap.email}">${emailmap.email}</div>
                 })   
     
             });
    
       })

       let  response_1;
       
        
       $(document).on('click','.test',function(event){
        let noteData4 = response_1.find(user => user.email == event.target.id)
    //  let noteData4 = response_1.map(function(an) {
    //      return an.email
    //  })
        console.log(noteData4)
        collabratorArray.push(noteData4);
        console.log(collabratorArray);

        collabowneremails.innerHTML =collabratorArray.map(function(emailmap){
         return `<div class="owner1">
         <div class="collab10">
         <i class="large material-icons">account_circle</i>
         <div class="emailselected" id="${emailmap.email}">${emailmap.email}</div>
         </div>
         </div>`
     }).join('') 
    })


        takenote1.addEventListener('click',function() {
        takenote1.style.display = "none"
        takenote2.style.display = "block"
        })

        closebutton.addEventListener('click',function (e) {
            e.preventDefault();
          takenote2.style.display = "none"
          takenote1.style.display = "block"
          

           console.log("addNotes")
        //    let obj1 =
        //    {
        //     "title": Title,
        //     "description" : Notes,
        //     "isArchived" : isArchive,
        //     "color" : Color,
        //     "isDeleted" : isDeleted
            
        //    }
        //    console.log(obj1)
        console.log(collabratorArray)
        const data = new FormData(); 
           data.append("title", Title); 
           data.append("description", Notes); 
           data.append("color", Color); 
           if(c1!== undefined){
            data.append("reminder",c1)
           }
           data.append("collaberators", JSON.stringify(collabratorArray));
        //    data.append("collaberators", JSON.stringify()); 
           console.log(data);

        //    let data2 = JSON.stringify(data);

        // function aPost(url) {
        //     return new Promise(function (resolve, reject) {
        //         var xhr = new XMLHttpRequest();
        //         xhr.onreadystatechange = function () {
        //             if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        //                 console.log(xhr.response, xhr.responseXML);
        //                 resolve(xhr.response)
        //             }
        //         };
        //         xhr.open('POST', url, true);
        //         xhr.setRequestHeader("Authorization", localStorage.getItem("token"));
        //         xhr.setRequestHeader("Content-type", "application/json");

        //         xhr.onerror = reject;

        //         xhr.send(data2)

        //     });
        // }

        // function aGet(url) {
        //     return new Promise(function (resolve, reject) {
        //         var xhr = new XMLHttpRequest();
        //         xhr.onreadystatechange = function () {
        //             if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        //                 // console.log(xhr.response, xhr.responseXML);
        //                 resolve(xhr.response)
        //             }
        //         };
        //         xhr.open('GET', url, true);
        //         xhr.setRequestHeader("Authorization", localStorage.getItem("token"));
        //         xhr.setRequestHeader("Content-type", "application/json");

        //         xhr.onerror = reject;

        //         xhr.send()

        //     });
        // }
        // aPost(`http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes`)
        //     .then(function(result) {
        //         console.log("hii")
        //       console.log(result); 
              
        //       aGet(`http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList`)
        //       .then(function(result7) {
                
        //         let abcd =JSON.parse(result7)
               
        //         let Res7 = abcd.data.data;
        //         console.log(Res7)

        //         let arr14 = Res7.filter( data => data.isArchived == false && data.isDeleted == true)
        //         console.log(arr14);
        //         NotesContainer.innerHTML = arr14.map((note)=>
        //           `<div class = "note" id="s1" style="background-color: ${note.color}";>
     
        //           <div class="one">
        //           <div class="two">
        //           <div>${note.title}</div>
        //           </div>
     
        //          <div class="three">
        //          <div>${note.description}</div>
        //          </div>

                
     
        //          <div class="four" id="ico">
        //          <div class="icon2" id=${note.id}><i class="material-icons" id="id4">archive</i></div>
        //          <div class="icon3" id=${note.id}><i class="material-icons" id="id5">delete</i></div>
        //          </div>
        //           </div>
     
        //            <div class="modal-container">
        //               <div class="modal">
        //                  <p class="z1">pin your important notes to the top</p>
        //                  <div class="take-note2" id="ii2">
        //                      <input type="text" name="title" class="sub-note2" id="title3"  placeholder="Title"> 
        //                       <p><textarea class="content" id="ii3" placeholder="Note"></textarea></p>
        //                      <div class="class2">
                             
        //                          <div><i class="material-icons" >notifications</i></div>
        //                          <div><i class="material-icons" >group_add</i></div>
        //                          <div><i class="material-icons" >color_lens</i></div>
        //                          <div><i class="material-icons" >image</i></div>
        //                          <div><i class="material-icons" id="archive">archive</i></div>
        //                          <div><i class="material-icons">delete</i></div>
        //                          <div><i class="material-icons" >more_vert</i></div>
                             
        //                          <button class="b2" id="button">Close</button> 
        //                      </div>
        //                  </div>
        //               </div>  
        //           </div>
     
        //           </div> `
                
        //         ).join('');
                
        //       })
        //       .catch(function(error) {
        //           console.log(error)
        //         // An error occurred
        //       });
        //     })


            requirejs(['../data/Dataservice.js'], (methods)=>{
            
               console.log(methods)
                methods.addNotes(data).then(function(response){
                //   console.log(location.reload());
                  console.log(response)
                  console.log(response.status)

                //   localStorage.setItem('token', response.data.id)
                })

                methods.getNotes().then(function(getResponse){
                    console.log(getResponse.data.data.data);
                })
    
                
    
            });

           
        })





        function openModal(noteEl, modalEl, modalContainerEl) {

            // Compute and apply the transform to deform the modal to cover the note with a transition to make it animate
            const transform = computeTransform(noteEl);
            modalEl.style.transform = transform;
            modalEl.style.transition = 'transform 250ms';
        
            // Setup the modal background animate in too
            modalContainerEl.style.backgroundColor = 'transparent';
            modalContainerEl.style.transition = 'background-color 250ms';
        
            // Show the modal
            modalContainerEl.classList.add('modal-container--open');
        
            // Put the rest in a setTimeout to allow the styles applied above to take
            // affect and render before we overwrite them with new ones below
            setTimeout(function () {
              // Remove the transform to allow the modal to return to it's natural shape and position
              modalEl.style.transform = 'none';
              modalContainerEl.style.backgroundColor = 'rgba(33, 33, 33, 0.5)';
            }, 0)
          }
        
          function computeTransform(noteEl) {
        
            // Modal positions here are hardcoded to match styles set in CSS
            const modalTop = 150;
            const modalLeft = (document.body.offsetWidth / 2) - 300;
            const modalWidth = 600;
            const modalHeight = 150;
        
            // Get note div's position relative to the viewport
            const notePosition = noteEl.getBoundingClientRect();
            
            // Compute a CSS transform that moves the modal to match the note's position
            const translateX = notePosition.left - modalLeft;
            const translateY = notePosition.top - modalTop;
            const scaleX = notePosition.width / modalWidth;
            const scaleY = notePosition.height / modalHeight;
        
            return `translateX(${translateX}px) translateY(${translateY}px) scaleX(${scaleX}) scaleY(${scaleY})`;
          }
        
          // Handle click events using event delegation
          $(document).on('click', '.one', function (event) {
            let abc= event.target.id
            console.log(abc)
            console.log(event.target.id);
        
            let object = notess.find(note => note.id == event.target.id)
            console.log(object);
        
            document.querySelector('.sub-note2').value = object.title;
            document.querySelector('.content').value = object.description;
              // Get a reference
              const modalContainerEl = document.querySelector('.modal-container');
              const modalEl = document.querySelector('.modal');
              openModal(event.target, modalEl, modalContainerEl);
        

          
        
            // Handle click event on modal background element (close modal)
            if (event.target.classList.contains('modal-container')) {
              event.target.classList.remove('modal-container--open');
              
            }
            $(document).on('change', '#title33', function(){
                console.log('modaltitle change')
                ab = title112.value;
                console.log(event.target.id)
                console.log(ab)
            })
            
            $(document).on('change', '#ii3', function(){
                console.log('modalnotes change')
                cd = desc1.value;
                console.log(cd)
            })
            
            $(document).on('click', '.b2' , function(event){
            // closeModal.addEventListener('click', function(e){
                document.querySelector(".modal-container").style.display="none"
               console.log(abc)
                let noteData4 = {
                    noteId:  abc,
                    title : ab,
                    description: cd,
                };  
                console.log(noteData4);
                requirejs(['../data/Dataservice.js'], (methods)=>{
            
                    console.log(methods)
                     methods.updateNotes(noteData4).then(function(Response4){
                       console.log(location.reload());
                       console.log(Response4)
                       console.log(Response4.status)
     
                     //   localStorage.setItem('token', response.data.id)
                     })
     
                     methods.updateNotes().then(function(Response4){
                         console.log(Response4.data.data.data);
                     })
         
                     
         
                 });

            })

          })


        //   if(localStorage.getItem('token')!==null){
        //       console.log('token exist');
        //   }else{
        //     window.location = "http://localhost:5501/html/signin.html";
        //   }
                
})


