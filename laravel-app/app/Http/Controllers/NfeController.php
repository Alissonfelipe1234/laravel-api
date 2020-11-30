<?php

namespace App\Http\Controllers;

use App\Models\nfe;
use Illuminate\Http\Request;

class NfeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // not implemented
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // not implemented
    }

    /**
     * Display the specified resource.
     *
     * @param  string $acess_key
     * @return \Illuminate\Http\Response
     */
    public function show(string $acess_key)
    {
        $result = nfe::where('acess_key', $acess_key)->first()['xml'];
        $nfe = $this->formatXml(base64_decode($result));
        return response($nfe, 200)->header('Content-Type', 'text/plain');

        /**
         * only 50 unique rows in the database, which means that the test
         * base has no real data, in the case of more than one xml
         * for a acess_key the lines below is more correct:
         * $nfe->result = nfe::where('acess_key', $acess_key)->get();
         * return response()->json($nfe, 200);
         */
    }

    /**
     * Format XML file from string.
     *
     * @param  string $xml
     * @return \DOMDocument
     */
    function formatXml($xml)
    {
        $document = new \DOMDocument('1.0');
        $document->preserveWhiteSpace = false;
        $document->formatOutput = true;
        $document->loadXML($xml);

        return $document->saveXML();
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\nfe  $nfe
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, nfe $nfe)
    {
        // not implemented
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\nfe  $nfe
     * @return \Illuminate\Http\Response
     */
    public function destroy(nfe $nfe)
    {
        // not implemented
    }
}
