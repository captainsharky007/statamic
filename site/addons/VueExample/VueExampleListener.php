<?php

namespace Statamic\Addons\VueExample;

use Statamic\API\Nav;
use Statamic\Extend\Listener;

class VueExampleListener extends Listener
{
    public $events = [
        'cp.nav.created' => 'addNavItems'
    ];

    public function addNavItems($nav)
    {
        $data_importer = Nav::item('Import Data')->route('addons.vue-example')->icon('publish');
        $nav->addTo('tools', $data_importer);
    }
}
