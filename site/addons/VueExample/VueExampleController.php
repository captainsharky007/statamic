<?php

namespace Statamic\Addons\VueExample;

use Statamic\Extend\Controller;
use Statamic\API\GlobalSet;

class VueExampleController extends Controller
{
    /**
     * Maps to your route definition in routes.yaml
     *
     * @return Illuminate\Http\Response
     */
     //

    public function index()
    {

        $dataset = [
            'foo' => '123',
            'bar' => '456',
        ];
        $data = [
               'data' => $dataset
           ];

        return $this->view('index', $data);

    }
}
