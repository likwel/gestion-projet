
function addDaysToDate(date, days) {
  var res = new Date(date);
  res.setDate(res.getDate() + days);
  return res.toISOString().slice(0, 10);
}

getAllTasksById()

function getAllTasksById() {
  fetch("/project/getAllTache").then(re => re.json())
  .then(data => {

    var eventsData = [];

    if (data.length > 0) {
      for (let d of data) {

        console.log(d);

        let colorEvt =""
        let emoji=""

        switch (parseInt(d.status)) {
          case 1:
            colorEvt = "#efb200"
            emoji = "📌 "
            break;
          case 2:
            colorEvt = "#3a87ad"
            emoji = "⌛️ "
            break;
          case 3:
            colorEvt = "#198754"
            emoji = "✅ "
            break;
          case 4:
            colorEvt = "#bb2124"
            emoji = "⏰ "
            break;
          default:
            colorEvt = "#5bc0de"
            emoji = "🔏 "
        }

        if (d.startedAt) {

          let date_end = addDaysToDate(new Date(d.startedAt), parseInt(d.estimation));
        
          eventsData.push({
            title: emoji + d.name+"/"+d.description,
            start: d.startedAt.slice(0, 10),
            end: date_end,
            textColor: "",
            backgroundColor : colorEvt,
					  classNames: "event_active",
          });

        }
      }

    }
    runAgenda(eventsData)
  })
}

function runAgenda(DataEvents) {

  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    initialDate: new Date().toISOString().slice(0, 10),
    navLinks: true, // can click day/week names to navigate views
    selectable: true,
    selectMirror: true,
    select: function (arg) {
      var title = prompt('Event Title:');
      if (title) {
        calendar.addEvent({
          title: title,
          start: arg.start,
          end: arg.end,
          allDay: arg.allDay
        })
      }
      calendar.unselect()
    },
    eventClick: function (arg) {
      if (confirm('Are you sure you want to delete this event?')) {
        arg.event.remove()
      }
    },
    editable: true,
    dayMaxEvents: true, // allow "more" link when too many events
    events: DataEvents
  });

  calendar.render();
}

// document.addEventListener('DOMContentLoaded', function() {
//   var calendarEl = document.getElementById('calendar');

//   getAllTasksById()

//   console.log(l);

//   var calendar = new FullCalendar.Calendar(calendarEl, {
//     headerToolbar: {
//       left: 'prev,next today',
//       center: 'title',
//       right: 'dayGridMonth,timeGridWeek,timeGridDay'
//     },
//     initialDate: new Date().toISOString().slice(0, 10),
//     navLinks: true, // can click day/week names to navigate views
//     selectable: true,
//     selectMirror: true,
//     select: function(arg) {
//       var title = prompt('Event Title:');
//       if (title) {
//         calendar.addEvent({
//           title: title,
//           start: arg.start,
//           end: arg.end,
//           allDay: arg.allDay
//         })
//       }
//       calendar.unselect()
//     },
//     eventClick: function(arg) {
//       if (confirm('Are you sure you want to delete this event?')) {
//         arg.event.remove()
//       }
//     },
//     editable: true,
//     dayMaxEvents: true, // allow "more" link when too many events
//     events: l,
//     /*[
//       {
//         title: 'All Day Event',
//         start: '2023-01-01'
//       },
//       {
//         title: 'Long Event',
//         start: '2023-01-07',
//         end: '2023-01-10'
//       },
//       {
//         groupId: 999,
//         title: 'Repeating Event',
//         start: '2023-01-09T16:00:00'
//       },
//       {
//         groupId: 999,
//         title: 'Repeating Event',
//         start: '2023-01-16T16:00:00'
//       },
//       {
//         title: 'Conference',
//         start: '2023-01-11',
//         end: '2023-01-13'
//       },
//       {
//         title: 'Meeting',
//         start: '2023-01-12T10:30:00',
//         end: '2023-01-12T12:30:00'
//       },
//       {
//         title: 'Lunch',
//         start: '2023-01-12T12:00:00'
//       },
//       {
//         title: 'Meeting',
//         start: '2023-01-12T14:30:00'
//       },
//       {
//         title: 'Happy Hour',
//         start: '2023-01-12T17:30:00'
//       },
//       {
//         title: 'Dinner',
//         start: '2023-01-12T20:00:00'
//       },
//       {
//         title: 'Birthday Party',
//         start: '2023-01-13T07:00:00'
//       },
//       {
//         title: 'Click for Google',
//         url: 'http://google.com/',
//         start: '2023-01-28'
//       }
//     ]*/
//   });

//   calendar.render();
// });