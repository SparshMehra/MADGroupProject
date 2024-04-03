package com.madform.madbackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class FormData {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String fullName;
    private String DOB; // date of birth
    private String email;
    private String contact;
    private String achievements; // TODO: make it an array once they add the feature
    private String graveMarker;
    private String inscription;
    private String burialMethod;
    private String gender;

    // getters and setters used by the controller to get and set the data
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getDOB() {
        return DOB;
    }

    public void setDOB(String DOB) {
        this.DOB = DOB;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getAchievements() {
        return achievements;
    }

    public void setAchievements(String achievements) {
        this.achievements = achievements;
    }

    public String getgraveMarker() {
        return graveMarker;
    }

    public void setgraveMarker(String graveMarker) {
        this.graveMarker = graveMarker;
    }

    public String getInscription() {
        return inscription;
    }

    public void setInscription(String inscription) {
        this.inscription = inscription;
    }

    public String getBurialMethod() {
        return burialMethod;
    }

    public void setBurialMethod(String burialMethod) {
        this.burialMethod = burialMethod;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    @Override
    public String toString() {
        return "FormData{" +
                "id=" + id +
                ", fullName='" + fullName + "'\n" +
                ", DOB='" + DOB + "'\n" +
                ", email='" + email + "'\n" +
                ", contact='" + contact + "'\n" +
                ", achievements='" + achievements + "'\n" +
                ", graveMarker='" + graveMarker + "'\n" +
                ", inscription='" + inscription + "'\n" +
                ", burialMethod='" + burialMethod + "'\n" +
                ", gender='" + gender + "'\n" +
                '}';
    }
}