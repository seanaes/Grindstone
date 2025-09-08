
const STATE = {
  "course": [
    {
      "name": "Start/Finish Area",
      "mile": 1.3
    },
    {
      "name": "Lick Run Aid Station #1 & #15",
      "mile": 5.73
    },
    {
      "name": "Wolf Ridge Aid Station #2",
      "mile": 11.55
    },
    {
      "name": "Reddish Knob Aid Station #3",
      "mile": 20.4
    },
    {
      "name": "Little Bald Aid Station #4",
      "mile": 24.33
    },
    {
      "name": "North River Gap Aid Station # 5 & #14",
      "mile": 32.87
    },
    {
      "name": "Lookout Mtn Aid Station #6",
      "mile": 38.57
    },
    {
      "name": "Dowells Draft Aid Station #7",
      "mile": 46.12
    },
    {
      "name": "Dry Branch Gap Aid Station #8 & #10",
      "mile": 52.95
    },
    {
      "name": "Cold Springs Aid Station #9",
      "mile": 59.66
    },
    {
      "name": "Dry Branch Gap Aid Station #8 & #10",
      "mile": 65.2
    },
    {
      "name": "Dowells Draft Aid Station #7",
      "mile": 71.98
    },
    {
      "name": "Magic Moss Aid Station #12",
      "mile": 77.35
    },
    {
      "name": "Camp Todd Aid Station #13",
      "mile": 82.38
    },
    {
      "name": "North River Gap Aid Station # 5 & #14",
      "mile": 92.1
    },
    {
      "name": "Lick Run Aid Station #1 & #15",
      "mile": 99.83
    },
    {
      "name": "Finish",
      "mile": 104.24
    },
    {
      "name": "nan",
      "mile": 104.24
    }
  ],
  "startTimeISO": "2025-09-19T18:00",
  "paceSecPerMile": 1036,
  "actuals": {},
  "projectionMode": "from-last-actual"
};
function render(){
  let tbody=document.getElementById("tbody");
  tbody.innerHTML="";
  STATE.course.forEach((row,i)=>{
    let tr=document.createElement("tr");
    tr.innerHTML=`<td>${i}</td><td>${row.name}</td><td>${row.mile}</td><td>${STATE.startTimeISO}</td><td><input></td><td>-</td>`;
    tbody.appendChild(tr);
  });
}
render();
