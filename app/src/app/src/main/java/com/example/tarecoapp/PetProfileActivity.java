package com.example.tarecoapp;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

public class PetProfileActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_pet_profile);

        getSupportActionBar().hide();
    }

    public void onCareClick(View view) {
        Intent intent = new Intent(this, CareActivity.class);
        startActivity(intent);
    }

    public void onMedicalClick(View view) {
        Intent intent = new Intent(this, MedicalActivity.class);
        startActivity(intent);
    }
}