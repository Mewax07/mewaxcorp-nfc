package org.mewaxcorp.nfc;

import android.nfc.NfcAdapter;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "Nfc")
public class NfcPlugin extends Plugin {
    private static final String TAG = "Nfc";
    private NfcAdapter mNfcAdapter;
    private PluginCall mCall;

    @Override
    public void load() {
        super.load();
        mNfcAdapter = NfcAdapter.getDefaultAdapter(getContext());
    }

    @PluginMethod
    public void isEnabled(PluginCall call) {
        boolean isEnabled = mNfcAdapter != null && mNfcAdapter.isEnabled();
        JSObject ret = new JSObject();
        ret.put("isEnabled", isEnabled);
        call.resolve(ret);
    }

    @PluginMethod
    public void enable(PluginCall call) {
        mCall = call;
        // if (mNfcAdapter != null) {
        //     mNfcAdapter.enableReaderMode(getActivity(), new NfcReaderCallback(this), NfcAdapter.FLAG_READER_NFC_A | NfcAdapter.FLAG_READER_SKIP_NDEF_CHECK, null);
        // }
    }

    @PluginMethod
    public void disable(PluginCall call) {
        if (mNfcAdapter!= null) {
            mNfcAdapter.disableReaderMode(getActivity());
        }
        call.resolve();
    }
}
