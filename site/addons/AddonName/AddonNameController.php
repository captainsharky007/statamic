<?php

namespace Statamic\Addons\AddonName;

use Statamic\Extend\Controller;

class AddonNameController extends Controller
{
    /**
     * Maps to your route definition in routes.yaml
     *
     * @return mixed
     */
     // $this->actionUrl('foo/bar')
     public function getFoo()
     {
       return 'test';
     }
}
