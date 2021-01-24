package com.example.tarecoapp;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

public class HygieneActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_hygiene);

        getSupportActionBar().hide();
    }

    public void onBathClick(View view) {
        Intent intent = new Intent(this, BathActivity.class);
        startActivity(intent);
    }
}