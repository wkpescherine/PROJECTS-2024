package com.example.tod;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.View;
import android.view.WindowManager;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,
                WindowManager.LayoutParams.FLAG_FULLSCREEN);
        //getSupportActionBar().hide();
    }

    public void startGame(View v){
        Intent intent = new Intent(this, CharScreen.class);
        startActivity(intent);
    }

    public void checkPref(){
        String filename = "TOD";
        SharedPreferences sp = getSharedPreferences(filename,MODE_PRIVATE);
        if(filename.isEmpty()){
            SharedPreferences.Editor editor = sp.edit();
            editor.putString("charSlot1", "None");
            editor.putString("charSlot2", "None");
            editor.putString("charSlot3", "None");
            editor.putString("charSlot4", "None");
            editor.putString("charSlot5", "None");
            editor.putString("charSlot6", "None");
            editor.commit();
        }
    }
}