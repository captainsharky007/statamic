title: Events
dont_show_on_main_menu: false
components:
  -
    type: text
    text: '<h4>During the next months, Sonarworks presents its products at the exhibitions listed below. We are looking forward to meet you there.</h4>'
  -
    type: collection_list
    collection_list: events
    items_on_page: '5'
    collection_list_template: collections/events
    date_filter: today_and_future
    sort_by: 'event_date:asc'
    enable_pagination: false
  -
    type: collection_list
    collection_list: events
    collection_list_template: collections/events
    collection_heading: 'Past events'
    items_on_page: '5'
    date_filter: before_today
    sort_by: 'event_date:desc'
    enable_pagination: true
    element_id: past_events
template: default_page
available_only_english: true
fieldset: default_page
id: 1ff8ffd5-6b18-41ce-91fa-c73f02deb1e4
