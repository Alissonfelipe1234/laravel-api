<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use App\Models\nfe;

class updateBase extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:update';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update the nfe received in the database';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command for update nfe base.
     *
     * @return int
     */
    public function handle()
    {
        $bar = $this->output->createProgressBar(84); //84 is a actual pages number, this information is not provided by API
        $this->info('Updating the database... ');
        $bar->start();

        $this->getData('https://sandbox-api.arquivei.com.br/v1/nfe/received', $bar);

        $bar->finish();
        $this->info(' Finished');
        return 0;
    }

    /**
     * Execute the http request and the process
     *
     * @return void
     */
    public function getData($url = '', $bar = null)
    {
        $response = Http::withHeaders([
            'X-First' => 'foo',
            'X-Second' => 'bar',
            'Content-Type' => 'application/json',
            'x-api-id' => 'f96ae22f7c5d74fa4d78e764563d52811570588e',
            'x-api-key' => 'cc79ee9464257c9e1901703e04ac9f86b0f387c2'
        ])->get("$url", []);
        if($response->ok())
        {
            $body = json_decode($response->body(), true);
            $count = $body['count'];
            $next = "";
            if($count > 0)
            {
                $data = $body['data'];
                foreach ($data as $key => $value) {
                    nfe::create([
                        'acess_key' => $value['access_key'],
                        'xml' => $value['xml']
                    ])->save();
                }
                $next = $body['page']['next'];
            }
            $bar->advance();
            $this->getData($next, $bar);
        }
    }
}
