define([''], function () {
    let mapArray = {};
    mapArray.mapNotes = async function(data){

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

                xhr.send()

            });
        }

        ajaxGet(`http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList`)
            .then(function (result1) {
                console.log("hello")
                // console.log(result1)
                let Res = JSON.parse(result1);
                let getResponse = Res.data.data;
                console.log(getResponse)

                let arr1 = []
                
                if (data =='archieve'){
                    arr1 = getResponse.filter(note => note.isArchived== true && note.isDeleted==false);
                    console.log(arr1)
                }
                else if(data =='trash'){
                    arr1 = getResponse.filter(note => note.isArchived== false && note.isDeleted==true);
                    console.log(arr1)
                }
                else if(data == 'bulb'){
                    arr1 = getResponse.filter(note => note.isArchived== false && note.isDeleted==false);
                    console.log(arr1)
                }
                const NotesContainer = document.getElementById("flex-container")
                NotesContainer.innerHTML = arr1.map((note)=>
             `<div class = "note" id="s1" style="background-color: ${note.color}";>
        
                     <div class="one">
                     <div class="two">
                     <div>${note.title}</div>
                     </div>
        
                    <div class="three">
                    <div>${note.description}</div>
                    </div>
        
        
                    <div class="four" id="ico">
                        <div id="icon1"><i class="material-icons" >notifications</i></div>
                        <div id="icon1"><i class="material-icons" >group_add</i></div>
                        <div id="icon1"><i class="material-icons" >color_lens</i></div>
                        <div id="icon1"><i class="material-icons" >image</i></div>
                        <div class="icon2" id=${note.id}><i class="material-icons" >archive</i></div>
                        <div class="icon3" id=${note.id}><i class="material-icons">delete</i></div>
                        <div id="icon1"><i class="material-icons" >more_vert</i></div>
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
        
                     </div>`
                
                ).join('');
            })
        // requirejs(['../data/Dataservice.js'],function(methods){
        //     methods.getNotes().then(function(getResponse){
        //         let arrr = getResponse.data.data.data;
        //         let arr1 = []
        //         // let arr2 = []
        //         if (data =='archieve'){
        //             arr1 = arrr.filter(note => note.isArchived== true && note.isDeleted==false);
        //             console.log(arr1)
        //         }
        //         else if(data =='trash'){
        //             arr1 = arrr.filter(note => note.isArchived== false && note.isDeleted==true);
        //             console.log(arr1)
        //         }
        //         else if(data == 'bulb'){
        //             arr1 = arrr.filter(note => note.isArchived== false && note.isDeleted==false);
        //             console.log(arr1)
        //         }
        //         const NotesContainer = document.getElementById("flex-container")
        //         NotesContainer.innerHTML = arr1.map((note)=>
        //      `<div class = "note" id="s1" style="background-color: ${note.color}";>
        
        //              <div class="one">
        //              <div class="two">
        //              <div>${note.title}</div>
        //              </div>
        
        //             <div class="three">
        //             <div>${note.description}</div>
        //             </div>
        
        
        //             <div class="four" id="ico">
        //                 <div id="icon1"><i class="material-icons" >notifications</i></div>
        //                 <div id="icon1"><i class="material-icons" >group_add</i></div>
        //                 <div id="icon1"><i class="material-icons" >color_lens</i></div>
        //                 <div id="icon1"><i class="material-icons" >image</i></div>
        //                 <div class="icon2" id=${note.id}><i class="material-icons" >archive</i></div>
        //                 <div class="icon3" id=${note.id}><i class="material-icons">delete</i></div>
        //                 <div id="icon1"><i class="material-icons" >more_vert</i></div>
        //             </div>
        //              </div>
        
        //               <div class="modal-container">
        //                  <div class="modal">
        //                     <p class="z1">pin your important notes to the top</p>
        //                     <div class="take-note2" id="ii2">
        //                         <input type="text" name="title" class="sub-note2" id="title3"  placeholder="Title"> 
        //                          <p><textarea class="content" id="ii3" placeholder="Note"></textarea></p>
        //                         <div class="class2">
                                
        //                             <div><i class="material-icons" >notifications</i></div>
        //                             <div><i class="material-icons" >group_add</i></div>
        //                             <div><i class="material-icons" >color_lens</i></div>
        //                             <div><i class="material-icons" >image</i></div>
        //                             <div><i class="material-icons" id="archive">archive</i></div>
        //                             <div><i class="material-icons">delete</i></div>
        //                             <div><i class="material-icons" >more_vert</i></div>
                                
        //                             <button class="b2" id="button">Close</button> 
        //                         </div>
        //                     </div>
        //                  </div>  
        //              </div>
        
        //              </div>`
        //    ).join('');
        //     })
        // })
    }
    return mapArray;
})