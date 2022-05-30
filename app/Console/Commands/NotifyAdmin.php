<?php

namespace App\Console\Commands;

use App\Models\ServiceRequest;
use App\Models\User;
use App\Notifications\AdminNotifyOnBooking;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Notification;

class NotifyAdmin extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'notify:admin';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This will notify admins about new bookings';

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
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $notifyableUsers = User::where("allow_emails", "true")->get();

        $bookings = ServiceRequest::where("notified", null)->with("machine:id,label_number")->get();

        foreach ($bookings as $booking) {
            foreach ($notifyableUsers as $user) {
                $data = array(
                    "bookingData" => $booking,
                    "admin" => $user
                );
                Notification::route("mail", $user->email)->notify(new AdminNotifyOnBooking($data));
            }
        }

        $this->info("Admins were alerted");
    }
}
