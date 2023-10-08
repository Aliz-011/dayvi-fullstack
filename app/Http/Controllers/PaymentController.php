<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;
use Inertia\Inertia;

class PaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Set your Merchant Server Key
        \Midtrans\Config::$serverKey = config('midtrans.merchant_server');
        // Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
        \Midtrans\Config::$isProduction = false;
        // Set sanitization on (default)
        \Midtrans\Config::$isSanitized = true;
        // Set 3DS transaction for credit card to true
        \Midtrans\Config::$is3ds = true;

        $params = array(
            'transaction_details' => array(
                'order_id' => Str::uuid(),
                'gross_amount' => 3700000,
            ),
            'customer_details' => array(
                'first_name' => $request->user()->name,
                'email' => $request->user()->email,
            ),
            'enabled_payments' => array(
                'credit_card',
                'cimb_clicks',
                'bca_klikbca',
                'bca_klikpay',
                'bri_epay',
                'echannel',
                'permata_va',
                'bca_va',
                'bni_va',
                'bri_va',
                'other_va',
                'gopay',
                'indomaret',
                'danamon_online',
                'akulaku',
                'shopeepay',
                'kredivo',
                'uob_ezpay',
            )
        );

        $snapToken = \Midtrans\Snap::getSnapToken($params);

        return redirect()->back()->with('snapToken', $snapToken);

    }

    /**
     * Display the specified resource.
     */
    public function show(Payment $payment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Payment $payment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Payment $payment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Payment $payment)
    {
        //
    }
}
