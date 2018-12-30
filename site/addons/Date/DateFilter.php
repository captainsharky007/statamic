<?php

namespace Statamic\Addons\Date;
use Carbon\Carbon;
use Statamic\Extend\Filter;

class DateFilter extends Filter
{
    /**
     * Perform filtering on a collection
     *
     * @return \Illuminate\Support\Collection
     */
     public function filter()
     {
         return $this->collection->filter(function ($entry) {
            $event_date =  new Carbon($entry->in('en')->get('event_date'));
            $dateFilter = $this->get('date_filter');
            $now = Carbon::today('Europe/Riga');
            if($dateFilter == "today_and_future" && $event_date >= $now ) {
              return true;
            } else if ($dateFilter == "before_today" && $event_date < $now) {
              return true;
            } else if ($dateFilter == "all") {
              return true;
            }
         });
     }
}
