package com.medihelp.medihelp.entity;


import jakarta.persistence.Entity;

@Entity
public class Appointment extends AbstractEntity{

    private String appointmentName;

    public Appointment(String appointmentName){
        this.appointmentName = appointmentName;
    }
    public Appointment(){}

    public String getAppointmentName() {
        return appointmentName;
    }

    public void setAppointmentName(String appointmentName) {
        this.appointmentName = appointmentName;
    }
}
