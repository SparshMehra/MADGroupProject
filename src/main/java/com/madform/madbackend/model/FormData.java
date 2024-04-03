package com.madform.madbackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;


// Entity means that this class is an entity and will be used to create a
// table in the database
@Entity
public class FormData {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String fullName;
    private String DOB; // date of birth
    @Email
    private String email;
    private String contact;
    private String achievements; // TODO: make it an array once they add the feature
    private String graveMarker;
    private String graveLocation;
    private String casket;
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

    public String getgraveLocation() {
        return graveLocation;
    }

    public void setgraveLocation(String graveLocation) {
        this.graveLocation = graveLocation;
    }

    public String getgraveMarker() {
        return graveMarker;
    }

    public void setgraveMarker(String graveMarker) {
        this.graveMarker = graveMarker;
    }

    public String getcasket() {
        return casket;
    }

    public void setcasket(String casket) {
        this.casket = casket;
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
                ", graveLocation='" + graveLocation + "'\n" +
                ", graveMarker='" + graveMarker + "'\n" +
                ", casket='" + casket + "'\n" +
                ", gender='" + gender + "'\n" +
                '}';
    }
}
