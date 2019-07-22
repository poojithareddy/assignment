package com.assignment4m;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;

public class ImageCount extends AppCompatActivity implements View.OnClickListener {
    private EditText editText;
    private Button button;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_image_count);
        initViews();
    }
    private void  initViews()
    {
        editText=(EditText)findViewById(R.id.editText);
        button=(Button) findViewById(R.id.button);
        button.setOnClickListener(this);

    }

    @Override
    public void onClick(View view) {
        if(view.getId()==R.id.button)
        {
            if(editText.getText().toString()=="")
            {
                Toast.makeText(getApplicationContext(),"Please enter Count",Toast.LENGTH_SHORT).show();
            }
            else if(editText.getText().toString()=="0")
            {
                Toast.makeText(getApplicationContext(),"Please enter Count>0",Toast.LENGTH_SHORT).show();
            }
            else
            {
                WritableMap map = Arguments.createMap();
                map.putString("Count",editText.getText().toString());
                RootActivity.sendEvent("Count",map);
                finish();
            }

        }

    }
}
