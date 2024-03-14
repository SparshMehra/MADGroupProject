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
    private String DOP; //date of passing
    private String relationshipStatus; // relationship status?? idk why this is added
    private String achievements; // TODO: make it an array once they add the feature
    private String graveOption;
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

    public String getDOP() {
        return DOP;
    }

    public void setDOP(String DOP) {
        this.DOP = DOP;
    }

    public String getRelationshipStatus() {
        return relationshipStatus;
    }

    public void setRelationshipStatus(String relationshipStatus) {
        this.relationshipStatus = relationshipStatus;
    }

    public String getAchievements() {
        return achievements;
    }

    public void setAchievements(String achievements) {
        this.achievements = achievements;
    }

    public String getGraveOption() {
        return graveOption;
    }

    public void setGraveOption(String graveOption) {
        this.graveOption = graveOption;
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
                ", fullName='" + fullName + '\'' +
                ", DOB='" + DOB + '\'' +
                ", DOP='" + DOP + '\'' +
                ", relationshipStatus='" + relationshipStatus + '\'' +
                ", achievements='" + achievements + '\'' +
                ", graveOption='" + graveOption + '\'' +
                ", gender='" + gender + '\'' +
                '}';
    }
}
