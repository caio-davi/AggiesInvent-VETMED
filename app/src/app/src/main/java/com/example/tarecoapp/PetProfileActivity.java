package com.example.tarecoapp;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.view.animation.AnimationUtils;

public class PetProfileActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_pet_profile);
    }

    public void onCareClick(View view) {
        view.startAnimation(AnimationUtils.loadAnimation(this, R.anim.image_click));
        Intent intent = new Intent(this, CareActivity.class);
        startActivity(intent);
    }

    public void onMedicalClick(View view) {
        view.startAnimation(AnimationUtils.loadAnimation(this, R.anim.image_click));
        Intent intent = new Intent(this, MedicalActivity.class);
        startActivity(intent);
    }

    public void onGalleryClick(View view) {
        view.startAnimation(AnimationUtils.loadAnimation(this, R.anim.image_click));
        Intent intent = new Intent(this, GalleryActivity.class);
        startActivity(intent);
    }

    public void onScheduleClick(View view) {
        view.startAnimation(AnimationUtils.loadAnimation(this, R.anim.image_click));
        Intent intent = new Intent(this, ScheduleActivity.class);
        startActivity(intent);
    }
}