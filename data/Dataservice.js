// const { default: axios } = require("axios");

define([''], function () {
        const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: localStorage.getItem("token"),
            }
          };
      
       const config1 = {
        headers: {
                   "Content-Type": "multipart/form-data",
                    Authorization: localStorage.getItem("token"),
                  },
              };

        var methods = {};
        methods.addNotes = async function (data) {
      console.log(data)
        
            let response = await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes',data, config1)
            
            return response;
        }

       methods.getNotes = async function () {
           let getResponse = await axios.get('http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList', config)
            
           return getResponse;
      }

      methods.archiveNotes = async function (noteData) {
        let Response = await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes',noteData, config)
        return Response;
      }

      methods.trashNotes = async function (noteData1) {
        let Response1 = await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes',noteData1, config)
        return Response1;
      }

      methods.changeColor = async function (noteData2) {
        let Response2 = await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes',noteData2, config)
        return Response2;
      }

      methods.searchUserList = async function (noteData3) {
        let Response3 = await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/searchUserList',noteData3, config)
        return Response3;
      }

      methods.updateNotes = async function (noteData4) {
        let Response4 = await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes',noteData4, config)
        return Response4;
      }
        return methods;
        
        
})