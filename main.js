document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    events: [
      {
        title: 'Мероприятие 1',
        start: '2023-04-01'
      },
      {
        title: 'Мероприятие 2',
        start: '2023-04-07',
        end: '2023-04-10'
      },
      // добавьте свои мероприятия
    ]
  });

  calendar.render();
});
document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var typeFilter = 'all'; // текущий фильтр по типу

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    events: [
      {
        title: 'Мероприятие 1',
        start: '2023-04-01',
        type: 'volunteering' // кастомное свойство
      },
      {
        title: 'Мероприятие 2',
        start: '2023-04-07',
        end: '2023-04-10',
        type: 'education' // кастомное свойство
      },
      // добавьте свои мероприятия
    ]
  });

  function applyTypeFilter() {
    calendar.getEventSources().forEach(function(eventSource) {
      eventSource.refetch();
    });

    calendar.getEvents().forEach(function(event) {
      event.setProp('hidden', event.extendedProps.type !== typeFilter);
    });
  }

  // применяем фильтр при изменении текущего фильтра
  applyTypeFilter();

  // добавьте обработчики событий для элементов фильтрации по типу
  // и изменяйте текущий фильтр `typeFilter`
  // пример:
  document.getElementById('volunteering-filter').addEventListener('click', function() {
    typeFilter = 'volunteering';
    applyTypeFilter();
  });
});

calendar.render();
