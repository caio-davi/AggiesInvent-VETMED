package com.example.tarecoapp;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

public class SkinEarsActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_skin_ears);

        getSupportActionBar().hide();
    }
}