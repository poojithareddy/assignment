package com.assignment4m;

import android.app.Activity;
import android.content.Intent;
import android.support.annotation.Nullable;
import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import javax.annotation.Nonnull;

public class RootActivity extends ReactContextBaseJavaModule {
    private static  ReactApplicationContext reactApplicationContext;
    private static Activity activity;
    public RootActivity(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);
        reactApplicationContext=reactContext;
        activity=getReactApplicationContext().getCurrentActivity();
    }

    @Nonnull
    @Override
    public String getName() {
        return "RootActivity";
    }
    public static void sendEvent(
            String eventName,
            @Nullable WritableMap params) {
        Log.d("testcase","sendEvent"+params);
            reactApplicationContext
                    .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                    .emit(eventName, params);
    }
    @ReactMethod
    public void navigateAndroid() {
        Activity activity = getReactApplicationContext().getCurrentActivity();
        Intent intent=new Intent(activity,ImageCount.class);
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        reactApplicationContext.startActivity(intent);
    }


}
